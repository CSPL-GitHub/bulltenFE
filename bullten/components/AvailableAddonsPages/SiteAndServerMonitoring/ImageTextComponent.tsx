import Image from "next/image";

export default function ImageTextComponent() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Website status monitoring"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="md:w-1/2 p-6 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  Monitor and Communicate the Status of Your Website
                </h2>
                {/* <Bell className="w-10 h-10 text-indigo-500 flex-shrink-0 ml-4" /> */}
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Reduce frustration and grow user trust by quickly alerting users
                to issues and providing updates on the status of ongoing
                incidents.
              </p>
              <div className="bg-indigo-50 rounded-lg p-6 mb-8">
                <div className="flex items-center">
                  {/* <CheckCircle className="w-6 h-6 text-green-500 mr-3" /> */}
                  <span className="text-lg font-semibold text-gray-800">
                    All systems operational
                  </span>
                </div>
                <p className="mt-2 text-gray-600">
                  Stay informed about our service status. We'll keep you updated
                  on any issues or maintenance.
                </p>
              </div>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                View Status Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
