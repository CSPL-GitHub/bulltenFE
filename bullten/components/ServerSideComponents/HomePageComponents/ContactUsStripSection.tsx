import { ContactUsStripApi } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";

const ContactUsStripSection = async () => {
  const ContactUsStripSectionContent = await ContactUsStripApi();
  console.log(ContactUsStripSectionContent, "datassdjhf");
  return (
    <>
      {ContactUsStripSectionContent?.result?.Active === true ? (
        <div
          className="container z-10 relative w-full  mx-auto h-52 bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: `url(${`${process.env.NEXT_PUBLIC_BASE_URL}${ContactUsStripSectionContent?.result?.FreeTrial?.img}`})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-600 opacity-75 rounded-lg"></div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-around w-full gap-4 mx-auto items-center h-full px-6 text-center lg:text-left rounded-md">
            <div className="w-full lg:w-1/2">
              <h2 className="text-white font-semibold tracking-wider uppercase">
                Get Consultations
              </h2>
              <h1 className="mt-2 text-3xl lg:text-5xl font-bold text-white">
                {ContactUsStripSectionContent?.result?.FreeTrial?.heading}
              </h1>
            </div>
            <div className="w-full lg:w-1/2">
              <HomePageButtonOne
                alignmentType={2}
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
