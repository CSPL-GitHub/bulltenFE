import { WhyChooseWebHostingApi } from "@/apis/HomePageApis";
import WhyChooseWebHostingTabsComponent from "@/components/ClientSideComponents/HomePageComponents/WhyChooseWebHostingTabsComponent";
import React from "react";

type Props = {};

const WhyChooseWebHosting = async (props: Props) => {
  const WhyChosoeWebHostingApiResponse = await WhyChooseWebHostingApi();
  const res = WhyChosoeWebHostingApiResponse?.result;
  console.log(res?.data?.title, "resultssss");

  return (
    <>
      {res?.Active === true ? (
        <>
          <section className="py-12 w-full px-6">
            <div className="mx-auto sm:text-center">
              {res?.data?.title ? (
                <>
                  <h2 className="sm:text-4xl text-2xl font-bold text-gray-800 mb-4">
                    {res?.data?.title}
                  </h2>
                </>
              ) : null}
              {res?.data?.description ? (
                <>
                  <p className="text-gray-600 mb-7">{res?.data?.description}</p>
                </>
              ) : null}
              <WhyChooseWebHostingTabsComponent
                tab1={res?.data?.tabOne}
                tab2={res?.data?.tabTwo}
                tab3={res?.data?.tabThree}
                detailsboxes={res?.detailsBox}
              />
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default WhyChooseWebHosting;
