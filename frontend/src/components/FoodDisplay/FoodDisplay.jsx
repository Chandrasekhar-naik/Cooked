import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import { Fooditem } from '../Fooditem/Fooditem'
export const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((items,index)=>{
                if(category==="ALL" || category===items.category){
                    return <Fooditem key={index} id={items._id} name={items.name} description={items.description} price={items.price} image={items.image}/> 
                }
                
            })}
        </div>
    </div>
  )
}
