import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const Gambar = () => {

    const data = [
        { src: "/icon/laravel.png", name: "Laravel" },
        { src: "/icon/logoreact.png", name: "React" },
        { src: "/icon/tailwind.png", name: "Tailwind" },
        { src: "/icon/Photoshop.png", name: "Photoshop" },
        { src: "/icon/Figma.png", name: "Figma" },
    ]

    return (
        <TooltipProvider>
            {data.map((value, i) => (
                <Tooltip key={i} delayDuration={200}>
                    <TooltipTrigger asChild>
                        <img
                            src={value.src}
                            alt={value.name}
                            width={48}
                            height={48}
                            className='transform hover:-translate-y-1 transition opacity-50 hover:opacity-100 duration-400 cursor-pointer'
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{value.name}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </TooltipProvider>
    )
}

export default Gambar