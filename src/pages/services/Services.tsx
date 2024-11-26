import Navbar from '@/components/Navbar'
import { useEffect } from 'react';

const Services = () => {

    useEffect(() =>{
        document.title = "RAR | Services";
    })
    
    return (
        <>
            <Navbar />
            <h1 className='mt-[90px]'>INI HALAMAN LAYANAN</h1>
        </>
    )
}

export default Services