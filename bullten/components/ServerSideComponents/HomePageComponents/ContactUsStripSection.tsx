import { ContactUsStripApi } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";

const ContactUsStripSection = async () => {
  const ContactUsStripSectionContent = await ContactUsStripApi();
  console.log(ContactUsStripSectionContent, "datassdjhf");
  return (
    <>
      {ContactUsStripSectionContent?.result?.Active === true ? (
        <div
          className="container z-10 relative w-full py-5 mx-auto h-60 lg:h-44 bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: `url(${`${process.env.NEXT_PUBLIC_BASE_URL}${ContactUsStripSectionContent?.result?.FreeTrial?.img}`})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-bullt-quaternary/[0.7] opacity-75 rounded-lg"></div>
          <div className="relative max-w-6xl z-10 flex flex-col lg:flex-row justify-around w-full gap-4 mx-auto items-center h-full px-6 text-center lg:text-left rounded-md">
            <div className="w-full lg:w-3/4">
              <h2 className="text-white text-base lg:text-lg font-semibold tracking-wider ">
                {ContactUsStripSectionContent?.result?.FreeTrial?.slogan}
              </h2>
              <h6 className="mt-2 text-2xl lg:text-4xl font-bold text-white">
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
