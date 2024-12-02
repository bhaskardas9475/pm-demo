import React from "react";
import Image from 'next/image'

const PageHeader = ({ title }) => {
    return (
        <div className="flex h-[200px] relative w-[100%] content-center" >
            <Image src="/images/features/head-2.jpg" fill alt="Hi" />
            <h1 className="relative text-white z-50 m-auto text-2xl capitalize" > {title} </h1>
        </div>
    )
}

export default PageHeader;