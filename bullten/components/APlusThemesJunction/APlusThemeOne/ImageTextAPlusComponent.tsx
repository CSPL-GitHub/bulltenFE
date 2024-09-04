"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  imageTextData: any;
}

const ImageTextAPlusComponent: React.FC<Props> = ({ imageTextData }) => {
  console.log("imageTextData?.is_downloadable", imageTextData?.is_downloadable);
  return (
    <div
      className="container mx-auto w-full h-auto grid grid-cols-12 sm:gap-[50px] sm:px-0 px-4 bg-[#F3F4F6]"
      style={{
        marginTop: `${imageTextData?.gap_top / 4}rem`,
        marginBottom: `${imageTextData?.gap_bottom / 4}rem`,
      }}
    >
      {imageTextData?.align_element === "left" && imageTextData?.image ? (
        <div
          className={`${
            imageTextData?.heading || imageTextData?.description
              ? imageTextData.image_size === 12
                ? "lg:col-span-12 h-[400px]"
                : imageTextData.image_size === 6
                ? "lg:col-span-6 sm:h-[400px] h-[200px] sm:mb-0 mb-4"
                : "lg:col-span-3"
              : "lg:col-span-12 h-[400px]"
          } col-span-12 flex items-center justify-center relative `}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
            alt={imageTextData?.heading}
            style={{
              position: "absolute",
              objectFit: "contain",
              inset: 0,
            }}
            fill={true}
            className="rounded-md h-full"
          />
        </div>
      ) : null}
      {imageTextData?.heading || imageTextData?.description ? (
        <div
          className={`${
            imageTextData?.image
              ? imageTextData.image_size === 12
                ? "lg:col-span-12"
                : imageTextData.image_size === 6
                ? "lg:col-span-6"
                : "lg:col-span-9"
              : "lg:col-span-12"
          } col-span-12 flex gap-2 flex-col items-start justify-center `}
        >
          {imageTextData?.heading ? (
            <div
              className="w-full text-tgh-text-primary text-start sm:text-4xl text-2xl"
              dangerouslySetInnerHTML={{ __html: imageTextData?.heading }}
            />
          ) : null}
          {imageTextData?.description ? (
            <div
              className="text-justify text-tgh-secondary tailwind-unreset "
              dangerouslySetInnerHTML={{ __html: imageTextData?.description }}
            />
          ) : null}
          {imageTextData?.button_text ? (
            <div>
              {imageTextData?.button_text && imageTextData?.is_downloadable ? (
                <div>
                  {/* <APlusButtonComponents ButtonName={imageTextData} /> */}
                </div>
              ) : (
                <Link
                  href={imageTextData?.button_link}
                  className="w-[300px] flex justify-center m-auto mt-4 items-center gap-2 px-2 py-2 bg-tgh-primary hover:bg-white text-white hover:text-tgh-primary border border-tgh-primary rounded group cursor-pointer"
                >
                  <p className="text-semibold transition-transform duration-500">
                    {imageTextData?.button_text}
                  </p>
                  <div className="sm:opacity-0 opacity-100 sm:group-hover:opacity-100 transform transition-opacity duration-500">
                    <div className="sm:hidden sm:group-hover:block block">
                      <AiOutlineArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ) : null}
        </div>
      ) : null}
      {imageTextData?.align_element === "right" && imageTextData?.image ? (
        <div
          className={`${
            imageTextData?.heading || imageTextData?.description
              ? imageTextData.image_size === 12
                ? "lg:col-span-12 h-[400px] "
                : imageTextData.image_size === 6
                ? "lg:col-span-6  h-[400px] my-2"
                : "lg:col-span-3"
              : "lg:col-span-12 h-[400px]"
          }  col-span-12 sm:flex hidden items-center justify-center relative `}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
            alt={imageTextData?.heading}
            style={{
              position: "absolute",
              objectFit: "cover",
              inset: 0,
            }}
            fill={true}
            className="rounded-md"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ImageTextAPlusComponent;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { AiOutlineArrowRight } from "react-icons/ai";
// interface Props {
//   imageTextData: any;
// }

// const ImageTextAPlusComponent: React.FC<Props> = ({ imageTextData }) => {
//   return (
//     <section className="bg-[#f7faff] py-16 px-4">
//       <div
//         className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
//         style={{
//           marginTop: `${imageTextData?.gap_top / 4}rem`,
//           marginBottom: `${imageTextData?.gap_bottom / 4}rem`,
//         }}
//       >
//         <div className="flex flex-col gap-4">
//           <span className="text-sm text-blue-600 font-medium">
//             • Global Network
//           </span>

//           {imageTextData?.heading ? (
//             <div
//               className="w-full text-bullt-primary text-start sm:text-4xl text-2xl"
//               dangerouslySetInnerHTML={{ __html: imageTextData?.heading }}
//             />
//           ) : null}

//           {imageTextData?.description ? (
//             <div
//               className="text-justify text-tgh-secondary tailwind-unreset "
//               dangerouslySetInnerHTML={{ __html: imageTextData?.description }}
//             />
//           ) : null}

//           <ul className="list-disc list-inside text-[#000E47] space-y-1">
//             <li>DDoS protected network</li>
//             <li>Unmetered bandwidth</li>
//             <li>Bandwidth pooling available</li>
//           </ul>

//           <Link
//             href="#"
//             className="inline-flex items-center gap-1 mt-4 text-blue-600 font-medium"
//           >
//             Browse Configuration <AiOutlineArrowRight />
//           </Link>
//           {imageTextData?.button_text ? (
//             <div>
//               {imageTextData?.button_text && imageTextData?.is_downloadable ? (
//                 <div></div>
//               ) : (
//                 <Link
//                   href={imageTextData?.button_link}
//                   className="inline-flex items-center gap-1 mt-4 text-blue-600 font-medium"
//                 >
//                   <p className="text-semibold transition-transform duration-500">
//                     {imageTextData?.button_text}
//                   </p>
//                   <div className="sm:opacity-0 opacity-100 sm:group-hover:opacity-100 transform transition-opacity duration-500">
//                     <div className="sm:hidden sm:group-hover:block block">
//                       <AiOutlineArrowRight size={20} />
//                     </div>
//                   </div>
//                 </Link>
//               )}
//             </div>
//           ) : null}
//         </div>

//         <div className="relative flex justify-center items-center h-full">
//           <img
//             src="https://hostingard.themetags.com/wp-content/uploads/2024/04/img-41.png" // replace with your hardcoded image path
//             alt="Network Image"
//             width={500}
//             height={300}
//             className="rounded-md"
//           />

//           <div className="absolute top-1/4 left-1/4 p-2 bg-white shadow-md rounded-md flex items-center gap-2">
//             <img
//               src="/path/to/your-icon1.png" // replace with the icon path
//               alt="150+ Tbps Location"
//               className="w-5 h-5"
//             />
//             <span className="text-sm font-semibold">150+ Tbps Location</span>
//           </div>

//           <div className="absolute bottom-1/4 right-1/4 p-2 bg-white shadow-md rounded-md flex items-center gap-2">
//             <img
//               src="/path/to/your-icon2.png" // replace with the icon path
//               alt="Location Icon"
//               className="w-5 h-5"
//             />
//             <span className="text-sm font-semibold">Protected Location</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageTextAPlusComponent;
