import { useParams } from "react-router-dom";
import { siteData, techStackColors } from "../data";
import MotionH1 from "../components/motion_h1";
import MotionP from "../components/motion_p";
import MotionMask from "../components/motion-mask";

export default function WorkPage() {
    const { slug } = useParams();
    const work = siteData.work.find((work) => work.slug === slug);

    return (
        <>
            <div className="h-[50vh] flex flex-col items-center text-center lg:text-left lg:items-start justify-center min-w-min my-10">
                <MotionH1 styles={"font-bold text-2xl lg:text-5xl leading-loose lg:py-6"}>{work.title}</MotionH1>
                <MotionP styles="w-[60%] text-sm lg:text-xl leading-relaxed">{work.workDescription}</MotionP>
                <MotionMask
                    initialChild={
                        <>
                            {work.techStack.map((tech, index) => (
                                <span key={index} className={`text-xs lg:text-sm  py-1 px-3 rounded-large ${techStackColors[tech].backgroundColor} ${techStackColors[tech].textColor} pointer-events-none`} >
                                    {tech}
                                </span>
                            ))}
                        </>
                    }
                    maskChild={
                        <>
                            {
                                work.techStack.map((tech, index) => (
                                    <span key={index} className={` text-xs lg:text-sm opacity-20 py-1 px-3 rounded-large ${techStackColors[tech].backgroundColor} ${techStackColors[tech].textColor}`} >
                                        {tech}
                                    </span>
                                ))
                            }
                        </>
                    }
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src={work.images[0]} alt={work.title} className="w-full object-cover" />
                {
                    work.images.map((image, index) => (
                        <img src={image} alt={work.title} className="w-full object-cover" key={index} />
                    ))
                }
            </div>
        </>
    )
}
