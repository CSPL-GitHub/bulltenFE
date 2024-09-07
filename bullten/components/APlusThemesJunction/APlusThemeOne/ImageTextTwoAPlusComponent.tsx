import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
interface Props {
  imageTextData: any;
}

const ImageTextTwoAPlusComponent: React.FC<Props> = ({ imageTextData }) => {
  return (
    <section className="py-4 lg:py-8 px-2 lg:px-8 bg-[url('/team_bg.jpg')] bg-contain bg-no-repeat">
      <div
        className="container mx-auto items-center "
        style={{
          marginTop: `${imageTextData?.gap_top / 4}rem`,
          marginBottom: `${imageTextData?.gap_bottom / 4}rem`,
        }}
      >
        {imageTextData?.align_element === "left" && imageTextData?.image ? (
          <>
            <div className="w-full flex flex-col lg:flex-row items-start justify-center relative gap-4 px-4 ">
              {imageTextData?.heading || imageTextData?.description ? (
                <div className="w-full lg:w-2/4 flex flex-col gap-2 items-start justify-center ">
                  {imageTextData?.heading ? (
                    <div
                      className="w-full text-bullt-primary text-start font-semibold sm:text-4xl text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.heading,
                      }}
                    />
                  ) : null}

                  {imageTextData?.description ? (
                    <div
                      className="text-justify text-bullt-primary/[0.8] text-lg py-2 font-400  "
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.description,
                      }}
                    />
                  ) : null}

                  <div className="list-disc sm:grid sm:grid-cols-2 gap-3 text-lg list-inside space-y-1">
                    {imageTextData?.list_name.map((item: any, index: any) => (
                      <div className="flex gap-2 ">
                        <span className="text-bullt-tertiary text-xl">✔</span>
                        <div
                          className="text-bullt-primary/[0.8] col-span-1"
                          dangerouslySetInnerHTML={{
                            __html: item?.title,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {imageTextData?.button_text ? (
                    <div>
                      <Link
                        href={imageTextData?.button_link}
                        className="flex justify-start items-center gap-2 px-2 py-2 text-black rounded cursor-pointer font-semibold"
                      >
                        <p className="text-semibold transition-transform duration-500">
                          {imageTextData?.button_text}
                        </p>

                        <AiOutlineArrowRight size={20} />
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="w-full lg:w-2/4 relative  h-[400px] flex px-0 lg:px-14">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                  alt={imageTextData?.heading}
                  className="rounded-md w-full h-full object-cover"
                  style={{ height: "100%" }}
                />

                {imageTextData?.small_box_image ? (
                  <>
                    {" "}
                    <div className="absolute top-[80px] left-[0px] p-4 bg-white shadow-md rounded-md flex items-center gap-2">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.small_box_image}`}
                        alt={imageTextData?.image_alternate_text}
                        className="w-10 h-10"
                      />
                      {imageTextData?.small_box_text ? (
                        <>
                          {" "}
                          <span className="text-sm font-semibold">
                            {imageTextData?.small_box_text}
                          </span>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}

                {imageTextData?.single_box ? (
                  <>
                    <div className="absolute bottom-[-30px] right-[30px] p-4 bg-white shadow-md rounded-xl flex items-center gap-2">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.single_box}`}
                        alt={imageTextData?.heading}
                        className="w-15 h-15"
                      />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </>
        ) : null}

        {imageTextData?.align_element === "right" && imageTextData?.image ? (
          <>
            <div className="W-full flex items-start justify-center relative ">
              <div className="w-full lg:w-2/4 relative h-[400px] flex px-0 lg:px-14">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
                  alt={imageTextData?.heading}
                  className="rounded-md w-full object-cover"
                  style={{ height: "100%" }}
                />

                {/* Annotations */}
                {imageTextData?.small_box_image ? (
                  <>
                    <div className="absolute top-[80px] left-[0px] p-4 bg-white shadow-md rounded-md flex items-center gap-2">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.small_box_image}`}
                        alt={imageTextData?.image_alternate_text}
                        className="w-10 h-10"
                      />
                      {imageTextData?.small_box_text ? (
                        <>
                          <span className="text-sm font-semibold">
                            {imageTextData?.small_box_text}
                          </span>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}

                {imageTextData?.single_box ? (
                  <>
                    <div className="absolute bottom-[-30px] right-[30px] p-4 bg-white shadow-md rounded-xl flex items-center gap-2">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.single_box}`}
                        alt={imageTextData?.heading}
                        className="w-15 h-15"
                      />
                    </div>
                  </>
                ) : null}
              </div>
              {imageTextData?.heading || imageTextData?.description ? (
                <div className="w-2/4 flex gap-2 flex-col items-start justify-center sm:mt-0 mt-4 ">
                  {imageTextData?.heading ? (
                    <div
                      className="w-full text-bullt-primary text-start sm:text-4xl text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.heading,
                      }}
                    />
                  ) : null}

                  {imageTextData?.description ? (
                    <div
                      className="text-justify text-bullt-primary/[0.8] text-lg py-2 font-400  "
                      dangerouslySetInnerHTML={{
                        __html: imageTextData?.description,
                      }}
                    />
                  ) : null}

                  <div className="list-disc sm:grid sm:grid-cols-2 gap-3 text-lg list-inside space-y-1">
                    {imageTextData?.list_name.map((item: any, index: any) => (
                      <div className="flex gap-2 ">
                        <span className="text-bullt-tertiary text-xl">✔</span>
                        <div
                          className="text-bullt-primary/[0.8] col-span-1"
                          dangerouslySetInnerHTML={{
                            __html: item?.title,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {imageTextData?.button_text ? (
                    <div>
                      <Link
                        href={imageTextData?.button_link}
                        className="flex justify-start items-center gap-2 px-2 py-2 text-black rounded cursor-pointer font-semibold"
                      >
                        <div className="text-semibold transition-transform duration-500">
                          {imageTextData?.button_text}
                        </div>

                        <AiOutlineArrowRight size={20} />
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default ImageTextTwoAPlusComponent;
