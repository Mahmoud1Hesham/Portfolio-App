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
import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";

export default function Home() {
  return <>

    <WaterWaveWrapper imageUrl="" dropRadius="3" perturbance="50" resolution="2048">

      {() =>

        <div className="pb-8">

          <LandingSection />
          <FeaturedSection />
          <AboutSection />
        </div>



      }
    </WaterWaveWrapper>
  </>
}
