import RelatedServices from "@/components/Features/RelatedServices";
import ServiceCarousel from "@/components/Features/ServiceCarousel";
import serviceList from "@/components/Features/ServiceList";
import Link from "next/link";

export async function generateStaticParams() {
  return serviceList.map((service) => ({
    slug: service.slug, // Each object corresponds to a route param
  }));
}

const SingleServicePage = ({ params }) => {
  const service = serviceList.find((blog) => blog.slug == params.slug);

  return (
    <>
      <title>{`Property Matrimony Blog - ${service?.title}`}</title>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <ServiceCarousel images={service?.image || [""]} />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {service?.title}
                </h2>

                <div
                  className="blog-details"
                  dangerouslySetInnerHTML={{ __html: service?.html || "" }}
                ></div>

                <div>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-red-800"
                  >
                    Get in Touch with Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 lg:w-[32%]">
              <RelatedServices />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleServicePage;
