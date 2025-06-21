export default function NavBar(){
    return(
        <>
        <ul className="flex gap-8 border-[#171717] border-1 rounded-lg p-3 px-4 shadow-md bg-[white]">
            <a href="/">
            <li>Home</li>
            </a>
            <a href="/devices">
            <li>Devices</li></a>
            <a href="/allProblems">
            <li>Problems</li></a>
            <a>
            <li>About</li></a>
            <a>
            <li>Contacts</li></a>
        </ul>
        
        
        </>
    )
}