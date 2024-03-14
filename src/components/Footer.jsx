function Footer() {
  return (
    <div className="flex flex-col bg-[#051C34]">
      <div className="grid lg:grid-cols-6 justify-center py-5 lg:px-24 text-white">
        <div className="col-span-2 flex-col gap-4 text-grey">
          <img src="./rentcar-white.png" />
          <div className="flex flex-col pt-10">
            <div className="flex gap-2 py-2 text-sm items-center">
              <img src="./location.png" />
              25566 Hc 1, Glenallen, Alaska, 99588, USA
            </div>
            <div className="flex gap-2 py-2 text-sm items-center">
              <img src="./call.png" />
              +603 4784 273 12
            </div>
            <div className="flex gap-2 py-2 text-sm items-center">
              <img src="./sms.png" />
              rentcars@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base font-medium text-white">Our Product</p>
          <div className="flex flex-col text-grey gap-2">
            <p className="text-sm">Cars</p>
            <p className="text-sm">Cruises</p>
            <p className="text-sm">Packages</p>
            <p className="text-sm">Features</p>
            <p className="text-sm">Priceline</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base font-medium text-white">Resources</p>
          <div className="flex flex-col text-grey gap-2">
            <p className="text-sm">Download</p>
            <p className="text-sm">Help Centre</p>
            <p className="text-sm">Guides</p>
            <p className="text-sm">Partner Network</p>
            <p className="text-sm">Developer</p>
            <p className="text-sm">Career</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base font-medium text-white">About Rentcars</p>
          <div className="flex flex-col text-grey gap-2">
            <p className="text-sm">Why choose us</p>
            <p className="text-sm">Our Story</p>
            <p className="text-sm">Investor Relations</p>
            <p className="text-sm">Press Center</p>
            <p className="text-sm">Advertise</p>
          </div>
        </div>
        <div>
          <p className="text-base font-medium text-white">Follow Us</p>
          <div className="inline-flex gap-5 pt-5">
            <img src="./facebook.png" />
            <img src="./instagram.png" />
            <img src="./youtube.png" />
          </div>
        </div>
      </div>
      {/* Copyright */}
    <div className="pt-10">
        <div className="text-center md:text-start lg:mx-32 border-t border-[#575757] py-5 text-xs text-grey">
        Copyright 2023 ・ Rentcars, All Rights Reserved
        </div>
    </div>
    </div>
  );
}

export default Footer;
