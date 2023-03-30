//routers , links
import React from "react";
import Card from "../components/Login/Card";
import AboutUsData from "../components/Login/AboutUsData";
import abt from "../pics/about-1.png";
import "../components/AboutUs.css";

function AboutUs() {
  return (
    <>
      {/* <section className="secc">
        <div className="abtpic">
          <img src={abt}></img>
        </div>
        <div>
            <h2>About LORDS!!</h2>
        </div >
        <div className="abtText">
          Salutations from Lord of the Drinks, commonly known as LOTD, best
          restaurant and bar and your favorite place to hang out. Welcome to the
          land of taste as we take you on the best incomparable best Dining
          restaurant experience with an array of lip-smacking food and art. Lord
          of the Drinks serves you the best of bending food curated from local
          and imported ingredients for all the food lovers out there. Our
          commitment to our patrons stays strong for serving the best food
          coupled with an exhilarating concept ambiance set in the medieval era
          theme. Step in and experience the Lord of the Drink’s vibes.
        </div>
      </section>  */}
      <div className="roww">
        <div className="col-md-5">
          <img src={abt} className='pic'></img>
        </div>
        <div className="col-md-7">
          <h2 className="aboutme">About US</h2>
          <p className="mydesc">
            Salutations from Lord of the Drinks, commonly known as LOTD, best
            restaurant and bar and your favorite place to hang out. Welcome to
            the land of taste as we take you on the best incomparable best
            Dining restaurant experience with an array of lip-smacking food and
            art. Lord of the Drinks serves you the best of bending food curated
            from local and imported ingredients for all the food lovers out
            there. Our commitment to our patrons stays strong for serving the
            best food coupled with an exhilarating concept ambiance set in the
            medieval era theme. Step in and experience the Lord of the Drink’s
            vibes.
          </p>
        </div>
      </div>
      <div>
        <br></br>
      <h2 className="feedback">Client Feedback</h2>
      </div>
      <div className="home-cards">
        <Card details={AboutUsData} />
      </div>
    </>
  );
}

export default AboutUs;
