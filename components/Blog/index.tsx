import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Latest news and blogs from Property Matrimony`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 ">
          {/* {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))} */}

          <div className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7240310213226983424" height="573" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </div>
          <div className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242438195726934016" height="573" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </div>
          <div className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7246746661127929856" height="573" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
