import React, { useState } from 'react';
import Topbar from './topbar';
import SubTopbar from './subtopbar';

export default function Welcome() {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Name submitted:', name);
    };

    return (
        <div>
            <Topbar />
            <div className="bg-black text-white">
                <SubTopbar />
            </div>
            <div className="flex items-center justify-center h-screen bg-[#E5EEEA]">
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <label className="text-[#004D3C] text-2xl mb-4">Enter your name to access the dashboard:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 mb-4 border border-[#004D3C] text-[#004D3C]"
                        required
                    />
                    <button type="submit" className="bg-[#004D3C] text-[#E5EEEA] p-2 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
}
