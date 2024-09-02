interface Props {
  videoTextData: any;
}

const VideoTextAPlusComponent: React.FC<Props> = ({ videoTextData }) => {
  return (
    <div
      className="w-full grid grid-cols-12 sm:gap-[50px] rounded-lg sm:py-5  my-10 sm:my-0 bg-tgh-quinary/[0.1] py-3 sm:px-10 px-4"
      style={{
        marginTop: `${videoTextData?.gap_top / 4}rem`,
        marginBottom: `${videoTextData?.gap_bottom / 4}rem`,
      }}
    >
      {videoTextData?.align_element === "left" ? (
        <div
          className={`${
            videoTextData?.heading || videoTextData?.description
              ? videoTextData.video_size === 12
                ? "lg:col-span-12 h-[600px]"
                : videoTextData.video_size === 6
                ? "lg:col-span-6 sm:h-[350px] h-[200px]"
                : "lg:col-span-3"
              : "lg:col-span-12 h-[600px]"
          }  col-span-12 flex items-center justify-center relative rounded-md `}
        >
          {videoTextData?.video_type === "video" ? (
            <video className="w-full h-auto" autoPlay loop muted controls>
              <source src={`${process.env.NEXT_PUBLIC_BASE_URL}${videoTextData?.video}`} type="video/mp4" />
            </video>
          ) : videoTextData?.video_type === "link" ? (
            <>
              <iframe
                className="w-full h-auto"
                src={videoTextData?.video_url}
                allowFullScreen
                style={{
                  width: "100%",
                  height: "350px",
                }}
              ></iframe>
            </>
          ) : null}
        </div>
      ) : null}
      {videoTextData?.heading || videoTextData?.description ? (
        <div
          className={`${
            videoTextData?.video_type === "video" ||
            videoTextData?.video_type === "link"
              ? videoTextData.video_size === 12
                ? "lg:col-span-12"
                : videoTextData.video_size === 6
                ? "lg:col-span-6"
                : "lg:col-span-9"
              : "lg:col-span-12"
          } col-span-12 flex gap-2 flex-col items-start justify-center sm:mt-0 mt-4`}
        >
          {videoTextData?.heading ? (
            <div
              className="md:w-[600px] w-full text-tgh-text-primary text-start sm:text-4xl text-2xl"
              dangerouslySetInnerHTML={{ __html: videoTextData?.heading }}
            />
          ) : null}
          {videoTextData?.description ? (
            <div
              className="text-justify text-tgh-secondary tailwind-unreset "
              dangerouslySetInnerHTML={{ __html: videoTextData?.description }}
            />
          ) : null}
          {videoTextData?.button_link ? (
            <div>
              <a href={videoTextData?.button_link}>
                {videoTextData?.button_text ? (
                  <div
                    className="w-[200px] mt-4 flex justify-center items-center gap-2 px-2 py-2 bg-tgh-primary hover:bg-white text-white hover:text-tgh-primary border border-tgh-primary rounded group cursor-pointer"
                    dangerouslySetInnerHTML={{
                      __html: videoTextData?.button_text,
                    }}
                  />
                ) : null}
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      {videoTextData?.align_element === "right" ? (
        <div
          className={`${
            videoTextData?.heading || videoTextData?.description
              ? videoTextData.video_size === 12
                ? "lg:col-span-12 h-[200px] "
                : videoTextData.video_size === 6
                ? "lg:col-span-6 sm:h-[350px] h-[200px] my-2"
                : "lg:col-span-3"
              : "lg:col-span-12 h-[600px]"
          }  col-span-12 sm:flex hidden items-center justify-center relative rounded-md`}
        >
          {videoTextData?.video_type === "video" ? (
            <video
              className="w-full h-auto rounded-md"
              autoPlay
              loop
              muted
              controls
            >
              <source src={`${process.env.NEXT_PUBLIC_BASE_URL}${videoTextData?.video}`} type="video/mp4" />
            </video>
          ) : videoTextData?.video_type === "link" ? (
            <>
              <iframe
                className="w-full h-auto rounded-md"
                src={videoTextData?.video_url}
                allowFullScreen
                style={{
                  width: "100%",
                  height: "350px",
                }}
              ></iframe>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default VideoTextAPlusComponent;
