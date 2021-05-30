import styles from "./Title.module.css";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.container}
    >
      <div className={styles.hide}>
        <motion.h1 variants={title} className={styles.title}>
          Benvenuti!
        </motion.h1>
      </div>

      <motion.h1 variants={title2} className={styles.title}>
        Siamo Sole, Giorgia, Cristina e Francesco
      </motion.h1>

      <motion.h1 variants={title2} className={styles.title}>
        E questo è MYmondo
      </motion.h1>
    </motion.div>
  );
};

const container = {
  hidden: { y: 0 },
  show: { y: 0, transition: { staggerChildren: 1.6 } },
  exit: { opacity: 0 },
};

const title = {
  hidden: { y: 100 },
  show: { y: 0, transition: { duration: 0.3 } },
};

const title2 = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export default Title;
