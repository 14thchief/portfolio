import '.Header.css';
//import navLinks from './navLinks';
const navLinks = [
    {
        title: 'Projects',
        icon: null,
        link: ''
    },
    {
        title: 'Blog',
        icon: null,
        link: ''
    },
    {
        title: 'Contact',
        icon: null,
        link: ''
    },
]

const Header = ()=> {

    return(
        <header>
            <ul>
            {
                navLinks.map((link, i)=> {
                    return <li><span>{link.icon}</span><span>{link.title}</span></li>
                })
            }
            </ul>
        </header>
    )
}