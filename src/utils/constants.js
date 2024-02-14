import Client1 from "../assets/task1/client-profile-pictures/client1.jpg";
import Client2 from "../assets/task1/client-profile-pictures/client2.png";
import Client3 from "../assets/task1/client-profile-pictures/client3.jpg";


export const TASK_1 = {
  title: "Task 1",
  pathname: "/"
};

export const TASK_2 = {
  title: "Task 2",
  pathname: "/task2"
};

export const SOURCE_CODE = {
  title: "Source Code ^",
  pathname: "https://github.com/himanshuverma544/Glassfrog-Assignment-Himanshu/"
}

export const PAGE404 = {
  pathname: "*"
};

export const COMPANY = {
  name: "GlassFrog Technologies ",
  pathname: "https://glassfrogtech.com/"
}

export const DEVELOPER = {
  name: " Himanshu Verma",
  pathname: "https://linktr.ee/himanshuverma544"
}

export const CLIENTS = [
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
];