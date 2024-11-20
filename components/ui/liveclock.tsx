'use client'
import moment from "moment-timezone";
import "moment-timezone/data/packed/latest";
import { FC, useEffect, useState } from "react"

interface LiveClockProps {
    timeZone: string
}


const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
    const [time, setTime] = useState<string>("");
    useEffect(() => {
        const updateClock = () => {
            const currentTime = moment().tz(timeZone).format('HH:mm');
            setTime(currentTime)
        }
        const intervalId = setInterval(updateClock, 1000)
        //cleanup interval on unmount 
        return () => {
            clearInterval(intervalId);
        }
    }, [timeZone])

    return <>
    <div className="text-secondary-foreground font-semibold text-3xl">
        {
            time ? <div className="flex justify-center items-center gap-[.5vw]">
                <span>{timeZone.split('/')[1]}</span>,<span>{time}</span>
            </div> : 
                <div className="hourglassBackground">
                    <div className="hourglassContainer">
                        <div className="hourglassCurves"></div>
                        <div className="hourglassCapTop"></div>
                        <div className="hourglassGlassTop"></div>
                        <div className="hourglassSand"></div>
                        <div className="hourglassSandStream"></div>
                        <div className="hourglassCapBottom"></div>
                        <div className="hourglassGlass"></div>
                    </div>
                </div>
        }
    </div>
    </>
}

export default LiveClock;