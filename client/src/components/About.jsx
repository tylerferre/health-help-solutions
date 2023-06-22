import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return(
        <div className='about'>
            <div className='aboutInfo1'>
                <p><Link to="/" className='infoLink'>Health Help Solutions</Link> was founded with the mission of providing high-quality and reliable staffing solutions
                    to healthcare facilities across the country. We understand the critical role that nurses play in providing
                    exeptional care to patients, and we are commited to connceting heathcare facilities with the most high quality
                    and experienced nurses in the industry.
                </p>
                <p>Here at <Link className='infoLink'>HHS</Link> we offer a wide range of staffing solutions to meet the unique needs of each healthcare facility. 
                    Our team of experienced recruiters work closley with healthcare facilities to understand their staffing requirements 
                    and to identify the most suitable candidates for each position.
                </p>
            </div>
            <div className='aboutInfo2'>
                <p>We pride ourselves on our ability to provide flexible and reliable staffing solutions that meet the changing needs of
                    healthcare facilities. Whether you need temporary staffing solutions to cover short-term gaps in your staffing or
                    permanent staffing solutions to fill long-term vacancies, we have the expertise and resources to deliver the right solution for your needs.
                </p>
                <p>At our nurse staffing company, we are committed to upholding the highest standards of professionalism and ethics. 
                    We believe in treating all of our clients and candidates with respect and fairness, and we are dedicated to building long-term 
                    relationships based on trust and mutual respect.
                </p>
            </div>
            <div className='aboutInfo3'>
                <p>Thank you for considering <Link to="/" className='infoLink'>Health Help Solutions</Link> for your staffing needs. We look forward to the opportunity to serve you and 
                    to help you achieve your staffing goals.
                </p>
            </div>
        </div>
    )
}

export default About