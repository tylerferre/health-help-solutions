import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { context } from "../ContextProvider";

const NurseProfile = () => {

    const navigate = useNavigate()
    const contextData = useContext(context)

    const {nurseId} = useParams()
    const foundNurse = contextData.nurseData.find(item => item._id === nurseId)

    return(
        <div className="nurseProfile">
            <div className="profilePic">
                <img src={foundNurse.imgUrl}/>
            </div>
            <div className="profileInfo">
                <h2>{foundNurse.firstName} {foundNurse.lastName}</h2>   
                <p><span>Age:</span> {foundNurse.age}</p>
                <p><span>Education:</span> {foundNurse.education}</p>
                <p><span>Experience:</span> {foundNurse.experience}</p>
                <p><span>Description:</span> {foundNurse.description}</p>
            </div>
            <button className="backButton" onClick={()=> navigate('/nurses')}>Back</button>
        </div>
    )
}

export default NurseProfile