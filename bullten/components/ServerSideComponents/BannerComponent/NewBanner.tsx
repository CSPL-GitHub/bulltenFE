import { Banner } from "@/types/BannerTypes";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type Props = {
  banner: Banner;
};

const NewBanner = ({ banner }: Props) => {
  function generateRandomSVG() {
    const colors = [
      "#0530ad",
      "#DDA0DD",
      "#33006F",
      "#660000",
      "#5733FF",
      "#6F00FF",
    ];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="1864" height="960" viewBox="0 0 1864 960" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0 914.444V111.111C0 92.7016 14.9238 77.7778 33.3333 77.7778H396.184C406.639 77.7778 416.488 72.8725 422.787 64.5283L461.5 13.2494C467.799 4.90526 477.648 0 488.103 0H1862.89C1863.5 0 1864 0.497461 1864 1.11111V825.667C1864 844.076 1849.08 859 1830.67 859H944.34C935.239 859 926.533 862.721 920.244 869.301L843.393 949.699C837.104 956.278 828.398 960 819.297 960H45.5556C20.396 960 0 939.604 0 914.444Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="1723.66" y1="0.000114398" x2="-2.45707" y2="1046.15" gradientUnits="userSpaceOnUse">
            <stop stop-color="${randomColor1}"></stop>
            <stop offset="1" stop-color="${randomColor2}"></stop>
          </linearGradient>
        </defs>
      </svg>
    `;
  }
  const svgBackground = generateRandomSVG();
  const svgBackgroundUrl = `data:image/svg+xml;base64,${Buffer.from(
    svgBackground
  ).toString("base64")}`;

  return (
    <section
      className="relative h-[700px] flex items-center justify-center pt-[70px] -mt-4 container mx-auto rounded-lg"
      style={{
        backgroundImage: `url('${svgBackgroundUrl}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="absolute top-0 left-0 bg-white sm:w-1/2 w-full h-[120px] transform -translate-y-1/2 -translate-x-1/2 rounded-tl-[150px] z-0 rounded-br-[3.5rem]"></div> */}
      <div className="absolute inset-0 opacity-30 z-[-1]" />
      <div className="container mx-auto px-4 sm:px-8 sm:py-0 py-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div
          className={`flex-1 flex w-full lg:justify-center mt-8  bg-cover bg-center bg-no-repeat bg-[url('/hero-1-dot-right.png')] lg:mt-0 relative ${
            banner?.image_position === "Left" ? "sm:flex hidden" : "hidden"
          }`}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
            alt={banner?.alt_text || "Banner Image"}
            layout="responsive"
            width={500}
            height={300}
            className="object-contain rounded-lg"
          />
        </div>

        <div
          className={`flex-1 sm:hidden flex w-full max-h-[200px] lg:justify-center mt-8 lg:mt-0 relative `}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
            alt={banner?.alt_text || "Banner Image"}
            layout="responsive"
            width={500}
            height={300}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col sm:gap-7 gap-2 mt-5 sm:mt-0 items-start justify-center sm:w-[60%] w-full">
          {banner?.label ? (
            <h2 className="text-white font-bold text-sm sm:text-xl mb-1 uppercase">
              {banner?.label}
            </h2>
          ) : null}

          {banner?.title && (
            <h2 className="text-white font-extrabold text-3xl sm:text-5xl mb-1">
              {banner?.title}
            </h2>
          )}

          {banner?.link && (
            <h3 className="text-white  text-lg mb-4">{banner?.link}</h3>
          )}

          <div className="flex sm:flex-row flex-col gap-3 text-bullt-secondary">
            <div className="flex gap-2 items-center space-x-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.icon_1}`}
                alt={banner?.icon_1_alt_txt}
                width={30}
                height={30}
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {banner?.icon_1_header}
                </h3>
                {/* <p dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(banner?.icon_1_decsription) }}/> */}
              </div>
            </div>

            <div className="flex gap-2 items-center space-x-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.icon_2}`}
                alt={banner?.icon_2_alt_txt}
                width={30}
                height={30}
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {banner?.icon_2_header}
                </h3>
                {/* <p dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(banner?.icon_2_decsription) }}/> */}
              </div>
            </div>
          </div>

          <div className="sm:mt-0 mt-4 flex sm:justify-start justify-center w-full sm:pb-0 pb-8">
            <button
              onClick={() => (window.location.href = banner?.button_link)}
              className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-md px-10 py-3"
            >
              {banner?.button_text}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 flex w-full lg:justify-center mt-8 lg:mt-0  relative ${
            banner?.image_position === "Right" ? "sm:flex hidden" : "hidden"
          }`}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
            alt={banner?.alt_text || "Banner Image"}
            layout="responsive"
            width={500}
            height={300}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default NewBanner;
