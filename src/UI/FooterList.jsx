import React from "react";

export default function FooterList({pricing}) {
  return (
    <div >
      <ul className="hidden lg:flex flex-col w-56">
        {pricing.map((item, index) => (
          <li className="py-2 justify-center items-center text-center" key={index}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
