"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/searchIcon.png";
import Category from "../categories/Category";
import { Menu } from "lucide-react";

const SideNav = () => {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetch(`https://irdserverside.vercel.app/categories?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [query]);

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="fixed p-2 bg-green-600 m-2 mx-4 rounded-md block md:hidden"
      >
        <Menu />
      </button>
      <aside className="w-[25%] bg-white  m-4 rounded-xl overflow-hidden hidden lg:flex flex-col h-[70vh] sticky top-[6rem]">
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

        <nav className="p-4 overflow-y-auto h-[65vh] custom-scroll">
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
      {mobileMenu && (
        <aside className="w-[70%] bg-emerald-200 min-h-screen  m-4 rounded-xl overflow-hidden flex flex-col fixed top-10">
          <h2 className="p-4 bg-green-600 text-white text-center">
            Categories
          </h2>
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

          <nav className="p-4 overflow-y-auto min-h-[65vh] custom-scroll">
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
      )}
    </>
  );
};

export default SideNav;
