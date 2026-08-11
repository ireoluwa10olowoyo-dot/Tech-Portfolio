import { BrowserRouter, Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';


function Hero(){
    return(
        <>
        <div className="flex items-center justify center">
            <h1 className="mr-230">Ire Olowoyo</h1>
            <NavLink to="/Hero" className=""/>Hero<NavLink/>
            <NavLink to="/AboutMe" className=""/>AboutMe<NavLink/>
            <NavLink to="/Projects" className=""/>Projects<NavLink/>
            <NavLink to="/Skills" className=""/>Skills<NavLink/>
            <NavLink to="/Experience" className=""/>Experience<NavLink/>
            <NavLink to="/Achievements" className=""/>Achievements<NavLink/>
            <NavLink to="/Contact" className=""/>Contact<NavLink/>
        </div>

        </>
    )
}
export default Hero