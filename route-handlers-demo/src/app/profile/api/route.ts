import { type NextRequest } from "next/server"
// or 
import { headers } from "next/headers"

import { cookies } from "next/headers"

export async function GET(request:NextRequest) {
    const requestHeaders = new Headers(request.headers)
    // or 
    const headerList = headers()

    cookies().set("resultsPerPage","20") //one way to set cookie 
    console.log(cookies().get("resultsPerPage"))

    // get cookie 
    const theme = request.cookies.get("theme")
    console.log(theme)

    console.log(requestHeaders.get("Authorization"))
    // or 
    console.log(headerList.get(("Authorization")))

    // cookies() has delete has set size function 

    return new Response("profile data",{
       headers:{
         "Content-Type":"text/html",
         "Set-Cookie" : "theme=dark" //anoter way to set cookies
       }
    })
}

