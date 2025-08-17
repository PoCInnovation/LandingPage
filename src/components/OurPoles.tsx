import React from "react";
import GlassyButton from "./GlassyButton";
import GlassyPoleCard from "./GlassyPoleCard";

function OurPoles() {
  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
          Nos Pôles
        </h2>

        <div className="w-full mt-6 sm:mt-8">
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-4
            gap-4
            sm:gap-6
            lg:gap-6
            xl:gap-4
            2xl:gap-6
            items-stretch
            justify-items-center
            max-w-sm
            sm:max-w-md
            md:max-w-4xl
            lg:max-w-5xl
            xl:max-w-7xl
            mx-auto
          "
          >
            <GlassyPoleCard
              icon={
                <div className="flex items-center justify-center bg-gradient-to-tr from-[#AA222B] to-[#5E1265] h-12 w-12 sm:h-14 sm:w-14 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 38 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  >
                    <path
                      d="M18.8086 0.25415C20.7286 0.254186 22.4886 1.06131 23.6055 2.40063C23.9719 2.32538 24.3378 2.27472 24.6074 2.27466C27.7054 2.27466 30.4652 4.33846 31.2021 7.5813C34.7624 8.31238 37.0996 10.9905 37.0996 14.4456C37.0995 16.1992 36.6064 17.6932 35.7178 18.844C35.8056 19.7743 35.8691 20.8125 35.8691 22.2161C35.8691 24.2351 35.4496 26.2879 34.5947 27.8391C33.7389 29.3918 32.4383 30.4534 30.6807 30.4534C29.4624 30.4533 28.478 29.8761 27.7617 29.01C27.0655 28.1679 26.622 27.0507 26.4521 25.9143C26.1298 25.9284 25.7998 25.9514 25.4971 25.9514C23.9456 25.9514 22.564 25.4802 21.5684 24.6282C21.4456 24.5231 21.3282 24.4125 21.2178 24.2961C20.1634 24.5441 19.1167 24.6623 18.166 24.6624C15.5326 24.6624 13.2611 23.7967 11.7354 22.4553C11.0481 22.586 10.3174 22.6555 9.54883 22.6555C6.96271 22.6555 4.79879 21.8274 3.28125 20.3674C1.76351 18.9071 0.900391 16.8214 0.900391 14.3225C0.90055 11.5245 2.29579 8.89199 4.59473 7.33911C4.59439 7.31183 4.59277 7.2845 4.59277 7.25708C4.59277 3.97726 7.30213 1.70545 10.6562 1.70532C11.6573 1.70532 12.6977 1.90643 13.7002 2.34497C14.9314 1.03084 16.7116 0.25415 18.8086 0.25415Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
              }
              title="Intelligence artificielle"
              description="Solutions innovantes d'IA pour automatiser et optimiser vos processus métier."
            />

            <GlassyPoleCard
              icon={
                <div className="flex items-center justify-center bg-gradient-to-tr from-[#224DAA] to-[#3B1265] h-12 w-12 sm:h-14 sm:w-14 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 38 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  >
                    <path
                      d="M33.5117 0.75415C34.6175 0.75415 35.5163 1.06911 36.1396 1.65942C36.7637 2.25044 37.0996 3.10641 37.0996 4.16431V21.4202C37.0996 22.4779 36.7643 23.3374 36.1406 23.9319C35.5174 24.5259 34.6179 24.845 33.5117 24.845H23.8721V27.4221C24.5835 27.4271 25.1707 27.9844 25.1709 28.6877C25.1709 29.3942 24.5782 29.9534 23.8623 29.9534H14.1377C13.4235 29.9534 12.8145 29.3958 12.8145 28.6877C12.8146 27.9829 13.418 27.4271 14.1279 27.4221V24.845H4.47363C3.37486 24.845 2.47871 24.5259 1.85742 23.9319C1.23564 23.3374 0.900426 22.4779 0.900391 21.4202V4.16431C0.900391 3.10641 1.23635 2.25041 1.8584 1.65942C2.47978 1.06914 3.37524 0.75415 4.47363 0.75415H33.5117Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
              }
              title="Software"
              description="Développement d'applications sur mesure adaptées à vos besoins spécifiques."
            />

            <GlassyPoleCard
              icon={
                <div className="flex items-center justify-center bg-gradient-to-tr from-[#7C9221] to-[#12653B] h-12 w-12 sm:h-14 sm:w-14 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  >
                    <path
                      d="M19.9607 17.8069L19.9517 17.8573C19.888 18.2381 19.6869 18.6183 19.4428 18.9297C19.1992 19.2404 18.904 19.4936 18.6418 19.6147L18.579 19.6444L15.2464 16.3119C14.1126 15.1781 12.7575 14.6009 11.4133 14.5807C10.0696 14.5606 8.72875 15.0971 7.62019 16.2055C5.40829 18.4174 5.46283 21.5872 7.71686 23.8415L16.0033 32.1279C18.267 34.3916 21.4377 34.4468 23.6496 32.2349C24.7579 31.1264 25.2914 29.7825 25.2689 28.4363C25.2463 27.0896 24.6667 25.7322 23.5329 24.5983L22.8458 23.9112L22.9335 23.8415C23.4538 23.4312 23.9308 22.8638 24.3394 22.343L24.4084 22.2546L25.255 23.1012C26.8567 24.7029 27.6852 26.6284 27.714 28.553C27.7427 30.4776 26.9713 32.3933 25.3897 33.975C23.8033 35.5615 21.8848 36.336 19.9586 36.3084C18.0329 36.2807 16.1078 35.4517 14.5062 33.8501L6.00434 25.3482C4.39837 23.7421 3.56989 21.8174 3.54328 19.893C3.51682 17.968 4.293 16.0511 5.87935 14.4647C7.46117 12.883 9.37495 12.11 11.2987 12.1376C13.222 12.1653 15.147 12.9933 16.7532 14.5994L19.9607 17.8069Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
              }
              title="Blockchain"
              description="Technologies blockchain sécurisées pour vos projets décentralisés et crypto."
            />

            <GlassyPoleCard
              icon={
                <div className="flex items-center justify-center bg-gradient-to-tr from-[#2D909D] to-[#0F439D] h-12 w-12 sm:h-14 sm:w-14 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 38 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  >
                    <path
                      d="M18.8086 0.25415C20.7286 0.254186 22.4886 1.06131 23.6055 2.40063C23.9719 2.32538 24.3378 2.27472 24.6074 2.27466C27.7054 2.27466 30.4652 4.33846 31.2021 7.5813C34.7624 8.31238 37.0996 10.9905 37.0996 14.4456C37.0995 16.1992 36.6064 17.6932 35.7178 18.844C35.8056 19.7743 35.8691 20.8125 35.8691 22.2161C35.8691 24.2351 35.4496 26.2879 34.5947 27.8391C33.7389 29.3918 32.4383 30.4534 30.6807 30.4534C29.4624 30.4533 28.478 29.8761 27.7617 29.01C27.0655 28.1679 26.622 27.0507 26.4521 25.9143C26.1298 25.9284 25.7998 25.9514 25.4971 25.9514C23.9456 25.9514 22.564 25.4802 21.5684 24.6282C21.4456 24.5231 21.3282 24.4125 21.2178 24.2961C20.1634 24.5441 19.1167 24.6623 18.166 24.6624C15.5326 24.6624 13.2611 23.7967 11.7354 22.4553C11.0481 22.586 10.3174 22.6555 9.54883 22.6555C6.96271 22.6555 4.79879 21.8274 3.28125 20.3674C1.76351 18.9071 0.900391 16.8214 0.900391 14.3225C0.90055 11.5245 2.29579 8.89199 4.59473 7.33911C4.59439 7.31183 4.59277 7.2845 4.59277 7.25708C4.59277 3.97726 7.30213 1.70545 10.6562 1.70532C11.6573 1.70532 12.6977 1.90643 13.7002 2.34497C14.9314 1.03084 16.7116 0.25415 18.8086 0.25415Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
              }
              title="Cybersécurité"
              description="Protection avancée de vos données et systèmes informatiques contre les menaces."
            />
          </div>
        </div>

        <GlassyButton className="mt-8 sm:mt-10 lg:mt-12">
          En savoir plus
        </GlassyButton>
      </div>
    </div>
  );
}

export default OurPoles;
