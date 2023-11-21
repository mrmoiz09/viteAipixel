
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


export default function ContactUs() {




  const [ref, inView] = useInView({
    threshold: 0.2, 
  });

  return (
   <>
   
   <>
  <div
  

  className="flex my-20 items-center justify-start bg-white" ref={ref}>
    <motion.div
    
    initial={{ opacity: 0, x: -100,  }} // Initial opacity and position (left of the viewport)
    animate={{
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -200, // Animate from -100px (left) to 0px (center)
    }}
    
    className="mx-auto w-full max-w-lg">
      <h1 className="text-4xl font-medium">Lets Connect</h1>
      <p className="mt-3"></p>
      <form action="https://api.web3forms.com/submit" className="mt-10">
      
        <input
          type="hidden"
          name="access_key"
          defaultValue="YOUR_ACCESS_KEY_HERE"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative z-0">
            <input
              type="text"
              name="name"
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:shark:text-blue-500">
              Your name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="text"
              name="email"
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:shark:text-blue-500">
              Your email
            </label>
          </div>
          <div className="relative z-0 col-span-2">
            <textarea
              name="message"
              rows={5}
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              defaultValue={""}
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:shark:text-blue-500">
              Your message
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 rounded-md bg-black px-10 py-2 text-white"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  </div>
  <h2 className="flex flex-row flex-nowrap items-center mt-6">
            <span className="flex-grow block border-t border-black" />
            <span className="flex-none block mx-4 px-4 pt-2.5 text-xl rounded leading-none font-medium bg-black text-white">
              {/* Heading Text */}
            </span>
            <span className="flex-grow block border-t border-black" />
          </h2>
</>

   </>
  )
}
