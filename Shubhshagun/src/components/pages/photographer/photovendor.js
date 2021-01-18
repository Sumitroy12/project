import React, { Component } from 'react';
import card from "./photographerdata";
import vendorData from "./photoVendordata";
import { SRLWrapper } from 'simple-react-lightbox';
import "./vendor.css";
import QRCode from "qrcode.react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import {FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon} from 'react-share';
import Disp from "./background";

class photovendor extends Component {

    render() {
        const  user = sessionStorage.getItem("user")

        return (
            <div className="page">
                <style></style>
                {console.log({Disp})}
                <div className="container">
                    {vendorData.map((data) => (
                        data.vendor_name===user &&
                    //  ------------------------------------------Left Section-------------------------------------
                    
                    <div className="left">
                        <div>
                        <center ><h1 className="font">PHOTO GALLERY</h1></center>
                            <center><img className="main" alt="" src={data.gallery.pic1} /></center>
                            <SRLWrapper>
                                <center>
                                    <img className="photo" alt="" src={data.gallery.pic1} />
                                    <img className="photo" alt="" src={data.gallery.pic2} />
                                    <img className="photo" alt="" src={data.gallery.pic3} />
                                    <img className="photo" alt="" src={data.gallery.pic4} />
                                    <img className="photo" alt="" src={data.gallery.pic5} />
                                    <img className="photo" alt="" src={data.gallery.pic6} />
                                    <img className="photo" alt="" src={data.gallery.pic7} />
                                    <img className="photo" alt="" src={data.gallery.pic8} />
                                    <img className="photo" alt="" src={data.gallery.pic9} />
                                    <img className="photo" alt="" src={data.gallery.pic10} />
                                </center>
                            </SRLWrapper>
                            <hr></hr>
                        </div>
                        <div className="data_vendor">
                            <div>
                                <h2 className="font">
                                    COSTING
                                </h2>
                                <ul className="li_data">
                                    <li><h3>{data.costings.type.t1}</h3></li>
                                    <li>{data.costings.cost.c1}</li><br></br>
                                    <li><h3>{data.costings.type.t2}</h3></li>
                                    <li>{data.costings.cost.c2}</li><br></br>
                                    <li><h3>{data.costings.type.t3}</h3></li>
                                    <li>{data.costings.cost.c3}</li><br></br>
                                    <li><h3>{data.costings.type.t4}</h3></li>
                                    <li>{data.costings.cost.c4}</li><br></br>
                                    <li><h3>{data.costings.type.t5}</h3></li>
                                    <li>{data.costings.cost.c5}</li><br></br>
                                    <li><h3>{data.costings.type.t6}</h3></li>
                                    <li>{data.costings.cost.c6}</li><br></br>
                                </ul>
                            </div>
                            <div className="li_data">
                                <h3 className="font">PAYMENT POLICY</h3>
                                <ul >
                                    <li>{data.policy.p1}</li>
                                    <li>{data.policy.p2}</li>
                                    <li>{data.policy.p3}</li>
                                </ul><br></br>
                            </div>
                            <div className="li_data">
                                <h3 className="font">CANCELLATION POLICY</h3>
                                <span>{data.cancel}</span>
                            </div>
                            <div>
                                <h3 className="font">TRAVEL POLICY</h3>
                                <span>{data.about.travel_policy}</span>
                            </div>
                            <div className="li_data">
                                <h3 className="li_data">About us</h3>
                                <h5 className="font"><span >INTRODUCTION</span><br></br></h5>
                                <span className="li_data">{data.about.introduction}</span><br></br>
                                <h5 className="font"><span className="li_data">WORKING</span><br></br></h5>
                                <span>{data.about.working}</span>
                            </div>
                        </div>
                    </div>
                    
            ))}

                    {/* ------------------------------------------Right Section------------------------------------ */}
                    <aside className="right">
                        <hr />
                        <br />
                    {card.map((item)=>(
                        item.vendor_name===user &&
                        <div>
                            <div className="card">
                                <div className="card-header">
                                <h1>{item.vendor_name}</h1> 
                                </div>
                                <div className="small-group">
                                    <div>
                                        <ul className="list-group">
                                            <li className="list-group-item">Photographer in {item.location}</li>
                                            
                                            <li className="list-group-item">{item.charge}</li>
                                            <li className="list-group-item">{item.day}</li>
                                        </ul>
                                    </div>
                                    <div className="badge">{item.ratings}</div>
                                </div>

                                <div className="down">
                                {['down'].map((direction)=>(
                                    <DropdownButton
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    // variant="secondary"
                                    title={` Contact Vendor `}
                                    >
                                    <QRCode value={item.contact} size={200} includeMargin= {2} />
                                    </DropdownButton>
                                    ))}
                                </div>
                                <div className="social_icon">
                                    <FacebookShareButton url="Shubhshagun.com"
                                    quote={"100's of certified vendors on ShubhShagun.com"}>
                                        <FacebookIcon></FacebookIcon>
                                    </FacebookShareButton>
                                    <WhatsappShareButton title="Share us" url="Shubhshagun.com">
                                        <WhatsappIcon></WhatsappIcon>
                                    </WhatsappShareButton>
                                </div>
                            </div>
                            
                            
                        </div>
                    ))}
                    <p className="notify">Note: You can avail 5% discount from this vendor, <br /> Hurry up offer valid till 12 April</p>
                    <img className="verified" src="https://res.cloudinary.com/flash-cloud/image/upload/v1617478703/verified_b1fcsb.jpg" alt="" />
                    </aside>
                </div>
            </div>
        )
    }
}
export default photovendor;