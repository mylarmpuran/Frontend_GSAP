import React from "react";
import FooterList from "../UI/FooterList";
import google from "../assets/googlePlayStore.png";
import apple from "../assets/applePlayStore.png";

import {
  Monday,
  Features,
  mondayPoducts,
  useCases,
  Company,
  Resources,
} from "../constants/index.jsx";

export default function Footer() {
  return (
    <footer className=" m-10">
      <div className="flex justify-between items-start ">
        <div className="flex flex-col justify-center items-center text-center ">
          <h3>Monday.com</h3>
          <FooterList pricing={Monday}></FooterList>
        </div>
        <div className="flex flex-col justify-center items-center text-center ">
          <h3>Features</h3>
          <FooterList pricing={Features}></FooterList>
        </div>

        <div className="flex flex-col justify-center items-center text-center ">
          <h3>monday products</h3>
          <FooterList pricing={mondayPoducts}></FooterList>
        </div>

        <div className="flex flex-col justify-center items-center text-center ">
          <h3>Use Cases</h3>
          <FooterList pricing={useCases}></FooterList>
        </div>

        <div className="flex flex-col justify-center items-center text-center ">
          <h3>Company</h3>
          <FooterList pricing={Company}></FooterList>
        </div>
        <div className="flex flex-col justify-center items-center text-center ">
          <h3>Resources</h3>
          <FooterList pricing={Resources}></FooterList>
        </div>
      </div>

      {/* /* apple goole store */}
      <div className="h-48 flex-auto flex-row justify-center gap-20 m-5 border-t-2 border-white-700">
        {/* content contact details */}
        <div className="min-w-96 m-5">
          <h1>contact details</h1>
        </div>
        {/* /* brands icons facebook linkedin youtube svg */}

        <div className="min-w-[600px] flex justify-between flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            fill="#000000"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chromium-icon lucide-chromium"
          >
            <path d="M10.88 21.94 15.46 14" />
            <path d="M21.17 8H12" />
            <path d="M3.95 6.06 8.54 14" />
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            fill="#000000"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin-icon lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-facebook-icon lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            fill="#000000"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-youtube-icon lucide-youtube"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            fill="#000000"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-twitter-icon lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            fill="#000000"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-instagram-icon lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </div>
        {/* /* apple goole tore */}
        <div className="min-w-96 flex flex-col flex-shrink-0">
          <div className="flex justify-center gap-4">
            <img className="w-48 " src={google} alt="" />
            <img className="w-48 " src={apple} alt="" />
          </div>
          <div className="mt-4 flex justify-start">
            <div className=" mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48px"
                height="48px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-person-standing-icon lucide-person-standing"
              >
                <circle cx="12" cy="5" r="1" />
                <path d="m9 20 3-6 3 6" />
                <path d="m6 8 6 2 6-2" />
                <path d="M12 10v4" />
              </svg>
            </div>
            <div className="flex items-center ">
              <p className="text-2xl">Accessibility statement</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
