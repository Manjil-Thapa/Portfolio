import { SiExpress, SiJavascript, SiMongodb, SiMapbox } from 'react-icons/si';
import { FaReact, FaFigma, FaHtml5, FaCss3Alt } from 'react-icons/fa6';
import React from 'react';

export const featuredProjects = [
  {
    title: 'Little Lemon Website',
    image: '/little-lemon-thumbnail.png',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    link: 'https://github.com/Manjil-Thapa/little-lemon-capstone',
    stack: [
      <SiJavascript key='javascript' size={30} />,
      <FaReact key='react' size={30} />,
      <FaFigma key='figma' size={30} />,
    ],
    stackText: ['JavaScript', 'React', 'Figma'],
  },
  {
    title: 'YelpCamp',
    image: '/yelpcamp-thumbnail.png',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    link: 'https://github.com/Manjil-Thapa/yelpcamp',
    stack: [
      <SiJavascript key='javascript' size={30} />,
      <SiMongodb key='mongodb' size={30} />,
      <SiExpress key='express' size={30} />,
      <SiMapbox key='mapbox' size={30} />,
    ],
    stackText: ['JavaScript', 'MongoDB', 'ExpressJS', 'Mapbox API'],
  },
  {
    title: 'Swipe',
    image: '/swipe-thumbnail.png',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    link: 'https://github.com/Manjil-Thapa/mangata-gallo-web-page',
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
    stack: [
      <FaHtml5 key='html' size={30} />,
      <FaCss3Alt key='css' size={30} />,
      <SiJavascript key='javascript' size={30} />,
    ],
    stackText: ['HTML', 'CSS', 'JavaScript'],
  },
];
