import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="py-20 lg:py-25 xl:py-30">
      <PageHeader title="Contact Us" />
      <Contact />
    </div>
  );
};

export default ContactPage;
