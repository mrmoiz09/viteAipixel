
// import navlogo from "../assets/navlogo.png"
import { Link } from "react-scroll"
import navlogo from "../assets/Arkan logo pdf/arkantrans.png"

export default function Footer() {
  return (
   <>
   <div className=" s absolute  -z-10 h-[70vh] w-full bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

   <footer className="bg-gray-">
    <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start">
        <img
                src={navlogo}
                className="w-36 grayscale contrast-200 rounded-md bg-transparent"
                alt="aipixel logo"
                width={144}
                height={68}
              />
        </div>
      
      </div>
      <div className="mt-4 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">About Us</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
             to="/aboutus"
              >
              about us
              </Link>
            </li>
      
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
             to="/ourwork"
              >
              our Work
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Our Services</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Web Design
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                ANDROID DEVELOPEMENT
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
             ios Development
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Contact us</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <span

                className="text-gray-700 transition hover:text-gray-700/75"
                // to="/ourwork"
              >
               +968 7156 6006
              </span>
            </li>
        
         
          </ul>
        </div>
   
        <div className="text-center sm:text-left md:col-span-4 lg:col-span-2 bg-white shadow-md rounded-md p-3">

          <a
                className="group flex justify-start gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
          <p className="text-lg font-medium text-gray-900">Stay in Touch </p>
              
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                </span>
              </a>


          <div className="mx-auto mt-8 max-w-md sm:ms-0">
            <p className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
        Book a free Consultation
            </p>




            
            <form className="mt-4">
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  className="w-full rounded-full border-gray-800 px-6 py-3 shadow-md"
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                  type="submit"
                >
                  Consult
                </button>
              </div>
            </form>
          </div>
        </div>



      </div>
      <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-center text-sm text-gray-500 sm:text-left">
          Copyright © 2022. All rights reserved.
        </p>
        <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/arkaan.om?igshid=OGQ5ZDc2ODk2ZA=="
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          
       
        
        </ul>
      </div>
    </div>
  </footer>
   </>
  )
}
