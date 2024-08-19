import { headerApi } from "@/apis/HomePageApis";
import HeaderMenu from "@/components/ClientSideComponents/HeaderComponents/HeaderMenu";

const Header: React.FC = async () => {
  const headerResponse = await headerApi();
  if (headerResponse?.result?.hasOwnProperty("error")) {
    console.log("error in header API");
  } else {
    // console.log(headerResponse?.result?.header);
  }

  return (
    <HeaderMenu headerResponse={headerResponse} />
  )
};

export default Header;
