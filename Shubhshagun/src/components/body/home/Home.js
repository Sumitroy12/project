import React from 'react';
import './home.css';
import CardItem from './CardItem';
import HeroSection from '../hero/HeroSection';
import Button from 'react-bootstrap/esm/Button';


function Cards() {
  return (
    <>
      <HeroSection />
      <div className="cards">
        <h1>🔥 Choose from the best vendors in Country</h1>
        <div>
          <div>
            <ul
              style={{
                display: "flex",
                flexFlow:"wrap",
                justifyContent: "center",
                margin: "48px 0",
              }}
            >
              <CardItem
                src="https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2018/10/Pre-Wedding-Photoshoot-Destinations-in-India.jpg"
                text="Photographers"
                label="Memories"
                path="/photographers"
              />
              <CardItem
                src="https://i.ibb.co/nqyL3zx/south-indian-bridal-makeup-artists.jpg"
                text="MakeUp Artist"
                label="Beautiful"
                path="/makeupartist"
              />
              <CardItem
                src="https://cdn0.weddingwire.in/emp/fotos/4/7/8/9/r10_2x_screen-shot-2019-04-16-at-3-39-48-pm_15_214789-1555409681.png"
                text="Decorators"
                label="Beautiful"
                path="/decorators"
              />
              <CardItem
                src="https://media.weddingz.in/images/025ed369323fed19628f41b24f771452/outdoor-wedding-venues-in-lonavala-to-plan-out-a-rustic-countryside-ceremony-1.jpg"
                text="Venues"
                label="Destination"
                path="/venues"
              />
              <CardItem
                src="https://res.cloudinary.com/functionmania-1/image/fetch/q_100/https://www.functionmania.com/vendorimage/0729_0729_twinkle-mehandi-art-mehandi-artist-in-jaipur-triveni-nagar-durgapura-mansarovar-k8wjb1g9xx3kyalkallu-10-01-2015-1698_6729583917.jpg"
                text="Mehandi Artist"
                label="mehandi"
                path="/mehandi"
              />
              <CardItem
                src="https://assets0.mirraw.com/images/8512688/1102_small.jpg?1607153490"
                text="Bridal Designers"
                label="Rooh rang"
                path="/bridaldesigner"
              />
              <CardItem
                src="https://souldancestudio.in/wp-content/uploads/2018/12/Add-heading.jpg"
                text="choreographers"
                label="Love"
                path="/choreographers"
              />
              <CardItem
                src="https://www.mixcityinc.com/blog/wp-content/uploads/2018/10/wedding-dj.jpeg"
                text="DJ"
                label="Rooh rang"
                path="/dj"
              />
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img className="coupon" src="https://res.cloudinary.com/flash-cloud/image/upload/v1617075965/discount_irabnp.jpg" alt="discount" border="0" />
        <section className="dates"
          style={{
            margin: "48px auto",
            maxWidth: "630px",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "5px outset #FF4810",
            padding: "5%",
          }}
        >
          
          <img className="cartoon" src="https://i.ibb.co/xzKpSNL/bengali-wedding.jpg" alt="bengali-wedding" border="3" />
          <br></br>
          <a href="https://www.drikpanchang.com/shubh-dates/shubh-marriage-dates-with-muhurat.html">
            <Button type="primary">Get Mariage Dates</Button>{" "}
          </a>
          <br />
          <span>These marriage dates are based on hindu calender</span>
          <h6>powered by drikpanchang</h6>
        </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 className="stories">Success Stories</h2>
        <br />
        <div>
          <center>
          <video
            loop
            controls
            style={{
              zIndex: "unset",
              width: "30%",
              height: "25%",
              position: "relative",
              margin: '5px',
            }}
            src="https://res.cloudinary.com/flash-cloud/video/upload/v1616996805/InVideo_4_sospv4.mp4"
          >
          </video>
          <video
            loop
            controls
            style={{
              zIndex: "unset",
              width: "30%",
              height: "25%",
              position: "relative",
              margin: '5px',
            }}
            src="https://res.cloudinary.com/flash-cloud/video/upload/v1617071548/InVideo_2_hwf1me.mp4"
          >
          </video>
          </center>
        </div>
      </section>
      </div>
    </>
  );
}

export default Cards;
