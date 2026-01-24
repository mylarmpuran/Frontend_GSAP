import React from 'react';
import logo from "../assets/logo.png"

const Tailwind = () => {
    return (
        <p>
 Today I spent most of the day researching ways to take advantage of the fact that bottles can be returned for 10 cents in Michigan, but only 5 cents here.
  <span class="inline-flex items-baseline">
    <img src={logo} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
    <span>Kramer</span>
  </span>
  keeps telling me there is no way to make it work, that he has run the numbers on every possible approach, but I just have to believe there's a way to make it work, there's simply too much opportunity here.
</p>
    );
}

export default Tailwind;
