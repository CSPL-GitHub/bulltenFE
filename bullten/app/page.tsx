import { HomePageBannerApi } from "@/apis/HomePageApis";
import BannerSlider from "@/components/ServerSideComponents/BannerComponent/BannerSlider";
import FaqSection from "@/components/ServerSideComponents/HomePageComponents/FaqsectionComponent";
import OurPatnarComponent from "@/components/ServerSideComponents/HomePageComponents/OurPatnarComponent";
import WhyBulletinComponent from "@/components/ServerSideComponents/HomePageComponents/WhyBulletinComponent";
import WordPressHoistingComponent from "@/components/ServerSideComponents/HomePageComponents/WordpressHostingComponent";
import Image from "next/image";

export default async function Home() {
  const homePageBannerContentApi = await HomePageBannerApi();
  // console.log("new", homePageBannerContentApi.result.banners);
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between">
      <div className="container">
        <BannerSlider banners={homePageBannerContentApi.result.banners} />
        <WhyBulletinComponent />
        <OurPatnarComponent />
        <WordPressHoistingComponent />
        <FaqSection />
      </div>
    </main>
  );
}
