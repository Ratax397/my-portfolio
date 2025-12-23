"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinkS = [
    {
        title: "À propos",
        path: "#about"
    },
    {
        title: "Mes projets",
        path: "#projets"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-4">
                <Link href={"/"} className="text-2xl md:text-3xl font-semibold">
                    <span className="inline-block">
                        {Array.from("HelloWorld").map((letter, index) => (
                            <span
                                key={index}
                                className="inline-block animate-wave bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent"
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navBarOpen ? (
                            <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        )
                            : (
                                <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                    <XMarkIcon className='h-5 w-5' />
                                </button>
                            )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinkS.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navBarOpen ? <MenuOverlay links={navLinkS} /> : null}
        </nav>
    )
}

export default NavBar