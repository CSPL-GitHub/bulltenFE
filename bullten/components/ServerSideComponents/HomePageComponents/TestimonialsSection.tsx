import { TestimonialsApi } from '@/apis/HomePageApis';
import React from 'react'
import TestimonialsSection from './TestimonialsComponents/NewTestimonial';

type Props = {
  color:any
}

const TestimonialsComponent:React.FC<Props> = async ({color}) => {
    const TestimonialsContent = await TestimonialsApi();
  return (
    <div><TestimonialsSection
    TestimonialsContent={TestimonialsContent?.result}
    color={color}
  /></div>
  )
}

export default TestimonialsComponent



