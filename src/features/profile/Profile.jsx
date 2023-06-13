// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myPic from "../../assets/me.png";

const Profile = ({title, darkMode}) => {

    return (
        <main className={`${darkMode? " bg-[#0c061b] text-gray-300" : "bg-gray-200 text-gray-900"} rounded-xl max-w-[1000px] text-[15px] font-[400] text-start p-4`}>
            <div className="flex items-center justify-start w-full">
                <div className="flex justify-center items-center rounded-full mr-4 h-40 w-40 overflow-hidden  border-amber-600">
                    <img src={myPic} alt="this is me" />
                </div>
                <h1 ><strong className="mt-4 text-[25px]">{title}</strong></h1>
            </div>
            <div>
                <p className="">
                    <strong className="mt-4 text-[25px] mr-1">I</strong> am a gritty creative thinker who enjoys the process of creating, maintaining and scaling systems.
                    <br />
                    <strong className="mt-4 text-[25px] mr-1">We</strong> should read that again!
                    <br />
                    <strong className="mt-4 text-[25px] mr-1">I</strong> am devoted to a strong work ethic that requires me to build systems to be easily adaptable and I do this by writing clean code and architecting optimal systems. 
                    <br />
                    <strong className="mt-4 text-[25px] mr-1">N</strong>ow Full stack? - Yes the whole 9 yards! I am restless learner and grower. I am passionate 
                    about applying myself to the width of the front-end and the depths of the back-end.
                </p>
                <p className="mt-4">
                    Outside work, you will mostly find me singing, gaming or sketching portraits. I currently reside in Gbagada - a Tech hub in Lagos, Nigeria from which 
                    I have worked remotely for companies and clients around the world for over 2 years.
                </p>

            </div>
            <div className="mt-4">
                <p>In the moment, I am open to remote or hybrid job offers/contracts. I can also discuss relocation if required.</p>
                <p>If you want to contact me, click the button below to send an email.</p>
                <button className={`mt-4 px-4 py-2 rounded text-white bg-red-700`}><a href={"mailto:14thchief@gmail.com"} target="_blank" rel="noreferrer">Contact Me</a></button>
                {/* <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        {<FontAwesomeIcon icon="fa-solid fa-envelope" />}
                        <p>{"Email"}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {<FontAwesomeIcon icon="fa-brands fa-twitter" />}
                        <p>{"Twitter"}</p>
                    </div>
                </div> */}
            </div>

        </main>
    )
}

export default Profile;