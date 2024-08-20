import { HomePageBannerApi } from "@/apis/HomePageApis";
import BannerSlider from "@/components/ServerSideComponents/BannerComponent/BannerSlider";
import Image from "next/image";

export default async function Home() {
  const homePageBannerContentApi = await HomePageBannerApi();
  console.log("new", homePageBannerContentApi.result.banners);
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <BannerSlider banners={homePageBannerContentApi.result.banners} />
      </div>
    </main>
  );
}
