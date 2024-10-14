import Image from "next/image";
import React from "react";

type Props = {
  FeaturesData: any;
};

export default function WebsiteBackupStorageFeaturesComponent({
  FeaturesData,
}: Props) {
  return (
    <div className="w-full mx-auto px-4 lg:py-8 py-6 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto">
        {FeaturesData?.Feature[0]?.heading && (
          <h1 className="lg:text-4xl text-2xl font-bold text-center mb-4 text-primary">
            {FeaturesData?.Feature[0]?.heading}
          </h1>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-3">
          {FeaturesData?.Feature[0]?.feature_list?.map(
            (box: any, index: number) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-lg shadow-md
                  transition-all duration-300 ease-in-out
                  hover:shadow-xl hover:-translate-y-1
                  ${index % 4 === 0 ? "bg-bullt-tertiary/10" : ""}
                  ${index % 4 === 1 ? "bg-bullt-quaternary/10" : ""}
                  ${index % 4 === 2 ? "bg-bullt-tertiary/10" : ""}
                  ${index % 4 === 3 ? "bg-bullt-quaternary/10" : ""}
                `}
              >
                <div
                  className={`
                    absolute -bottom-16 -right-16
                    w-36 h-36 rounded-full bg-bullt-tertiary/[0.09]
                    transition-transform duration-300 ease-in-out group-hover:scale-110
                  `}
                />
                <div
                  className={`
                    absolute ${
                      index % 2 === 0 ? "-bottom-8 -right-8" : "-top-8 -left-8"
                    }
                    w-32 h-32 bg-accent/10 transform rotate-45
                    transition-transform duration-300 ease-in-out group-hover:rotate-90
                  `}
                />

                <div className="relative z-10 h-full flex flex-col justify-between p-4">
                  <div>
                    <div
                      className={`
                        mb-4 inline-block p-2 rounded-lg w-14 h-14 relative
                        ${index % 4 === 0 ? "bg-bullt-tertiary/10" : ""}
                        ${index % 4 === 1 ? "bg-bullt-quaternary/10" : ""}
                        ${index % 4 === 2 ? "bg-bullt-tertiary/10" : ""}
                        ${index % 4 === 3 ? "bg-bullt-quaternary/10" : ""}
                      `}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${box?.img}`}
                        alt={box?.heading}
                        className=" object-contain"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {box?.heading && (
                      <h2 className="text-xl font-semibold mb-2 text-foreground">
                        {box.heading}
                      </h2>
                    )}

                    {box?.description && (
                      <p className="text-lg text-bullt-primary leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {box.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
