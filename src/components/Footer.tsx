import {Component} from "solid-js";

const Footer: Component = () => {
    const today = new Date()
    return (
    <div class="flex flex-col md:flex-row justify-between items-center  gap-6  mt-40 text-white ">
        <div class="inline-item is-no-padding-first-and-last u-x-small text-sm ">
            <a href="/" class="mr-4">Home</a>
            <a href="/about" class="mr-4">About</a>
            <a href="/project" class="mr-4">Project</a>
            <a href="/blog" class="mr-4">Blog</a>
           
        </div>
        <div class="main-footer-end">
            <ul class = 'inline-links is-no-padding-first-and-last u-x-small'>
                <li class='inline-links-item'>
                    <span class="text-sm text-neutral-400">&copy;{today.getFullYear()} Uttam Sharma. All rights reserved</span>
                </li>
            </ul>
        </div>
    </div>
   
    );
};

export default Footer;