import Histogram from "./histogram";
import JobList from "./jobList";
import PieChart from "./pieChart";
import Topbar from "./topbar";

export default function Home(){
    return (
        <div>
            <div>
                <Topbar/>
            </div>
            <div className="bg-black text-white">
                <JobList/>
            </div>
            <div className="pt-10 text-2xl font-bold flex items-center justify-center">
                Total Jobs Statistics
            </div>
            <div  className="flex h-screen">
                <div className="flex justify-center items-center w-1/2">
                    <PieChart/>
                </div>
                <div className="flex flex-col justify-center items-center w-1/2">
                    <Histogram/>
                </div>
            </div>
        </div>
    )
}