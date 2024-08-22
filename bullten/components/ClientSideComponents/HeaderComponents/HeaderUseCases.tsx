import React from 'react'

type Props = {
    insideSubMenu: any;
}

const HeaderUseCases: React.FC<Props> = ({ insideSubMenu }) => {
    return (
        <div className='col-span-2'>
            {insideSubMenu?.usecases?.length > 0 ?
                <div className=" bg-bullt-quaternary/[0.1] p-4 rounded-md scroll sm:h-[350px] overflow-y-auto">
                    <h6 className="font-semibold text-lg text-bullt-quinary">{insideSubMenu?.usecases_heading}</h6>
                    <ul className="">
                        {insideSubMenu?.usecases?.map((useCase: any, index: number) => {
                            return <li key={index} className="text-bullt-quaternary text-base py-1">{useCase?.link_text}</li>;
                        })}
                    </ul>
                </div> : null}

        </div>
    )
}

export default HeaderUseCases