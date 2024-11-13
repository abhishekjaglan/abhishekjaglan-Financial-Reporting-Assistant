import Sidebar from "./sidebar";

export default function Table({isLoading, data, job_id}) {
    console.log("Data in table", data);
    console.log('isLoading in table', isLoading);

    if(isLoading){
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-2xl font-bold">Loading...</div>
            </div>
        )
    }else{
        return(
            <>
                <div className="pt-5">
                    {/* <div>
                        <Sidebar/>
                    </div>                */}
                    <div className="table">
                        <table style={{borderCollapse: 'separate', borderSpacing: '0px 20px'}}>
                            <thead>
                                <tr>
                                    <th style={{paddingRight: '150px'}} className="text-xl underline underline-offset-1">Job-ID</th>
                                    <th style={{paddingRight: '120px'}} className="text-xl underline underline-offset-1">Start-Time</th>
                                    <th style={{paddingRight: '120px'}} className="text-xl underline underline-offset-1">End-Time</th>
                                    <th style={{paddingRight: '80px'}} className="text-xl underline underline-offset-1">Total-Time</th>
                                    <th className="text-xl underline underline-offset-1">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((val,key) => {
                                    return (
                                        <tr key={key}>
                                            <td> {val.job_id } </td>
                                            <td> {val.start_time} UTC</td>
                                            <td> {val.end_time} UTC</td>
                                            <td> {val.total_time} </td>
                                            <td> {val.status} </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}