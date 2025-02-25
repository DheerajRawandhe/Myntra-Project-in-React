import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../store/bagSlice';
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

export const HomeItem = ({item}) => {
  const dispatch = useDispatch();
  const bagItem = useSelector(store => store.bag)
  const elementFound = bagItem.indexOf(item.id) >=0 ;
  console.log(item.id, elementFound);

  const handleAddBag = () => {
    dispatch(bagActions.addToBag(item.id));
  }

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  }


  return (
    <>

    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>  
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price"> 
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>


    {elementFound ? 
      <button type="button" onClick={handleRemove} className="btn btn-add-bag btn-danger">Remove from bag 
        <span className='icon-bag'> <MdDeleteForever /></span> </button> 

     : <button type="button"  onClick={handleAddBag} className="btn btn-add-bag btn-success">Add to Bag  
    <span className='icon-bag'> <BiSolidMessageAltAdd /></span></button>  
    }


    </div>
    </>
  )
}
