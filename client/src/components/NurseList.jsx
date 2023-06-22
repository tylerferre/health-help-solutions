import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { context } from '../ContextProvider'
import axios from "axios";

const NurseList = (props) => {

    const contextData = useContext(context)
    

    const profileCards = contextData.nurseData.map((item, index) => (
        <div className="profileCards">
            
            <div key={index}>
                <Link to={`/nurses/${item._id}`}>
                    <div className="link">
                        <img src={item.imgUrl}/>
                        <h3 className="linkName">{item.firstName} {item.lastName}</h3>
                    </div>
                </Link>
            </div>
        </div>
    ))


    return(
        <div className="nurseList">
            <section className="search">
               {contextData.searchForm} 
            </section>
            
           
            <div className="nurses">
                {profileCards}
            </div>
        </div>
    )
}

export default NurseList