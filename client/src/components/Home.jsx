import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    return(
        <div className="home">
            <img src="https://media.istockphoto.com/id/1473559425/photo/female-medical-practitioner-reassuring-a-patient.webp?b=1&s=170667a&w=0&k=20&c=fO6MRlgvDbjynwtsgivtH4wGoyYwFk0zL-9EHMxMaTg="/>
            <div className="homeImg">
                <h2>Medical Help Solved</h2>
                <button onClick={()=> navigate('/contact')} className="homeBtn1">Get in touch now</button>
                <button onClick={()=> navigate('/about')} className="homeBtn2">Learn more</button>
            </div>
            <div className="homeInfo">
                <div className="hInfo1">
                    <h4>Experienced</h4>
                    <p>Our nurses are experienced and ready for any job you may need.</p>
                </div>
                <div className="hInfo1" style={{margin: '0 -120px'}}>
                    <h4>Reliable</h4>
                    <p>Wether its a last minute change or an unexpected emergency, 
                        our nurses will be there on time and ready to go.</p>
                </div>
                <div className="hInfo1">
                    <h4>Flexible</h4>
                    <p>Short-term or long-term we've got it covered, our nurses can 
                        work the schedule you need.</p>
                </div>
            </div>
        </div>
    )
}

export default Home