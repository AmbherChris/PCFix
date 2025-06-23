"use client";
import Link from "next/link";


export default function NavBar(){


    const links =[
        {name: "Home", url:"/"},
        {name: "Devices", url:"/devices"},
        {name: "Problems", url:"/allProblems"},


    ]
    return(
        <>
        <ul className="navBar">

            {links.map((el) => (
                <li key={el.name}>
                    <Link href={el.url}>{el.name} </Link>
                </li>
            ))}




        </ul>
        
        
        </>
    )
}