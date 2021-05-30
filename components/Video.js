import styles from "./Video.module.css";
import { motion } from "framer-motion";
import Vimeo from "@u-wave/react-vimeo";

const Video = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.container}
    >
      <motion.div variants={anim}>
        <iframe
          src="https://player.vimeo.com/video/511773127"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className={styles.vimeo}
          allowFullScreen
        ></iframe>
      </motion.div>
      <motion.a variants={anim} href="https://www.mymondo.yoga/">
        <button className={styles.button}>Esplora il sito</button>
      </motion.a>
    </motion.div>
  );
};

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 3 } },
};

const anim = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.4, type: "spring" } },
};

export default Video;
