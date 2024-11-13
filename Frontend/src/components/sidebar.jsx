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
        <>
            <div className="flex h-screen">
                <div className="bg-green-800 w-1/8 text-lg font-semibold">
                    <div className="underline underline-offset-1 block p-4">Home</div>
                    <div className="underline underline-offset-1 block p-4">News</div>
                    <div className="underline underline-offset-1 block p-4">Contact</div>
                    <div className="underline underline-offset-1 block p-4">About</div>
                </div>
                {/* <div className="flex justify-center bg-black w-full text-white">
                    <Table isLoading={isLoading} data={data}/> 
                </div> */}
            </div>
        </>
    )
}