import { featuredData } from "@/app/data";
import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import Heading from "@/components/heading/heading";

const MainFeature = featuredData[0]

function FeaturedSection() {
    return <>
        <div className="pt-24 px-3 lg:px-8">
            {/* Heading */}
            <Heading number="01" title_1="Featured" title_2="Work" />
            {/*Main Featured Card */}
            <FeaturedCard title={MainFeature.title} tag={MainFeature.tag} active video={MainFeature.video} />
<div className="mt-24">
    <ExpandableFeatured/>
</div>
        </div>

    </>

}


export default FeaturedSection;