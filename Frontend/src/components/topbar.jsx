import { Link } from 'react-router-dom';

export default function Topbar(){
    return (
        <>
            <div className="flex-1">
                <div className="bg-green-900 h-24 flex flex-col items-center">
                    <div className="pt-4 text-5xl text-white font-bold">
                        <Link to="/" >NCR ATLEOS</Link>
                    </div>
                    <div className="pb-4 underline underline-offset-1">
                        Financial Reporting Assistance
                    </div>
                </div>
            </div>
        </>
    )
   
}