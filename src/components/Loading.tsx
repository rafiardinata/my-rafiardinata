import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Loading = () => {

    const [text, setText] = useState('')
    const [showImg, setShowImg] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowImg(false)
            setText(
                'Welcome'
            )
        }, 3000)
    }, [])
    return (
        <>
            <div>
                {
                    showImg ? (
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>

                    ) : (
                        <h3>{text}</h3>
                    )
                }
            </div>
        </>
    )
}

export default Loading