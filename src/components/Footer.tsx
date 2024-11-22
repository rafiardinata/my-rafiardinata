import { Dot, Dribbble, Github, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="absolute lg:w-full bottom-0 left-0 right-0">
            <div className="bg-[#323232] py-5 sm:px-16 px-1 flex items-center justify-between">
                <div className="flex items-center text-white">
                    <Dot />
                    <span className="font-700 font-medium sm:text-[16px] text-[10px] pr-2">Follow Me</span>
                    <div className='flex gap-2'>
                        <a href="https://dribbble.com/rafiardinata" className='opacity-[50%] hover:opacity-100' target='_blank'>
                            <Dribbble className='w-5 h-fit' />
                        </a>
                        <a href="https://www.instagram.com/rafiardinata/" className='opacity-[50%] hover:opacity-100' target='_blank'>
                            <Instagram className='w-5 h-fit' />
                        </a>
                        <a href="https://github.com/rafiardinata" className='opacity-[50%] hover:opacity-100' target='_blank'>
                            <Github className='w-5 h-fit' />
                        </a>
                        <a href="https://www.linkedin.com/in/rafiardinata/" className='opacity-[50%] hover:opacity-100' target='_blank'>
                            <Linkedin className='w-5 h-fit' />
                        </a>
                    </div>
                </div>
                <div className="text-white font-700 font-semibold sm:text-[16px] text-[9px] pr-1">
                    &copy; Rafi Ardinata Riskiansyah
                </div>
            </div>
        </footer>
    )
}

export default Footer