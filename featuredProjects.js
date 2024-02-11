import { SiExpress, SiJavascript, SiMongodb, SiMapbox } from 'react-icons/si';
import { FaReact, FaFigma, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa6';
import React from 'react';

export const featuredProjects = [
  {
    title: 'Little Lemon Website',
    image: '/little-lemon-thumbnail.png',
    description:
      'Little Lemon is a Meta Front-end Developer capstone project—a vibrant restaurant website built with create-react-app and styled using CSS. Offering an intuitive reservation experience, users input details seamlessly, progressing from reservation specifics to personal information. The project prioritizes user experience with engaging animations, client-side validations, and unit tests for booking form logic.',
    link: 'https://github.com/Manjil-Thapa/little-lemon-capstone',
    live: 'https://little-lemon-restaurant-gules.vercel.app',
    stack: [
      <SiJavascript key='javascript' size={30} />,
      <FaReact key='react' size={30} />,
      <FaFigma key='figma' size={30} />,
    ],
    stackText: ['JavaScript', 'React', 'Figma'],
  },
  {
    title: 'YelpCamp - Campground Companion',
    image: '/yelpcamp-thumbnail.png',
    description:
      'YelpCamp is a Node.js web application that allows users to create, view, and review campgrounds. It is a full-stack application with RESTful routing, user authentication, and authorization. Users can create, edit, and delete their own campgrounds and reviews. The app is built using Node.js, Express, and MongoDB. It also uses Mapbox API for location services and Bootstrap for styling.',
    link: 'https://github.com/Manjil-Thapa/yelpcamp',
    live: 'https://yelpcamp-zil.onrender.com/',
    stack: [
      <SiJavascript key='javascript' size={30} />,
      <SiMongodb key='mongodb' size={30} />,
      <SiExpress key='express' size={30} />,
      <SiMapbox key='mapbox' size={30} />,
      <FaBootstrap key='bootstrap' size={30} />,
    ],
    stackText: ['JavaScript', 'MongoDB', 'ExpressJS', 'Mapbox API'],
  },
  {
    title: 'Swipe',
    image: '/swipe-thumbnail.png',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    link: 'https://github.com/Manjil-Thapa/mangata-gallo-web-page',
    live: 'https://little-lemon-restaurant-gules.vercel.app',
    stack: [
      <FaHtml5 key='html' size={30} />,
      <FaCss3Alt key='css' size={30} />,
      <SiJavascript key='javascript' size={30} />,
    ],
    stackText: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Mangata-Gallo Webpage',
    image: '/mangata-thumbnail.png',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    link: 'https://github.com/Manjil-Thapa/odin-Etch-A-Sketch',
    live: 'https://little-lemon-restaurant-gules.vercel.app',
    stack: [
      <FaHtml5 key='html' size={30} />,
      <FaCss3Alt key='css' size={30} />,
      <SiJavascript key='javascript' size={30} />,
    ],
    stackText: ['HTML', 'CSS', 'JavaScript'],
  },
];
