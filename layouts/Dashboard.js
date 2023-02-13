import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";
// import RouteProtector from "../../middlewares/RouteProtector";
import React, {useEffect, useState} from "react";
import Footer from "../components/Footer";


const ContentCover = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(true)

    useEffect(() => {
        if (window.innerWidth < 776) {
            setShowSidebar(false)
        }
    }, [])

    return (
        <div className="row mx-0 page min-vh-100">
            <div
                className={
                    "px-0 " + (showSidebar ? "col-12 col-md-3 col-lg-2" : "d-none")
                }
            >
                <div style={{position: "sticky", top: 0}}>
                    <div
                        className="d-md-none bg-danger p-2 rounded-circle position-fixed shadow"
                        onClick={() => setShowSidebar(false)}
                        style={{zIndex: 12, top: 5, right: 5}}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                fill="white"
                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                            />
                        </svg>
                    </div>
                    <Sidebar/>
                </div>
            </div>
            <div
                className={
                    "px-0 " + (showSidebar ? "col-12 col-md-9 col-lg-10" : "col-12")
                }
            >
                <div className="min-vh-100 d-flex flex-column justify-content-between">
                    <div>
                        <div style={{position: "sticky", top: 0, zIndex: 10}}>
                            <AdminNavbar
                                setShowSidebar={setShowSidebar}
                                sidebarState={showSidebar}
                            />
                        </div>
                        <div className="main mb-5 mt-3 px-0 px-sm-1 px-md-2 px-3">
                            {children}
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default function AdminDashboard({children, isVerified}) {
    return (
        isVerified ?
            <ContentCover children={children}/> :<></>
    );
}