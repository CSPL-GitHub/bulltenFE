"use client";
import Link from "next/link";

interface Props {
  columnData: any;
}

const ColumnSectionAPlusComponent: React.FC<Props> = ({ columnData }) => {
  const WindowWidth = window.innerWidth;

  return (
    <>
      {columnData?.content?.length > 0 ? (
        <div
          className={`w-full h-auto items-start gap-3 sm:px-0 px-4`}
          style={{
            marginTop: `${columnData?.gap_top / 4}rem`,
            marginBottom: `${columnData?.gap_bottom / 4}rem`,
            display: "grid",
            gridTemplateColumns: `${
              WindowWidth < 640
                ? "repeat(1, minmax(0, 1fr))"
                : `repeat(${columnData?.element_count || 1}, minmax(0, 1fr))`
            }`,
          }}
        >
          {columnData?.content?.map((item: any, index: number) => (
            <div
              key={index}
              className="h-full w-full overflow-y-hidden flex flex-col border border-tgh-text-secondary rounded-lg group hover:shadow"
            >
              {item?.image ? (
                <div className="w-full h-auto flex items-center justify-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                    alt={item?.heading}
                    style={{
                      objectFit: "cover",
                      inset: 0,
                    }}
                    className={`${
                      item?.button_text ? " group-hover:mt-[-40px] mt-0 " : ""
                    } h-[180px] max-w-[100%] w-full rounded-t-md transition-all duration-1000 ease-in-out`}
                  />
                </div>
              ) : null}
              {item?.heading || item?.description ? (
                <div className="p-4">
                  <div className="flex flex-col justify-center items-start mt-1">
                    {item?.heading ? (
                      <div
                        className="w-full flex text-tgh-text-primary text-start text-xl flex-col items-start tailwind-unreset"
                        dangerouslySetInnerHTML={{
                          __html: item?.heading,
                        }}
                      />
                    ) : null}
                    {item?.description ? (
                      <div
                        className="w-full text-justify text-tgh-secondary h-full mb-2 overflow-y-auto overflow-style-none flex invisible-scrollbar flex-col items-start tailwind-unreset"
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      />
                    ) : null}
                  </div>

                  {item?.button_text ? (
                    <div className="hidden group-hover:flex transition-all duration-1000 ease-in-out justify-center items-center gap-2 px-4 py-2 bg-tgh-primary hover:bg-white text-white hover:text-tgh-primary border border-tgh-primary rounded cursor-pointer ">
                      <Link href={item?.button_link}>
                        <input
                          className="text-semibold w-full"
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
    </>
  );
};

export default ColumnSectionAPlusComponent;
