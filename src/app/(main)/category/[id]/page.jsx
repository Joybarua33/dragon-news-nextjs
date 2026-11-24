import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import React from "react";

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

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
      <div className="font-bold text-3xl col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>
      <div className="font-bold col-span-6">
        All News
        <div className="space-y-4">
          {news.map((n) => {
            return (
              <NewsCard key={n.id} news={n}>
                {n.title}
              </NewsCard>
            );
          })}
        </div>
      </div>
      <div className="font-bold col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
