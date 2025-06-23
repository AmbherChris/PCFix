"use client";


export default function NavBar(){
    return(
        <>
        <ul className="flex gap-8 border-[black] dark:border-[white] border-1 rounded-lg p-3 px-4 shadow-lg bg-[white] dark:bg-[black] dark:text-[white] text-[black] inset-shadow-white">
            <a href="/">
            <li>Home</li>
            </a>
            <a href="/devices">
            <li>Devices</li></a>
            <a href="/allProblems">
            <li>Problems</li></a>
            <a onClick={() => alert("Not available")}>
            <li>About</li></a>
            <a onClick={() => alert("Not available")}>
            <li>Contacts</li></a>
        </ul>
        
        
        </>
    )
}