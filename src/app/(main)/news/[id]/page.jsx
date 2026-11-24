import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaArrowRight, FaEye } from "react-icons/fa";

const NesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center bg-slate-200">
            <div>
              {news.author?.img ? (
                <Image
                  src={news.author.img}
                  alt={news.author?.name || "Author"}
                  height={40}
                  width={60}
                />
              ) : (
                <div className="w-[60px] h-[40px] bg-gray-300 rounded" />
              )}
              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>
            <div>
              <CiShare2 className="text-xl" />
              <CiBookmark className="text-xl" />
            </div>
          </div>

          <h2 className="card-title">{news.title}</h2>
          <figure>
            {news.image_url && (
              <Image
                src={news.image_url}
                alt={news.title}
                height={300}
                width={300}
                className="w-full"
              />
            )}
          </figure>
          <p>{news.details}</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-2">
                <CiStar className="text-lg text-yellow-500" />
                {news.rating.number}
              </h2>
              <h2 className="flex items-center gap-2">
                <FaEye className="text-lg" />
                {news.total_view}
              </h2>
            </div>
            <Link href={`/category/${news.category_id}`}>
                <button className="btn bg-purple-500 text-white">See other news for this category<FaArrowRight /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NesDetailsPage;
