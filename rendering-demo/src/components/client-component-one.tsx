"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-component-two";


export default function ClientComponentOne({children}:{children:React.ReactNode}) {
    const [setName, setSetName] = useState("Batman");
    return (
        <div>
            <h1>client-component-one</h1>
            {children}
            {/* <ClientComponentTwo /> */}
        </div>
    );
}
