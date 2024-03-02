function CalculeMontantTTC(items: any) {
  let result = 0
  items.forEach((element: any) => {
    result +=
      element.ItemQuantity * element.ItemPrice +
      element.ItemTax * element.ItemQuantity
  })

  return result
}
function CalculeMontantTotalSansTax(items: any) {
  let result = 0
  items.forEach((element: any) => {
    result += element.ItemQuantity * element.ItemPrice
  })

  return result
}
function CalculeMontantTTCItem(item: any) {
  return item.ItemQuantity * item.ItemPrice + item.ItemTax * item.ItemQuantity
}
function CalculeMontantHT(item: any) {
  return item.ItemQuantity * item.ItemPrice
}

export {
  CalculeMontantTTCItem,
  CalculeMontantTTC,
  CalculeMontantTotalSansTax,
  CalculeMontantHT,
}
