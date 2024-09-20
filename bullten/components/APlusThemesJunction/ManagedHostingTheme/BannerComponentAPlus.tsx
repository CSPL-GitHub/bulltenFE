import Image from "next/image";

type Props = {
  bannerData: any;
};

const APlusBannerComponent: React.FC<Props> = ({ bannerData }) => {
  return (
    <>
      <div
        className={`relative md:min-h-[450px] md:h-[450px] min-h-[380px] h-[380px] flex flex-col justify-center  ${
          bannerData?.image
            ? "linear-gradient(to right, white, rgba(72, 85, 99, 0.4))"
            : "linear-gradient(to left, white, rgba(72, 85, 99, 0.4))"
        }`}
        style={{
          marginTop: `${bannerData?.gap_top / 4}rem`,
          marginBottom: `${bannerData?.gap_bottom / 4}rem`,
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${bannerData?.image})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`"md:min-h-[450px] md:h-[450px] min-h-[380px] h-[380px] flex items-center justify-center sm:px-4 bg-black/50" ${
            bannerData?.image_position
              ? "md:bg-gradient-to-l md:from-bullt-secondary/90 bg-gradient-to-r from-gray-300 via-gray-50 to-gray-300 lg:opacity-100 opacity-70"
              : "md:bg-gradient-to-r md:from-bullt-secondary/90 bg-gradient-to-r from-gray-300 via-gray-50 to-gray-300 lg:opacity-100 opacity-70"
          }`}
          // style={{
          //   background: bannerData?.image_position
          //     ? "linear-gradient(to left, white, rgba(72, 85, 99, 0.4))"
          //     : "  linear-gradient(to right, white, rgba(72, 85, 99, 0.4))",
          // }}
        >
          <div className="container m-auto relative flex flex-col justify-center items-start  w-full h-full p-6 ">
            {bannerData?.heading ? (
              <div
                className="w-full lg:w-3/5 md:text-6xl text-4xl text-left  font-semibold"
                dangerouslySetInnerHTML={{ __html: bannerData?.heading }}
              ></div>
            ) : null}
            {bannerData?.description ? (
              <div
                className="w-full lg:w-3/5 md:text-2xl text-lg font-400 py-4 text-left "
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
