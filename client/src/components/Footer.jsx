import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark: text-white"
              to="/"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-green-700 to-blue-500 rounded-lg text-white">
                Jadi Cuan
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="xxx"
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  Tentang Kami
                </Footer.Link>
                <Footer.Link
                  href="xxx"
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="xxx"
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="xxx"
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  TikTok
                </Footer.Link>
                <Footer.Link
                  href="xxx"
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  href="xxx"
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  Facebook
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright
            href="#"
            by="Jadi Cuan Bersama"
            year={new Date().getFullYear()}
          />
        </div>
        <div className="flex gap-6 sm:mt-4 mt-4 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTiktok} />
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTiktok} />
        </div>
      </div>
    </Footer>
  );
}
