import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";

interface Props {
  carouselData: any;
}

const HostingCarouselComponentAPlus: React.FC<Props> = ({ carouselData }) => {
  return (
    <>
      {carouselData?.content?.length > 0 ? (
        <div className="flex lg:flex-row flex-col container mx-auto lg:py-8 py-4 px-2 lg:px-8">
          <div
            className="w-full px-4"
          // style={{
          //   marginTop: `${carouselData?.gap_top / 4}rem`,
          //   marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          // }}
          >
            <div>
              <div className="absolute">
                <Image
                  src="/hero-map.png"
                  alt="map"
                  width={500}
                  height={400}
                  className="opacity-60"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 ">
              <div
                className="text-2xl mt-2  w-full lg:text-4xl text-center  font-bold tailwind-unreset"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(carouselData?.heading),
                }}
              />
              <div
                className="text-lg text-bullt-primary/[0.8] py-2  lg:text-left text-center tailwind-unreset "
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(carouselData?.description),
                }}
              />
            </div>
            <div className="flex">
              <div className="sm:grid sm:grid-cols-3 sm:gap-2 flex flex-col ">
                {carouselData?.content?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="w-full h-auto flex flex-col item-center relative">
                    <div className="mx-3 transform transition-transform duration-300  before:transition-all before:duration-500">
                      {item?.image ? (
                        <>
                          <div className="relative w-[70px] h-[70px] flex items-center transition-transform duration-100 ease-in-out hover:scale-x-[-1] bg-slate-100 rounded-full">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                              alt={item?.heading}
                              style={{
                                position: "absolute",
                                objectFit: "cover",
                                inset: 0,
                              }}
                              fill={true}
                              className="w-full h-full p-3"
                            />
                          </div>
                        </>
                      ) : null}
                      {item?.heading || item?.description ? (
                        <div className="bg-opacity-60 py-4 flex flex-col gap-3 items-start">
                          <div
                            className="w-full text-lg font-semibold text-bullt-tertiary h-full text-wrap tailwind-unreset border-r-2 border-gray-200 line-clamp-2"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(item?.heading),
                            }}
                          />
                          <div className="w-[25%] bg-bullt-quaternary h-[3px] min-h-[1px]"></div>
                          <div
                            className="w-full tailwind-unreset text-lg line-clamp-4"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(item?.description),
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HostingCarouselComponentAPlus;
