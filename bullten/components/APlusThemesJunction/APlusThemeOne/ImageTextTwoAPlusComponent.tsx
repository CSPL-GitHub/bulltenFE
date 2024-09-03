import Image from "next/image";

interface Props {
  imageTextData: any;
}

const ImageTextTwoAPlusComponent: React.FC<Props> = ({ imageTextData }) => {
  return (
    <div
      className="w-full grid grid-cols-12 sm:gap-[50px] rounded-lg sm:py-5 py-2 bg-tgh-quinary/[0.2] sm:px-10 px-4"
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
                ? "lg:col-span-12 h-[600px]"
                : imageTextData.image_size === 6
                ? "lg:col-span-6 sm:h-[400px] h-[180px] "
                : "lg:col-span-3"
              : "lg:col-span-12 h-[600px]"
          }  col-span-12 flex items-center justify-center relative `}
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
          } col-span-12 flex gap-2 flex-col items-start justify-center sm:mt-0 mt-4 `}
        >
          {imageTextData?.heading ? (
            <div
              className="md:w-[600px] w-full text-tgh-text-primary text-start sm:text-4xl text-2xl"
              dangerouslySetInnerHTML={{ __html: imageTextData?.heading }}
            />
          ) : null}
          {imageTextData?.description ? (
            <div
              className="text-justify text-tgh-secondary tailwind-unreset "
              dangerouslySetInnerHTML={{ __html: imageTextData?.description }}
            />
          ) : null}
          <div>
            {imageTextData?.button_link ? (
              <a href={imageTextData?.button_link}>
                {imageTextData?.button_text ? (
                  <div
                    className="w-[180px] mt-4 flex justify-center items-center gap-2 px-2 py-2 bg-tgh-primary hover:bg-white text-white hover:text-tgh-primary border border-tgh-primary rounded group cursor-pointer"
                    dangerouslySetInnerHTML={{ __html: imageTextData?.button_text }}
                  />
                ) : null}
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
      {imageTextData?.align_element === "right" && imageTextData?.image ? (
        <div
          className={`${
            imageTextData?.heading || imageTextData?.description
              ? imageTextData.image_size === 12
                ? "lg:col-span-12 h-[400px]"
                : imageTextData.image_size === 6
                ? "lg:col-span-6 sm:h-[350px] h-[180px] my-2"
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

export default ImageTextTwoAPlusComponent;
