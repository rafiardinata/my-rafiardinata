import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import transition from '@/components/Transition'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import WordPullUp from '@/components/ui/word-pull-up'
import { FileDown, Fullscreen } from 'lucide-react'
import { useEffect } from 'react'

const Certificate = () => {

    const data = [
        {
            src: "/images/certificate/react.png",
            title: "Create Web Applications with React",
            link_pdf: "/sertifikat_react.pdf",
            preview: "Preview Certificate",
            description: "IDCamp | 2024"
        },
        {
            src: "/images/certificate/daspro.png",
            title: "Basic of Web Programming",
            link_pdf: "/sertifikat_daspro.pdf",
            preview: "Preview Certificate",
            description: "IDCamp | 2024"
        },
        {
            src: "/images/certificate/toefl.png",
            title: "English Proficiency Test of TOEFL - Score on 563",
            link_pdf: "/TOEFL-EPT.pdf",
            preview: "Preview Certificate",
            description: "Webster English Course | 2024"
        },
        {
            src: "/images/certificate/javascript.png",
            title: "Basic of JavaScript Programming",
            link_pdf: "sertifikat_javascript.pdf",
            preview: "Preview Certificate",
            description: "IDCamp | 2024"
        },
        {
            src: "/images/certificate/frontend.png",
            title: "Front End Website",
            link_pdf: "sertifikat_frontend.pdf",
            preview: "Preview Certificate",
            description: "IDCamp | 2024"
        },
        {
            src: "/images/certificate/LKTI.jpg",
            title: "Science Project & Innovation",
            link_pdf: "sertifikat_LKTI.pdf",
            preview: "Preview Certificate",
            description: "Himpunan Mahasiswa Teknik Fisika ITS | 2024"
        },
        {
            src: "/images/certificate/Sertif_ITCUP.png",
            title: "2nd Volleyball Champion",
            link_pdf: "Sertif_ITCUP.pdf",
            preview: "Preview Certificate",
            description: "IT CUP - Himpunan Mahasiswa Teknologi Informasi | 2023"
        },
        {
            src: "/images/certificate/VALORANT.png",
            title: "3rd Place in the Valorant Game",
            link_pdf: "",
            preview: "Preview Certificate",
            description: "IEC Season 2 - UKM Telkom Surabaya Esport | 2023"
        },
    ]

    useEffect(() => {
        document.title = "RAR | Licenses & Certificate";
    })

    return (
        <>
            <Navbar />

            <main className='min-h-screen absolute w-full'>
                <header className='flex flex-col font-700 justify-center items-center mt-[100px]'>
                    <WordPullUp
                        className="text-[35px] sm:px-5 px-5 font-bold -tracking-widest text-yellow dark:text-white sm:text-[45px] md:text-[60px]"
                        words="Licenses & Certificate"
                    />
                    <p className='mt-[10px] font-semibold px-8 sm:px-0 text-center'>
                        A collection of projects that reflect my skills and expertise
                    </p>
                </header>
                <div className="max-w-[1100px] mx-auto mb-[100px]">
                    <div className="flex flex-wrap justify-center sm:px-0 px-5 items-center mt-[40px] gap-4">
                        {data.map((value, i) => (
                            <Card key={i} className="w-[350px] h-[450px] flex flex-col justify-between">
                                <CardHeader>
                                    <img
                                        src={value.src}
                                        alt="Sertifikat"
                                        className="object-cover object-center w-full h-[200px]"
                                    />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="font-700 text-[20px]">
                                        {value.title}
                                    </CardTitle>
                                    <CardDescription className="font-700 text-[15px]">
                                        {value.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="mt-auto flex justify-between">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button>
                                                <Fullscreen />
                                                {value.preview}
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent aria-describedby="" className="max-w-[800px]">
                                            <DialogHeader>
                                                <DialogTitle className="font-700">
                                                    {value.title}
                                                </DialogTitle>
                                            </DialogHeader>
                                            <iframe src={value.link_pdf} width="100%" height="600px"></iframe>
                                            <a
                                                href={value.link_pdf}
                                                target='__blank'
                                            >
                                                <Button className="max-w-[200px] mt-4">
                                                    <FileDown className="w-5 text-white" />
                                                    <span>Download My Certificate</span>
                                                </Button>
                                            </a>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}

export default transition(Certificate);