import React from "https://esm.sh/react"

export default function Navbar({}) {

    return (
        <nav class="flex w-full justify-center items-center py-5">
        <div class="flex justify-around items-center w-10/12 h-14 bg-slate-100 rounded-lg drop-shadow-2xl px-5">
            <a href="https://ibb.co/x1HDkYZ">
            <img src="../assets/logo/logo_banner.png" alt="logo-banner" class="w-32" border="0"/>
            </a>
            <ul class="flex justify-end items-center flex-1">
            <li class="ml-6"><a href="/" class="hover:text-primary">Home</a></li>
            <li class="ml-6"><a href="/about" class="hover:text-primary">About</a></li>
            <li class="ml-6"><a href="/projects" class="hover:text-primary">Projects</a></li>
            <li class="ml-6"><a href="/apply" class="hover:text-primary">Apply</a></li>
            <li class="ml-6"><a href="/contact" class="hover:text-primary">Contact</a></li>
            <li class="ml-6"><a href="/apply"><button class="bg-blue-600 text-slate-100 rounded-lg w-32 h-10">Join our Team</button></a></li>
            </ul>
        </div> 
        </nav>
    );
}
