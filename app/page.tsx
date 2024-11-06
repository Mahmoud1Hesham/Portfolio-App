'use client';
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { IoHome } from "react-icons/io5";
import { SiGraphite } from "react-icons/si";
import { MdOutlineRocketLaunch } from "react-icons/md";
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
          </Card>
        </div>

      </div>}

    </WaterWaveWrapper>
  </>
}
