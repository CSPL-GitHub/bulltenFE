"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import { Banner } from '@/types/BannerTypes';
import SloganHeadingComponent from '@/components/CommonComponents/HeadingComponents/SloganHeadingComponent';
import MainHeadingComponent from '@/components/CommonComponents/HeadingComponents/MainHeadingComponent';
import ParaGraphText from '@/components/CommonComponents/HeadingComponents/ParaGraphText';
import Link from 'next/link';

type Props = {
    banner: Banner;
}

const FinalBannerComponent = ({ banner }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.2, // Trigger when 20% of the component is in view
    });
    

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white sm:max-h-[600px] overflow-hidden flex items-center justify-center pt-[120px]"
        >
            {/* Background triangles */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className={`absolute transform -translate-y-1/2 translate-x-1/2 sm:w-[300px] lg:w-[450px] w-[150px] lg:h-[450px] sm:h-[300px] h-[150px] bg-bullt-tertiary rotate-45 ${banner?.image_position === "Right" ? "sm:right-[40%] right-[70%] top-[10%]" : "sm:right-[60%] right-[30%] top-[10%]"}`}></div>
                <div className={`absolute sm:w-[500px] w-[100px] sm:h-[400px] h-[100px] bg-bullt-primary rotate-[315deg] ${banner?.image_position === "Right" ? "lg:-left-80 -left-96 lg:-bottom-72 -bottom-80 " : "lg:-right-80 -right-96 lg:-bottom-56 -bottom-60"}`}></div>
                <div className={`absolute sm:w-[300px] w-[250px] sm:h-[300px] h-[150px] bg-bullt-primary rotate-45 ${banner?.image_position === "Right" ? " top-[30%] -right-52" : "sm:top-[30%] top-[20%] -left-52"}`}></div>
            </div>

            {/* Content */}
            <div className="relative sm:flex items-center container min-h-[500px]">
                <div className={`flex-1 flex justify-center items-center h-[200px] ${banner?.image_position === "Left" ? "sm:flex hidden" : "hidden"}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="relative"
                    >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
                            alt={banner?.alt_text || "Banner Image"}
                            width={450}
                            height={600}
                            className="object-cover"
                        />
                    </motion.div>
                </div>
                <div className={`flex-1 flex justify-center items-center sm:hidden`}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="relative"
                    >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
                            alt={banner?.alt_text || "Banner Image"}
                            width={450}
                            height={600}
                            className="object-contain h-[200px]"
                        />
                    </motion.div>
                </div>
                <div className="flex-1 text-left lg:pl-20 lg:px-0 sm:px-5 px-4">
                    {banner?.label ? (
                        <SloganHeadingComponent paddingTop={1} alignmentType={1}>
                            {banner?.label}
                        </SloganHeadingComponent>
                    ) : null}

                    {banner?.title && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        >
                            <MainHeadingComponent
                                hoverEffect="leading-tight text-bullt-primary/[0.8]"
                                paddingTop={1}
                            >
                                {banner?.title}
                            </MainHeadingComponent>
                        </motion.div>
                    )}
                    {banner?.link && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        >
                            <ParaGraphText hoverEffect="max-w-4xl text-bullt-primary/[0.8] text-justify">
                                {banner?.link}
                            </ParaGraphText>
                        </motion.div>
                    )}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-md px-10 py-3"                    >
                        <Link href={banner?.button_link}>
                            {banner?.button_text}
                        </Link>
                    </motion.button>
                </div>
                <div className={`flex-1 flex justify-center items-center ${banner?.image_position === "Right" ? "sm:flex hidden" : "hidden"}`}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="relative"
                    >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
                            alt={banner?.alt_text || "Banner Image"}
                            width={450}
                            height={600}
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default FinalBannerComponent;
