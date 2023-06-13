function ProjectCard(props) {

    return (
        <a href={props.link} target='blank' className="min-w-1/4 w-11/12 md:w-1/2 lg:w-1/4 h-max rounded-xl m-4 mb-2 hover:scale-105 border border-gray-700 transition ease-in-out">
            <div className="relative rounded-t-xl bg-white h-40 overflow-hidden w-full">
                <img src={props.imgSrc} alt={props.title} />
            </div>
            <div className=" relative h-28 min-h-max flex flex-col justify-start py-2 p-1 bg-slate-900 shadow-2xl font-bold rounded-b-xl z-10">
                <h1 className="text-slate-300 mx-auto pb-2">{props.title}</h1>
                <p className="text-[12px] text-slate-300 font-normal mt-0 mb-0">{props.description}</p>
                <h4 className="text-gray-400 text-[14px]">Technology</h4>
                <p className="text-[12px] text-slate-300 font-normal mt-0 mb-0">{props.tech}</p>
            </div>
        </a>
    )
}

export default ProjectCard;