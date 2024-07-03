
export default function ProductDetails({params}:{params:{productId:string}}) {
    console.log(params)
  return (
    <div>Details about product {params.productId}</div>
  )
}
