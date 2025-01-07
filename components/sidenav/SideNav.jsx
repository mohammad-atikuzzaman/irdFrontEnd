"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/searchIcon.png";
import Category from "../categories/Category";

const SideNav = () => {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/categories?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [query]);

  return (
    <aside className="min-w-[25%] bg-white  m-4 rounded-xl overflow-hidden flex flex-col h-[70vh] sticky top-[6rem]">
      <h2 className="p-4 bg-green-600 text-white text-center">Categories</h2>
      <section className="w-full flex items-center justify-center">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="w-[95%] mx-auto my-2 border-2 rounded-lg p-3 relative z-10 bg-transparent focus:bg-white"
        />
        <div className="flex items-center absolute text-gray-400 ">
          <Image src={searchIcon} alt="search" />
          <p> Search by Categories</p>
        </div>
      </section>

      <nav className="p-4 overflow-y-auto h-[65vh]">
        {categories?.map((category) => (
          <Category
            key={category?.id}
            category={category}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
