import React from "react";

const LoaderComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="w-[10%] mx-auto py-[150px] spinner"></div>
    </div>
  );
};

export default LoaderComponent;
