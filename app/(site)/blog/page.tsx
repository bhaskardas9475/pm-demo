import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <PageHeader title="Latest Blogs" />
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          <div className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            {/* @ts-ignore */}
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7240310213226983424" height="573" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </div>
          <div className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            {/* @ts-ignore */}
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242438195726934016" height="573" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </div>
          <div className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            {/* @ts-ignore */}
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7246746661127929856" height="573" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
