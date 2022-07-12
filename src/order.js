function takeOrder (order, deliveryOrder) {
  
  return deliveryOrder.push(order);
}


module.exports = {
   takeOrder,
  //refundOrder,
  // listItems,
  // searchOrder
}