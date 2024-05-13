import { useState } from 'react';
import { FaFilter, FaTimes } from "react-icons/fa";

const SideBar = () => {
    const [sidebarOpen, setSideBarOpen] = useState(false);

    return (
        <>
            <div className='filter' onClick={() => {
                setSideBarOpen(!sidebarOpen);
            }}>
                <hr></hr>
                <FaFilter />
            </div>
            {sidebarOpen && (
                <div className="sidebar-content">
                    <div className="close-icon" onClick={() => setSideBarOpen(false)}>
                        <FaTimes />
                        <hr></hr>
                    </div>
                </div>
            )}
        </>
    );
}

export default SideBar;
