import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import transition from '@/components/Transition'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import WordPullUp from '@/components/ui/word-pull-up'
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

const Projects = () => {

    const projects = [
        {
            title: "Laboratory Information System Website",
            deskripsi: "Telkom University Surabaya",
            gambar: "/images/project1.png",
            title_visit: "Visit Website | Soon",
            title_visit_git: "GitHub",
            web_link: "",
            git_link: "",
            tag: [
                "Laravel",
                "Typescript",
                "ReactJs",
                "TailwindCSS",
                "Shadcn UI",
                "Aceternity UI",
                "Magic UI"
            ],
        },

        {
            title: "JTV 2024",
            deskripsi: "My Clients Project Personal",
            gambar: "/images/JTV.png",
            title_visit: "Visit Website | Soon",
            title_visit_git: "GitHub",
            web_link: "",
            git_link: "",
            tag: [
                "ReactJs",
                "TailwindCSS",
                "Javascript",
                "Magic UI",
                "Shadcn UI",
            ]
        },

        {
            title: "Perabot - Furniture Mobile Apps",
            deskripsi: "Personal Project",
            gambar: "/images/project2.jpg",
            title_visit: "Preview Image",
            title_visit_git: "",
            web_link: "",
            git_link: "",
            tag: [
                "Figma",
            ]
        },

        {
            title: "Web UI/UX Pijar Music Charity",
            deskripsi: "Personal Project",
            gambar: "/images/project3.jpg",
            title_visit: "Preview Image",
            title_visit_git: "",
            web_link: "",
            git_link: "",
            tag: [
                "Figma",
            ]
        },

        {
            title: "RAR Logo",
            deskripsi: "Personal Project",
            gambar: "/images/project4.jpg",
            title_visit: "Preview Image",
            title_visit_git: "",
            web_link: "",
            git_link: "",
            tag: [
                "Figma",
            ]
        },

        {
            title: "IDCamp 2024",
            deskripsi: "Personal Project",
            gambar: "/images/project5.png",
            title_visit: "Visit Website | Soon",
            title_visit_git: "GitHub",
            web_link: "",
            git_link: "https://github.com/rafiardinata/IDCamp-Basic",
            tag: [
                "HTML",
                "CSS",
                "Javascript",
            ]
        },
    ]

    useEffect(() => {
        document.title = "RAR | Projects";
    })


    return (
        <>
            <Navbar />
            <main className='min-h-screen absolute w-full'>
                <header className='flex flex-col font-700 justify-center items-center mt-[100px]'>
                    <WordPullUp
                        className="text-[56px] font-bold -tracking-widest text-yellow dark:text-white sm:text-[65px]"
                        words="Project"
                    />
                    <p className='mt-[10px] font-semibold px-8 sm:px-0 text-center'>
                        A collection of projects that reflect my skills and expertise
                    </p>
                </header>
                <div className='flex flex-wrap items-stretch justify-center mt-[40px] min-[560px]:px-[65px] px-[25px] gap-5 mb-[150px]'>

                    {projects.map((value, index) => (
                        <CardContainer key={index} className='h-full'>
                            <CardBody className="bg-gray-50 relative flex flex-col justify-between group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="sm:text-xl font-700 text-[12px] font-bold text-neutral-600 dark:text-white">
                                    {value.title}
                                </CardItem>
                                <CardItem as="p"
                                    translateZ="60"
                                    className="text-neutral-500 font-700 text-[10px] sm:text-sm max-w-sm mt-2 dark:text-neutral-300">
                                    {value.deskripsi}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src={value.gambar}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className='flex flex-wrap justify-start mt-8 text-[12px] sm:text-[13px] font-700 font-medium gap-2 mb-[30px]'>
                                    {value.tag.map((items, index) => (
                                        <CardItem
                                            key={index}
                                            translateZ={20}
                                            className="sm:px-4 sm:py-2 h-fit px-2 py-1 sm:rounded-lg rounded-md bg-yellow bg-opacity-50 group-hover/card:shadow-md">
                                            {items}
                                        </CardItem>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-auto">
                                    <CardItem
                                        translateZ={20}
                                        as="a"
                                        href={value.web_link}
                                        target="__blank"
                                        className={`${!value.web_link && `pointer-events-none`} px-4 py-2 font-700 text-[12px] sm:text-[13px] sm:rounded-xl rounded-md bg-black dark:bg-white dark:text-black text-white font-bold`}
                                    >
                                        {value.title_visit}
                                    </CardItem>
                                    {value.git_link && (
                                        <CardItem
                                            translateZ={20}
                                            as={"a"}
                                            href={value.git_link}
                                            target="__blank"
                                            className="px-4 py-2 flex items-center text-xs font-700 font-normal gap-1 dark:text-white hover:underline"
                                        >
                                            {value.title_visit_git}
                                            <ArrowRight className='w-3.5' strokeWidth={2} />
                                        </CardItem>
                                    )}
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}

                </div>
                <Footer />
            </main>
        </>
    )
}

export default transition(Projects);