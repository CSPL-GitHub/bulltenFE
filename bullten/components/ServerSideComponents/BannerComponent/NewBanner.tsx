import Image from "next/image";
import Link from "next/link";

const NewBanner = () => {
  return (
    <section className="relative bg-secondary-gradient min-h-[600px] flex items-center justify-center pt-[70px] container mx-auto rounded-lg">
      <div className="absolute top-0 left-0 bg-white sm:w-1/2 w-full h-[120px] transform -translate-y-1/2 -translate-x-1/2 rounded-tl-[150px] z-0 rounded-br-[3.5rem]"></div>
      <div className="absolute inset-0 opacity-30 z-[-1]" />
      <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div
          className="flex-1 flex sm:hidden w-full lg:justify-center mt-8 lg:mt-0 max-h-[200px] relative"
          style={{ backgroundImage: `url('/blog-sub-card.png')` }}
        >
          <Image
            src="/static-images/banner-image.png" // Replace with your static image path
            alt="Banner Image"
            layout="responsive"
            width={300}
            height={200}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col sm:gap-7 gap-2 mt-5 sm:mt-0 items-start justify-center sm:w-[60%] w-full">
          <h2 className="text-white font-bold text-sm sm:text-xl mb-1 uppercase">
            Up To 75% OFF
          </h2>

          <h2 className="text-white font-extrabold text-3xl sm:text-5xl mb-1">
            Fast & Secure Cloud Server’s Solutions
          </h2>

          <h3 className="text-white text-lg mb-4">
            Discover the best hosting plans to take your website to the next
            level.
          </h3>

          <div className="flex sm:flex-row flex-col gap-3 text-bullt-secondary">
            <div className="flex gap-2 items-center space-x-2">
              <Image
                src="/static-images/icon-1.png" // Replace with your static image path
                alt="Icon 1"
                width={30}
                height={30}
              />
              <div>
                <h3 className="text-xl font-semibold">High Performance</h3>
                <p>
                  Experience unmatched speed with our cutting-edge cloud
                  technology.
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center space-x-2">
              <Image
                src="/static-images/icon-2.png" // Replace with your static image path
                alt="Icon 2"
                width={30}
                height={30}
              />
              <div>
                <h3 className="text-xl font-semibold">24/7 Support</h3>
                <p>
                  Our team is always here to help, no matter the time of day.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:mt-0 mt-4 flex sm:justify-start justify-center w-full sm:pb-0 pb-8">
            <button className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-md px-10 py-3">
              View All Plans
            </button>
          </div>
        </div>

        <div
          className="flex-1 hidden sm:flex lg:justify-center mt-8 lg:mt-0 h-[350px] relative"
          // style={{ backgroundImage: `url('/blog-sub-card.png')` }}
        >
          <Image
            src="/static-images/banner-image.png" // Replace with your static image path
            alt="Banner Image"
            layout="responsive"
            width={500}
            height={300}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default NewBanner;
