// import { useState } from "react"
import { cookies } from "next/headers"

export default function AboutPage() {
    // const [name, setName] = useState("")
    const cookieStore = cookies()
    const theme = cookieStore.get("theme")
    console.log(theme)
    console.log("About server component")
  return (
    <div>About page {new Date().toLocaleTimeString()}</div>
  )
}


// × You're importing a component that needs useState. It only works in
//  a Client Component but none of its parents are marked with "use 
//  client", so they're Server Components by default.× You're importing a
//   component that needs useState. It only works in a Client Component
//    but none of its parents are marked with "use client", so they're
//     Server Components by default.
