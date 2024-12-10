"use client";

export default function Gallery() {
  const media = [
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.03 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.03 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.04 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.04 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.05 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.05 PM (2).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.05 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.06 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.06 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.07 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.07 PM (2).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.07 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.08 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.08 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.09 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.09 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.10 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.11 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.11 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.31 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.44 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.45 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.45 PM (2).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.45 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.46 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.46 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.47 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.47 PM (2).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.47 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.48 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.48 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.49 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.49 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.50 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.50 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.51 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.51 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.54 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.54 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.55 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.55 PM (2).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.55 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.56 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.56 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.57 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.57 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.58 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.58 PM (2).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.58 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.59 PM (1).jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 3.59.59 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 4.20.35 PM.jpeg" },
    { src: "/images/gallery/WhatsApp Image 2024-12-06 at 4.26.10 PM.jpeg" },
  ];

  const colsPadding = { xs: 4, s: 4, m: 4, l: 8, xl: 8, xxl: 8 };

  return (
    <div className="mx-auto mt-10 max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
      <div className="grid grid-cols-12 gap-4">
        {media.map((item) => (
            <div
              style={{ backgroundImage: `url('${item.src}')` }}
              className="m-auto h-[400px] w-[100%] border bg-contain bg-center bg-no-repeat col-span-12 bg-slate-200 md:col-span-4 rounded"
            ></div>
        ))}
      </div>
    </div>
  );
}
