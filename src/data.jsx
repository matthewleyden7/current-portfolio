import AmazonAppPic from './images/amazon_app_pic.png'
import DuffAppPic from './images/duff_app_pic.png'
import NetflixAppPic from './images/netflix_app_pic.png'
import AmazonGif from './images/gifs/amazon_app_animation.gif'
import NetflixGif from './images/gifs/netflix_app_animation.gif'
import ChatbotPic from './images/chatbot_app_pic.jpg'
import ChatbotGif from './images/gifs/chatbot_animation.gif'
import TTSPic from './images/text_to_speech_pic.jpeg'
import { audio_clips } from './audio'


export const projects = [
    [{
      title: "Full Amazon Clone",
      subtitle: "React w/ Firebase Authentication",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: AmazonAppPic,
      giffy: AmazonGif,
      music: []
      
    },
    {
      title: "Duff",
      subtitle: "React",
      description:
        "Trendy and hip fictional online duffel bag store.",
      image: DuffAppPic,
      music: []
     
    }],
    [{
      title: "Netflix",
      subtitle: "React",
      description:
        "A dynamically responsive version of netflix.",
      image: NetflixAppPic,
      giffy: NetflixGif,
      music: []
      
    },
    {
      title: "Deep Learning Chatbot",
      subtitle: "Python",
      description:
        'Chatbot that I made after scraping 3.5 million lines of reddit data. Incorporated a "memory system" using Spacy NLP do give the illusion of long term memory.',
      image: ChatbotPic,
      giffy: ChatbotGif,
      music: []

     
    }],

    [{
      title: "Text to Speech",
      subtitle: "Python",
      description:
        'My experiments with text-to-speech.',
      image: TTSPic,
      giffy: "",
      music: audio_clips
     
    }],
  ];

  export const skills = ["Python", 'Frontend Development', 'Machine Learning',
     'Natural Language Processing', "React.js", "MongoDB", "Redux", 'Tailwind.css',
  "Speech synthesis", "AWS", "Java", "SQL"]