import Image from "next/image";
import HomePage from "./(pages)/home/page";
import Contact from "./(pages)/contact/page";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <div className="">
      {/* <Preloader/> */}
      <HomePage />
    </div>
  );
}
