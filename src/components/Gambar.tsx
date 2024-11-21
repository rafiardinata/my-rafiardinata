import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const Gambar = () => {

    const data = [
        { src: "/icon/laravel.png",     name: "Laravel",    link: "https://laravel.com/" },
        { src: "/icon/logoreact.png",   name: "React",      link: "https://react.dev/" },
        { src: "/icon/tailwind.png",    name: "Tailwind",   link: "https://tailwindcss.com/" },
        { src: "/icon/Photoshop.png",   name: "Photoshop",  link: "https://www.adobe.com/id_id/products/photoshop.html" },
        { src: "/icon/Figma.png",       name: "Figma",      link: "https://www.figma.com/" },
    ]

    return (
        <TooltipProvider>
            {data.map((value, i) => (
                <Tooltip key={i} delayDuration={200}>
                    <TooltipTrigger asChild>
                        <a href={value.link} target="_blank">
                            <img
                                src={value.src}
                                alt={value.name}
                                width={48}
                                height={48}
                                className='transform hover:-translate-y-1 transition opacity-50 hover:opacity-100 duration-400 cursor-pointer'
                            />
                        </a>
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