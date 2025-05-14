import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  return (
    <motion.div
      className="page-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <title>Liam Horton - Home</title>
      <h2>Home</h2>

      <div className="home-block">
        <Image src={"./me.jpg"} alt={"Picture of me"} />
        <motion.p
            className="home-block-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          Hi, my name is Liam and I'm a recent graduate of the <a href="https://appliedtechnology.humber.ca/programs/computer-programming-and-analysis.html">
          Computer Programming & Analysis</a> program at Humber Polytechnic. I am mostly focused on web development (back end, front end, database, you name it) 
          however I have also worked on configuring cloud services as well as creating/training/testing machine learning models.
        </motion.p>
      </div>
      <br/>
      <div className="home-block">
        <div>
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}>My goals</motion.h3>
        <motion.p
            className="home-block-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          My goals as a developer are to continuously improve the quality of applications I develop, creating more
           aesthethically pleasing and responsive interfaces, increasingly efficient and fast server-side code, 
           stronger security implementations, and learning how to dapply these skills and more in new languages.<br/><br/>
           A goal that is a bit more relevant to me right now is finding a job. I would really like to focus on web development as 
           I mentioned above, however as long as I'm coding I know I will be happy. What I love above this line of work is that we are 
           constantly learning and working to improve ourselves, not just because of the need to but because there are new and exciting 
           things being created everyday that continue to keep things interesting.<br/><br/>
           A goal I have for the future is to develop a very strong understanding of networking, hacking, and security concepts/practices. There is so much 
           to learn in that regard and it is one of the most important parts of IT as new threats present themseleves all the time. I want to be able to help people 
           feel safe and secure on the internet as well as help businesses stay confident that their services and resources are protected.
        </motion.p>
        </div>
      </div>
      <br/>
      <div className="home-block">
        <div>
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}>A little more about me</motion.h3>
        <motion.p
            className="home-block-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          Programming and work aside, let me tell you a bit about me. On my own time I like to play 
          video games with friends. For the most part I mainly play shooters like Valorant and Call of Duty. I also recently got 
          started with souls-like games with Elden Ring and the SOTE DLC. I think I would like to try Dark Souls 3 for my next souls game. 
          I also play War Thunder on occasion but I gotta say it can be quite challenging.<br/><br/>
          I also watch a lot of shows, recently a lot of anime. My favourite right now is One Piece, it is probably one of the best works of fiction 
          I have seen in my life so far. I'm also pretty big on war documentaries and have watched most of the ones on Netflix.<br/><br/>
          I have 2 dogs, a labrador named Cooper and an australian shepherd/doodle named Harley. On top of that, I also have 3 cats, 2 of which are burmese and another 
          that I'm not quite sure of. The two burmese are named Fiona and Sterling, and the other is named Felix (see below for pictures).

          <div className="pets">
            <ImageCarousel />
          </div>
        </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

function Image(props) {
  return (
    <motion.img
        className="me"
        src={props.src}
        alt={props.alt}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        />
  );
}

const images = [
  {src: "./cooper.jpg", alt: "Cooper"},
  {src: "./harley.jpg", alt: "Harley"},
  {src: "./fiona.jpg", alt: "Fiona"},
  {src: "./sterling.jpg", alt: "Sterling"},
  {src: "./felix.jpg", alt: "Felix"},
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length -1) ? 0 : prev + 1)
  };
  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}>
        ❮
      </button>

      <div className="carousel-image-wrapper">
        <Image src={images[index].src} alt={images[index].alt} />
        <p className="carousel-caption"><b>{images[index].alt}</b></p>
      </div>

      <button className="carousel-button right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}