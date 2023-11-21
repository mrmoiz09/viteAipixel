import logoTrans from "../assets/Arkan logo pdf/arkantrans.png";
import { FaFacebook } from "react-icons/fa";

export default function Footerb() {
  return (
    <>
      <footer className="bg-gray-100 fade-in-left">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-extrabold text-gray-900 sm:text-3xl">
            Get in touch
          </strong>
          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>
              <input
                className="w-full rounded-full border-y-2 border-gray-700 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder=" john@doe.com"
              />
              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-100 lg:grid lg:grid-cols-3">
      
          <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p>
                  <span className="text-md font-medium tracking-wide text-black">
                    Reach out
                  </span>
                
                </p>
                <ul className="mt-8 space-y-1 text-sm text-gray-700">
                  <p>
                    Engage with us on social media for updates and
                    <br /> interaction.
                  </p>
                </ul>
                <ul className="mt-8 flex gap-6">
                  <li>
                    <a
                      href="https://api.whatsapp.com/send/?phone=96871566006&text&type=phone_number&app_absent=0"
                      rel="noreferrer"
                      target="_blank"
                      className="text-green-500 transition hover:opacity-75"
                    >
                      <span className="sr-only">WhatsApp</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-whatsapp h-6 w-6"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{" "}
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/https://instagram.com/arkaan.om?igshid=OGQ5ZDc2ODk2ZA=="
                      //   rel="noreferrer"
                      target="_blank"
                      className="bg-gradient-to-r text-pink-500  transition hover:opacity-75"
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
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61553325017368"
                   
                      target="_blank"
                      className="bg-gradient-to-r text-[#3b5998]  transition hover:opacity-75"
                    >
                      <span className="sr-only">facebookk</span>
                  <FaFacebook className="h-6 w-6"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-4 md:gap-[14rem] sm:grid-cols-2">
                <div>
                  <p className="font-medium text-gray-900">About us</p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="/ourwork"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        our work
                      </a>
                    </li>
                    <li>
                      <a
                        href="/aboutus"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        about us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Contact us</p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="https://wa.me/96871566006"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        +968 7156 6006
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-100 pt-12 md:pt-[6rem] ml-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <ul className="flex flex-wrap gap-4 text-xs"></ul>
                <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                  © 2023. <span className="font-bold">Arkaan</span> . All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
