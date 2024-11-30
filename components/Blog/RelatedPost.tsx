import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = () => {
  return (
    <>
      <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9">
        <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
          All Blogs
        </h4>

        <div>
          {BlogData.map((post, key) => (
            <div
              className="flex xl:flex-nowrap flex-wrap gap-4 2xl:gap-6 mb-7.5"
              key={key}
            >
              <div className="relative max-w-44 w-45 h-18">
                {post.mainImage ? (
                  <Image fill src={post.mainImage} alt="Blog" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="w-60 font-medium text-md text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-300">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
