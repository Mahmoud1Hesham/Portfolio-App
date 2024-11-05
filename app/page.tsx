'use client';
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
export default function Home() {
  return <>

    <WaterWaveWrapper imageUrl="" dropRadius="3" perturbance="50" resolution="2048">

      {() => <div className="h-screen"></div> }

    </WaterWaveWrapper>
  </>
}