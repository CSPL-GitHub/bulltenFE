import Image from "next/image";

type Props = {
  bannerData: any;
};

const APlusBannerComponent: React.FC<Props> = ({ bannerData }) => {
  return (
    <div
      className="w-full h-auto relative"
    style={{
      marginTop: `${bannerData?.gap_top / 4}rem`,
      marginBottom: `${bannerData?.gap_bottom / 4}rem`,
    }}
    >
      <div className="h-[400px] w-full">
        {bannerData?.image ? (
          <Image
            className="sm:rounded-lg rounded-none"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${bannerData?.image}`}
            alt="p"
            style={{
              position: "absolute",
              objectFit: "cover",
              inset: 0,
            }}
            fill={true}
          />
        ) : null}
      </div>

      <div className="absolute top-0 start-0 w-full h-full flex flex-col gap-6 justify-center items-center bg-tgh-primary/[0.3] sm:rounded-lg rounded-none p-3">
        <div className="lg:w-[60%] relative w-full flex flex-col justify-center items-center gap-2">
          {bannerData?.heading ? (
            <h1
              className="md:text-7xl text-4xl font-400 text-bullt-secondary text-center"
              dangerouslySetInnerHTML={{ __html: bannerData?.heading }}
            ></h1>
          ) : null}
          
        </div>
      </div>
    </div>
  );
};
export default APlusBannerComponent;
