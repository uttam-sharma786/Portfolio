import {Component} from "solid-js";

const Footer: Component = () => {
    const year = () => {
        return new Date().getFullYear();
    };
    return (
    <div class="flex flex-col md:flex-row justify-between items-center  gap-6  mt-40 text-white">
        <div class="flex gap-1">
            <a href="/" class="mr-4">Home</a>
            <a href="/about" class="mr-4">About</a>
            <a href="/project" class="mr-4">Project</a>
        </div>
        <p class="ml-[58%]">&copy; <script>document.write(new Date().getFullYear());</script> Uttam Sharma. All rights reserved.</p>
    </div>
   
    );
};

export default Footer;