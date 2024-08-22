import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomePageLoading = () => {
  return (
    <>
      <div className={`w-full xl:h-[500px] h-[500px] banner-wrapper mb-14`}>
        <div className="main-wrapper w-full h-full">
          <div className="hero-slider-wrapper xl:h-full mb-20 xl:mb-0  w-full relative">
            <div className="absolute left-0 top-0 w-full h-full items-center justify-between hidden xl:flex"></div>
            <Skeleton height={500} width={"100%"} />
          </div>
        </div>
      </div>
      <div>
        <div className="section-content w-full grid sm:grid-cols-1 grid-cols-1 xl:gap-[30px] gap-5">
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
        </div>
        <div className="section-content w-full grid sm:grid-cols-1 grid-cols-1 xl:gap-[30px] gap-5">
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
        </div>
        <div className="section-content w-full grid sm:grid-cols-1 grid-cols-1 xl:gap-[30px] gap-5">
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
        </div>
        <div className="section-content w-full grid sm:grid-cols-1 grid-cols-1 xl:gap-[30px] gap-5">
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5	">
        <Skeleton width={270} height={340} />
        <Skeleton width={270} height={340} />
        <Skeleton width={270} height={340} />
        <Skeleton width={270} height={340} />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
        <Skeleton width={270} height={340} />
        <Skeleton width={270} height={340} />
        <Skeleton width={270} height={340} />
        <Skeleton width={270} height={340} />
      </div>
    </>
  );
};
export default HomePageLoading;
