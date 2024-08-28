import Image from "next/image";
import teamWorkingImage from "../../../public/01.jpg"; // Replace with your actual image path

export default function CompanyOverview() {
  return (
    <div className="relative bg-gray-50 py-16 lg:py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 lg:aspect-none">
              <Image
                src={teamWorkingImage}
                alt="Team Working"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 transform translate-x-8 translate-y-8 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Image
                  src="/path-to-client-image.jpg" // Replace with your actual image path
                  alt="Satisfied Client"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-800">3600+</p>
                  <p className="text-sm text-gray-500">Satisfied Client</p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-md bg-white py-4 px-7">
            <h2 className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
              About Our Company
            </h2>
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
              We Execute Our Ideas From The Start to Finish
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Web designing in a powerful way of just not an only professions,
              however, in a passion for our Company. We have to a tendency to
              believe the idea that smart looking of any website is the first
              impression on visitors.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6m-6 0v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2h6zm6 0v2a2 2 0 002 2h2a2 2 0 002-2v-2h-6zM5 9V7a2 2 0 012-2h2a2 2 0 012 2v2H5zm14 0V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v2h6z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Manage Tech Services
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    We’ve designed a culture that allows our stewards to
                    assimilate.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-1 2h2v6h3v6h-8v-6h3v-6zm-4 8h14M4 14h16"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Internal Networking
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    We’ve designed a culture that allows our stewards to
                    assimilate.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
