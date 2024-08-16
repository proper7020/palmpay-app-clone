





function Footer() {
  return (
    <>
    {/* <button className="" style={{backgroundColor:"purple"}}> */}
      <div className="w-full  flex justify-center gap-[5rem] rounded-[7px] bg-backgroundImage bg-cover bg-blue-500 h-[6rem]">
        <div className="flex pt-[2rem]">
          <div>
            <p className="font-bold text-4xl text-[white]">Join 30+ million users who love Palmpay
           </p> </div>
        </div>
        <div className="flex gap-[1rem]">
          <button>
            <img className="w-[12rem]"
              src="https://www.palmpay.com/_next/static/media/googlePlay.84c90596.png?w=640&q=100"
              alt=""
            />
          </button>
          <button> 
            <img className="w-[12rem]"
              src="https://www.palmpay.com/_next/static/media/appStore.5b02addd.png?w=640&q=100"
              alt=""
            />
          </button>
        </div>
      </div>
    {/* </button> */}
    </>
  );
}

export default Footer







