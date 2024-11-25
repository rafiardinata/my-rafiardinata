import Footer from '@/components/Footer'
import Gambar from '@/components/Gambar'
import Navbar from '@/components/Navbar'
import transition from '@/components/Transition'
import { Button } from '@/components/ui/button'
import GradualSpacing from '@/components/ui/gradual-spacing'
import NumberTicker from '@/components/ui/number-ticker'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { CircleFadingPlus, FileDown, PanelsTopLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            <main className='min-h-screen flex lg:flex-row'>
                <div className='relative lg:w-[75%] w-[100%] sm:pl-24 sm:pr-14 px-8 lg:mt-[70px] xl:mt-[50px] 2xl:mt-[60px] mt-[40px]'>
                    <div className='flex justify-between items-end'>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-col mt-16 gap-0'>
                                <h1 className='xl:text-[130px] sm:text-[80px] text-[50px] font-700 font-bold text-yellow leading-none'>
                                    Hi, I&apos;m Rafi
                                </h1>
                                <GradualSpacing
                                    texts={["Front End Developer", "Graphic Designer", "UI/UX Designer"]}
                                    className='text-[20px] sm:text-[30px] md:text-[50px] font-700 font-bold text-abu'
                                    duration={0.5}
                                    delayMultiple={0.04}
                                    switchInterval={3000} // Interval 3 detik sebelum berpindah ke kata berikutnya
                                />

                            </div>

                            {/* Let's Work Together GROUP */}
                            <div className='sm:mt-8 mt-5'>
                                <p className='sm:text-[30px] text-[25px] text-abu font-500 font-semibold'>
                                    Let&apos;s Work Together
                                </p>
                                <p className='text-[#707070] font-500 font-normal sm:text-[16px] text-[11px]'>
                                    Creating user experience and visual appealing design
                                </p>
                                <div className='flex mt-5 sm:gap-5 gap-2'>
                                    <a href="https://wa.me/081252896841" target='__blank'>
                                        <Button className='h-fit py-2 px-2 sm:h-10 sm:px-4 sm:py-2 border-2 sm:border-none rounded-lg'>
                                            <CircleFadingPlus className="w-5 text-white" />
                                            <span className='text-[11px] sm:text-[16px]'>Hire Me</span>
                                        </Button>
                                    </a>
                                    <a
                                        href="/CV-New-Rafi Ardinata Riskiansyah.pdf"
                                        download="CV-Rafi Ardinata Riskiansyah.pdf"
                                    >
                                        <Button className='h-fit py-2 px-2 sm:h-10 sm:px-4 sm:py-2' variant="outline">
                                            <FileDown className="w-5 text-black" />
                                            <span className='text-[11px] sm:text-[16px]'>Download CV</span>
                                        </Button>
                                    </a>
                                    <Link to="/projects">
                                        <Button className='h-fit py-2 px-2 sm:h-10 sm:px-4 sm:py-2' variant="outline">
                                            <PanelsTopLeft className="w-5 text-black" />
                                            <span className='text-[11px] sm:text-[16px]'>Projects</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Counter */}
                            <div className='mt-8 flex text-center md:gap-5'>
                                <div className='font-700 font-semibold w-28'>
                                    <NumberTicker value={6} className='lg:text-[35px] text-[20px]' />
                                    <span className='lg:text-[35px] text-[20px]'>+</span>
                                    <p className='text-secondary sm:text-[16px] text-[10px]'>My Projects Done</p>
                                </div>
                                <div className='font-700 font-semibold sm:w-64 w-40'>
                                    <NumberTicker value={6} className='lg:text-[35px] text-[20px]' />
                                    <span className='lg:text-[35px] text-[20px]'>+</span>
                                    <p className='text-secondary sm:text-[16px] text-[10px]'>Completed Licenses & Certifications</p>
                                </div>
                                <div className='font-700 font-semibold w-28'>
                                    <NumberTicker value={2} className='lg:text-[35px] text-[20px]' />
                                    <span className='lg:text-[35px] text-[20px]'>+</span>
                                    <p className='text-secondary sm:text-[16px] text-[10px]'>Years Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Hard Skill */}
                        <div className='hidden lg:flex flex-col gap-7 items-center justify-center'>
                            <Gambar />
                        </div>
                    </div>

                    <div className='mt-11 flex flex-wrap sm:gap-[40px] gap-[25px] lg:mb-[100px] xl:mb-0 mb-8'>
                        {/* Telkom University */}
                        <div className='flex items-center gap-4'>
                            <TooltipProvider>
                                <Tooltip delayDuration={200}>
                                    <TooltipTrigger>
                                        <a href="https://telkomuniversity.ac.id/" target='_blank'>
                                            <img
                                                src="/images/telu.png"
                                                alt="Logo Tel-U"
                                                className='hover:-translate-y-1 transition duration-400 w-[30px]'
                                            />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Telkom University Surabaya</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <div className='font-700 sm:text-[16px] text-[12px]'>
                                <p className='font-medium'>Currently Studying in</p>
                                <p className='font-bold text-red-600'>Telkom University Surabaya</p>
                                <p className='text-secondary font-medium'>Feb 2021 - Present | Grade: 3.85</p>
                            </div>
                        </div>

                        {/* Internship */}
                        <div className='flex items-center gap-4'>
                            <TooltipProvider>
                                <Tooltip delayDuration={200}>
                                    <TooltipTrigger>
                                        <a href="https://telkomuniversity.ac.id/" target='_blank'>
                                            <img
                                                src="/images/telu.png"
                                                alt="Logo Tel-U"
                                                className='hover:-translate-y-1 transition duration-400 w-[30px]'
                                            />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Telkom University Surabaya</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <div className='font-700 sm:text-[16px] text-[12px]'>
                                <p className='font-medium'>Currently Internship in</p>
                                <p className='font-bold text-red-600'>Laboratory Active Talent - Design Graphic</p>
                                <p className='text-secondary font-medium'>Position in Front End Developer</p>
                            </div>
                        </div>

                        {/* Freelance */}
                        <div className='flex items-center gap-4'>
                            <TooltipProvider>
                                <Tooltip delayDuration={200}>
                                    <TooltipTrigger>
                                        <a href="https://www.vecteezy.com/members/rafsacreative" target='_blank'>
                                            <img
                                                src="/images/vecteezy.png"
                                                alt="Logo Tel-U"
                                                className='hover:-translate-y-1 transition duration-400 w-[30px]'
                                            />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Vecteezy</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <div className='font-700 sm:text-[16px] text-[12px]'>
                                <p className='font-medium'>Currently Freelance in</p>
                                <p className='font-bold text-yellow'>Vecteezy Contributor - Graphic Designer</p>
                                <p className='text-secondary font-medium'>Jul 2024 - Present</p>
                            </div>
                        </div>
                    </div>

                    {/* Hard Skill */}

                    <div className='flex lg:hidden gap-7 items-center justify-center mb-8'>
                        <Gambar />
                    </div>
                    {/* Foto Profilku */}
                    <div className='lg:hidden mb-[100px] flex items-center justify-center'>
                        <img
                            src="/images/PolosNew.png"
                            alt="Profil"
                            className='w-[400px] bg-center bg-no-repeat bg-cover bg-yellow rounded-lg'
                        />
                    </div>
                    <Footer />
                </div>

                {/* Foto Profilku */}
                <div className='lg:flex hidden w-[25%]'>
                    <div
                        className="bg-yellow h-full w-full"
                        style={{
                            backgroundImage: "url('/images/PolosNew.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                    </div>
                </div>
            </main>
        </>
    )
}

export default transition(Home);