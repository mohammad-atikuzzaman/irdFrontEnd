import React, { useState } from 'react';

const DuaTitle = ({subcategory}) => {
    const {cat_id,id,no_of_dua, subcat_id, subcat_name_bn, subcat_name_en, } = subcategory
    const [duaTile, setDuaTile] = useState(null)
    return (
        <div  className='pl-4 w-full'>
            {subcat_name_en}
        </div>
    );
};

export default DuaTitle;