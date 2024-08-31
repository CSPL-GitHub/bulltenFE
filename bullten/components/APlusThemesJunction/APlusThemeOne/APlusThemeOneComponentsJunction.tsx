import React from 'react'
import BannerComponentAPlus from './BannerComponentAPlus';

interface Props {
    aPlusResponse: any;
    decodedSlug: any;
}

const APlusThemeOneComponentsJunction: React.FC<Props> = ({
    aPlusResponse, decodedSlug
}) => {
    return (
        <div className={
            "container mx-auto sm:px-8 px-0 sm:overflow-visible overflow-x-hidden"
        }>
            {aPlusResponse?.components?.map((item: any, index: number) => {
                switch (item?.component) {
                    case "heading":
                        return (
                            <div key={index}>
                                <BannerComponentAPlus bannerData={item} />
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