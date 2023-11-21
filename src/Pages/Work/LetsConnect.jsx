import j from "../../assets/gifs/j.gif"

export default function LetsConnect() {
  return (
    <>
      <div
        className="w-full bg-center bg-cover h-[38rem] rounded-md"
        style={{
          backgroundImage:
            `url(${j})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40 rounded-md">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Build your Next <span className="text-blue-400">Rising</span>{" "}
              Project with
            </h1>
            <p className="font-light my-2 text-[35px]   text-white  relative ml-5">
            ARKAAN
            </p>
            {/* <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Connect
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
