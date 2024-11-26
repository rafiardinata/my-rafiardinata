import Navbar from '@/components/Navbar'
import { useEffect } from 'react';

const About = () => {

    useEffect(() =>{
        document.title = "RAR | About";
    })
    
    return (
        <>
            <Navbar />
            <h1 className='mt-[90px]'>INI HALAMAN ABOUT</h1>
        </>
    )
}

export default About