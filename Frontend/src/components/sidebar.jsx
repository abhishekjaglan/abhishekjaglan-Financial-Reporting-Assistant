import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./table";

export default function Sidebar() {
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsLoading(true);

    //         try {
    //             const response = await axios.get("http://localhost:3000/api/send");
    //             setData(response.data);
    //             console.log("Response.data",response.data);
    //             console.log("Data",data);
    //             setIsLoading(false);
    //             console.log("IsLoading",isLoading);
    //         } catch (error) {
    //             console.error("Error fetching data",error);
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchData();
    //     const interval = setInterval(fetchData,20 * 60 * 1000);

    //     return () => clearInterval(interval);
    // },[]);

    return (
        <div className={`fixed top-0 left-0 h-full bg-green-800 w-64 transform transition-transform duration-300 ease-in-out ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col text-white text-lg font-semibold">
                <Link to="/" className="hover:bg-green-700 underline underline-offset-1 block p-4">
                    Home
                </Link>
                <Link to="/news" className="hover:bg-green-700 underline underline-offset-1 block p-4">
                    News
                </Link>
                <Link to="/contact" className="hover:bg-green-700 underline underline-offset-1 block p-4">
                    Contact
                </Link>
                <Link to="/about" className="hover:bg-green-700 underline underline-offset-1 block p-4">
                    About
                </Link>
            </div>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-[-1] transition-opacity duration-300 ${props.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={props.onClose}>
            </div>
        </div>
    )
}