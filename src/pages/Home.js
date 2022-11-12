import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div>
            <Mouse />
            <motion.div
                className="home"
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7 }}
                variants={variants}
            >
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1
                            drag="x"
                            dragConstraints={{
                                left: -50,
                                right: 50,
                            }}
                            animate={{ scale: 1.2 }}
                            transition={{
                                ease: "linear",
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            FS AGENCY
                        </motion.h1>
                        <h2>
                            <DynamicText />
                        </h2>
                    </div>
                </div>
                <Buttons right={"/projet-1"} />
            </motion.div>
        </div>
    );
};

export default Home;
