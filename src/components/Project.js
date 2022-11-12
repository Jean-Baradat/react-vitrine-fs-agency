import React, { useEffect, useState } from "react";
import { projectsData } from "./../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }) => {
    const [currentProject] = useState(projectsData[projectNumber]);
    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const [size, setSize] = useState();

    useEffect(() => {
        setLeft(Math.floor(Math.random() * 200 + 700) + "px");
        setTop(Math.floor(Math.random() * 200 + 150) + "px");
        setSize(`scale(${Math.random() * 0.7})`);
    }, []);

    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 150,
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

    const transition = {
        ease: [0.63, 0.19, 0.15, 0.98],
        duration: 0.8,
    };

    const imgAnim = {
        initial: {
            opacity: 0,
            x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
            y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <motion.div
            className="project-main"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            variants={variants}
        >
            <div className="project-content">
                <h1>{currentProject.title}</h1>
                <p>{currentProject.date}</p>
                <ul className="languages">
                    {currentProject.languages.map((language) => {
                        return <li key={language}>{language}</li>;
                    })}
                </ul>
            </div>
            <motion.div
                className="img-content"
                initial="initial"
                animate="animate"
                transition={transition}
                variants={imgAnim}
            >
                <div className="img-container hover">
                    <span>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.infos}</p>
                    </span>
                    <img
                        src={currentProject.img}
                        alt={currentProject.title}
                        className="img"
                    />
                </div>
                <div className="button-container">
                    <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="button">Voir le site</span>
                    </a>
                </div>
            </motion.div>
            <span
                className="random-circle"
                style={{ left, top, transform: size }}
            ></span>
        </motion.div>
    );
};

export default Project;
