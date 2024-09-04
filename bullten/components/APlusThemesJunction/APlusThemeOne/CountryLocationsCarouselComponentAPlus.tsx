"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import * as DOMPurify from "dompurify";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Product {
  title: string;
}

interface Country {
  Image: string;
  CountryFlag: string;
  CountryName: string;
  CountryState: string;
  IPAddress: string;
  buttonText: string;
  IPAddressName: string;
  ProductsHeading: string;
  buttonLink: string;
  Products: Product[];
}

interface CarouselData {
  heading: string;
  description: string;
  content: Country[];
  gap_top?: number;
  gap_bottom?: number;
}

interface Props {
  carouselData: CarouselData;
}

const carouselData: CarouselData = {
  heading: "Global Server Network",
  description:
    "Explore our worldwide server locations to enhance your connectivity and speed.",
  content: [
    {
      Image:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-86.png",
      CountryFlag:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-89.png",
      CountryName: "United States",
      CountryState: "California",
      IPAddressName: "IP Address:",
      IPAddress: "192.168.1.1",
      buttonText: "View Details",
      buttonLink: "https://example.com/usa-server-details",
      ProductsHeading: "Available Products",
      Products: [{ title: "Dedicated Server" }, { title: "Cloud Hosting" }],
    },
    {
      Image:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-86.png",
      CountryFlag:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-89.png",
      CountryName: "Germany",
      CountryState: "Berlin",
      IPAddressName: "IP Address:",
      IPAddress: "192.168.1.2",
      buttonText: "View Details",
      ProductsHeading: "Available Products",
      buttonLink: "https://example.com/germany-server-details",
      Products: [{ title: "VPS Hosting" }, { title: "Shared Hosting" }],
    },
    {
      Image:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-86.png",
      CountryFlag:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-89.png",
      CountryName: "Japan",
      CountryState: "Tokyo",
      IPAddressName: "IP Address:",
      IPAddress: "192.168.1.3",
      buttonText: "View Details",
      ProductsHeading: "Available Products",
      buttonLink: "https://example.com/japan-server-details",
      Products: [{ title: "Reseller Hosting" }, { title: "Managed Hosting" }],
    },
    {
      Image:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-86.png",
      CountryFlag:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-89.png",
      CountryName: "Japan",
      CountryState: "Tokyo",
      IPAddressName: "IP Address:",
      IPAddress: "192.168.1.3",
      buttonText: "View Details",
      ProductsHeading: "Available Products",
      buttonLink: "https://example.com/japan-server-details",
      Products: [{ title: "Reseller Hosting" }, { title: "Managed Hosting" }],
    },
    {
      Image:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-86.png",
      CountryFlag:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-89.png",
      CountryName: "Japan",
      CountryState: "Tokyo",
      IPAddressName: "IP Address:",
      IPAddress: "192.168.1.3",
      buttonText: "View Details",
      ProductsHeading: "Available Products",
      buttonLink: "https://example.com/japan-server-details",
      Products: [{ title: "Reseller Hosting" }, { title: "Managed Hosting" }],
    },
    {
      Image:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-86.png",
      CountryFlag:
        "https://hostingard.themetags.com/wp-content/uploads/2024/05/img-89.png",
      CountryName: "Japan",
      CountryState: "Tokyo",
      IPAddressName: "IP Address:",
      IPAddress: "192.168.1.3",
      buttonText: "View Details",
      ProductsHeading: "Available Products",
      buttonLink: "https://example.com/japan-server-details",
      Products: [{ title: "Reseller Hosting" }, { title: "Managed Hosting" }],
    },
  ],
  gap_top: 16,
  gap_bottom: 16,
};

const CountryLocationsCarouselComponentAPlus: React.FC<Props> = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToScroll: 1,
    prevArrow: <AiOutlineLeft />,
    nextArrow: <AiOutlineRight />,
  };

  return (
    <>
      {carouselData?.content?.length > 0 ? (
        <div
          className="w-full h-auto  py-10  "
          //   style={{
          //     marginTop: `${carouselData?.gap_top / 4}rem`,
          //     marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          //   }}
        >
          {/* <div className="grid grid-cols-12 pb-8"> */}
          {/* <div
              className="col-span-8 w-full m-auto flex flex-col justify-center items-start sm:text-4xl text-2xl text-center leading-3 mb-5 tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.heading),
              }}
            />
            <div
              className="col-span-4 w-full m-auto flex flex-col justify-center items-center sm:text-xl text-lg text-start leading-3 mb-5 tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.description),
              }}
            /> */}
          {/* </div> */}

          <SliderFrame settings={settings} selector={undefined}>
            {carouselData?.content?.map((item, index) => (
              <div
                key={index}
                className="w-full h-auto flex flex-col item-center justify-center relative mb-4 border-t border-bullt-secondary/[0.4]"
              >
                <div className="mx-3 bg-bullt-secondary rounded-md  shadow-white p-4 flex flex-col gap-4 mt-6 border shadow-sm">
                  <div className="w-full h-[200px]  ">
                    <img
                      src={item.Image}
                      alt={item.CountryName}
                      style={{
                        objectFit: "cover",
                      }}
                      className="max-w-[100%] w-full h-full rounded-md"
                    />
                  </div>
                  <div className="w-full bg-opacity-60 flex flex-col justify-center items-start gap-4">
                    <div className="w-full flex justify-start gap-2">
                      <div className="h-[50px]">
                        <img
                          src={item.CountryFlag}
                          alt={item.CountryName}
                          style={{
                            objectFit: "contain",
                          }}
                          className="w-full h-full rounded-md"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-start items-center">
                        <h3 className="w-full text-lg font-semibold ">
                          {item.CountryName}
                        </h3>
                        <p className="w-full text-sm">{item.CountryState}</p>
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-1">
                      <p className="w-full text-[.875em] text-gray-600 font-semibold">
                        {item?.ProductsHeading}
                      </p>
                      <div className="flex flex-wrap gap-1 w-full">
                        {item.Products.map((product, pIndex) => (
                          <span
                            key={pIndex}
                            className="text-xs border rounded-full py-2 px-3 text-center"
                          >
                            {product.title}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="font-normal bg-bullt-tertiary hover:bg-white text-bullt-secondary  hover:text-bullt-tertiary py-1 px-4 border border-bullt-tertiary hover:border-bullt-tertiary rounded">
                      {item.buttonText}
                    </button>
                    <div className="w-full flex items-center gap-1">
                      <p className="text-sm ">{item.IPAddressName}</p>
                      <p className="font-semibold">{item.IPAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SliderFrame>
        </div>
      ) : null}
    </>
  );
};

export default CountryLocationsCarouselComponentAPlus;
