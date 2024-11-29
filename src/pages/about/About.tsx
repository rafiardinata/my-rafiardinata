import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import transition from '@/components/Transition'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import GradualSpacing from '@/components/ui/gradual-spacing'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import WordPullUp from '@/components/ui/word-pull-up'
import { FileDown, Fullscreen, GithubIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const About = () => {


    const data = [
        { src: "/icon/laravel.png", name: "Laravel", link: "https://laravel.com/" },
        { src: "/icon/logoreact.png", name: "React", link: "https://react.dev/" },
        { src: "/icon/tailwind.png", name: "Tailwind", link: "https://tailwindcss.com/" },
        { src: "/icon/Photoshop.png", name: "Photoshop", link: "https://www.adobe.com/id_id/products/photoshop.html" },
        { src: "/icon/Figma.png", name: "Figma", link: "https://www.figma.com/" },
    ]

    useEffect(() => {
        document.title = "RAR | About";
    })

    return (
        <>
            <Navbar />
            <main className='min-h-screen absolute w-full px-6'>
                <header className='flex flex-col font-700 justify-center items-center mt-[100px]'>
                    <WordPullUp
                        className="text-[56px] font-bold -tracking-widest text-yellow dark:text-white sm:text-[65px]"
                        words="About Me"
                    />
                    <p className='mt-[10px] font-semibold px-8 sm:px-0 text-center text-abu'>
                        Learn more about me and my journey in technology.
                    </p>
                </header>
                <div className='flex flex-wrap mt-[40px] mb-[55px] gap-[65px] justify-center items-center sm:px-0 px-2'>
                    <div>
                        <img
                            src="/images/about.png"
                            alt="Fotoku"
                            className='sm:w-[300px] w-[250px] bg-center bg-no-repeat bg-cover bg-yellow rounded-full shadow-lg'
                        />
                    </div>
                    <div className='flex flex-col md:justify-start md:items-start justify-center items-center'>
                        <h1 className='font-700 font-bold lg:text-[40px] md:text-[25px] text-[20px] text-yellow'>
                            Rafi Ardinata Riskiansyah
                        </h1>
                        <GradualSpacing
                            texts={["Front End Developer", "Graphic Designer", "UI/UX Designer"]}
                            className='text-[20px] lg:text-[30px] font-700 font-bold text-abu mb-[20px] -tracking-widest'
                            duration={0.5}
                            delayMultiple={0.04}
                            switchInterval={3000} // Interval 3 detik sebelum berpindah ke kata berikutnya
                        />
                        <div className='flex gap-2 items-center'>
                            <TooltipProvider>
                                {data.map((value, i) => (
                                    <Tooltip key={i} delayDuration={200}>
                                        <TooltipTrigger asChild>
                                            <a href={value.link} target="_blank">
                                                <img
                                                    src={value.src}
                                                    alt={value.name}
                                                    width={35}
                                                    height={35}
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
                        </div>
                        <div className='flex gap-4 sm:mt-[50px] mt-[35px]'>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button >
                                        <Fullscreen />
                                        <span>Preview CV</span>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent aria-describedby="" className='max-w-[800px]'>
                                    <DialogHeader>
                                        <DialogTitle className='font-700'>
                                            My Resume
                                        </DialogTitle>
                                    </DialogHeader>
                                    <iframe src="/CV-New-Rafi Ardinata Riskiansyah.pdf" width="100%" height="600px"></iframe>
                                    <Button className='max-w-[200px] justify-center items-center'>
                                        <FileDown className='w-5 text-white' />
                                        <span>Download My CV</span>
                                    </Button>
                                </DialogContent>
                            </Dialog>
                            <Link to="https://github.com/rafiardinata" target='_blank' rel='noopener noreferrer'>
                                <Button variant={"outline"}>
                                    <GithubIcon />
                                    <span>GitHub</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mb-[130px]'>
                    <div className='font-700 font-bold text-[35px] mb-[40px] text-abu'>
                        <h1>
                            Companies I've Contributed To
                        </h1>
                    </div>
                    <div className='flex flex-wrap justify-center gap-8'>
                        <CardContainer className='h-full'>
                            <CardBody className="bg-gray-50 relative flex flex-col justify-between group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border">
                                <CardItem translateZ="100" className="w-full grayscale hover:grayscale-0 opacity-50 hover:opacity-100">
                                    <img
                                        src="/images/Telusby.png"
                                        height="600"
                                        width="600"
                                        className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}

export default transition(About);