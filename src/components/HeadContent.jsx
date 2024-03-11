function HeadContent() {
    return (
        <div className="grid grid-cols-11 items-center pt-10">
          <div className="col-span-5">
          <div className="flex justify-center">
          <img src="../src/assets/sologan.png"/>
          </div>
          <p className="text-center">Get a car wherever and whenever you <br/> need it with your IOS and Android device.</p>
          <div className="flex justify-center gap-5 py-2"><img src="../src/assets/get-google.png"/>
          <img src="../src/assets/get-ios.png"/></div>
          </div>
          <div className="col-span-6">
          <div className="flex justify-end">
          <img src="../src/assets/hp-car.png"/>
          </div>
          </div>
      </div>
    )
}

export default HeadContent
