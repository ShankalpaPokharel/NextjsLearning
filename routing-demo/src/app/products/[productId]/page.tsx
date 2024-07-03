import { Metadata } from "next";
import { resolve } from "path";

type Props = {
    params: { productId: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
        }, 100);
    });
    return { title: `Product ${title}` };
    // return { title:`Product ${params.productId}` }
};

export default function ProductDetails({ params }: Props) {
    console.log(params);
    return <div>Details about product {params.productId}</div>;
}
