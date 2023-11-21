import { motion } from "framer-motion";
import "../../assets/css/ProjectBAckground.css";
// import { useInView } from "react-intersection-observer";
// import ProjectScreens from "./ProjectScreens";
// import Seed from "./ProjectScreens/Seed";
// import Ino from "./ProjectScreens/Ino";
// import Dtech from "./ProjectScreens/Dtech";
// import Bucephalus from "./ProjectScreens/Bucephalus";
import LetsConnect from "./LetsConnect";

export default function Projects() {
  // const [ref, inView] = useInView({
  //   threshold: 0.2,
  // });
  // const [refs, inViews] = useInView({
  //   threshold: 0.2,
  // });
  return (
    <>
      <div className="py-5">
        {/* <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
          <p className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-md text-center my-4">
            " Project Pinnacle, Client Leadership, Exceeding Standards "
          </p>
          <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
            Empowering Clients Globally with thier Products, Meticulously
            Crafted and Developed by AIPIXEL
          </h2>
        </div> */}
        <div className="container md:max-w-[77rem]  p-6 mx-auto mb-10 xl:px-0">
          <div className="md:grid md:grid-cols-2 gap-10 flex  flex-col">
            <motion.div
              // initial={{ opacity: 1, x: -100 }} // Initial opacity and position (left of the viewport)
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
              // }}
              // transition={{ duration: 0.5, ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full bg-[#dee0ff] shark:bg-gray-800 rounded-2xl shark:bg-trueGray-800">
             

                <div className="px-6 py-6 md:py-14 md:px-14 ">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <p className="text-5xl font-extrabold text-gray-900">
                        8 Fit App
                      </p>
                      <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                        Transforming Lives with 8fit: Your Ultimate Fitness and
                        Wellness App
                      </h2>
                    </div>

                    {/* <div className="lg:flex flex w-5/12 p-2">
        <img src="https://source.unsplash.com/1600x900/?nature,water" className="rounded-xl object-cover w-full h-full"/>
    </div> */}
                  </div>

                  <div className="flex items-center -12   gap-12 mt-8 space-x-3 ">
                    {/* a  */}
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 hidden">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>

                    {/* b  */}
                    <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                      <a   href="https://play.google.com/store/apps/details?id=com.eightfit.app&hl=en&gl=US" target="blank" className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            Google Play
                          </span>
                        </span>
                      </a>
                      <button className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            App Store
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* <Seed /> */}

            <motion.div
              // initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   y: inView ? 0 : 50,
              //   filter: inView ? "blur(0px)" : "blur(5px)",
              // }}
              // transition={{ duration: 0.4, delay:0.2  ,ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full bg-yellow-300 shark:bg-gray-800  rounded-2xl  shark:bg-trueGray-800">
         

                <div className="md:py-14  px-6 py-6 md:px-14">
                  <div className="flex flex-col">
                    <p className="text-5xl font-extrabold text-gray-900">
                      Travla
                    </p>

                    <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                      Globally Sourced Deals: Access 2M+ accommodations, 600+
                      airline options, and 410K+ activities worldwide.
                    </h2>
                  </div>

                  <div className="flex items-center   gap-12 mt-8 space-x-3 ">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 hidden">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                  
                      <a target="blank"   href="https://play.google.com/store/apps/details?id=com.travala.mobile&hl=en&gl=US"  className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            Google Play
                          </span>
                        </span>
                      </a>
                      <a target="blank"   href="https://apps.apple.com/in/app/travala-com-best-travel-deals/id1483549218" className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            App Store
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* <Ino /> */}
            {/* wider way */}

            <motion.div
              //  initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              //  animate={{
              //    opacity: inView ? 1 : 0,
              //    y: inView ? 0 : 50,
              //    filter: inView ? "blur(0px)" : "blur(5px)",
              //  }}
              //  transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-span-2"
            >
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 a_b shark:bg-gray-800 md:px-14 rounded-2xl md:py-14 shark:bg-trueGray-800">
    
                <div className="flex flex-col">
                  <p className="text-5xl font-extrabold text-[#333]">Seed</p>
                  <h2 className="max-w-2xl mt-4 text-[19px] font-bold leading-snug tracking-tight  text-[#333] lg:leading-tight lg:text-[19px] dak:text-white">
                    Seed is on a mission to fuel the financial fitness of teens
                    in the Gulf States, and we’re doing it with style!
                  </h2>
                </div>

                <div className="flex items-center   2 mt-8 space-x-3  md:gap-[60%] gap-[20%]">
                  <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 hidden">
                    <img
                      alt="Avatar"
                      src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                    <a target="blank"  href="https://play.google.com/store/apps/details?id=com.farmersgreenwood.finance&hl=en&gl=US" className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="fill-current w-8 h-8 text-gray-50"
                      >
                        <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z" />
                      </svg>
                      <span className="flex flex-col items-start ml-4 leading-none">
                        <span className="mb-1 text-xs font-light">
                         Get it on
                        </span>
                        <span className="font-light title-font">
                          Google Play
                        </span>
                      </span>
                    </a>
                s
                  </div>

                  <div></div>
                </div>
              </div>
            </motion.div>

            {/* wider way */}

            <motion.div
              // initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
              // }}
              // transition={{ duration: 0.5, ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full a_c shark:bg-gray-800 rounded-2xl shark:bg-trueGray-800">
          

                <div className="px-6 py-6 md:py-14 md:px-14 ">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <p className="text-5xl font-extrabold text-white">
                        Ainvest
                      </p>
                      <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-[19px] dak:text-white">
                        An invest app to invest in stocks, ETFs, options with
                        AI. This is the best stock trading app for beginners.
                      </h2>
                    </div>

                    {/* <div className="lg:flex flex w-5/12 p-2">
        <img src="https://source.unsplash.com/1600x900/?nature,water" className="rounded-xl object-cover w-full h-full"/>
    </div> */}
                  </div>

                  <div className="flex items-center   gap-12 mt-8 space-x-3 gap-[]">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 hidden">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                      <a target="blank" href="https://play.google.com/store/apps/details?id=com.ainvest.android&hl=en&gl=US" className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            Google Play
                          </span>
                        </span>
                      </a>
                      <a target="blank"  
                    href="https://apps.apple.com/us/app/ainvest-ai-for-stock-crypto/id1539653456"
                      
                      
                      className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            App Store
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <Dtech /> */}

            <motion.div
              // initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   y: inView ? 0 : 50,
              //   filter: inView ? "blur(0px)" : "blur(5px)",
              // }}
              // transition={{ duration: 0.4, delay:0.2  ,ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full a_c shark:bg-gray-800  rounded-2xl  shark:bg-trueGray-800">
          

                <div className="md:py-14  px-6 py-6 md:px-14">
                  <div className="flex flex-col">
                    <p className="md:text-5xl text-4xl font-extrabold text-white">
                      Bucephalus NUmesmatic
                    </p>

                    <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-[19px] dak:text-white">
                      Auction based platform for releated ancient Crafted
                      products and coins
                    </h2>
                  </div>

                  <div className="flex items-center   gap-12 mt-8 space-x-3 ">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 hidden">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                    <a target="blank" href="https://www.bucephalusnumismatic.com/" className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
                      <svg
                        className="h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="800px"
                        height="800px"
                        viewBox="-0.5 0 48 48"
                        version="1.1"
                      >
                        {" "}
                        <title>Google-color</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Icons"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="Color-"
                            transform="translate(-401.000000, -860.000000)"
                          >
                            {" "}
                            <g
                              id="Google"
                              transform="translate(401.000000, 860.000000)"
                            >
                              {" "}
                              <path
                                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                id="Fill-1"
                                fill="#FBBC05"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                id="Fill-2"
                                fill="#EB4335"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                id="Fill-3"
                                fill="#34A853"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                id="Fill-4"
                                fill="#4285F4"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </svg>

                      <span className="flex flex-col items-start ml-4 leading-none">
                        <span className="mb-1 text-xs font-light">
                         Vew it on
                        </span>
                        <span className="font-light title-font">
                          Google chrome
                        </span>
                      </span>
                    </a>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <Bucephalus /> */}

            <motion.div
              //  initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              //  animate={{
              //    opacity: inView ? 1 : 0,
              //    y: inView ? 0 : 50,
              //    filter: inView ? "blur(0px)" : "blur(5px)",
              //  }}
              //  transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-span-2"
            >
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 a_d shark:bg-gray-800 md:px-14 rounded-2xl md:py-14 shark:bg-trueGray-800">
           
                <div className="flex flex-col">
                  <p className="text-5xl font-extrabold text-gray-900">
                    Value Deal
                  </p>

                  <h2 className="max-w-2xl mt-4 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                    "Value Deal" is your one-stop destination for buying and
                    selling the latest brand-name mobile devices
                  </h2>
                </div>

                <div className="flex items-center   -12 mt-8 space-x-3 md:gap-[60%] gap-[20%]">
                  <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 hidden">
                    <img
                      alt="Avatar"
                      src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                    <a   href="https://www.valuedeal.mu/" target="blank" className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
                      <svg
                        className="h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="800px"
                        height="800px"
                        viewBox="-0.5 0 48 48"
                        version="1.1"
                      >
                        {" "}
                        <title>Google-color</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Icons"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="Color-"
                            transform="translate(-401.000000, -860.000000)"
                          >
                            {" "}
                            <g
                              id="Google"
                              transform="translate(401.000000, 860.000000)"
                            >
                              {" "}
                              <path
                                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                id="Fill-1"
                                fill="#FBBC05"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                id="Fill-2"
                                fill="#EB4335"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                id="Fill-3"
                                fill="#34A853"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                id="Fill-4"
                                fill="#4285F4"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </svg>

                      <span className="flex flex-col items-start ml-4 leading-none">
                        <span className="mb-1 text-xs font-light">
                         View it on
                        </span>
                        <span className="font-light title-font">
                          Google chrome
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* aftwre bucephalus  */}
            {/* <Ino /> */}

            <motion.div
              // initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
              // }}
              // transition={{ duration: 0.5, ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full a_e shark:bg-gray-800 rounded-2xl shark:bg-trueGray-800">
         

                <div className="px-6 py-6 md:py-14 md:px-14 ">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <p className="text-5xl font-extrabold text-white">
                        35 days challenge
                      </p>
                      <h2 className="max-w-2xl mt-3 text-sm font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-[19px] dak:text-white">
                        a 35-day gym challenge app, emphasizing personalized
                        workouts for effective fitness tracking, showcasing my
                        skills in health and wellness app development.
                      </h2>
                    </div>

            
                  </div>

                  <div className="flex items-center   gap-12 mt-8 space-x-3 ">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 hidden">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                      <a
                    href="https://play.google.com/store/apps/details?id=com.flatironschurch.thirtyfivedaychallenge&hl=en&gl=US"
                      target="blank"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            Google Play
                          </span>
                        </span>
                      </a>
                      <a href="https://apps.apple.com/us/app/35-day-challenge/id1581600614" target="blank" className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            App Store
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <Dtech /> */}

            <motion.div
              // initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   y: inView ? 0 : 50,
              //   filter: inView ? "blur(0px)" : "blur(5px)",
              // }}
              // transition={{ duration: 0.4, delay:0.2  ,ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full a_f shark:bg-gray-800  rounded-2xl  shark:bg-trueGray-800">
           

                <div className="md:py-14  px-6 py-6 md:px-14">
                  <div className="flex flex-col">
                    <p className="text-5xl font-extrabold text-gray-900">
                      Swiss Snow
                    </p>

                    <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                      Explore Switzerland's ski regions effortlessly with
                      real-time snow and weather updates, 360° webcams, and
                      winter activity inspiration—all in one app
                    </h2>
                  </div>

                  <div className="flex items-center   gap-12 mt-8 space-x-3 ">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 hidden">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                      <a 
                      
                    href="https://play.google.com/store/apps/details?id=com.SnowReport.screens&hl=en&gl=US"
                      target="blank"
                      
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            Google Play
                          </span>
                        </span>
                      </a>
                      <a
                      href="https://apps.apple.com/us/app/swiss-snow/id341755817"
                      target="blank"
                      className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          className="fill-current w-8 h-8 text-gray-50"
                        >
                          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs font-light">
                           Get it on
                          </span>
                          <span className="font-light title-font">
                            App Store
                          </span>
                        </span>
                      </a>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-4">
        {/* <LetsConnect /> */}
      </div>
    </>
  );
}
