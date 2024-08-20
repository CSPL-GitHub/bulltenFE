"use client";

// import LoadingStateComponent from "@/components/ServerSideComponent/LoadingComponent/loadingComponent";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  alignmentType: number;
  buttonText: string;
  route: string;
};

const HomePageButtonOne = ({ alignmentType, buttonText, route }: Props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    if (pathName == route) {
      router.push(route);
    } else {
      setLoading(true);
      router.push(route);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pathName]);

  return (
    <div
      className={`w-full ${
        alignmentType == 1
          ? "text-start"
          : alignmentType == 2
          ? "text-center"
          : "text-end"
      }`}
    >
      <button
        className="text-lg text-bold border-2 border-bullt-primary bg-bullt-primary hover:bg-tertiary text-textSecondary hover:text-primary rounded-secondaryRadius inline-block font-bold sm:cursor-pointer px-4 py-3"
        onClick={handleClick}
      >
        {buttonText}
      </button>
      {/* {loading && <LoadingStateComponent />} */}
    </div>
  );
};

export default HomePageButtonOne;
