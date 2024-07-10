"use client"
import SearchResult from "@/components/SearchResult";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase"
import { useParams } from "next/navigation"
import { useEffect } from "react";

export default function SearchPage() {
    const {query} = useParams()
    // const { products, getDataFromSupabase } = useSupabase();
    const {filterData,getFilteredData} = useSupabase();

    useEffect(()=>{
        getFilteredData(query.toString())
    },[query,getFilteredData])
    // console.log(filterData)
  return (
    <div>
        <SearchResult filterData={filterData}/>
    </div>
  )
}
