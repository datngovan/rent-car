import Title from "../ui/Title"

function Testimonials() {
    return (
        <div className="bg-[url('./quote.png')] bg-[#F7FBFF] bg-no-repeat bg-top">
           <div className="p-20 flex flex-col items-center gap-5 ">
            <div className="flex justify-center pt-10">
            <Title content="TESTIMONIALS"/>
            </div>
            <div className="font-semibold text-3xl flex justify-center">
            <p className="text-center">What peole say about us?</p>
            </div>
            <div className="w-[99vw] p-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
            <li>
            <img src="./test.png"/>
            </li>
            <li>
            <img src="./test.png"/>
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll ">
          <li>
            <img src="./test.png"/>
            </li>
            <li>
            <img src="./test.png"/>
            </li>
          </ul>
        </div>
            {/* <div className="flex justify-center p-10 animate-infinite-scroll flex-nowrap">
                <img src="./test.png"/>
                <img src="./test.png"/>
                <img src="./test.png"/>
                <img src="./test.png"/>
                <img src="./test.png"/>
            </div> */}
           </div>
        </div>
    )
}

export default Testimonials
