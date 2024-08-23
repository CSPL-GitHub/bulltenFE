"use client"
import React from 'react'

type Props = {
    insideSubMenu: any;
}

const HeaderUseCases: React.FC<Props> = ({ insideSubMenu }) => {
    return (
        <div className='col-span-2'>
            {insideSubMenu?.usecases?.length > 0 ?
                <div className=" bg-bullt-quaternary/[0.1] p-4 rounded-md scroll sm:h-[350px] overflow-y-auto">
                    <h6 className="font-semibold text-lg text-bullt-quinary mb-2">{insideSubMenu?.usecases_heading}</h6>
                    <ul className="flex flex-col gap-2">
                        {insideSubMenu?.usecases?.map((useCase: any, index: number) => {
                            return <a href={useCase?.link_url} key={index} className="text-bullt-quaternary text-base">{useCase?.link_text}</a>;
                        })}
                    </ul>
                </div> : null}

        </div>
    )
}

export default HeaderUseCases