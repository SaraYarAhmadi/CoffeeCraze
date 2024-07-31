import React from 'react';
import ProductCard from '@/components/modules/productCard/ProductCard';

function MoreProducts({ relatedProducts }) {
  
  return (

    <div className="w-full mt-6 md:mt-10 lg:px-32 px-5 md:pb-10">
    <div className="overflow-auto flex flex-col justify-between bg-white border-2 border-solid box-border rounded-xl w-full p-8 bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h4 className="section-title mb-4 md:mb-8"> محصولات مشابه </h4>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-5 p-3 rounded-lg'>
     
        {relatedProducts.map((product) => (
            <ProductCard {...product} />
        ))}

        </div>
    </div>
</div>
  )
}

export default MoreProducts