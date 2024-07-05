import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";

export default function InterleavingPage() {
    return (
        <>
            <div>InterleavingPage</div>
            {/* <ServerComponentOne />
            <ClientComponentOne/> */}
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
        </>
    );
}
