import React from 'react';

type Props = { data: any };

const CartSliderComponent: React.FC<Props> = ({ data }) => {
    console.log("datafile", data);

    return (
        <div className="space-y-6 py-12 sm:px-12 ">
            {data?.map((item: any, index: number) => (
                <div key={index} className="bg-[#3F00A5] border-[1px] border-[#7D51FA] p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                    <h1 className="text-[#FFFFFF] font-semibold text-2xl">
                       {item?.heading}
                    </h1>
                    <p className="text-[#FFFFFF] mt-2">
                    {item?.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CartSliderComponent;
