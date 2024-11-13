import React from "react";
import { Link } from "react-router-dom";

export default function JobLinks(){
    return (
      <div>
        <ul className="flex justify-between">
                <li className="p-4 text-xl font-semibold">
                    <Link to="/atlasBackup">&#9758; Atlas Backup</Link>
                </li>
                <li className="p-4 text-xl font-semibold">
                    <Link to="/catmInbound">&#9758;  CATM Inbound</Link>
                </li>
                <li className="p-4 text-xl font-semibold">
                    <Link to="/icmExtract">&#9758; ICM Extract</Link>
                </li>
                <li className="p-4 text-xl font-semibold">
                    <Link to="/planExport">&#9758; Plan Export</Link>
                </li>
                <li className="p-4 text-xl font-semibold">
                    <Link to="/anaplanForecastInbound">&#9758; Anaplan Forecast Inbound</Link>
                </li>
            </ul>            
      </div>
    );
};