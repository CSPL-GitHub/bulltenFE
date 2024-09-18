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
            className="lg:w-[75%] w-full  px-4 bg-[#f3f7fa]"
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
                  width={400}
                  height={400}
                  className="opacity-60"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 ">
              <div
                className="text-2xl mt-2 md:w-[60%] w-full lg:text-4xl lg:text-left text-center  font-bold tailwind-unreset"
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
                    className="w-full h-auto flex flex-col item-center relative"
                  >
                    <div className="mx-3 transform transition-transform duration-300  before:transition-all before:duration-500">
                      {item?.image ? (
                        <>
                          <div className="w-full h-[80px] flex items-center">
                            <img
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                              alt={item?.heading}
                              style={{
                                objectFit: "contain",
                              }}
                              className="max-w-[100%] max-h-[100%] h-[250px] rounded-md"
                            />
                          </div>
                        </>
                      ) : null}
                      {item?.heading || item?.description ? (
                        <div className="bg-opacity-60 py-4 flex flex-col gap-3 items-start">
                          <div
                            className="w-full text-lg font-semibold text-bullt-tertiary h-full text-wrap tailwind-unreset border-r-2 border-gray-200"
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
          <div className="relative lg:w-[30%] w-full flex items-center text-center justify-center py-5 bg-cover bg-right bg-[url('/hero-map.png')]">
            <div className="bg-bullt-quaternary opacity-70 inset-0 absolute"></div>
            <div
              className="text-lg tailwind-unreset relative  word-wrap font-semibold px-4 text-white "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.description),
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HostingCarouselComponentAPlus;
