type Props = {
  bannerData: any;
};

const BannerComponentAPlus: React.FC<Props> = ({ bannerData }) => {
  return (
    <div
      className="w-full h-auto"
      style={{
        marginTop: `${bannerData?.gap_top / 4}rem`,
        marginBottom: `${bannerData?.gap_bottom / 4}rem`,
      }}
    >
      <div className="w-full h-auto flex flex-col item-center justify-center relative">
        <div className="w-full h-auto flex items-center justify-center">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${bannerData?.image}`}
            alt={bannerData?.heading}
            className="max-h-[100%] max-w-[100%]"
          />
        </div>
        {bannerData?.heading || bannerData?.description ? (
          <div
            className="h-auto lg:w-[400px] w-full bg-tgh-primary bg-opacity-60 p-4 lg:absolute flex flex-col justify-center items-start text-tgh-tertiary"
            style={{
              insetInlineStart: `${bannerData?.banner_horizontal_position_value}%`,
              top: `${bannerData?.banner_vertical_position_value}%`,
            }}
          >
            <div
              className="w-full flex flex-col items-start tailwind-unreset"
              dangerouslySetInnerHTML={{ __html: bannerData?.heading }}
            />
            <div
              className="w-full flex flex-col items-start tailwind-unreset"
              dangerouslySetInnerHTML={{ __html: bannerData?.description }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default BannerComponentAPlus;
