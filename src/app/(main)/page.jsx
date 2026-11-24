import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";

const getCategories = async () =>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}


const getNewsByCategoryId = async(category_id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  
  const news = await getNewsByCategoryId("01");
  console.log(news);

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
      <div className="font-bold text-3xl col-span-3">
        <LeftSidebar categories={categories} activeId={null}/>
      </div>
      <div className="font-bold  bg-purple-100 col-span-6">
        All News
        <div className="space-y-4">
          {
            news.map((n) => {
              return <div key={n.id} className="p-6 rounded-md border">
                {n.title}
              </div>
            })
          }
        </div>
      </div>
      <div className="font-bold col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}
