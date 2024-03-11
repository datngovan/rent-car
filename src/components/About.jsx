import Title from "../ui/Title";

function About() {
  return (
    <>
      <div className="flex flex-col items-center pb-10">
        <div className="pt-[5rem]">
          <Title content="HOW IT WORK" />
        </div>
        <p className="font-medium text-4xl pt-8 pb-10 text-center">
          Rent with following 3 working steps
        </p>
        <div className="grid grid-rows-3 md:grid-cols-[repeat(3,minmax(200px,1fr))] md:grid-rows-1 gap-10 justify-items-center pt-20">
          <div>
            <div className="flex justify-center pb-9">
              <img src="/icon-location.png" />
            </div>
            <p className="text-center font-bold pb-6 text-xl">
              Choose location
            </p>
            <p className="text-center font-medium text-grey text-sm">
              Choose your and find <br /> your best car
            </p>
          </div>
          <div>
            <div className="flex justify-center pb-9">
              <img src="/icon-calendar.png" />
            </div>
            <p className="text-center font-bold pb-6 text-xl">Pick-up date</p>
            <p className="text-center font-medium text-grey text-sm">
              Select your pick up date and
              <br /> time to book your car
            </p>
          </div>
          <div>
            <div className="flex justify-center pb-9">
              <img src="/icon-car.png" />
            </div>
            <p className="text-center font-bold pb-6 text-xl">Book your car</p>
            <p className="text-center font-medium text-grey text-sm">
              Book your car and we will deliver
              <br /> it directly to you
            </p>
          </div>
        </div>
        <div className="w-[85%] pt-40 pb-20 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src="/nissan.png" />
            </li>
            <li>
              <img src="/honda.png" />
            </li>
            <li>
              <img src="/jaguar.png" className="h-5" />
            </li>
            <li>
              <img src="/audi.png" className="h-10" />
            </li>
            <li>
              <img src="/volvo.png" className="h-5" />
            </li>
            <li>
              <img src="/acura.png" />
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll ">
            <li>
              <img src="/nissan.png" />
            </li>
            <li>
              <img src="/honda.png" />
            </li>
            <li>
              <img src="/jaguar.png" className="h-5" />
            </li>
            <li>
              <img src="/audi.png" className="h-10" />
            </li>
            <li>
              <img src="/volvo.png" className="h-5" />
            </li>
            <li>
              <img src="/acura.png" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
