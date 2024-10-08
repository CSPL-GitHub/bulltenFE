import Image from "next/image";

type Props = {
  DataContent: any;
};
export default function ImageTextComponent({ DataContent }: Props) {
  console.log(DataContent, "DataContent");
  return (
    <section className="lg:py-16 py-6 px-4">
      <div className="max-w-7xl mx-auto bg-bullt-quaternary/[0.08]">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${DataContent[0]?.image}`}
                alt={DataContent[0]?.heading}
                width={800}
                height={600}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="md:w-1/2 p-6 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  {DataContent[0]?.heading}
                </h2>
                {/* <Bell className="w-10 h-10 text-indigo-500 flex-shrink-0 ml-4" /> */}
              </div>
              <p className="text-xl text-gray-600 mb-8">
                {DataContent[0]?.description}
              </p>

              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bullt-tertiary hover:bg-bullt-tertiary transition duration-150 ease-in-out">
                View Status Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
