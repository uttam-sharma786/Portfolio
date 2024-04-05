import type { Component } from "solid-js";


const Navbar: Component = () => {
    return (
<div class="flex justify-center bg-zinc-700 rounded-full  sticky   left-40% md:w-1/3 lg:w-1/4 xl:w-1/5  top-0 left-[40%] backdrop-filter backdrop-blur-lg bg-opacity-30">  
        <nav class="flex">
            <a href="/." class="text-white px-4 py-2">Home</a>
            <a href="/about" class="text-white px-4 py-2">About</a>
            <a href="#" class="text-white px-4 py-2 hidden md:inline">Services</a>
            <a href="#" class="text-white px-4 py-2 hidden md:inline">Contact</a>
                   <button class="block md:hidden text-white px-4 py-2">Menu</button>

        </nav>
    </div>

        
        
    );

};

export default Navbar;
