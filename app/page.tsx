import Detailes from "@/components/best-detailes/detailes";
import CardOptions from "@/components/card-options/card-options";
import AboutCompany from "@/components/company/about-company";
import Components from "@/components/components/components";
import Config from "@/components/configuration/config";
import CustomReviews from "@/components/custom/custom-reviews";
import HeroCarusel from "@/components/hero/hero-carusel";
import AllItems from "@/components/items/all-items";
import Support from "@/components/support/support";

export default function IndexPage() {
    return (
        <>
            <HeroCarusel />
            <AllItems />
            <Detailes />
            <Config />
            <Components />
            <AboutCompany />
            <CardOptions />
            <Support />
            <CustomReviews />
        </>
    );
}
