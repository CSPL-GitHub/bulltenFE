import Link from "next/link";
type Props = {
  CtaData: any;
};
export default function CallToActionComponent({ CtaData }: Props) {
  return (
    <section className="lg:py-14 py-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto p-10 bg-white relative z-10 rounded-xl shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          {CtaData?.heading_call_to_action ? (
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 leading-tight">
              {CtaData?.heading_call_to_action}
            </h2>
          ) : null}
          {CtaData?.description_call_to_action ? (
            <p className="text-xl text-black mb-10">
              {CtaData?.description_call_to_action}
            </p>
          ) : null}

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {CtaData?.button_link_chat && CtaData?.button_text_chat ? (
              <Link
                href={CtaData?.button_link_chat}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-blue-700 bg-gray-200 hover:bg-blue-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                {CtaData?.button_text_chat}
              </Link>
            ) : null}
            {CtaData?.button_text_no && CtaData?.button_link_no ? (
              <Link
                href={CtaData?.button_link_no}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                {CtaData?.button_text_no}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
