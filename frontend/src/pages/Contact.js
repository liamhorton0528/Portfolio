import { motion } from "framer-motion";

export default function Contact()  {
    return <motion.div className="page-content"
    initial={{opacity:0, y:20}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: -20}}
    transition={{duration: 0.6, ease: "easeInOut"}}
    >
        <h2>Contact</h2>
        <img className="App-logo" src="./logo512.png" style={{height: '300px', width: '300px'}}/>
    </motion.div>
}