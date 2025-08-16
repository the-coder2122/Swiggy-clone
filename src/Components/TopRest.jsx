import React, { useEffect, useState } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import Card from './Card'; 


export default function () {

    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        () => {
            fetchTopRestaurant();
        }, []
    )

  return (
    <div className='max-w-[1000px] mx-auto'>
        <div className='flex my-5 items-center justify-between'>
            <div className='text-[25px] font-semibold'>Top Restaurants in Asansol </div>
            <div className='flex'>
                <div className='cursor-pointer flex items-center justify-center text-[22px] w-[30px] h-[30px] bg-[#e2e2e7] mx-2 rounded-full'><HiArrowSmLeft /></div>
                <div className='cursor-pointer flex items-center justify-center text-[22px] w-[30px] h-[30px] bg-[#e2e2e7] mx-2 rounded-full'><HiArrowSmRight /></div>
            </div>
        </div>
        <div className='flex gap-4 overflow-hidden'>
            {
                data.map(
                    (d, i) => {
                        return <Card width="w-full md:w-[237px]" {...d} key={i}/>
                    }
                )
            }
        </div>
        <hr className='my-3 border-[2px]' />
    </div>
  )
}
