import { Link } from 'react-router-dom';

const hamburgerIcon = (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);


export default function Topbar() {
    return (
        <>
            <div className="flex-1">
                <div className="bg-[#004D3C] h-24 flex flex-row items-center">
                    <div className="pt-4 pl-4">
                        {hamburgerIcon}
                    </div>
                    <div className="pt-4 pl-4 text-5xl text-white font-bold hover:text-gray-100 hover:scale-105 transition-all duration-300">
                        <Link to="/" >NCR ATLEOS</Link>
                    </div>
                    {/* <div className="pb-4 underline underline-offset-1">
                        Financial Reporting Assistance
                    </div> */}
                </div>
            </div>
        </>
    )

}