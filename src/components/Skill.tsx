import type { Component } from "solid-js";


const Skill: Component = () => {
    return (
    <div class="container mx-auto bg-zinc-100 px-6 sm:px-12 py-8 sm:py-16 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30 mt-50">
  <ul class="flex flex-row sm:flex-row justify-center items-center gap-6">
    <li class="flex justify-center">
      <img src="/public/Tailwind_CSS_Logo.svg.png" alt="Tailwind" class="max-h-20 w-full object-contain" />
    </li>
    <li class="flex justify-center">
      <img src="/public/JavaScript-logo.png" alt="JavaScript" class="max-h-20 w-full object-contain" />
    </li>
    <li class="flex justify-center">
      <img src="/public/React-icon.svg.png" alt="React" class="max-h-20 w-full object-contain" />
    </li>
    <li class="flex justify-center">
      <img src="/public/astrojs.svg" alt="astro" class="max-h-20 w-full object-contain" />
    </li>
  </ul>
</div> 

        
        
    );

};

export default Skill;
