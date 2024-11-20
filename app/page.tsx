'use client';
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { IoHome } from "react-icons/io5";
import { SiGraphite } from "react-icons/si";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Input from "@/components/ui/input";
import { FaCircleInfo } from "react-icons/fa6";
import Textarea from "@/components/ui/textarea";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fansy-button";
import { FaArrowRightLong } from "react-icons/fa6";
import LiveClock from "@/components/ui/liveclock";
import MagneticWrapper from "@/components/visualEffects/magnetic-effect-wrapper";
import ScrollDown from "@/components/ui/scroll-down";
export default function Home() {
  return <>

    <WaterWaveWrapper imageUrl="" dropRadius="3" perturbance="50" resolution="2048">

      {() => <div className="w-full p-10">
        <div className="max-w-2xl mx-auto">
          <Card title="UI Componenets">
            <div className="grid grid-cols-4">
            <Button>
              Basic Button
            </Button>
            <Button>
            <IoHome />
              Icon Button
            </Button>
            <Button>
            <SiGraphite />
            </Button>
            <Button link="https://www.google.com">
            <MdOutlineRocketLaunch />
            Google
            </Button>
            </div>
            <Input type="text" placeholder="Your Name" />
            <Input type="text" placeholder="Your Info" icon={<FaCircleInfo />}/>
            <Textarea placeholder="Your opinon"/>
            <Textarea placeholder="Your opinon" icon={<FaCircleInfo />}/>
            <Profile/>
            <MagneticWrapper className="w-[350px]">
            <FancyButton text="Contact us" icon={<FaArrowRightLong />} />
            </MagneticWrapper>
            <MagneticWrapper>
              <ScrollDown/>
            </MagneticWrapper>
            <LiveClock timeZone="Africa/Cairo"/>
          </Card>
        </div>

      </div>}

    </WaterWaveWrapper>
  </>
}
