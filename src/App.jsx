import "./App.css";
import Button from "./ui/Button";
import NavBar from "./components/NavBar";
import HeadContent from "./components/HeadContent";
import SearchBar from "./components/SearchBar";
import About from "./components/About";
import Icon from "./ui/Icon";
import Title from "./ui/Title";
import About2 from "./components/About2";
import Retails from "./components/Retails";
function App() {
  return (
    <>
      <div className='bg-[url("/bg-icon.png")] bg-no-repeat bg-right-top h-100vh grid content-between'>
        <NavBar />
        <HeadContent />
        <SearchBar />
      </div>
      <About />
      <About2 />
      <Retails/>
    </>
  );
}

export default App;
