import BackgroundImage from "@/components/BackgroundImage";
import Banner from "@/components/Banner";
import PriceContainer from "@/components/PriceContainer";

export default function Home() {
    return (
        <div className="w-full h-screen bg-white relative">
            <BackgroundImage className="absolute top-0 left-0" />
            <div className="absolute pt-16 px-6 pb-[200px] top-0 left-0 w-full h-screen z-10 flex flex-col items-center overflow-scroll">
                <Banner />
                <PriceContainer />
            </div>
        </div>
    );
}