interface Props {
  videoData: any;
}

const VideoAPlusComponent: React.FC<Props> = ({ videoData }) => {
  return (
    <div
      className="w-full h-auto sm:px-0 px-4"
      style={{
        marginTop: `${videoData?.gap_top / 4}rem`,
        marginBottom: `${videoData?.gap_bottom / 4}rem`,
      }}
    >
      {videoData?.heading ? (
        <div
          className="w-full flex flex-col items-start tailwind-unreset"
          dangerouslySetInnerHTML={{ __html: videoData?.heading }}
        />
      ) : null}
      <div className="w-full h-auto rounded-md">
        {videoData?.video_type === "video" ? (
          <video className="w-full h-auto" autoPlay loop muted controls>
            <source src={`${process.env.NEXT_PUBLIC_BASE_URL}${videoData?.video}`}type="video/mp4" />
          </video>
        ) : videoData?.video_type === "link" ? (
          <>
          <iframe
            className="w-full h-auto rounded-md"
            src={videoData?.video_url}
            allowFullScreen
            style={{
              width: "100%",
              height: "400px",
            }}
          ></iframe>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default VideoAPlusComponent;
