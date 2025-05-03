import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import About from './About';

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

      <div className="home-greeting">

        <motion.img
        className="me"
        src="/me.jpg"
        alt="Liam"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        />
        <motion.p
            className="home-greeting-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          Hi, my name is Liam and I'm a recent graduate of the <a href="https://appliedtechnology.humber.ca/programs/computer-programming-and-analysis.html">
          Computer Programming & Analysis</a> program at Humber Polytechnic. I am mostly focused on web development (back end, front end, database, you name it) 
          however I also worked on configuring cloud services as well as creating/training/testing machine learning models. <br/><br/>Learn more about me <Link to="/About">here</Link>.
        </motion.p>
      </div>
    </motion.div>
  );
}
