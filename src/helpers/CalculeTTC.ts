function CalculeMontantTTC(items: any) {
  let result = 0
  items.forEach((element: any) => {
    result += element.ItemQuantity * element.ItemPrice + element.ItemTax
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
  return item.ItemQuantity * item.ItemPrice + item.ItemTax
}
export { CalculeMontantTTCItem, CalculeMontantTTC, CalculeMontantTotalSansTax }
