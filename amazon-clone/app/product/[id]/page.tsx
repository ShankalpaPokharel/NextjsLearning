"use client"


import SingleProduct from "@/components/SingleProduct";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import { useEffect } from "react";


export default function ProductPage() {
    const {id} = useParams()

    const {getSingleProduct, singleProduct} = useSupabase();

    useEffect(()=>{
        getSingleProduct(Number(id))
    },[id,getSingleProduct])


    console.log("hello", singleProduct)

  return (
    <div className="">
        {/* <h1>{id}</h1> */}
        <SingleProduct singleProduct={singleProduct}  />
        
    </div>
  )
}
