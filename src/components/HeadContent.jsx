function HeadContent() {
    return (
        <div className="grid grid-cols-11 items-center pt-10">
          <div className="col-span-5">
          <div className="flex justify-center">
          <img src="sologan.png"/>
          </div>
          <p className="text-center">Get a car wherever and whenever you <br/> need it with your IOS and Android device.</p>
          <div className="flex justify-center gap-5 py-2"><img src="get-google.png"/>
          <img src="get-ios.png"/></div>
          </div>
          <div className="col-span-6">
          <div className="flex justify-end">
          <img src="hp-car.png"/>
          </div>
          </div>
      </div>
    )
}

export default HeadContent
