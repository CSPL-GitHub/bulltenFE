import Image from "next/image";
import React from "react";
type Props = {
  AlertAppData: any;
};
export default function SiteMonitoringAlertComponent({ AlertAppData }: Props) {
  return (
    <div className="w-full  lg:py-16 py-6 bg-white">
      <div className="p-0 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-10 lg:px-0 px-4">
          <div className="lg:col-span-3 bg-gradient-to-br from-bullt-quaternary/60 to-bullt-quaternary/20 p-8 rounded-lg flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {AlertAppData?.heading}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {AlertAppData?.description}
            </p>
            <p className="bg-white text-bullt-quaternary hover:bg-gray-100 text-center px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto">
              Set Up Alerts
            </p>
          </div>
          <div className="lg:col-span-7 p-4 ">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 h-full">
              {AlertAppData?.fav_data.map((app: any) => (
                <>
                  {/* <div className="uiverse">
                    <span className="tooltip">
                      Get alerted instantly by SMS, useful when you are offline!
                    </span>
                    <span>Tooltip</span>
                  </div> */}
                  <div
                    key={app.heading}
                    className="flex flex-col items-center justify-center rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 mb-4 bg-gradient-to-br from-bullt-quaternary/10 to-bullt-quaternary/40 rounded-2xl p-2  transform transition-transform duration-300 group-hover:rotate-6">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${app.image}`}
                        alt={app.heading}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span className="text-sm font-semibold text-gray-800 text-center">
                      {app.heading}
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
