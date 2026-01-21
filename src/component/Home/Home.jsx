import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-7xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">
                Ghost Of Tsushima
              </span>
            </h2>

            <a
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              href="https://www.playstation.com/en-us/games/ghost-of-tsushima/"
              target="_blank"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M1.571 23.664l10.531-10.501 3.712 
                3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 
                10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 
                4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653
                 7.015-3.846 3.835-10.642-10.612z"
                />
              </svg>
              &nbsp; Download now
            </a>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-full border-0 shadow-xl shadow-orange-200 rounded-2xl max-w-2xl "
            src="https://i1.wp.com/www.herebegeeks.com/wp-content/uploads/2020/07/Ghost-of-Tsushima_20200707101314.jpg?fit=1920%2C1080&ssl=1"
            alt="image1"
          />
        </div>
      </aside>

      <p className="mt-6 text-center text-gray-600 text-2xl leading-relaxed">
        Ghost of Tsushima is an action-adventure game set in feudal Japan during
        the first Mongol invasion of Tsushima Island. Players take on the role
        of <span className="font-semibold">Jin Sakai</span>, a samurai torn
        between tradition and the need to protect his people. Master stealth,
        swordplay, and strategic combat as you explore the breathtaking open
        world of Tsushima.
      </p>
      <p className="mt-4 text-center text-gray-600 text-2xl leading-relaxed">
        Our site is dedicated to helping fans discover more about the game,
        enjoy stunning visuals, and access official resources safely. Whether
        you're a longtime fan or new to the game, we aim to bring the epic world
        of Ghost of Tsushima closer to you.
      </p>
    </div>
  );
}
