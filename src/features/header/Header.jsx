import './Header.css';
//import navLinks from './navLinks';
const navLinks = [
    {
        title: 'Projects',
        icon: null,
        link: ''
    },
    {
        title: 'My Profile',
        icon: null,
        link: ''
    },
]

const Header = ({isDarkMode: darkMode, toggleDarkMode})=> {

    return(
        <header className={`flex justify-between pl-2 ${darkMode? "bg-[#0c061b] text-gray-300" : "bg-[#e3d0a0]"}`}>
            <ul className={`md:w-full flex justify-between lg:justify-center items-center`}>
            {
                navLinks.map((link, i)=> {
                    return (
                    <li className={`flex items-center px-4 py-1 m-2 text-[14px] text-[#e3d0a0] bg-[#0c061b] underline ${darkMode? "border border-[#e3d0a0]" : ""}`}>
                        <span>{link.icon}</span><span>{link.title}</span>
                    </li>)
                })
            }
            </ul>
            <div className={`min-w-max flex items-center justify-end lg:justify-start rounded-xl px-4 py-1 m-2 text-[14px] text-[#e3d0a0] bg-[#0c061b] ${darkMode? "border border-[#e3d0a0]" : ""}`}>
                <button onClick={()=>toggleDarkMode()}>{darkMode? "Light Mode" : "Dark Mode"}</button>
            </div>
        </header>
    )
}

export default Header;