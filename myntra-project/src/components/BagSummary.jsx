import React from 'react'
import "../index.css"
import { useSelector } from 'react-redux';
// import "../components/Bag.css"



export const BagSummary = ({summary}) => {

  const bagItemsIds = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >=0 ;
  })
  
  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemsIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;



  // const bagSummary = {
  //   totalItem : bagItemsIds.length,
  //   totalMRP : 2799,
  //   totalDiscount : 890,
  //   finalPayment : 1909,
  // }
  
  return (
    <>
    <div className="bag-summary">
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr />
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order  odr-btn">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  </>
  )
}
