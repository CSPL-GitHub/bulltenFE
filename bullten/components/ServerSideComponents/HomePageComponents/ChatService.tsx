import Image from "next/image";

export default function ChatService() {
  return (
    <div className="bg-bullt-quaternary w-full  px-6 py-20 lg:px-16">
      <div className=" flex items-center ">
        <div className="relative flex-shrink-0 ">
          <div className="rounded-full border-4 border-darkblue-800 p-2">
            <Image
              src="/assets/support-agent.jpg"
              alt="Support Agent"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="absolute top-4 left-4 bg-white text-sm text-darkblue-900 px-2 py-1 rounded shadow-lg">
            How we may help you
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-sm text-darkblue-900 px-3 py-2 rounded-full shadow-lg">
            14+ <br /> Years of Hosting Knowledge
          </div>
        </div>

        <div className="px-10 w-5/12">
          <h2 className="text-white text-[45px] font-bold mb-4">
            Quality Hosting Service <br /> Free 24/7 Support
          </h2>
          <p className="text-gray-200 mb-6 text-[20px]">
            With over two decades of experience in high-quality, secure web
            hosting, HostCity is the strategic partner for your online journey.
          </p>
          <button className="bg-bullt-tertiary text-white px-6 py-3 rounded-lg font-semibold flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.25 8.25L21.75 4.5"
              />
            </svg>
            Talk to a Specialist
          </button>
        </div>
      </div>
    </div>
  );
}
