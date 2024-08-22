import { HomePageBannerApi } from "@/apis/HomePageApis";
import BannerSlider from "@/components/ServerSideComponents/BannerComponent/BannerSlider";
import FaqSection from "@/components/ServerSideComponents/HomePageComponents/FaqsectionComponent";
import SupportSection from "@/components/ServerSideComponents/HomePageComponents/SupportComponent";
import WhyBulletinComponent from "@/components/ServerSideComponents/HomePageComponents/WhyBulletinComponent";
import WordPressHoistingComponent from "@/components/ServerSideComponents/HomePageComponents/WordpressHostingComponent";
import Image from "next/image";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import BlogsComponent from "@/components/ServerSideComponents/HomePageComponents/BlogComponent";
import CounterComponent from "@/components/ServerSideComponents/HomePageComponents/CounterComponent";
import TestimonialSlider from "@/components/ServerSideComponents/HomePageComponents/TestimonialsComponents/TestimonialSlider";
export default async function Home() {
  const homePageBannerContentApi = await HomePageBannerApi();
  return (
    <main className="w-full">
      <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
        <BannerSlider banners={homePageBannerContentApi.result.banners} />
      </Suspense>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <SupportSection />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <WhyBulletinComponent />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <WordPressHoistingComponent />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <TestimonialSlider />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <CounterComponent />{" "}
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <BlogsComponent />
        </Suspense>
      </div>
    </main>
  );
}
