import ServiceSkills from "./ServiceSkills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SkillGraph() {
  const [refs, inViews] = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <div className="py-16">
        {/* <div className="absolute  z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" /> */}

        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className="lg:yellow-50 shark:lg:bg-sharker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                className="rounded-[50px]"
                src="https://i.pinimg.com/originals/e9/ab/41/e9ab41560bbdf9157a3e05124e807463.gif"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl shark:text-white">
                OUR development is carried out by passionate developers
              </h2>
              <p className="my-8 text-gray-600 shark:text-gray-300">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
              <div
                className="divide-y space-y-4 divide-gray-100 shark:divide-gray-800"
                ref={refs}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
                  animate={{
                    opacity: inViews ? 1 : 0,
                    y: inViews ? 0 : 50,
                    filter: inViews ? "blur(0px)" : "blur(5px)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mt-8 flex gap-4 md:items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
                    animate={{
                      opacity: inViews ? 1 : 0,
                      y: inViews ? 0 : 50,
                      filter: inViews ? "blur(0px)" : "blur(5px)",
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 shark:bg-indigo-900/20"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-indigo-500 shark:text-indigo-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                  </motion.div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 shark:text-indigo-300">
                    Cutting-Edge Technology
                    </h4>
                    <p className="text-gray-500 shark:text-gray-400">
                    We don't just follow technology trends; we lead them. Our commitment to innovation drives us to explore new horizons in software development
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
                  animate={{
                    opacity: inViews ? 1 : 0,
                    y: inViews ? 0 : 50,
                    filter: inViews ? "blur(0px)" : "blur(5px)",
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="pt-4 flex gap-4 md:items-center"
                >
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 shark:bg-teal-900/20">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-teal-600 shark:text-teal-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 shark:text-teal-300">
                    Scalable Solutions
                    </h4>
                    <p className="text-gray-500 shark:text-gray-400">
                    We understand that your needs can evolve over time, which is why we pride ourselves on offering scalable solutions that grow with your business.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <ServiceSkills />
      </div>
    </>
  );
}
