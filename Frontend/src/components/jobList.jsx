import JobLinks from "./routing";

export default function JobList() {
    return (
        <div className="flex flex-col">
            {/* <div className="flex justify-center text-2xl font-semibold pt-2 underline underline-offset-1">
                Job Types
            </div> */}
            <div>
                <JobLinks/>
            </div>
        </div>
    )
}