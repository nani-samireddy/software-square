import React from 'react'
import MotionH1 from '../components/motion_h1'
import MotionP from '../components/motion_p'

export default function ErrorPage() {
    return (
        <div className="h-[80vh]  w-full text-center flex items-center justify-center flex-col">
            <MotionH1>404</MotionH1>
            <MotionP styles="text-lg lg:text-xl">
                Can't find what you are looking for 😅
            </MotionP>
        </div>
    )
}
