import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border bg-slate-800 border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="justify-center flex flex-col mt-5">
        <Link className="font-bold dark:text-white text-4xl" to="/">
          <span className="px-2 py-1 bg-gradient-to-r from-green-700 to-blue-500 rounded-lg text-white">
            Jadi Cuan
          </span>
        </Link>
        <p className="text-sm mt-5 text-zinc-50 ">
          Master the Markets: Your Ultimate Resource for Trade and Finance
          Education
        </p>
        <Button
          gradientDuoTone="greenToBlue"
          className="rounded-tl-xl rounded-bl-none mt-5 mb-5"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show All Post
          </a>
        </Button>
      </div>
      {/* Image */}
      {/*   <div className="p-7 flex-1"></div>*/}
    </div>
  );
}
