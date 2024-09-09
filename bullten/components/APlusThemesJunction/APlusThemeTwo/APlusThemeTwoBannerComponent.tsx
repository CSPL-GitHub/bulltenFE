import Image from "next/image";

type Props = {
  bannerData: any;
};

const APlusThemeTwoBannerComponent: React.FC<Props> = ({ bannerData }) => {
  return (
    <>
      <div
        className={
          "relative sm:min-h-[450px] min-h-[450px] h-[400px] lg:h-[450px] flex flex-col justify-center"
        }
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
          className="sm:min-h-[450px] min-h-[450px] flex items-center justify-center sm:px-4 bg-black/50"
          style={{
            background: bannerData?.image_position
              ? "linear-gradient(to left, white, rgba(72, 85, 99, 0.4))"
              : "  linear-gradient(to right, white, rgba(72, 85, 99, 0.4))",
          }}
        >
          <div className="container m-auto relative flex flex-col justify-center items-start  w-full h-full p-6 ">
            {bannerData?.heading ? (
              <div
                className="w-full lg:w-3/5 md:text-6xl text-4xl text-left font-semibold"
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
export default APlusThemeTwoBannerComponent;
