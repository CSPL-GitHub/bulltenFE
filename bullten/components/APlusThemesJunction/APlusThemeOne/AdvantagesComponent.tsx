import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const AdvantagesAPLusComponent = ({ AdvantagesData }: any) => {
  return (
    <div className="container mx-auto mt-6 py-4 lg:py-8 px-2 lg:px-8 space-y-8">
      <div className="flex flex-col items-center ">
        {/* <span className="text-lg text-bullt-quaternary font-medium text-center">
          Advantages
        </span> */}

        {AdvantagesData?.heading ? (
          <div
            className="w-full text-center sm:text-4xl text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: AdvantagesData?.heading }}
          />
        ) : null}
        {AdvantagesData?.description ? (
          <div
            className="w-full text-center text-bullt-primary/[0.8] text-lg py-4"
            dangerouslySetInnerHTML={{ __html: AdvantagesData?.description }}
          />
        ) : null}
      </div>
      {AdvantagesData?.content?.map((section: any, index: number) => (
        <div
          key={section.id}
          className={`w-full mx-auto flex flex-col md:flex-row items-center gap-3  ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:[50%]">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${section?.image}`}
              alt={section?.heading}
              className="w-full h-[300px] lg:h-[400px] object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:[50%] md:px-20 px-4 ">
            {/* bg-[url('/pricing_shape.png')] bg-contain bg-center bg-no-repeat */}
            <div className="" />
            {section?.heading ? (
              <div
                className="w-full text-bullt-primary text-start sm:text-3xl text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: section?.heading }}
              />
            ) : null}
            {section?.description ? (
              <div
                className="py-3 text-justify text-bullt-primary/[0.8] text-lg"
                dangerouslySetInnerHTML={{ __html: section?.description }}
              />
            ) : null}
            {section?.button_text ? (
              <div>
                <Link
                  href={section?.button_link}
                  className="flex justify-start items-center gap-2 px-2 py-2 text-black rounded cursor-pointer font-semibold text-xl"
                >
                  <p className="text-semibold transition-transform duration-500">
                    {section?.button_text}
                  </p>

                  <AiOutlineArrowRight size={20} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvantagesAPLusComponent;
