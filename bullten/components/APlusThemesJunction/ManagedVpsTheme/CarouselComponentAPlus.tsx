import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";

interface Props {
  carouselData: any;
}

const CarouselComponentAPlus: React.FC<Props> = ({ carouselData }) => {
  return (
    <>
      {carouselData?.content?.length > 0 ? (
        <div className="sm:flex flex-cols container mx-auto">
          <div
            className="w-full lg:px-8 px-4 bg-[#f3f7fa]"
            // style={{
            //   marginTop: `${carouselData?.gap_top / 4}rem`,
            //   marginBottom: `${carouselData?.gap_bottom / 4}rem`,
            // }}
          >
            <div>
              <div className="absolute left-[200px]">
                <Image src="/hero-map.png" alt="map" width={400} height={400} />
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-4 ">
              <div
                className="text-2xl mt-2 sm:w-[60%] lg:text-4xl font-bold tailwind-unreset"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(carouselData?.heading),
                }}
              />
              <div
                className="text-lg text-bullt-primary/[0.8] py-2 tailwind-unreset "
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(carouselData?.description),
                }}
              />
            </div>
            <div className="flex ">
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
                        <div className="bg-opacity-60 py-4 flex flex-col items-start">
                          <div
                            className="w-full text-xl font-semibold text-bullt-tertiary h-full sm:h-[55px] tailwind-unreset"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(item?.heading),
                            }}
                          />
                          <div
                            className="w-full sm:py-2  tailwind-unreset text-lg  line-clamp-4"
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
          <div className="relative sm:w-[30%] w-full flex items-center text-center justify-center py-5 bg-cover bg-right bg-[url('/hero-map.png')]">
            <div className="bg-[#2a89d2] opacity-70 inset-0 absolute"></div>
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

export default CarouselComponentAPlus;
