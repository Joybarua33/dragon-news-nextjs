import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="font-bold text-3xl bg-green-100">
        All Categories
      </div>
      <div className="font-bold text-3xl bg-purple-100">
        All News
      </div>
      <div className="font-bold text-3xl bg-yellow-100">
        Social Icons
      </div>
    </div>
  );
}
