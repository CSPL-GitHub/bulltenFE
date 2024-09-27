import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  HeaderResponse: any;
  decodedSlug: string;
  decodedSubSlug: string;
  // TabsNames: any;
  DataContent: any;
};

const TabsSectionComponent = ({
  HeaderResponse,
  decodedSlug,
  decodedSubSlug,
  // TabsNames,
  DataContent,
}: Props) => {
  const pathname = usePathname();
  const headerMenu = HeaderResponse.find(
    (item: any) => item.title === "Managed Hosting"
  );
  const isMainPage = pathname === `/${headerMenu?.path}/${decodedSlug}`;

  return (
    <div className="w-full py-10 lg:px-0 px-4 bg-bullt-quaternary/[0.2]">
      <div className="grid lg:grid-cols-4 grid-cols-2 max-w-7xl mx-auto justify-center gap-3 gap-y-4 items-center ">
        <Link href={`/${headerMenu?.path}/${decodedSlug}`}>
          <button
            className={`w-full py-2 lg:h-auto h-20 px-2 text-lg font-semibold rounded-md transition-all duration-300 ease-in-out ${
              isMainPage
                ? "bg-bullt-tertiary text-bullt-secondary border-bullt-tertiary border"
                : "text-bullt-tertiary bg-bullt-secondary border-bullt-tertiary border"
            }`}
          >
            OverView
          </button>
        </Link>
        {/* {TabsNames?.data?.map((tab: any, index: number) => ( */}
        {DataContent?.box_data[0]?.Box_data?.map((tab: any, index: number) => (
          <div key={index} className="text-lg group relative w-full">
            <Link
              href={`/${headerMenu?.path}/${decodedSlug}/${tab.button_link}`}
            >
              <button
                className={`w-full py-2 lg:h-auto h-20 px-2 text-lg font-semibold rounded-md transition-all duration-300 ease-in-out ${
                  decodedSubSlug === tab?.button_link
                    ? "bg-bullt-tertiary text-bullt-secondary border-bullt-tertiary border"
                    : "text-bullt-tertiary bg-bullt-secondary border-bullt-tertiary border"
                }`}
                dangerouslySetInnerHTML={{
                  __html: tab?.heading,
                }}
              />
            </Link>
            {decodedSubSlug === tab?.button_link ? (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-transparent border-t-bullt-tertiary"></div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsSectionComponent;
