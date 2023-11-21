

export default function ComponentHero() {
  const data = [
    {
      id: 1,
      imgSrc: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1699546043~exp=1699546643~hmac=702d520bf156df1bdee7228bad5ae7aeed432bc7aefaa6e7a9e2935133fb70f3',
      name: 'jhon',
      description: 'we just ask for development ! they build the whole product with branding I,d happily describe them A reliable service company',
    },
    {
      id: 2,
      imgSrc: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1699546043~exp=1699546643~hmac=702d520bf156df1bdee7228bad5ae7aeed432bc7aefaa6e7a9e2935133fb70f3',
      name: 'Mathew',
      description: "I highly recommend your software to anyone looking for a way to create a stunning portfolio. It's the easiest and most affordable way to create a professional portfolio that will help you to stand out from the crowd.",
    },
    {
      id: 3,
      imgSrc: "Your software is a must-have for anyone who wants to create a  DASHBOARD. It's easy to use, affordable, and has all the features you need to make your portfolio stand out from the crowd.",
      name: 'david',
      description: "Your software is a must-have for anyone who wants to create a  DASHBOARD. It's easy to use, affordable, and has all the features you need to make your portfolio stand out from the crowd",
    },
    // Add more data objects for additional elements
  ];
  return (


    
  <>

<div className="bg-black h-screen">
<div className="flex flex-row p-8">
        <ul className="text-sm leading-6 flex flex-row justify-center gap-4 mx-auto ">
          {data.map((item) => (
            <li key={item.id} className="max-w-sm">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-green-50 to-white blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a className="cursor-pointer">
                  <div
                    className="relative p-2 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5"
                    style={{
                      borderRadius: "81% 3% 38% 1% / 1% 60% 4% 33%",
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.imgSrc}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt={item.name}
                      />
                      <div>
                        <p className="text-gray-500 text-md">{item.name}</p>
                      </div>
                    </div>
                    <p className="leading-normal text-black text-md">{item.description}</p>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

     {/* absolute   */}


  <div className="absolute left-[2rem] mt-8">
  <li className="text-sm leading-6 max-w-sm">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r  from-green-50 to-white blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
            <a
           
              className="cursor-pointer"
            >
              <div className="relative p-2 space-y-6 leading-none rounded-lg   bg-white ring-1 ring-gray-900/5"   style={{
  borderRadius: "81% 3% 38% 1% / 1% 60% 4% 33%"
}}>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1699546043~exp=1699546643~hmac=702d520bf156df1bdee7228bad5ae7aeed432bc7aefaa6e7a9e2935133fb70f3"
                    className="w-12 h-12 bg-center bg-cover border rounded-full"
                    alt="Satya Nadella"
                  />
                  <div>
                   
                    <p className="text-gray-500 text-md"></p>
                  </div>
                </div>
                <p className="leading-normal  text-black text-md">
                Your software is the perfect solution for anyone looking to create a professional and stylish portfolio without the hassle.
                </p>
              </div>
            </a>
          </div>
        </li></div>   
            {/* absolute 2  */}

    <div className="absolute right-[2rem] mt-[7.5rem]">
  <li className="text-sm leading-6 max-w-sm">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r  from-green-50 to-white blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
            <a
           
              className="cursor-pointer"
            >
              <div className="relative p-4 space-y-6 leading-none rounded-lg   bg-white ring-1 ring-gray-900/5"   style={{
  borderRadius: "81% 3% 38% 1% / 1% 60% 4% 33%"
}}>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1699546043~exp=1699546643~hmac=702d520bf156df1bdee7228bad5ae7aeed432bc7aefaa6e7a9e2935133fb70f3"
                    className="w-12 h-12 bg-center bg-cover border rounded-full"
                    alt="Satya Nadella"
                  />
                  <div>
                   
                    <p className="text-gray-500 text-md"> Dimtry Ceban</p>
                  </div>
                </div>
                <p className="leading-normal  text-black text-md">
                Your software is a powerful tool that enables users to create visually stunning and informative portfolios that showcase their work in the best possible light
                </p>
              </div>
            </a>
          </div>
        </li></div>   
<div className="flex justify-center items-center">
      <div className="lg:w-5/12 space-y-8 ">
        <span className="flex -center">
          <span className="block w-14 mb-2 border-b-2 border-gray-600" />
        </span>
        <h1 className=" text-4xl font-bold md:text-6xl shark:text-white text-white">
          Built in <br /> Your Way but with our Expert Approach
        </h1>
        <span className="flex justify-end">
          <span className="block w-14 mb-2 border-b-2 border-gray-600" />
        </span>
        <p className="text-[16px] text-white text-center  shark:text-gray-300 flex justify-center">
          Innovative Solutions | Software Development | Cloud Migration.
        </p>
      </div>
    </div>


    {/*  */}
    <div className="flex flex-row p-8">
        <ul className="text-sm leading-6 flex flex-row justify-center gap-4 mx-auto ">
          {data.map((item) => (
            <li key={item.id} className="max-w-sm">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-green-50 to-white blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a className="cursor-pointer">
                  <div
                    className="relative p-4 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5"
                    style={{
                      borderRadius: "81% 3% 38% 1% / 1% 60% 4% 33%",
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.imgSrc}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt={item.name}
                      />
                      <div>
                        <p className="text-gray-500 text-md">{item.name}</p>
                      </div>
                    </div>
                    <p className="leading-normal text-black text-md">{item.description}</p>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  )
}
