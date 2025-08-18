import React, { useState, useEffect } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
    const [data, setData] = useState([]);
    
        const fetchTopRestaurant = async () => {
        const response = await fetch("/api/top-restaurant-chains");
        const apiData = await response.json();
        setData(apiData);
        };
    
        useEffect(
            () => {
                fetchTopRestaurant();
            }, []
        )
  return (
    <div className='max-w-[1000px] mx-auto'>
        <div className='flex my-5 items-center justify-between'>
            <div className='text-[25px] font-semibold'>Restaurants with online food delivery in Asansol </div>
        </div>
        <div>
            <div className='max-w-[1200px] mx-auto flex my-4 gap-4'>
                <div className='p-3 rounded-md shadow'>Filter</div>
                <div className='p-3 rounded-md shadow'>Sort By</div>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
            {
                data.map(
                    (d, i) => {
                        return <Card {...d} />
                    }
                )
            }
        </div>
        <hr className='my-6 border-[2px]' />
    </div>
  )
}
