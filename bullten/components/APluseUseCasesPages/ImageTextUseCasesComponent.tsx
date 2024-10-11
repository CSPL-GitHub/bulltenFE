import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  imageTextData: any;
}

const ImageTextUseCasesComponent: React.FC<Props> = ({ imageTextData }) => {
  return (
    <div className="container mx-auto py-6 lg:py-16">
      <div className="max-w-7xl mx-auto w-full h-auto grid lg:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[10px] px-4 lg:px-0 ">
        {imageTextData?.image ? (
          <div className="flex items-center justify-center relative border-[1px] border-gray-300 rounded-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
              alt={imageTextData?.heading}
              fill={true}
              className="rounded-md h-full object-contain"
            />
          </div>
        ) : null}
        {imageTextData?.heading ? (
          <div className={`flex gap-2 flex-col items-start justify-center `}>
            {imageTextData?.heading ? (
              <div
                className="w-full text-bullt-primary text-start sm:text-4xl text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: imageTextData?.heading }}
              />
            ) : null}
            {imageTextData?.description ? (
              <div
                className="text-justify text-bullt-primary tailwind-unreset "
                dangerouslySetInnerHTML={{ __html: imageTextData?.description }}
              />
            ) : null}
            {/* {imageTextData?.button_text ? (
            <div>
              {imageTextData?.button_text && imageTextData?.button_link ? (
                <Link
                  href={imageTextData?.button_link}
                  className="flex justify-center m-auto mt-4 items-center gap-2 px-2 py-2 bg-bullt-primary hover:bg-white text-white hover:text-bullt-primary border border-bullt-primary rounded group cursor-pointer"
                >
                  <p className="text-semibold transition-transform duration-500">
                    {imageTextData?.button_text}
                  </p>
                  <div className="sm:opacity-0 opacity-100 sm:group-hover:opacity-100 transform transition-opacity duration-500">
                    <div className="sm:hidden sm:group-hover:block block">
                      <AiOutlineArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              ) : null}
            </div>
          ) : null} */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImageTextUseCasesComponent;
