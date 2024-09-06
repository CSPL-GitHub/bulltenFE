import Image from "next/image";

type Props = {
  bannerData: any;
};

const APlusBannerComponent: React.FC<Props> = ({ bannerData }) => {
  return (
    <>
      <div
        className={`relative h-[400px] lg:h-[450px] flex flex-col justify-center  ${
          bannerData?.image ? "" : "bg-gradient-to-l from-indigo-500 "
        }`}
        style={{
          marginTop: `${bannerData?.gap_top / 4}rem`,
          marginBottom: `${bannerData?.gap_bottom / 4}rem`,
        }}
      >
        {bannerData?.image ? (
          <Image
            className="absolute inset-0 object-cover w-full h-full bg-top"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${bannerData?.image}`}
            alt={bannerData?.image_alternate_text}
            style={{
              position: "absolute",
              objectPosition: "top",
              objectFit: "cover",
              inset: 0,
              filter: "brightness(0.8)",
            }}
            fill={true}
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0">
          {/* <svg
            viewBox="0 0 220 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,6 Q30,12 60,6 T120,6 T180,6 T240,6 L240,12 L0,12 Z" />
          </svg> */}
        </div>
        <div className=" relative flex flex-col justify-center items-start max-w-4xl h-full p-6 bg-gradient-to-r from-gray-50">
          {bannerData?.heading ? (
            <div
              className="w-full lg:w-3/5 md:text-5xl text-4xl font-400 text-bullt-primary text-left font-semibold"
              dangerouslySetInnerHTML={{ __html: bannerData?.heading }}
            ></div>
          ) : null}
          {bannerData?.description ? (
            <div
              className="w-full lg:w-3/5 md:text-xl text-lg py-3 font-400 text-bullt-primary text-left "
              dangerouslySetInnerHTML={{
                __html: bannerData?.description,
              }}
            ></div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default APlusBannerComponent;
