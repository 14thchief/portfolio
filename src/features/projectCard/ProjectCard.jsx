import { useEffect } from "react";


function ProjectCard(props) {
    

    useEffect(()=>{
        const img = document.querySelectorAll('.projectImageDiv');
        console.log({img, inPosition: props.inPosition});
        if(props.inPosition){
            img.forEach(img=> img.className = "projectImageDiv transition ease-in-out delay-100 relative bottom-0 rounded-t-xl border-4 bg-white h-48 w-full")
        }else {
            img.forEach(img=> img.className = "projectImageDiv transition ease-in-out delay-100 md:hover:translate-y-4 relative -bottom-20 rounded-t-xl border-4 bg-white h-40 w-full")
        }
        console.log({isInposition: props.inPosition})
    }, [props.inPosition])
    console.log({isInposition: props.inPosition})

    return (
        <div className="transition ease-in-out delay-100 hover:translate-y-2 min-w-1/4 w-11/12 md:w-1/2 lg:w-1/4 h-max rounded-xl mx-4 mb-2">
            <div className="relative -bottom-20 hover:bottom-0 rounded-t-xl bg-white h-60 overflow-hidden w-full">
                <img src={props.imgSrc} alt={props.title} />
            </div>
            <div className=" relative h-28 min-h-max flex flex-col justify-between py-2 bg-slate-900 border font-bold rounded-b-xl z-10">
                <h1 className="border-4 text-slate-300 mx-auto p-1">{props.title}</h1>
                <p className="text-sm text-slate-300 font-normal mt-0 mb-0">{props.description || 'This is a live web application'}</p>
                <div>
                    <a href={props.link} target='blank' className="active:scale-105 w-11/12 py-2 px-6 m-1 rounded bg-zinc-800 font-bold text-slate-200">Visit</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;