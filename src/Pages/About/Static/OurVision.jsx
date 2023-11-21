import { TbSettingsCode } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";

export default function OurVision() {
  return (
    <>
      <section className="flex items-center justify-center bg-gray-100 shark:bg-gray-800 lg:h-screen">
        <div className="px-4 py-20 mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
                  VISION
                </h1>
                <h1 className="text-5xl font-bold shark:text-white">
                  {" "}
                  Our <span className="text-blue-500"> VISION</span>{" "}
                </h1>
                <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div className="flex-1 h-2 bg-blue-400"></div>
                  <div className="flex-1 h-2 bg-blue-600"></div>
                </div>
              </div>
              {/*  */}
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl shark:text-gray-200">
                  Fully customizable rules to match your unique needs
                </h2>
                {/* Tab Navs */}
                <nav
                  className="grid gap-4   md:grid-cols-2  grid-cols-1 mt-8 md:mt-10 md:w-[80rem] w-auto "
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left over:bg-gray-200  bg-white shadow-md  p-4 md:p-5 rounded-xl shark:hs-tab-active:bg-slate-900 shark:hover:bg-gray-700 active"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 shark:hs-tab-active:text-blue-500 shark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 shark:hs-tab-active:text-blue-500 shark:text-gray-200">
                          Advanced tools
                        </span>
                        <span className="block mt-1 text-gray-800 shark:hs-tab-active:text-gray-200 shark:text-gray-200">
                          Use arkan thoroughly thought and automated libraries
                          to manage your businesses.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hovr:bg-gray-200 bg-white shadow-md  p-4 md:p-5 rounded-xl shark:hs-tab-active:bg-slate-900 shark:hover:bg-gray-700"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 shark:hs-tab-active:text-blue-500 shark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                        />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 shark:hs-tab-active:text-blue-500 shark:text-gray-200">
                          Smart dashboards
                        </span>
                        <span className="block mt-1 text-gray-800 shark:hs-tab-active:text-gray-200 shark:text-gray-200">
                          We help professionals and businesses create stunning
                          revenue from thier product developed by arkaan.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-ray-200   bg-white shadow-md   p-4 md:p-5 rounded-xl shark:hs-tab-active:bg-slate-900 shark:hover:bg-gray-700"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                      <img
                        width="80"
                        height="80"
                        src="https://img.icons8.com/carbon-copy/100/details.png"
                        alt="details"
                      />
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 shark:hs-tab-active:text-blue-500 shark:text-gray-200">
                          Innovative UI/UX Design
                        </span>
                        <span className="block mt-1 text-gray-800 shark:hs-tab-active:text-gray-200 shark:text-gray-200">
                          Our company stands out for its commitment to
                          delivering innovative and visually stunning user
                          interfaces.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hovr:bg-gray-200 bg-white shadow-md  p-4 md:p-5 rounded-xl shark:hs-tab-active:bg-slate-900 shark:hover:bg-gray-700"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex">
                     <MdDeveloperBoard className="text-[120px]"/>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 shark:hs-tab-active:text-blue-500 shark:text-gray-200">
                          Agile Development Methodology
                        </span>
                        <span className="block mt-1 text-gray-800 shark:hs-tab-active:text-gray-200 shark:text-gray-200">
                          At the core of our development process is the use of
                          agile methodologies, allowing us to adapt and iterate
                          quickly. This ensures that our clients are actively
                          involved throughout the development lifecycle.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-ray-200   bg-white shadow-md   p-4 md:p-5 rounded-xl shark:hs-tab-active:bg-slate-900 shark:hover:bg-gray-700"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                      {/* <img
                        width="60"
                        height="20"
                        src="https://img.icons8.com/pulsar-line/48/backend-development.png"
                        alt="backend-development"
                      /> */}
                      <TbSettingsCode className="text-[95px]"/>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 shark:hs-tab-active:text-blue-500 shark:text-gray-200">
                          Powerful Back-end Development
                        </span>
                        <span className="block mt-1 text-gray-800 shark:hs-tab-active:text-gray-200 shark:text-gray-200">
                          Beyond just a captivating front end, we excel in
                          building robust and scalable back-end systems.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-ray-200   bg-white shadow-md   p-4 md:p-5 rounded-xl shark:hs-tab-active:bg-slate-900 shark:hover:bg-gray-700"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                    <FaMobileAlt className="text-[59px] flex items-center "/>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 shark:hs-tab-active:text-blue-500 shark:text-gray-200">
                          Mobile-First Approach
                        </span>
                        <span className="block mt-1 text-gray-800 shark:hs-tab-active:text-gray-200 shark:text-gray-200">
                          Recognizing the growing significance of mobile
                          devices, we adopt a mobile-first approach in our
                          development processF
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
                {/* End Tab Navs */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
