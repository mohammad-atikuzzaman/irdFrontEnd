import Link from "next/link";
import React, { useEffect, useState } from "react";

const DuaTitle = ({ subcategory }) => {
  const { cat_id, subcat_id, subcat_name_en } = subcategory;
  const [duas, setDua] = useState([]);
  const [activeDua, setActiveDua] = useState(null); // State to track the active dua

  useEffect(() => {
    fetch(
      `https://irdserverside.vercel.app/duas?cat_id=${cat_id}&subcat_id=${subcat_id}`
    )
      .then((res) => res.json())
      .then((data) => setDua(data));
  }, [subcategory]);

  // Handle clicking on a dua title
  const handleDuaClick = (duaId) => {
    setActiveDua(duaId); // Set the clicked dua as active

    // Scroll to the dua section smoothly
    const duaElement = document.getElementById(duaId);
    if (duaElement) {
      duaElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full flex">
      <span className="relative -left-1 font-black text-xl text-green-500 pr-2">
        .
      </span>
      <div className="mt-2">
        <span className="text-gray-600 text-sm font-semibold">
          {subcat_name_en}
        </span>
        <div className="space-y-2 mt-2">
          {duas?.map((dua, index) => (
            <Link
              href={`#${dua?.dua_id}`}
              key={index}
              className={`block text-sm ml-4 ${
                activeDua === dua?.dua_id ? "text-green-500" : "text-gray-500"
              }`} // Apply green text for active dua
              onClick={() => handleDuaClick(dua?.dua_id)} // Set the active dua on click
            >
              <span className="text-green-500">{">"}</span> {dua?.dua_name_en}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DuaTitle;
