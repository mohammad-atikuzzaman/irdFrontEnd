import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <aside className="ml-4 hidden">
      <nav className="bg-white p-4 sticky top-8 min-h-[80vh] space-y-16 rounded-lg flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="IRD"
          width={50}
          height={50}
          className="w-[200px]"
        />
        <ul className=" flex flex-col gap-6">
          <li>
            <Image
              src="/Home.png"
              alt="Home"
              width={30}
              height={30}
              className="w-[30px]"
            />
          </li>
          <li>
            <Image
              src="/group.png"
              alt="menu"
              width={30}
              height={30}
              className="w-[30px]"
            />
          </li>
          <li>
            <Image
              src="/Memorize.png"
              alt="Memorize"
              width={30}
              height={30}
              className="w-[30px]"
            />
          </li>
          <li>
            <Image
              src="/Bookmark.png"
              alt="Bookmark"
              width={30}
              height={30}
              className="w-[30px]"
            />
          </li>
          <li>
            <Image
              src="/Ruqyah.png"
              alt="Ruqyah"
              width={30}
              height={30}
              className="w-[30px]"
            />
          </li>
          <li>
            <Image
              src="/qanda.png"
              alt="qanda"
              width={30}
              height={30}
              className="w-[30px]"
            />
          </li>
          <li>
            <Image
              src="/Book.png"
              alt="Book"
              width={30}
              height={30}
              className="w-[30px]"
            />
          </li>
        </ul>
        <Image
          src="/support.png"
          alt="IRD"
          width={50}
          height={50}
          className="w-[200px]"
        />
      </nav>
    </aside>
  );
};

export default NavBar;
