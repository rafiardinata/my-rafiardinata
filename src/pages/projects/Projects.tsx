import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import WordPullUp from '@/components/ui/word-pull-up'

const Projects = () => {

    return (
        <>
            <Navbar />
            <main className='min-h-screen absolute w-full'>
                <header className='flex flex-col font-700 justify-center items-center mt-[150px]'>
                    <WordPullUp
                        className="text-4xl font-bold -tracking-widest text-yellow dark:text-white md:text-6xl"
                        words="Project"
                    />
                    <p className='mt-[25px] font-semibold'>
                        A collection of projects that reflect my skills and expertise.
                    </p>
                </header>
                <div className='flex flex-wrap items-center justify-center mt-[40px] px-[80px] gap-5 mb-[150px]'>

                    {/* Website Sistem Informasi Laboratorium Telkom University Syurabaya */}
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Laboratory Information System Website
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Telkom University Surabaya
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src="/images/project1.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className='flex flex-wrap justify-start items-center mt-8 text-[13px] font-700 font-medium gap-3 mb-[50px]'>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    Laravel
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    Typescript
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    Reactjs
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    TailwindCSS
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    Shadcn UI
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    Aceternity UI
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    Magic UI
                                </CardItem>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href=""
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Visit Website 'Coming Soon'
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={"a"}
                                    href="https://github.com/DanarWijanarko/silab-dashboard"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                                >
                                    GitHub →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>

                    {/* Figma UI/UX Mobile - Perabot Furniture Mobile Apps */}
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Perabot - Furniture Mobile Apps
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Personal Project
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src="/images/project2.jpg"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className='flex flex-wrap justify-start items-center mt-8 text-[13px] font-700 font-medium gap-3 mb-24'>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    Figma
                                </CardItem>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href=""
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Preview Image 'Coming Soon'
                                </CardItem>
                                {/* <CardItem
                                    translateZ={20}
                                    as={"a"}
                                    href="https://github.com/DanarWijanarko/silab-dashboard"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                                >
                                    GitHub →
                                </CardItem> */}
                            </div>
                        </CardBody>
                    </CardContainer>

                    {/* Web UI/UX - Pijar Music Charity */}
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Web UI/UX Pijar Music Charity
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Personal Project
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src="/images/project3.jpg"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className='flex flex-wrap justify-start items-center mt-8 text-[13px] font-700 font-medium gap-3 mb-24'>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-lg bg-yellow bg-opacity-50 group-hover/card:shadow-md"
                                >
                                    Figma
                                </CardItem>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href=""
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Preview Image 'Coming Soon'
                                </CardItem>
                                {/* <CardItem
                                    translateZ={20}
                                    as={"a"}
                                    href="https://github.com/DanarWijanarko/silab-dashboard"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                                >
                                    GitHub →
                                </CardItem> */}
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default Projects