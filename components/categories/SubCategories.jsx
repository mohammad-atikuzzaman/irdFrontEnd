import Link from "next/link";
import { useEffect, useState } from "react";

const SubCategories = ({ catId }) => {
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    fetch(`https://irdserverside.vercel.app/subcategories/${catId}`)
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, [catId]);
  // console.log(subCategories)
  
  return (
    <div className="border-l-2 border-dotted border-green-600 space-y-4 ml-4">
      {subCategories?.map((subcategory) => (
        <p key={subcategory?.id} className="block pl-4 ">
          {subcategory?.subcat_name_en}
        </p>
      ))}
    </div>
  );
};

export default SubCategories;
