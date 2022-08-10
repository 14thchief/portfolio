import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Hero.css';
import 'animate.css';
import swingGif from '../../assets/swingGif.gif';
import ProjectCard from '../projectCard/ProjectCard';
//import projectList from './projectList';
const projectList = [
  {
      title: 'Test Assessify',
      imgSrc: require('../../assets/CRPimage.jpg'),
      link: 'https://testassessify.com',
  },
  {
    title: 'Game Quiz Live',
    imgSrc: require('../../assets/gameQuizLive.jpg'),
    link: 'https://gamequiz.live',
  },
  {
    title: 'Exam Advisor',
    imgSrc: require('../../assets/resultBreakdown.jpg'),
    link: 'https://advisor.testassessify.com',
  },
  {
    title: 'Mystery Shopper',
    imgSrc: require('../../assets/cmshopper.jpg'),
    link: 'https://evaluator.connectifie.com',
  },
];

const animateList = ['animate__wobble', 'animate__wobble', 'animate__wobble', 'animate__backInRight', 'animate__backInLeft', 'animate__backInRight', 'animate__backInLeft', 'animate__backInDown', 'animate__backInDown', 'animate__backInUp', 'animate__bounceInDown', 'animate__backInDown', 'animate__backInDown', ]

export function Hero() {
  const dispatch = useDispatch();

  useEffect(()=>{
    
  }, [])

  const onClickShowProjects = (e)=> {
    e.target.className = 'animate__animated animate__backOutDown animate__backInDown rounded bg-red-500 text-slate-200 p-2 m-2'
    const projectsDiv = document.getElementById('projectsContainer');
    const introTextDiv = document.getElementById('introText');
    introTextDiv.className = 'origin-center rotate-45';
    setTimeout(()=> {
      projectsDiv.scrollIntoView({behavior: 'smooth', })
      introTextDiv.className = 'rotate-0';
      return e.target.className = 'animate__animated animate__backInDown rounded bg-red-500 text-slate-200 p-2 m-2'

    }, 300)
  }

  const myRef = useRef();
  const [Ypos, setYpos] = useState(window.scrollY);

  const [inProjectsPosition, setInProjectsPosition] = useState(false);

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
  }, [Ypos])





  return (
    <main className={``}>
      <section className='flex flex-col justify-center h-screen items-center '>
        <div id='introText' className='rotate-0'>
          <h1 className={` border-4 border-slate-800 animate__animated  animate__backInRight animate__wobble`}>Hello, I'm </h1>
          <div className='flex justify-center rounded-lg border w-min p-2 bg-zinc-900'>
          {
            "Chief_Victor".split("").map((letter, index)=>{
              return <h1 id='nameTitle' className={`animate__animated ${animateList[index] || 'animate__wobble'} `}
              style={{ color: 'Chef'.includes(letter)? '#e3d0a0' : 'whitesmoke'}}
              >{letter}</h1>
            })
          }
          </div>
        </div>
        <div className='w-full md:w-1/3 md:mx-auto'>
          <img 
            id='swingingGif' 
            src={swingGif} 
            alt='swingingGif'
            className=''
          />
        </div>
        
        <small>Wanna take a quick quiz to know if we are a match?</small>
        <div>
          <button className='underline'>Yeah, Let's have some fun</button>
          <button onClick={onClickShowProjects} className='rounded bg-red-500 text-slate-200 p-2 m-2'>No, Show Projects</button>
        </div>
      </section>

      <section id="projectsContainer" className='lg:mt-24 pt-2 bg-slate-900 border-y lg:rounded-xl xl:w-11/12 md:h-max md:min-h-screen mx-auto z-10'>
        <h2 className='introText text-slate-50 underline border'>Projects</h2>
        <div ref={myRef} className='flex flex-col md:flex-row md:flex-wrap justify-evenly items-center w-full z-10'>
          {
            projectList.map((project, index)=>{
              return <ProjectCard inPosition={inProjectsPosition} link={project.link} title={project.title} imgSrc={project.imgSrc} />
            })
          }
        </div>
      </section>
    </main>
  );
}