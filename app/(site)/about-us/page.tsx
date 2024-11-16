import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import PageHeader from "@/components/PageHeader";


export const metadata: Metadata = {
    title: "Property Matrimony",
    description: "At Property Matrimony, we are dedicated to transforming the real estate experience for our clients As a premier real estate platform, we specialize in offering a wide range of premium plots, villas, and apartments, tailored to meet the diverse needs of our discerning clientele. Backed by a committed team of professionals, we leverage advanced technology and comprehensive market insights to guide our clients through every step of their property journey—from the initial search to the final possession.",
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
