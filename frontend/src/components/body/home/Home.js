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
                src="https://i.ibb.co/7KpH2LY/download.jpg"
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
                src="https://i.ibb.co/nqyL3zx/south-indian-bridal-makeup-artists.jpg"
                text="Decorators"
                label="Beautiful"
                path="/decorators"
              />
              <CardItem
                src="https://i.ibb.co/p0pFdVx/banquet-halls-in-pimpri-chinchwad-pune.jpg"
                text="Venues"
                label="Destination"
                path="/venues"
              />
              <CardItem
                src="https://i.ibb.co/3hhHYj7/How-mehndi-plays-an-important-role-in-an-indian-wedding-1.jpg"
                text="Mehandi Artist"
                label="mehandi"
                path="/mehandi"
              />
              <CardItem
                src="https://i.ibb.co/3hhHYj7/How-mehndi-plays-an-important-role-in-an-indian-wedding-1.jpg"
                text="Bridal Designers"
                label="Rooh rang"
                path="/bridaldesigner"
              />
              <CardItem
                src="images/img-8.jpg"
                text="choreographers"
                label="Love"
                path="/choreographers"
              />
              <CardItem
                src="https://i.ibb.co/3hhHYj7/How-mehndi-plays-an-important-role-in-an-indian-wedding-1.jpg"
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
        </div>
      </section>
      </div>
    </>
  );
}

export default Cards;
