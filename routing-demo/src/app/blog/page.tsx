import { Metadata } from "next"

export const metadata:Metadata = {
  title:{
    absolute:"blog"
  }
}

export default function Blog() {
  return (
    <div className="text-red-500">SecondBlog Post</div>
  )
}
