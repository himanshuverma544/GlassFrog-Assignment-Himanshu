import { Container, Button, Form } from "reactstrap";

import { useState, useEffect, useCallback } from "react";

import Avatar from "../components/avatar";

import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";

import Client1 from "../assets/client-profile-pictures/client1.jpg";
import Client2 from "../assets/client-profile-pictures/client2.png";
import Client3 from "../assets/client-profile-pictures/client3.jpg";


const Task1 = () => {


  const clients = [
    {
      name: "Mukul Sharma",
      designation: "CEO",
      work: "Extreme Compute",
      testimonial: "Not only did I get a great product, but the experience with the team was exceptional. Its clear they value their customers, and that makes all the difference.",
      avatar: Client1
    },
    {
      name: "Kavya Barli",
      designation: "CEO",
      work: "HoA",
      testimonial: "The team behind this service is more than just professionals; they are passionate about what they do. It's refreshing to find a company that truly cares about its customers.",
      avatar: Client2

      
    },
    {
      name: "Varun Sharma",
      designation: "Managing Director",
      work: "Uber projects and Lighting",
      testimonial: "What I finally got is more than a product; its a partnership with a company that values its customers. Highly recommended, without a doubt.",
      avatar: Client3

    }
  ]


  const [intervalIndex, setIntervalIndex] = useState(0);


  const getIndex = index => {
    return ((index + intervalIndex) % clients.length);
  }


  const onAvatarClick = (clickedIndex) => {
    setIntervalIndex(clickedIndex);
  }

  const onClickLeftArrow = () => {
    setIntervalIndex(prev => prev - 1);
  }

  const onClickRightArrow = () => {
    setIntervalIndex(prev => prev + 1);
  }


  const resetIntervalIndex = useCallback(() => {

    if (intervalIndex === clients.length) {
      setIntervalIndex(0);
    }
    else if (intervalIndex === -1) {
      setIntervalIndex(clients.length - 1);
    }
  }, [intervalIndex, clients.length]);

  useEffect(() => {
    resetIntervalIndex();
  }, [resetIntervalIndex]);


  useEffect(() => {

    const intervalId = setInterval(() => {
      setIntervalIndex(prev => prev + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <section className="client-testimonials">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="master-heading rounded-pill px-3 py-1">
          <span>Client Testimonials</span>
        </div>
        <h1 className="text-center my-3">Voices that prove our excellence</h1>
        <div className="testimonial-display-cont d-flex justify-content-between">
          <Button className="mb-5" color="link" onClick={onClickLeftArrow}>
            <img src={ArrowLeft} alt="arrow-left"/>
          </Button>
          <h4 className="testimonial-text text-center my-2 lh-base">
            {clients[intervalIndex]?.testimonial}
          </h4>
          <Button className="mb-5" color="link" onClick={onClickRightArrow}>
            <img src={ArrowRight} alt="arrow-right"/>
          </Button>
        </div>
        <div className="testimonials-slide d-flex gap-5 my-4">
          {Array.from({ length: 7 }, (_, index) => (
            index === 3 ? (
              <div 
                className="active-testimonial d-flex gap-3"
                key={index}
              >
                <Avatar
                  className={`avatar avatar-${index} mt-2`}
                  src={clients[getIndex(index)]?.avatar} 
                  alt={clients[getIndex(index)]?.name} 
                  size={60}
                  dataIndex={index}
                  onClick={() => onAvatarClick(getIndex(index))}
                />
                <div>
                  <h6 className="name">
                    {clients[getIndex(index)]?.name}
                  </h6>
                  <p className="designation">
                    {clients[getIndex(index)]?.designation}
                  </p>
                  <p className="work">
                    {clients[getIndex(index)]?.work}
                  </p>
                </div>
              </div> 
            ) : (
              <Avatar
                className={`avatar avatar-${index} mt-2`}
                key={index} 
                src={clients[getIndex(index)]?.avatar} 
                alt={clients[getIndex(index)]?.name} 
                dataIndex={index}
                onClick={() => onAvatarClick(getIndex(index))}
              />
            )
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Task1;

