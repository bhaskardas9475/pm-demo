import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import PageHeader from "@/components/PageHeader";


export const metadata: Metadata = {
    title: "Support Page - Solid SaaS Boilerplate",
    description: "This is Support page for Solid Pro",
    // other metadata
};

const AboutUsPage = () => {
    return (
        <>
            
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <PageHeader title="About Us" />
                <div className="container mx-auto md:px-20">
                    <AboutUs />
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;
