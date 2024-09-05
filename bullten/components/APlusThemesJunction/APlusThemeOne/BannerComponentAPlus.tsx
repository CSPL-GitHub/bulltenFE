import Image from "next/image";

type Props = {
  bannerData: any;
};

const APlusBannerComponent: React.FC<Props> = ({ bannerData }) => {
  return (
    <>
      <div
        className={`relative h-[400px] lg:h-[430px] flex flex-col justify-center items-center ${
          bannerData?.image
            ? ""
            : "bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900"
        }`}
        style={{
          marginTop: `${bannerData?.gap_top / 4}rem`,
          marginBottom: `${bannerData?.gap_bottom / 4}rem`,
        }}
      >
        {bannerData?.image ? (
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${bannerData?.image}`}
            alt={bannerData?.image_alternate_text}
            style={{
              position: "absolute",
              objectFit: "cover",
              inset: 0,
              filter: "brightness(0.9)",
            }}
            fill={true}
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 220 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,6 Q30,12 60,6 T120,6 T180,6 T240,6 L240,12 L0,12 Z" />
          </svg>
        </div>
        <div className="relative flex flex-col items-center max-w-3xl p-6 ">
          <div className="w-full">
            {bannerData?.heading ? (
              <div
                className="md:text-5xl text-4xl font-400 text-bullt-secondary text-left lg:text-center font-semibold"
                dangerouslySetInnerHTML={{ __html: bannerData?.heading }}
              ></div>
            ) : null}
            {bannerData?.description ? (
              <div
                className="md:text-xl text-lg py-3 font-400 text-gray-200 text-left lg:text-center"
                dangerouslySetInnerHTML={{
                  __html: bannerData?.description,
                }}
              ></div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default APlusBannerComponent;
