import React from 'react'
import './about.css'

function about_us() {
    return (
        <div className="about">
            <center><img className="about-fluid" alt="BrandLogo" src="https://i.ibb.co/f9Fm2th/Shubh-Shagun.png"></img></center>
            <p className="text-about">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are one of the emerging Wedding event Planner in India. Established in 2018, we are commited of our good 
                services and varieties of vendor services at affordable price. </p>
                <div>
                    <center><h3 className="team">Our Team</h3></center>
                    <div className="team-card">
                        <div className="pro-team">
                            <center><img className="own" alt="" src="https://res.cloudinary.com/flash-cloud/image/upload/v1617515045/Sumit_km9cni.jpg"/></center>
                            <center>Sumit Roy</center>
                            <h4 className="common">About</h4>
                            <p className="common">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <a href="https://github.com/sumit-roy-au9"><img className="github" alt="" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
                        </div>
                        <div className="pro-team">
                            <center><img className="own" alt="" src="https://res.cloudinary.com/flash-cloud/image/upload/v1617515598/Lipsa_gqli0e.jpg"/></center>
                            <center>Lipsa Behra</center>
                            <h4 className="common">About</h4>
                            <p className="common">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <a href="https://github.com/lipsa-behera"><img className="github" alt="" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default about_us;
