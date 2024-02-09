import { Container, Button } from "reactstrap";

import { useState, useEffect, useCallback } from "react";

import Avatar from "../components/avatar";

import ArrowLeft from "../assets/task1/icons/arrow-left.svg";
import ArrowRight from "../assets/task1/icons/arrow-right.svg";

import { CLIENTS } from "../utils/constants";


const Task1 = () => {


  const [intervalIndex, setIntervalIndex] = useState(0);


  const getIndex = index => {
    return ((index + intervalIndex) % CLIENTS.length);
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

    if (intervalIndex === CLIENTS.length) {
      setIntervalIndex(0);
    }
    else if (intervalIndex === -1) {
      setIntervalIndex(CLIENTS.length - 1);
    }
  }, [intervalIndex]);

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
      <Container className="client-testimonials-cont d-flex flex-column justify-content-center align-items-center">
        <div className="master-heading rounded-pill px-3 py-1 mb-3">
          <span>Client Testimonials</span>
        </div>
        <h1 className="text-center my-3">Voices that prove our excellence</h1>
        <div className="testimonial-display-cont d-flex flex-wrap justify-content-between">
          <Button className="left-arrow-btn mb-5" color="link" onClick={onClickLeftArrow}>
            <img src={ArrowLeft} alt="arrow-left"/>
          </Button>
          <h4 className="testimonial-text text-center my-2 lh-base">
            {CLIENTS[intervalIndex]?.testimonial}
          </h4>
          <Button className="right-arrow-btn mb-5" color="link" onClick={onClickRightArrow}>
            <img src={ArrowRight} alt="arrow-right"/>
          </Button>
        </div>
        <div className="testimonials-slide d-flex justify-content-center flex-wrap flex-sm-nowrap gap-5 my-4">
          {Array.from({ length: 7 }, (_, index) => (
            index === 3 ? (
              <div 
                key={index}
                className="active-testimonial w-100 d-flex justify-content-center gap-3"
              >
                <Avatar
                  className={`avatar avatar-${index} mt-2`}
                  src={CLIENTS[getIndex(index)]?.avatar} 
                  alt={CLIENTS[getIndex(index)]?.name} 
                  size={60}
                  onClick={() => onAvatarClick(getIndex(index))}
                />
                <div>
                  <h6 className="name">
                    {CLIENTS[getIndex(index)]?.name}
                  </h6>
                  <p className="designation">
                    {CLIENTS[getIndex(index)]?.designation}
                  </p>
                  <p className="work">
                    {CLIENTS[getIndex(index)]?.work}
                  </p>
                </div>
              </div> 
            ) : (
              <Avatar
                key={index} 
                className={`avatar avatar-${index} mt-2`}
                src={CLIENTS[getIndex(index)]?.avatar} 
                alt={CLIENTS[getIndex(index)]?.name} 
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

