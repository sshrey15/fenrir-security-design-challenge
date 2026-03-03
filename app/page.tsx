import { SignupLoginCard } from "../features/authentication/signup-login-card";

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen w-full bg-cover bg-fit bg-no-repeat bg-fixed  bg-[url(https://res.cloudinary.com/dde6a5ng1/image/upload/v1772553385/ChatGPT_Image_Mar_3_2026_10_06_01_AM_razddv.png)] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-hidden">

      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2">
        <div className="w-6 h-6 bg-white rounded-full border-5 border-[#009B95]" />
        <span className="text-white text-sm sm:text-md md:text-2xl font-bold tracking-tight">aps</span>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 pt-12 sm:pt-0">
       
        <div className="text-white space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Expert level Cybersecurity <br />
            in <span className="text-[#009B95]">hours</span> not weeks.
          </h1>

          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold">What&apos;s included</h3>
            <ul className="space-y-3 font-semibold">
              {[
                "Effortlessly spider and map targets to uncover hidden security flaws",
                "Deliver high-quality, validated findings in hours, not weeks.",
                "Generate professional, enterprise-grade security reports automatically."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm">
                  <span className="text-[#009B95] mt-0.5 sm:mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 sm:pt-8">
             <div className="flex items-center font-semibold gap-1 text-sm">
                <span className="text-[#009B95]">★</span> Trustpilot
             </div>
             <h4 className="text-sm md:text-xl mt-1 font-medium">
                Rated 4.5/5.0 <span className="text-gray-400 font-normal">(100k+ reviews)</span>
             </h4>
          </div>
        </div>

  
        <div className="flex justify-center lg:justify-end">
          <SignupLoginCard />
        </div>
      </div>
    </div>
  );
}