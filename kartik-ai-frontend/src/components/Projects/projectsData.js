import portfolio from "@/assets/portfolio.webp";
import ecommerce from "@/assets/eccomers.webp";
import booking from "@/assets/booking.webp";
import aiapp from "@/assets/aiapp.webp";


export const projects = [

  {
    id: 1,

    featured: true,

    category: "Frontend",

    year: "2026",

    status: "Completed",


    title: "Kartik.AI Portfolio",


    description:
      "A premium AI-inspired developer portfolio designed to showcase frontend expertise, projects, and professional journey. Built with modern React architecture featuring reusable components, smooth animations, responsive layouts, and immersive UI experiences.",


    image: portfolio,


    tech: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],


    github:
      "https://github.com/yourusername/portfolio",


    live:
      "https://yourportfolio.vercel.app",
  },




  {
    id: 2,

    featured: false,

    category: "Full Stack",

    year: "2025",

    status: "Completed",


    title: "E-Commerce Platform",


    description:
      "A full-stack MERN e-commerce application with secure authentication, product management, shopping cart functionality, filtering, and responsive user interfaces. Designed with scalable backend APIs and modern frontend practices.",


    image: ecommerce,


    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],


    github:
      "https://github.com/yourusername/ecommerce",


    live:
      "https://ecommerce-demo.vercel.app",
  },




  {
    id: 3,

    featured: false,

    category: "Full Stack",

    year: "2025",

    status: "Completed",


    title: "Appointment Booking System",


    description:
      "A full-stack appointment management platform that allows users to schedule appointments with secure authentication, admin controls, calendar-based scheduling, and efficient booking workflows.",


    image: booking,


    tech: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],


    github:
      "https://github.com/yourusername/booking",


    live:
      "https://booking-demo.vercel.app",
  },





  {
    id: 4,

    featured: false,

    category: "AI",

    year: "2026",

    status: "In Progress",


    title: "AI Android Assistant",


    description:
      "An AI-powered mobile assistant application focused on intelligent interactions, real-time responses, and modern mobile user experience. Built with scalable architecture and cloud integration.",


    image: aiapp,


    tech: [
      "React Native",
      "Firebase",
      "AI APIs",
      "Mobile Development",
    ],


    github:
      "https://github.com/yourusername/aiapp",


    live:
      "https://demo.com",
  },

];