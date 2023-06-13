import './Header.css';
//import navLinks from './navLinks';


const Header = ({isDarkMode: darkMode, toggleDarkMode, openModal})=> {
    const navLinks = [
        {
            title: 'Projects',
            icon: null,
            link: '',
            onClick: ()=>{
                const target = document.getElementById("projects");
                target.scrollIntoView({behaviour: "smooth"})
            },
        },
        {
            title: 'My Profile',
            icon: null,
            link: '',
            onClick: openModal,
        },
    ]

    return(
        <header className={`flex justify-center items-center pl-2 ${darkMode? "bg-[#0c061b] text-gray-300" : "bg-[#e3d0a0]"}`}>
                <ul className={`flex justify-between lg:justify-center items-center`}>
                {
                    navLinks.map((link, i)=> {
                        return (
                        <li key={i} onClick={link.onClick} className={`cursor-pointer flex items-center px-4 py-1 m-2 text-[14px] text-[#e3d0a0] bg-[#0c061b] underline ${darkMode? "border border-[#e3d0a0]" : ""}`}>
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