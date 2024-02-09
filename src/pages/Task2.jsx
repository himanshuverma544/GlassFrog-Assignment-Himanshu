import { Container, Row, Col, Button } from "reactstrap";

import { useState, useRef, useEffect } from "react";

import Strategize from "../assets/task2/tabs-img/strategize.svg";
import Design from "../assets/task2/tabs-img/design.svg";
import Build from "../assets/task2/tabs-img/build.svg";
import Secure from "../assets/task2/tabs-img/secure.svg";
import Support from "../assets/task2/tabs-img/support.svg";

import YellowArrow from "../assets/task2/icons/yellow-arrow.svg";
import BlueArrow from "../assets/task2/icons/blue-arrow.svg";
import GreenArrow from "../assets/task2/icons/green-arrow.svg";
import RedArrow from "../assets/task2/icons/red-arrow.svg";
import IndigoArrow from "../assets/task2/icons/indigo-arrow.svg";


const Task2 = () => {
  
  const tabs = [
    { 
      name: 'Strategize', 
      color: 'warning',
      img: Strategize,
      heading: function () { return this.name },
      subHeading: "Plan and position a successful product in the market.",
      listIcon: YellowArrow,
      lists: [
        "Target market and Customer Segmentation",
        "Competitive Analysis",
        "Product Roadmap and Development",
        "Go-to-Market Strategy"
      ] 
    },
    { 
      name: 'Design', 
      color: 'primary', 
      img: Design,
      heading: function () { return this.name },
      subHeading: "Experience the magic of our UX-UI designers for lovable and scalable designs.",
      listIcon: BlueArrow,
      lists: [
        "Innovation Consulting",
        "User Research",
        "Market Research",
        "Product Strategy",
        "Experience Design (CX /UX /UI)",
        "Service Design"
      ]
    },
    { 
      name: 'Build', 
      color: 'success',
      img: Build, 
      heading: function () { return this.name },
      subHeading: "Build on cutting-edge technology to create scalable solutions.",
      listIcon: GreenArrow,
      lists: [
        "Mobile Application",
        "Web Application",
        "Enterprise Application",
        "Front-End Development",
        "ECommerce Application",
        "Custom Application"
      ]
    },
    { 
      name: 'Secure', 
      color: 'danger',
      img: Secure,
      heading: function () { return this.name },
      subHeading: "Guard your digital products with our security solutions from cyber threats.",
      listIcon: RedArrow,
      lists: [
        "Malware Detection Removal",
        "Website Hack Repair",
        "24/7 Security Support",
        "Security Management",
        "Testing Cyber Security",
        "Identifying Threats",
        "SIEM Threat Detection",
        "Server Security",
        "Content Delivery Network",
        "Managing Cloud Security"
      ]
    },
    { 
      name: 'Support', 
      img: Support,
      heading: function () { return this.name },
      subHeading: "Support and maintenance solutions for smooth operation.",
      listIcon: IndigoArrow,
      lists: [
        "Troubleshooting",
        "System upgrades",
        "Bug fixes",
        "Security patches",
        "Performance optimization",
        "Proactive monitoring"
      ]
    }
  ];

  const divider = 100 / (tabs.length - 1);

  const progress = useRef(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [progressBarValue, setProgressBarValue] = useState(0);
  

  useEffect(() => {

    const container = document.querySelector('.scroll-cont');

    const handleScroll = event => {
      
      if (event.wheelDeltaY < 0 && progress.current < 100) {
        progress.current++;  // on scroll-down progress increases
      }
      else if (event.wheelDeltaY > 0 && progress.current > 0) {
        progress.current--;  // on scroll-up progress decreases
      }
      else if (progress.current === 0) {
        return;
      }
      else if (progress.current === 100) {
        return;
      }
      
      event.preventDefault();

      setProgressBarValue(progress.current);

      if (progress.current % divider === 0) {
        const index = progress.current / divider;
        setActiveTabIndex(index);
      }
    };

    container.addEventListener('wheel', handleScroll);

    return () => container.removeEventListener('wheel', handleScroll);

  }, [divider]);

  const handleActiveTabChange = newIndex => {

    progress.current = divider * newIndex;

    setProgressBarValue(progress.current);
    setActiveTabIndex(newIndex);
  };

  return (
    <section className="scroll">
      <Container className="scroll-cont bg-white">
        <div className="tabs-cont w-100">
          <div className="tabs d-flex justify-content-center justify-content-lg-between flex-wrap gap-lg-5 gap-3">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                className={`tab ${index <= activeTabIndex ? "active" : ""} rounded-pill px-sm-4 px-3`}
                color={index <= activeTabIndex ? tab?.color : "light"}
                onClick={() => handleActiveTabChange(index)}
              >
                {tab.name}
              </Button>
            ))}
          </div>
          <div className="progress-bar w-100 d-none d-md-block">
            <div className="filler" style={{ width: `${progressBarValue}%` }}/>
          </div>
        </div>
        <div className="scroll-content mt-5">
          <Row className="d-flex flex-column d-lg-flex flex-lg-row">
            <Col className="left-col d-flex justify-content-center align-items-center" lg={6}>
              <div className="content-img">
                <img
                  src={tabs[activeTabIndex].img}
                  alt={`${tabs[activeTabIndex].name} Image`}
                />
              </div>
            </Col>
            <Col className="right-col mt-5 mt-lg-0" lg={6}>
              <p className="heading">
                {tabs[activeTabIndex].heading()}
              </p>
              <p className="sub-heading">
                {tabs[activeTabIndex].subHeading}
              </p>
              {
                activeTabIndex === 3 ? (
                  <ul className="secure-tab d-md-flex gap-md-5">
                    <ul className="even">
                      {
                        tabs[activeTabIndex].lists.map((list, index) => 
                          index % 2 === 0 ? (
                            <li 
                              key={index}
                              className={`list list-${(tabs[activeTabIndex].name.toLowerCase())}`}
                            >
                              {list}
                            </li>
                          ) : (
                            <></>
                          )
                        )
                      }
                    </ul>
                    <ul className="odd">
                      {
                        tabs[activeTabIndex].lists.map((list, index) => 
                          index % 2 !== 0 ? (
                            <li 
                              key={index}
                              className={`list list-${(tabs[activeTabIndex].name.toLowerCase())}`}
                            >
                              {list}
                            </li>
                          ) : (
                            <></>
                          )
                        )
                      }
                    </ul>
                  </ul>
                ) : (
                  <ul>
                    {
                      tabs[activeTabIndex].lists.map((list, index) => 
                        <li 
                          key={index}
                          className={`list list-${(tabs[activeTabIndex].name.toLowerCase())}`}
                        >
                          {list}
                        </li>
                      )
                    }
                  </ul>
                ) 
              }   
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Task2;