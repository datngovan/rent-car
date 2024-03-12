import { useState } from "react";
import Button from "../ui/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="lg:grid grid-cols-4 pt-3 pb-5 hidden">
        <div className="flex justify-center lg:items-center">
          <img src="/icon.png" className="pl-10 justify-self-start" />
        </div>
        <ul className="col-span-2 flex justify-around font-medium text-base items-center">
          <li>Become a Renter</li>
          <li>Rental deals</li>
          <li>How it work</li>
          <li>Why choose us</li>
        </ul>
        <div className="flex justify-end gap-12 pr-10">
          <Button primary={true} content="Sign up" />
          <Button primary={false} content="Sign in" />
        </div>
      </div>
      <div className="flex flex-col bg-white hidden max-lg:flex">
        <div className="flex justify-between items-center">
          <div>
            <img src="./icon.png" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 text-primary-color border-teal-400 hover:text-primary-color hover:border-white self-end"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {open && (
          <div className="h-100vh flex flex-col content-center z-10">
            <ul className="grid grid-row-6 flex justify-around font-medium text-base items-center text-center gap-10 text-primary-color bg-white w-full absolute hover:bg-primnary-color pb-10 font-medium ">
              <li className="relative">Become a Renter</li>
              <li className="relative">Rental deals</li>
              <li className="relative">How it work</li>
              <li className="relative">Why choose us</li>
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
