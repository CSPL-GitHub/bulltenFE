import { TestimonialsApi } from '@/apis/HomePageApis';
import React from 'react'
import TestimonialsSection from './TestimonialsComponents/NewTestimonial';

type Props = {}

const TestimonialsComponent = async (props: Props) => {
    const TestimonialsContent = await TestimonialsApi();
  return (
    <div><TestimonialsSection
    TestimonialsContent={TestimonialsContent?.result}
  /></div>
  )
}

export default TestimonialsComponent



