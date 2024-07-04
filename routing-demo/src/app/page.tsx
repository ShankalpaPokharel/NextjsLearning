import Link from "next/link";

export default function Home() {
    return (
        <>
            <div>Welcome home</div>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </>
    );
}
