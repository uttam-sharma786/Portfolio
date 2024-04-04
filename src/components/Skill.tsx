import type { Component } from "solid-js";


const Skill: Component = () => {
    return (
        <div class=" container  bg-zinc-700 px-2 sm:px-6 py-4 sm:py-12  rounded-md">
           
            <ul class= "flex gap-6 ">
                <li >
                    <img src ="/public/Tailwind_CSS_Logo.svg.png" alt="Tailwind" class=" max-h-20 w-full object-contain items-center lg:col-span-1 "  />
                </li>
                <li >
                    <img src ="/public/JavaScript-logo.png" class=" max-h-20  w-full object-contain items-center lg:col-span-1 "  />
                </li>
                <li>

                    <img src ="/public/React-icon.svg.png" class=" max-h-20 w-full object-contain items-center lg:col-span-3 "  />
                </li>
                <li>
                    <img src ="/public/astrojs.svg" class=" max-h-20 w-full object-contain items-center lg:col-span-1 " />
                </li>
            
            </ul>
            
  
       
        
        </div>

        
        
    );

};

export default Skill;