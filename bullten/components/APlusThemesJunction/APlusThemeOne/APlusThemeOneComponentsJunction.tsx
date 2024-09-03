import React from 'react'
import BannerComponentAPlus from './BannerComponentAPlus';
import ImageTextAPlusComponent from './ImageTextAPlusComponent';
import ImageTextTwoAPlusComponent from './ImageTextTwoAPlusComponent';
import VideoAPlusComponent from './VideoAPlusComponent';
import ColumnSectionAPlusComponent from './ColumnSectionAPlusComponent';
import CarouselComponentAPlus from './CarouselComponentAPlus';
import VideoTextAPlusComponent from './VideoTextAPlusComponent';
import CarouselTwoAPlusComponent from './CarouselTwoAPlusComponent';

interface Props {
    aPlusResponse: any;
    decodedSlug: any;
}

const APlusThemeOneComponentsJunction: React.FC<Props> = ({
    aPlusResponse, decodedSlug
}) => {
    return (
        <div className={
            "container mx-auto sm:px-8 px-0 sm:overflow-visible overflow-x-hidden mt-[130px]"
        }>
            {aPlusResponse?.data?.components?.map((item: any, index: number) => {
                switch (item?.component) {
                    case "banner":
                        return (
                            <div key={index}>
                                <BannerComponentAPlus bannerData={item} />
                            </div>
                        );
                    case "ImageText":
                        return (
                            <div key={index}>
                                <ImageTextAPlusComponent imageTextData={item} />
                            </div>
                        );
                    case "ImageText2":
                        return (
                            <div key={index}>
                                <ImageTextTwoAPlusComponent imageTextData={item} />
                            </div>
                        );
                    case "video_text":
                        return (
                            <div>
                                <VideoTextAPlusComponent videoTextData={item} />
                            </div>
                        );
                    case "video":
                        return (
                            <div key={index}>
                                <VideoAPlusComponent videoData={item} />
                            </div>
                        );
                    case "column":
                        return (
                            <div key={index}>
                                <ColumnSectionAPlusComponent columnData={item} />
                            </div>
                        );
                    case "carousel":
                        return (
                            <div key={index}>
                                <CarouselComponentAPlus carouselData={item} />
                            </div>
                        );
                    case "carousel_2":
                        return (
                            <div>
                                <CarouselTwoAPlusComponent carouselData={item} />
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    )
}

export default APlusThemeOneComponentsJunction