import React, { useState } from 'react'
import { HomeItem } from "../components/HomeItem";
import { useSelector } from 'react-redux';


export const Home = () => {

 const items = useSelector(store => store.items);
//  console.log("Got items",items)


    // const item = {
    //     id: '001',
    //     image: '/images/1.jpg',
    //     company: 'Carlton London',
    //     item_name: 'Rhodium-Plated CZ Floral Studs',
    //     original_price: 1045,
    //     current_price: 606, 
    //     discount_percentage: 42,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //       stars: 4.5,
    //       count: 1400,
    //     },
    // }

  return (
    <>
      <main>
        <div className="items-container">
         {items.map(item => 
            <HomeItem  key={item.id} item={item}/> )}   
       
           

        </div>
      </main>
    
    </>
  )
}

