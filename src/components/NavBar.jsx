import Button from "../ui/Button";
function NavBar() {
  return (
    <div className="md:grid grid-cols-4 pt-3 pb-5">
      <div className="flex justify-center md:items-center">
        <img src="../src/assets/icon.png" className="pl-10" />
      </div>
      <div className="col-span-2 flex justify-around font-medium text-base items-center">
        <p>Become a Renter</p>
        <p>Rental deals</p>
        <p>How it work</p>
        <p>Why choose us</p>
      </div>
      <div className="flex justify-end gap-12 pr-10">
        <Button primary={true} content="Sign up" />
        <Button primary={false} content="Sign in" />
      </div>
    </div>
  );
}

export default NavBar;
