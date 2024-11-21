import { Dot, Dribbble, Github, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="absolute lg:w-full bottom-0 left-0 right-0">
            <div className="bg-[#323232] py-5 px-16 flex items-center justify-between">
                <div className="flex items-center text-white gap-2">
                    <Dot />
                    <span className="font-700 font-medium">Follow Me</span>
                    <a href="https://dribbble.com/rafiardinata" className='opacity-[50%] hover:opacity-100' target='_blank'>
                        <Dribbble />
                    </a>
                    <a href="https://www.instagram.com/rafiardinata/" className='opacity-[50%] hover:opacity-100' target='_blank'>
                        <Instagram />
                    </a>
                    <a href="https://github.com/rafiardinata" className='opacity-[50%] hover:opacity-100' target='_blank'>
                        <Github />
                    </a>
                    <a href="https://www.linkedin.com/in/rafiardinata/" className='opacity-[50%] hover:opacity-100' target='_blank'>
                        <Linkedin />
                    </a>
                </div>
                <div className="text-white font-700 font-semibold">
                    &copy; Rafi Ardinata Riskiansyah
                </div>
            </div>
        </footer>
    )
}

export default Footer