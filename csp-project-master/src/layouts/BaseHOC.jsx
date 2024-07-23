import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const BaseHOC =(Component)=>
    ({...props})=>{
        return(
            <div>
                <Navbar/>
                <Component {...props} />
                <Footer/>
            </div>
        )
    };

export default BaseHOC
