import { ContactUsStripApi } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";

const ContactUsStripSection = async () => {
  const ContactUsStripSectionContent = await ContactUsStripApi();

  return (
    <>
      {ContactUsStripSectionContent?.result?.Active === true ? (
        <div
          className="container lg:max-w-5xl w-full z-10 relative py-5 px-6 mx-auto h-60 lg:h-36 bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: `url(${`${process.env.NEXT_PUBLIC_BASE_URL}${ContactUsStripSectionContent?.result?.FreeTrial?.img}`})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-bullt-secondary  rounded-lg"></div>
          <div className="relative max-w-5xl z-10 flex flex-col lg:flex-row justify-around w-full mx-auto items-center h-full text-center lg:text-left rounded-md">
            <div className="w-full lg:w-3/4">
              <h2 className="text-black text-base lg:text-lg font-semibold tracking-wider ">
                {ContactUsStripSectionContent?.result?.FreeTrial?.slogan}
              </h2>
              <h6 className="mt-2 text-3xl lg:text-4xl font-bold text-black">
                {ContactUsStripSectionContent?.result?.FreeTrial?.heading}
              </h6>
            </div>
            <div className="w-full lg:w-1/4">
              <HomePageButtonOne
                alignmentType={3}
                buttonText={
                  ContactUsStripSectionContent?.result?.FreeTrial?.button_text
                }
                route={
                  ContactUsStripSectionContent?.result?.FreeTrial?.button_link
                }
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ContactUsStripSection;
