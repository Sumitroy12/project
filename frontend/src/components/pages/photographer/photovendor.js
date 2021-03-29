import React, { Component } from 'react';
import card from "./photographerdata";
import vendorData from "./photoVendordata";
import { SRLWrapper } from 'simple-react-lightbox';
import "./vendor.css";
import QRCode from "qrcode.react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import {FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon} from 'react-share';


class photovendor extends Component {

    render() {
        const  user = sessionStorage.getItem("user")
        return (
            <div className="container">
                {vendorData.map((data) => (
                    data.vendor_name===user &&
                //  ------------------------------------------Left Section-------------------------------------
                
                <div className="left">
                    <div>
                        <h1>{data.vendor_name}</h1>
                        <h3>Photo Gallery</h3>
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
                    <div>
                        <div>
                            <h2>
                                COSTING
                            </h2>
                            <ul>
                                <li><h3>{data.costings.type.t1}</h3></li>
                                <li>{data.costings.cost.c1}</li>
                                <li><h3>{data.costings.type.t2}</h3></li>
                                <li>{data.costings.cost.c2}</li>
                                <li><h3>{data.costings.type.t3}</h3></li>
                                <li>{data.costings.cost.c3}</li>
                                <li><h3>{data.costings.type.t4}</h3></li>
                                <li>{data.costings.cost.c4}</li>
                                <li><h3>{data.costings.type.t5}</h3></li>
                                <li>{data.costings.cost.c5}</li>
                                <li><h3>{data.costings.type.t6}</h3></li>
                                <li>{data.costings.cost.c6}</li>
                            </ul>
                        </div>
                        <div>
                            <h2>PAYMENT POLICY</h2>
                            <li>{data.policy.p1}</li>
                            <li>{data.policy.p2}</li>
                            <li>{data.policy.p3}</li>
                        </div>
                        <div>
                            <h2>CANCELLATION POLICY</h2>
                            <span>{data.cancel}</span>
                        </div>
                        <div>
                            <h2>TRAVEL POLICY</h2>
                            <span>{data.about.travel_policy}</span>
                        </div>
                        <div>
                            <h2>About us</h2>
                            <span>INTRODUCTION</span>
                            <span>{data.about.introduction}</span>
                            <span>WORKING</span>
                            <span>{data.about.working}</span>
                        </div>
                    </div>
                </div>
                
        ))}

                {/* ------------------------------------------Right Section------------------------------------ */}
                <div className="right">
                {card.map((item)=>(
                    item.vendor_name===user &&
                    <div>
                        <div class="card">
                            <div class="card-header">
                            {item.vendor_name} <span class="badge badge-secondary">{item.ratings}</span>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Photographer in {item.location}</li>
                                <li class="list-group-item">{item.charge}</li>
                                <li class="list-group-item">{item.day}</li>
                            </ul>
                            {['down'].map((direction)=>(
                                <DropdownButton
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Contact Vendor `}
                                >
                                <QRCode value={item.contact} size={200} includeMargin= {2} />
                                </DropdownButton>
                                ))}
                                <FacebookShareButton url="Shubhshagun.com"
                                quote={"100's of certified vendors on ShubhShagun.com"}>
                                    <FacebookIcon></FacebookIcon>
                                </FacebookShareButton>
                                <WhatsappShareButton title="Share us" url="Shubhshagun.com">
                                    <WhatsappIcon></WhatsappIcon>
                                </WhatsappShareButton>
                                    
                        </div>
                        
                        
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
export default photovendor;