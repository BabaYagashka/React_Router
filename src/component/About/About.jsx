import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-700 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://rare-gallery.com/uploads/posts/302836-Jin-Sakai-Ghost-of-Tsushima-4K.jpg"
              alt="Ghost of Tsushima"
              className="rounded-2xl shadow-xl shadow-orange-200 w-full"
            />
          </div>

          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              About Jin Sakai
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              <span className="font-semibold">Jin Sakai</span> is the
              protagonist of <em>Ghost of Tsushima</em>, a skilled samurai of
              Tsushima Island during the first Mongol invasion. Torn between the
              strict samurai code of honor and the need to protect his people,
              Jin adapts his combat style, mastering stealth, swordplay, and
              strategy to survive and defend his homeland.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Throughout the game, Jin evolves into the legendary “Ghost,” using
              cunning tactics and unconventional methods to fight overwhelming
              odds. Brave, determined, and highly skilled, he embodies both the
              spirit of a samurai and the cunning of a true hero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
