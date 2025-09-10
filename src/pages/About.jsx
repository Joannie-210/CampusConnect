import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";
import event from "../assets/AboutAssets/event.jpg";
import Aptech_Limited_Logo from "../assets/AboutAssets/Aptech_Limited_Logo.svg.png";
import middleSex from "../assets/AboutAssets/middleSex.jpg";
import years from "../assets/AboutAssets/years.jpg";
import Alumni from "../assets/AboutAssets/Alumni.webp";
import bestIT from "../assets/AboutAssets/bestIT.jpg";
import State from "../assets/AboutAssets/State-of-the-art labs.jpg";
import Partnership from "../assets/AboutAssets/Partnership.jpeg";
import Recognizedexcellence from "../assets/AboutAssets/Recognized-excellence.webp";
import Hackathon from "../assets/AboutAssets/Hackathon.jpg";
import TechFest from "../assets/AboutAssets/TechFest.jpeg";
import Robotics from "../assets/AboutAssets/Robotics.jpeg";
import Dance from "../assets/AboutAssets/Dance competition.jpg";
import MusicNights from "../assets/AboutAssets/Music-Nights.jpg";
import international from "../assets/AboutAssets/international_day.jpg";
import AlumniMeet from "../assets/AboutAssets/AlumniMeet.jpg";
import BloodDonation from "../assets/AboutAssets/Blood-Donation.jpeg";
import Intercollege from "../assets/AboutAssets/Inter-college Sports.webp";
import aptechlocation from "../assets/AboutAssets/aptechlocation.webp"
const slides = [
  {
    img: Alumni,
    title: "About CampusConnect",
    desc: " This portal centralizes event information for students, faculty and  visitors or potential Sponsors. It showcases upcoming and past events, galleries, and contact details for organizers.",
  },
  {
    img: event,
    title: "CampusConnect is an official event",
    desc: "Aptech Global Learning Institute, Affiliated with MiddleSex University London , where you join current student on the first to third year of  their course with computing degree.",
    sub: "Our Platform Centralizes all Technical Events like (TechFest, Hackathon, or Robotics Championship), Cultural Events Such as (Annual Day, Music Nights, or Dance Competitions), and Social Events Such as(Inter-college Sports Meet, Blood Donation Drives, or Alumni Meet ) are hosted on campus.",
  },
  {
    img: Intercollege,
    desc: "By Offering Detailed Schedules, Desciptions and Insights Into each events, CampusConnect ensures that students,faculty,alumni,and sponsors can stay fully aware or informed and actively engage in the campus life.",
  },
];
// Technical events
const aboutevents = [
  {
    id: 1,
    title: "Hackathon",
    description: " 24-hours coding marathon where teams build innovative",
    image: Hackathon,
  },
  {
    id: 2,
    title: "TechFest",
    description:
      "Annual technology festival featuring workshops, guest lectures, and competitions.",
    image: TechFest,
  },
  {
    id: 3,
    title:"Robotics Championship",
    description:"showcasting cutting-edge rebotics projects in inter-college competitions.",
    image:Robotics
  },

  // Cultural events
  {
    id: 4,
    title:"Annual Day",
    description:"Annual International Day, where we celebrate the incredible 120+ nationalities that make up our vibrant university community",
    image:international,
  },
  {
    id: 5,
    title:"Music Nights",
    description:"Student bands, DJs, or even professional artists Student bands, DJs, or even professional artists",
    image:MusicNights
  },
  {
    id: 6,
    title:"Dance Competitions",
    description:"Dance competitions are usually one of the most energetic and crowd-pulling cultural events.showcase both talent and teamwork.",
    image:Dance
  },
  // Sports and Other Activities
  {
    id: 7,
    title:" Inter-college Sports Meet",
    description:"The inter College sports meet brings all athletes together from apteh and partnered institutions to compete. ",
    image:Intercollege
  },
  {
    id: 8,
    title:"Blood Donation Drives",
    description:"your blood donation drives encourages students to give back to community by contributing to life-saving heathcare initiatives in partnership with leading  hospitals and NGOs.",
    image:BloodDonation
  },
  {
    id: 9,
    title:"Alumni Meet",
    description:" Annual gethering of past graduates, share experiences,mentor students, this builds networking and  career opportunities.",
    image:AlumniMeet
  },
];

// timelines 
const timelines =[
  {
    month:"January-February",
    title:"Inter-college Sports Meet",
    description:"Competitions in every or various aport like soccer, football, basketball etc,any you can mention we have and we do."
  },
  {
    month:"January-February",
    title:"Inter-college Sports Meet",
    description:"Competitions in every or various aport like soccer, football, basketball etc,any you can mention we have and we do."
  },
  {
    month:"January-February",
    title:"Inter-college Sports Meet",
    description:"Competitions in every or various aport like soccer, football, basketball etc,any you can mention we have and we do."
  },
  {
    month:"January-February",
    title:"Inter-college Sports Meet",
    description:"Competitions in every or various aport like soccer, football, basketball etc,any you can mention we have and we do."
  },
  {
    month:"January-February",
    title:"Inter-college Sports Meet",
    description:"Competitions in every or various aport like soccer, football, basketball etc,any you can mention we have and we do."
  }
]

const About = () => {
  // this shows the current value the image will be showing
  const [currentIndex, setcurrentIndex] = useState(0);

  //auto slide every 5seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="about-conta">
        <div className="aboutus">
          <div
            className="about-usslider"
            // this moves left by 100% of the container width and the (-) is used because we are sliding to the left.
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="aboutSlide" key={index}>
                <img src={slide.img} alt={slide.title} />
                <div className="about-lay">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  {/* <p>{slide.sub}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*======================== College Overview=================================== */}
        <section className="about-overview">
          <div className="about-overview-header">
            <h2>College Overview</h2>
            <p>
              Aptech Global Learning Institute is Located at PortHarcourt
              Nigeria, is Affiliated with Middlesex University,London through an
              academic partnership for top-up degrees.Established in 2005,it is
              recognized for their excellence technology education and
              innovation learning, One of the best University we have.
            </p>
            <p>
              Our Campus are well equipped with modern libraries, collaborative
              learning spaces, and dedicated innovation hubs to support both
              technical and creative development.
            </p>
          </div>

          {/* for the cards */}
          <div className="about-card-overview">
            <div className="about-cards">
              <img src={Aptech_Limited_Logo} alt="aptech-image" />
              <h3>Aptech Global Learning Institute</h3>
            </div>
            <div className="about-cards">
              <img src={aptechlocation} />
              <h2>Location</h2>
              <p> MBM PLAZA, 48 Old Aba Rd, near Shell I.A.) Rumubiokani, Rumuola, Port Harcourt 500102, Rivers</p>
            </div>
            <div className="about-cards">
              <img src={middleSex} />
              <h3>Affiliation</h3>
              <p>MiddleSex University,London</p>
            </div>
          </div>
        </section>

        <section className="about-highlights">
          {/* Campus highlights or recognitions  */}

          <div className="about-high-higlights">
            <h2>Campus highlights or recognitions</h2>
            <p>
              This institution is very proud to be recognized nationally and
              internationally for excellence in academics, innovation,and
              student life.
            </p>
            <p>
              We are the Best and recognized and awarding college, here are some
              of the recognitions and achievements that make us proud.{" "}
            </p>
            <ul>
              <li>Top 10 in Nigeria</li>
              <li>Best Student Community</li>
              <li>Global Partnerships</li>
              <li>Accredited Excellence</li>
              <li>15+ Years of Excellence in Technology Education</li>
              <li> Awarded "Best IT Training Institute in Nigeria"- 2021</li>
              <li>10,000+ Alumni working globally</li>
              <li>State-of-the-art labs & innovation hubs</li>
            </ul>
          </div>
          {/* the gallery display */}
          <div className="about-cards-hights">
            <div className="abouthights">
              <img src={years} className="about-h-card about-item-1" />
              <img src={Partnership} className="about-h-card about-item-2" />
              <img src={bestIT} className="about-h-card about-item-3" />
              <img src={Alumni} className="about-h-card about-item-4" />
              <img src={State} className="about-h-card about-item-5" />
              {/* <img src={Recognizedexcellence} className="about-h-card about-item-6" /> */}
            </div>
            <div className="about-control"></div>
          </div>
        </section>
        {/* key events */}
        <div className="about-event">
          <div className="about-eventheader">
            <h2>Key Annual Events</h2>
            <p>
              Our campus is always buzzing with exciting events, from Technical
              events, Cultural events,Sports. Every year, our campus comes alive with celebrations,innovation,and achievements, these are the highlights that bring our community together.
            </p>
          </div>
          {/* Tech  */}
          <div className="about-event-container">
            {aboutevents.map((Aevents)=>(
              <div key={Aevents.id} className="AevenetCard">
                <img src={Aevents.image} />
                <div className="Aevent-lay">
                  <h3>{Aevents.title}</h3>
                  <p>{Aevents.description}</p>
                </div>
              </div> 
            ))}
          </div>
          <section className="about-timelines">
            <h2 className="acount-timelines-title"> frequency of events.</h2>
            <div className="acounttimelines">
              {timelines.map((timesl, index)=>(
                <div  key={index} className="about-timelines-item">
                  <div className="about-timelines-month">{timesl.month}</div>
                  <div className="about-timelines-content">
                    <h3>{timesl.title}</h3>
                    <p>{timesl.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
      </div>
    </>
  );
};

export default About;
