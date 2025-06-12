function visualizeStockState(oldPrice, currentPrice){
  const priceChange = currentPrice - oldPrice;
  
  if (priceChange > 0) {
    return "text-green-500";
  } else if (priceChange < 0) {
    return "text-red-500";
  } else {
    return "text-gray-500";
  }
}

export default visualizeStockState