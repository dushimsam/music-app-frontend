import {useSelector} from "react-redux";
import React, {useEffect} from "react";
import Router from "next/router";
import {Navbar} from "../components/Navbar";
import Auth from "../middlewares/auth";


export const ForbiddenPage = ({children}) => {
    const authUser = useSelector(state => state.authUser)

    // useEffect(() => {
    //     const isActive = Auth.isActive();
    //     if (isActive) {
    //         Router.back();
    //     }
    // }, [authUser])

    return (<>
        {children}
    </>)
}

export default ForbiddenPage;