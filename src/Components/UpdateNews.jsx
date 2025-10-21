import React from "react";
import Marquee from "react-fast-marquee";
// import { Marquee } from 'react-fast-marquee';
// import { Marquee } from 'react-fast-marquee';

const UpdateNews = () => {
  return (
    <div className="flex gap-3 bg-base-300 py-2 px-3 w-11/12 mx-auto">
      <button className="btn  btn-secondary">Latest </button>
      <Marquee className="flex gap-4 font-bold">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatur voluptatem velit, incidunt voluptatum unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatur voluptatem velit, incidunt voluptatum unde.</p>
      </Marquee>
    </div>
  );
};

export default UpdateNews;
