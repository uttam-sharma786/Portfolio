import type { Component } from "solid-js";
import { createSignal } from "solid-js";


const [isMenuOpen, setISMenuOpen] = createSignal(false);

const toggleMenu = () => {
    setISMenuOpen(!isMenuOpen())
}

const Navbar: Component = () => {
    return (
        <div class="flex justify-center bg-zinc-700 rounded-full sticky top-4 mb-4 backdrop-filter backdrop-blur-lg bg-opacity-30 w-full max-w-[400px] mx-auto">
        <button id = "menuBtn" class="text-white px-4 py-2 md:hidden" onClick={toggleMenu}>Menu</button>
        <nav id = "menu" class="hidden md:flex">
            <a href="/." class="text-white px-4 py-2 md:inline">Home</a>
            <a href="/about" class="text-white px-4 py-2 md:inline">About</a>
            <a href="#" class="text-white px-4 py-2  md:inline">Pojects</a>
            <a href="#" class="text-white px-4 py-2 md:inline">Blogs    </a>

        </nav>
     
    </div>

 
    );

};

export default Navbar;
