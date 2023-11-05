

export default function Dtech() {
    return (
      <>
       <div
    id="tabs-with-card-1"
    role="tabpanel"
    aria-labelledby="tabs-with-card-item-1"
    className=""
  >
    {/* Devices */}
    <div className="max-w-[1140px] lg:pb-32 relative">
      {/* Mobile Device */}
      <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
        <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] shark:bg-gray-700 shark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
          <img
            className="max-w-full h-auto rounded-[1.25rem]"
            src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?w=1060&t=st=1699191890~exp=1699192490~hmac=856ef1b6c77b3073d72612a60251d1ed6b8a330c8bd6dbab6a3697f07cf5e712"
            alt="Image Description"
          />
        </div>
      </figure>
      {/* End Mobile Device */}
      {/* Browser Device */}
      <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] shark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
        <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 shark:bg-gray-800 shark:border-gray-700">
          <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
            <span className="w-2 h-2 bg-gray-200 rounded-full shark:bg-gray-700" />
            <span className="w-2 h-2 bg-gray-200 rounded-full shark:bg-gray-700" />
            <span className="w-2 h-2 bg-gray-200 rounded-full shark:bg-gray-700" />
          </div>
          <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] shark:bg-gray-700 shark:text-gray-200">
            www.seed.co
          </div>
        </div>
        <div className="bg-gray-800 rounded-b-lg">
          <img
            className="max-w-full h-auto rounded-b-lg"
            src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?w=1060&t=st=1699191890~exp=1699192490~hmac=856ef1b6c77b3073d72612a60251d1ed6b8a330c8bd6dbab6a3697f07cf5e712"
            alt="Image Description"
          />
        </div>
      </figure>
      {/* End Browser Device */}
    </div>
    {/* End Devices */}
  </div>
      
      </>
    )
  }
  