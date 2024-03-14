import { StarIcon } from "@heroicons/react/24/solid";
function TestimonialCard({isMobile}) {
  return (<>
    {isMobile?<div className="w-[75vw] border-transparent rounded-2xl shadow-xl flex flex-col my-10 p-10 gap-5 bg-[url('./testimonials.png')] bg-no-repeat bg-left-top">
      <div className="border-b-2 border-text-secondary-100 pb-10">
        “I feel very secure when using caretall's services. Your customer care
        team is very enthusiastic and the driver is always on time.”
      </div>
      <div className="gap-10">
        <div className="flex">
          <StarIcon className="size-4 text-[#ffe234]" />
          <StarIcon className="size-4 text-[#ffe234]" />
          <StarIcon className="size-4 text-[#ffe234]" />
          <StarIcon className="size-4 text-[#ffe234]" />
          <StarIcon className="size-4 text-[#ffe234]" />
        </div>
        <p className="font-medium text-xl">Charlie Johnson</p>
        <p className="font-based text-sm text-text-secondary-200">From New York, US</p>
      </div>
    </div>:
    <div className=" grid grid-cols-2 grid-rows-1 border-transparent rounded-2xl shadow-xl gap-5 min-w-[700px] min-h-[400px]">
          <div
            className=" bg-[url('https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2302&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-origin-border border-transparent rounded-l-2xl rounded-t-2xl
     bg-no-repeat"
          >
            {/* <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
          </div>
          <div className="grid grid-rows-3 gap-5 pl-2">
            <div className="grid">
              <div className="flex items-end">
                <p className="text-6xl font-medium">5.0</p>
                <p className="text-2xl font-medium"> stars</p>
              </div>
              <div className="flex">
                <StarIcon className="size-6 text-[#ffe234]" />
                <StarIcon className="size-6 text-[#ffe234]" />
                <StarIcon className="size-6 text-[#ffe234]" />
                <StarIcon className="size-6 text-[#ffe234]" />
                <StarIcon className="size-6 text-[#ffe234]" />
              </div>
            </div>
            <div>
              <p>
                “I feel very secure when using <br /> caretall's services. Your
                customer
                <br /> care team is very enthusiastic and
                <br /> the driver is always on time.”
              </p>
            </div>
            <div className="flex flex-col justify-end pb-3 max-lg:order-[-1]">
              <p className="font-medium text-2xl">Charlie Johnson</p>
              <p className="font-based text-sm text-text-secondary-200"> From New York, US</p>
            </div>
          </div>
        </div>
    }
  </>

  );
}

export default TestimonialCard;
