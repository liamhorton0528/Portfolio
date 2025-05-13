import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        <motion.img
        className="me"
        src="/me.jpg"
        alt="Liam"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        />
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
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}>Goals</motion.h3>
        <motion.p
            className="home-block-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          My goals as a developer are to continuously improve the quality of applications I develop. From creating more
           aesthethically pleasing and responsive interfaces, increasingly efficient and fast server-side code, 
           stronger and stronger security implementations, and learning how to do all that and more in a variety of languages.
        </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
