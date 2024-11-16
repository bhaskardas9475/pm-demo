import SidebarLink from "@/components/Docs/SidebarLink";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Docs Page - Solid SaaS Boilerplate",
    description: "This is Docs page for Solid Pro",
    // other metadata
};

export default function PrivacyPolicyPage() {
    const items = [
        {
            title: 'Personal identification information:',
            desc: 'We may collect personal identification information from Users in a variety of ways in connection with activities, services, features or resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.'
        },
        {
            title: 'Non-personal identification information:',
            desc: 'We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.'
        },
        {
            title: 'Web browser cookies:',
            desc: 'Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.'
        },
        {
            title: 'How we protect your information:',
            desc: 'We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.'
        },
        {
            title: 'Sharing your personal information:',
            desc: 'We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.'
        },
        {
            title: 'Changes to this privacy policy:',
            desc: 'Real Estate WordPress Theme has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.'
        },
        {
            title: 'Your acceptance of these terms:',
            desc: 'By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.'
        },
    ]
    return (
        <>
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <PageHeader title="Privacy Policy" />
                <div className="container mx-auto mt-20 md:px-20">
                    {items.map(item => (
                        <div className="w-3/4"><h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">{item.title}</h3><p className="mb-5">{item.desc}</p></div>
                    ))}
                </div>
            </section>
        </>
    );
}
