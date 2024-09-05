import {
  HomePageBannerApi,
  HomePageSEOApi,
  SupportSectionAPI,
  TestimonialsApi,
} from "@/apis/HomePageApis";
import BannerSlider from "@/components/ServerSideComponents/BannerComponent/BannerSlider";
import FaqSection from "@/components/ServerSideComponents/HomePageComponents/FaqsectionComponent";
import WhyBulletinComponent from "@/components/ServerSideComponents/HomePageComponents/WhyBulletinComponent";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import BlogsComponent from "@/components/ServerSideComponents/HomePageComponents/BlogComponent";
import CounterComponent from "@/components/ServerSideComponents/HomePageComponents/CounterComponent";
import ChatService from "@/components/ServerSideComponents/HomePageComponents/ChatService";
import OurPatnarComponent from "@/components/ServerSideComponents/HomePageComponents/TestimonialsComponents/OurPatnarComponent";
import TrustedCompaniesLogos from "@/components/ServerSideComponents/HomePageComponents/TrustedCompaniesLogos";
import ServerFeatures from "@/components/ServerSideComponents/HomePageComponents/ServerFeatures";
import WhyChooseWebHosting from "@/components/ServerSideComponents/HomePageComponents/WhyChooseWebHosting";
import OperatingComponent from "@/components/ServerSideComponents/HomePageComponents/OperatingComponent";
import TestimonialsSection from "@/components/ServerSideComponents/HomePageComponents/TestimonialsComponents/NewTestimonial";
import OurServicesComponent from "@/components/ServerSideComponents/HomePageComponents/OurServices";
import WhatWeOfferComponent from "@/components/ServerSideComponents/HomePageComponents/WhatWeOfferComponent";
import { Metadata } from "next";
import DomainSearchComponent from "@/components/ServerSideComponents/HomePageComponents/SearchComponent";
import TestimonialsComponent from "@/components/ServerSideComponents/HomePageComponents/TestimonialsSection";
export async function generateMetadata(): Promise<Metadata | undefined> {
  let HomePageSeoData = await HomePageSEOApi();
  HomePageSeoData = HomePageSeoData?.result;
  if (HomePageSeoData) {
    return {
      title: HomePageSeoData?.meta_title,
      description: HomePageSeoData?.meta_description,
      keywords: HomePageSeoData?.meta_keyword,
    };
  } else {
    return {
      title: "Bullten.com | Reliable & Affordable Web Hosting Services  ",
      description:
        "Experience top-tier web hosting with Bullten.com. Choose from our range of shared, VPS, and dedicated hosting plans. Enjoy 99.9% uptime, 24/7 support, and free SSL. Get started today!",
      keywords:
        "web hosting, affordable web hosting, reliable hosting services, best web hosting provider, Bullten hosting, hosting plans, shared hosting, VPS hosting, dedicated servers, cloud hosting",
    };
  }
}

export default async function Home() {
  const homePageBannerContentApi = await HomePageBannerApi();

  return (
    <main className="w-full">
      <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
        {homePageBannerContentApi?.result?.Active === true &&
          homePageBannerContentApi?.result?.banner?.length > 0 && (
            <BannerSlider banners={homePageBannerContentApi?.result?.banner} />
          )}
      </Suspense>
      {/* Main container with consistent spacing */}
      <div className="container mx-auto mt-7">
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <DomainSearchComponent />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <TrustedCompaniesLogos />
        </Suspense>

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <ServerFeatures />
        </Suspense>

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <OperatingComponent />
        </Suspense>

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <OurServicesComponent />
        </Suspense>

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <WhyBulletinComponent />
        </Suspense>

        {/* <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <WhatWeOfferComponent />
        </Suspense> */}

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <CounterComponent />
        </Suspense>

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <ChatService />
        </Suspense>

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <BlogsComponent />
        </Suspense>

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <FaqSection />
        </Suspense>

        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <TestimonialsComponent />
        </Suspense>

        {/* <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <OurServicesComponent />
        </Suspense> */}
        {/* <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <SupportSection supportContent={SupportSectionContent?.result} />
        </Suspense> */}

        {/* <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <OurPatnarComponent />
        </Suspense> */}

        {/* <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <WhyChooseWebHosting />
        </Suspense> */}
      </div>
    </main>
  );
}
