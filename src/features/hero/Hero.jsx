import React, { useEffect, useRef, useState } from 'react';

import './Hero.css';
import 'animate.css';
import tree from '../../assets/tree.svg'
import ProjectCard from '../projectCard/ProjectCard';
import Profile from '../profile/Profile';
import CustomModal from '../../components/CustomModal/CustomModal';
//import projectList from './projectList';
const projectList = [
  {
      title: 'Test Assessify',
      imgSrc: require('../../assets/CRPimage.jpg'),
      link: 'https://testassessify.com',
      description: "Recruitment Management System: Candidates",
      tech: "TypeScript, SASS, React, Node TypeScript"
  },
  {
    title: 'Test Advisor',
    imgSrc: require('../../assets/resultBreakdown.jpg'),
    link: 'https://advisor.testassessify.com',
    description: "Recruitment Management System: Administrators",
    tech: "React-Redux, Node TypeScript, MySQL, NginX"
  },
  {
    title: 'Service Schoolhouse',
    imgSrc: require('../../assets/ssh-image.jpg'),
    link: 'https://serviceschoolhouse.com',
    description: "Learning Management System with Certification.",
    tech: "React, SASS, Node JS, MySQL, Apache",
  },
  {
    title: 'Coaching',
    imgSrc: require('../../assets/coaching-img.jpg'),
    link: 'https://coaching.loremexcellentiam.com',
    description: "E-Learning system for Corporate Businesses",
    tech: "React, SASS, Node JS, MySQL, Apache",
  },
  {
    title: 'Mystery Shopper',
    imgSrc: require('../../assets/cmshopper.jpg'),
    link: 'https://evaluator.connectifie.com',
    description: "Complete Mystery Shopping System with Data insights",
    tech: "React, GraphQL, Apollo Server, PostgresSQL, NGINX",
  },
];

export function Hero({isDarkMode: darkMode, showModal, setShowModal}) {
  /** COMPONENT MOUNT */
  
  // HEADER TITLE
  const title = "Victor Izu-Akiti";
  const titleHead = title.split("").slice(0,1).join("");
  const titleBody = title.split("").slice(1, title.length).join("");

  const myRef = useRef();
  const [Ypos, setYpos] = useState(window.scrollY);

  const [inProjectsPosition, setInProjectsPosition] = useState(false);

  /** OnScroll Event */
  document.addEventListener('scroll', ((e)=>{ setYpos(window.scrollY);}));
  console.log({ Ypos })
  useEffect(()=>{
    // X
    const x = myRef.current.offsetLeft;

    // Y
    const y = myRef.current.offsetTop - myRef.current.offsetTop/4;

    if (y <= Ypos){
      setInProjectsPosition(true)
    } else {
      setInProjectsPosition(false)
    }

    console.log({ Ypos, x, y, inProjectsPosition })
  }, [Ypos, inProjectsPosition])


  /** ACTIONS */
  async function onClickShowProjects(){
    const target = document.getElementById("projects");
    target.scrollIntoView({behavior: "smooth"});
  }




  return (
    <main className={``}
      style={{backgroundColor: !darkMode? "#e3d0a0" : "#0c061b" }}
    >
      <section className='flex flex-col justify-center h-screen w-full items-center '>
        <div id='' className=' w-full'>
          <div id='myName' className={`flex flex-col justify-center rounded-lg border ${!darkMode? "border-black" : "border-[#e3d0a0]"} border-opacity-20 shadow w-[80%] max-w-[400px] mx-auto p-2 pt-4 text-2xl md:text-4xl`}>
            <h1 id='nameTitle' className={`font-black ${!darkMode? "text-black" : "text-[#e3d0a0]" }`}>
              <span className={`border-2 ${!darkMode? "border-black bg-black text-white" : " border-[#e3d0a0] bg-transparent text-[#e3d0a0]"} px-1.5 mr-[2px]`}>{titleHead}</span>{titleBody}
            </h1>
            <small className={`text-[14px] font-semibold ${!darkMode? "text-black" : "text-[#e3d0a0]" }`}>Full-stack Software Engineer</small>
          </div>
        </div>
        <div className='w-1/2 md:w-1/3 xl:w-1/4 md:mx-auto'>
          <img 
            id='swingingGif' 
            src={tree} 
            alt='swingingGif'
            className=''
          />
        </div>
        
        {/* <small>Wanna take a quick quiz to know if we are a match?</small> */}
        <small className={`${!darkMode? "text-gray-70" : "text-gray-400"}`}><b>Here to hang around?</b></small>
        <div className='w-full'>
          {/* <button className='underline'>Yeah, Let's have some fun</button> */}
          <button onClick={onClickShowProjects} className='w-11/12 hover:scale-105 md:w-1/4 rounded bg-slate-900 text-slate-200 p-2 m-2'>No, Show Projects</button>
        </div>
      </section>

      <section id="projects" className='lg:mt-24 pt-2 bg-slate-900 lg:rounded-xl xl:w-11/12 md:h-max md:min-h-screen mx-auto z-10'>
        <div className=' bg-[#0c061b] pb-4'>
          <h2 className='text-[20px] md:text-[40px] text-slate-200 p-2 mb-2'>Projects Highlight</h2>
          <p className='text-[12px] font-[100] text-slate-100'>My Experience involves Architecting and Engineering highly scalable and maintainable Software systems and products.  </p>
        </div>
        <div ref={myRef} className='flex flex-col md:flex-row md:flex-wrap justify-evenly items-center w-full z-10'>
          {
            projectList.map((project, index)=>{
              return <ProjectCard inPosition={inProjectsPosition} link={project.link} title={project.title} imgSrc={project.imgSrc} description={project.description} tech={project.tech} />
            })
          }
        </div>
      </section>
      {showModal && <section> 
        <CustomModal width={50} title={"Quick Profile"} children={<Profile title={title} darkMode={darkMode} />} hideModal={()=>{setShowModal(false)}} />
      </section>}
    </main>
  );
}