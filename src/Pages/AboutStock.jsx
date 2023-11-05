import AboutA from "./About/Static/AboutA";
import AboutC from "./About/Static/AboutC";
// import AboutB from "./About/Static/OurVision";
import Aboutstats from "./About/Static/Aboutstats";
import OurVision from "./About/Static/OurVision";


export default function AboutStock() {
  return (
    <>
<AboutA/>
<OurVision/>
<h2 className="flex flex-row flex-nowrap items-center my-6">
            <span className="flex-grow block border-t border-black" />
            <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
              {/* Heading Text */}
            </span>
            <span className="flex-grow block border-t border-black" />
          </h2>
{/* <AboutC/> */}


<h2 className="flex flex-row flex-nowrap items-center my-6">
            <span className="flex-grow block border-t border-black" />
            <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
              {/* Heading Text */}
            </span>
            <span className="flex-grow block border-t border-black" />
          </h2>
<Aboutstats/>
</>
  )
}
