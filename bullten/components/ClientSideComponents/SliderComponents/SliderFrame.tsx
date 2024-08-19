"use client";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SliderFrameProps {
  settings: Settings;
  children: React.ReactNode;
  selector: any;
}

const SliderFrame: React.FC<SliderFrameProps> = ({
  settings,
  children,
  selector,
}) => {
  return (
    <Slider ref={selector} {...settings}>
      {children}
    </Slider>
  );
};

export default SliderFrame;
