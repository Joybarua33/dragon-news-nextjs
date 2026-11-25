import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";


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
