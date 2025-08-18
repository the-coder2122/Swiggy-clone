import React, { useEffect, useState } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

export default function Category() {

    const [slide, setSlide] = useState(0);

    const [categories, setCategory] = useState([]);

    const fetchCategory = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    setCategory(data);
    };

    useEffect(
        () => {
            fetchCategory();
        }, []
    )

    const nextSlide = () =>{
        const maxSlide = categories.length - 8;
        if (slide >= maxSlide) return false;  
        setSlide(prev => Math.min(prev + 5, maxSlide));
    }
    const prevSlide = () =>{
        if (slide <= 0) return false;  
        setSlide(prev => Math.max(prev - 5, 0));
    }

  return (
    <div className='max-w-[1000px] mx-auto '>
        <div className='flex my-5 items-center justify-between'>
            <div className='text-[25px] font-semibold'>What's on your mind? </div>
            <div className='flex'>
                <div className='cursor-pointer flex items-center justify-center text-[22px] w-[30px] h-[30px] bg-[#e2e2e7] mx-2 rounded-full' onClick={prevSlide}><HiArrowSmLeft /></div>
                <div className='cursor-pointer flex items-center justify-center text-[22px] w-[30px] h-[30px] bg-[#e2e2e7] mx-2 rounded-full' onClick={nextSlide}><HiArrowSmRight /></div>
            </div>
        </div>
        <div className='flex overflow-hidden'>
            {
                categories.map(
                    (cat, index) => {
                        return (
                            <div style={{
                                transform: `translateX(-${slide * 100}%)`
                            }} key={index} className='w-[124px] shrink-0 duration-500'>
                                <img src={`/api/images/${cat.image}`} alt="" />
                            </div>
                        )
                    }
                )
            }
        </div>
        <hr className='my-6 border-[2px]' />
    </div>
  )
}
