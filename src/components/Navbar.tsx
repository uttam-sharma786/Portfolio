import type { Component } from "solid-js";


const Navbar: Component = () => {
    return (
<div class="flex justify-center bg-zinc-700 rounded-full  sticky    w-[70%]  top-0  backdrop-filter backdrop-blur-lg bg-opacity-30">  
        <nav class="flex">
            <a href="/." class="text-white px-4 py-2 md:inline">Home</a>
            <a href="/about" class="text-white px-4 py-2 md:inline">About</a>
            <a href="#" class="text-white px-4 py-2  md:inline">Services</a>
            <a href="#" class="text-white px-4 py-2 md:inline">Contact</a>
            {/* <button class="block md:hidden text-white px-4 py-2">Menu</button> */}

        </nav>
    </div>

        
        
    );

};

export default Navbar;
