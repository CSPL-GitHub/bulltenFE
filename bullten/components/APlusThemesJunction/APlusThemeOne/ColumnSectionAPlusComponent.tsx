"use client";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../../public/whyus.png";

interface Props {
  columnData: any;
}

const ColumnSectionAPlusComponent: React.FC<Props> = ({ columnData }) => {
  const WindowWidth = window.innerWidth;

  return (
    <>
      <div className="py-6"
      // style={{
      //       backgroundImage: `url(${img1.src})`,
      //       backgroundSize: "cover",
      //       backgroundRepeat: "no-repeat",
      //       backgroundPosition: "center",
      //     }}
          >
        <div className="text-center text-4xl sm:px-16 tailwind-unreset font-semibold"
          dangerouslySetInnerHTML={{
            __html: columnData?.heading,
          }}   ></div>
        {columnData?.content?.length > 0 ? (
          <div
            className={`w-full h-auto items-start gap-10 py-8 px-6`}
            style={{
              marginTop: `${columnData?.gap_top / 4}rem`,
              marginBottom: `${columnData?.gap_bottom / 4}rem`,
              display: "grid",
              gridTemplateColumns: `${WindowWidth < 640
                ? "repeat(1, minmax(0, 1fr))"
                : `repeat(${columnData?.element_count || 1}, minmax(0, 1fr))`
                }`,
            }}
          >
            {columnData?.content?.map((item: any, index: number) => (
              <div
                key={index}
                className="h-full w-full overflow-y-hidden flex flex-col border border-tgh-text-secondary rounded-lg group hover:shadow bg-white"
              >
                {item?.image ? (
                  <div className="sm:h-[250px] h-[200px] w-full relative">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                      alt={item?.heading}
                      style={{
                        position: "absolute",
                        objectFit: "cover",
                        inset: 0,
                      }}
                      fill={true}
                      className="w-full h-full p-3 rounded-t-12xl"
                    />
                  </div>
                ) : null}
                {item?.heading || item?.description ? (
                  <div className="p-4">
                    <div className="flex flex-col justify-center items-start">
                      {item?.heading ? (
                        <div
                          className="w-full flex text-start text-xl flex-col items-start tailwind-unreset font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: item?.heading,
                          }}
                        />
                      ) : null}
                      {item?.description ? (
                        <div
                          className="w-full text-justify  h-full mb-2  flex-col items-start tailwind-unreset line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        />
                      ) : null}
                    </div>

                    {item?.button_text ? (
                      <div className="gap-2  py-2 rounded cursor-pointer font-semibold">
                        <Link href={item?.button_link}>
                          <input
                            className="text-semibold"
                            type="button"
                            value={item?.button_text}
                          />
                        </Link>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ColumnSectionAPlusComponent;
