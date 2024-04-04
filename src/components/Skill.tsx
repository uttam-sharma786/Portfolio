import type { Component } from "solid-js";


const Skill: Component = () => {
    return (
        <div class="bg-white py-4 sm:py-32 ">
            <div class="mx-auto max-w-7xl px-12 lg:px-8">
            <h2 class="text-center text-lg font-semibold leading-2 text-gray-900">Trusted by the world’s most innovative teams</h2>
            <div class="mx-auto mt-2 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">

            <ul class= "flex gap-6">
                <li>
                    <img src ="/public/Tailwind_CSS_Logo.svg.png" class="row-span-2 max-h-12 w-full object-contain lg:col-span-1 first-line:" width="200" height="48" />
                </li>
                <li>
                    <img src ="/public/JavaScript-logo.png" class="row-span-2 max-h-12 w-full object-contain lg:col-span-1 first-line:" width="200" height="48" />
                </li>
                <li>

                    <img src ="/public/React-icon.svg.png" class="row-span-2 max-h-12 w-full object-contain lg:col-span-1 first-line:" width="200" height="48" />
                </li>
                <li>
                    <img src ="/public/astrojs.svg" class="row-span-2 max-h-12 w-full object-contain lg:col-span-1 first-line:" width="200" height="48" />
                </li>
            
            </ul>
            
  </div>

        </div>
        </div>

        
        
    );

};
export default Skill;