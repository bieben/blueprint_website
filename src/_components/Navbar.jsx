import React from "https://esm.sh/react"

export default function Navbar({}) {

    return (
        <nav class="flex w-full items-center justify-center py-5">
            <div class="flex h-20 w-10/12 items-center justify-between rounded-lg bg-slate-100 px-5 drop-shadow-2xl">
                <a href="/" class="shrink-0">
                    <img src="/assets/logos/logo_banner.png" alt="logo-banner" class="w-32 transition duration-300 ease-in-out" border="0" />
                </a>
                <ul class="flex items-center justify-end space-x-4">
                    <li class="transition duration-300 ease-in-out hover:bg-slate-200 rounded-lg">
                        <a href="/" class="flex items-center justify-center h-16 px-4 text-color-primary font-bold hover:text-primary">Home</a>
                    </li>
                    <li class="transition duration-300 ease-in-out hover:bg-slate-200 rounded-lg">
                        <a href="/about" class="flex items-center justify-center px-4 h-16 font-thin hover:text-primary">About</a>
                    </li>
                    <li class="transition duration-300 ease-in-out hover:bg-slate-200 rounded-lg">
                        <a href="/projects" class="flex items-center justify-center px-4 h-16 font-thin hover:text-primary">Projects</a>
                    </li>
                    <li class="transition duration-300 ease-in-out hover:bg-slate-200 rounded-lg">
                        <a href="/apply" class="flex items-center justify-center px-4 h-16 font-thin hover:text-primary">Apply</a>
                    </li>
                    <li class="transition duration-300 ease-in-out hover:bg-slate-200 rounded-lg">
                        <a href="/contact" class="flex items-center justify-center px-4 h-16 font-thin hover:text-primary">Contact</a>
                    </li>
                    <li class="flex-grow-0">
                        <a href="/apply" class="flex items-center justify-center w-32 h-14 rounded-2xl bg-blue-600 hover:bg-blue-800 text-slate-100 text-center transition duration-300 ease-in-out">Join our Team</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}
