import { Suspense } from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import { HomePageBannerApi, HomePageSEOApi } from "@/apis/HomePageApis";
import BannerSlider from "@/components/ServerSideComponents/BannerComponent/BannerSlider";
import { Metadata } from "next";

// Dynamically import components
const DomainSearchComponent = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/SearchComponent"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const TrustedCompaniesLogos = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/TrustedCompaniesLogos"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const ServerFeatures = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/ServerFeatures"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const OperatingComponent = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/OperatingComponent"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const OurServicesComponent = dynamic(
  () =>
    import("@/components/ServerSideComponents/HomePageComponents/OurServices"),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const WhyBulletinComponent = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/WhyBulletinComponent"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const CounterComponent = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/CounterComponent"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const ChatService = dynamic(
  () =>
    import("@/components/ServerSideComponents/HomePageComponents/ChatService"),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const BlogsComponent = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/BlogComponent"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const FaqSection = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/FaqsectionComponent"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);
const TestimonialsComponent = dynamic(
  () =>
    import(
      "@/components/ServerSideComponents/HomePageComponents/TestimonialsSection"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

export async function generateMetadata(): Promise<Metadata> {
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
      title: "Bullten.com | Reliable & Affordable Web Hosting Services",
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
      <Suspense fallback={<Skeleton height="50%" width="100%" />}>
        {homePageBannerContentApi?.result?.Active === true &&
          homePageBannerContentApi?.result?.banner?.length > 0 && (
            <BannerSlider banners={homePageBannerContentApi?.result?.banner} />
          )}
      </Suspense>
      <div className="container mx-auto mt-7">
        <DomainSearchComponent />
        <TrustedCompaniesLogos />
        <ServerFeatures />
        <OperatingComponent color={undefined} />
        <OurServicesComponent />
        <WhyBulletinComponent />
        <CounterComponent />
        <ChatService color={undefined} />
        <BlogsComponent />
        <FaqSection />
        <TestimonialsComponent color={undefined} />
      </div>
    </main>
  );
}
