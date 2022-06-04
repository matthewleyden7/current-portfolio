import AmazonAppPic from './images/amazon_app_pic.png'
import DuffAppPic from './images/duff_app_pic.png'
import NetflixAppPic from './images/netflix_app_pic.png'
import AmazonGif from './images/gifs/amazon_app_animation.gif'
import NetflixGif from './images/gifs/netflix_app_animation.gif'
import ChatbotPic from './images/robot.jpg'
import ChatbotGif from './images/gifs/chatbot_animation.gif'
import SerenityGif from './images/gifs/serenity_homes_animation.gif'
import SerenityPic from './images/serenity_pic.png'
import GoogleNewsGif from './images/gifs/google-news-animation.gif'
import GoogleNewsPic from './images/google-news.png'


import TTSPic from './images/text_to_speech_pic.jpeg'
import { audio_clips } from './audio'


export const projects = [
  {
    title: "Full Google News Clone",
    subtitle: "React, google authentication, multiple API integration, MongoDB",
    description: "A very close to exact google news clone.",
    image: GoogleNewsPic,
    giffy: GoogleNewsGif,
    music: [],
    location: ""
    
  },

  {
    title: "Deep Learning Chatbot",
    subtitle: "Python, machine learning, GPT-2, Data scraping and augmentation",
    description:
      'Chatbot that I made after scraping 3.5 million lines of reddit data. Incorporated a "memory system" using Spacy NLP do give the illusion of long term memory.',
    image: ChatbotPic,
    giffy: ChatbotGif,
    music: [],
    location: ""

   
  },

    {
      title: "Full Amazon Clone",
      subtitle: "React w/ Firebase Authentication",
      description: "This is a functional shopping app intended to be a clone of Amazon and some of its features. This clone is mixed with my design style and features that I thought would make it interesting.",
      image: AmazonAppPic,
      giffy: AmazonGif,
      music: [],
      location: ""
      
    },
   
  {
      title: "Netflix",
      subtitle: "React, API integration",
      description:
        "A dynamically responsive version of netflix.",
      image: NetflixAppPic,
      giffy: NetflixGif,
      music: [],
      location: ""
      
    },
  

    {
      title: "Text to Speech",
      subtitle: "Python, deep learning, modified model of FastSpeech2",
      description:
        'My experiments with text-to-speech. I used FastSpeech2 as the base and modified the model (removed certain layers, kept the convolutional base). I now have an even better model..',
      image: TTSPic,
      giffy: "",
      music: audio_clips,
      location: ""
     
    },
    {
      title: "Serenity Homes",
      subtitle: "Python, kivy, database, Decision tree regression model",
      description:
        'My Capstone project for school with accompanying paper. Fictional real estate company uses new application to generate accurate price predictions based on features. Uses real housing data from Seattle area. ',
      image: SerenityPic,
      giffy: SerenityGif,
      music: [],
      location: ""
     
    },

    {
      title: "Duff",
      subtitle: "React",
      description:
        "Trendy and hip fictional online duffel bag store.",
      image: DuffAppPic,
      giffy: DuffAppPic,
      music: [],
      location: ""
     
    },
  
    
  ];

  export const skills = ["Python", 'Frontend Development', 'Machine Learning',
     'Natural Language Processing', "React.js", "MongoDB", "Redux", 'Tailwind.css',
  "Speech synthesis", "AWS", "Java", "SQL"]