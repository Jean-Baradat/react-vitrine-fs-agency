import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import copy from "copy-to-clipboard";
import SocialNetwork from "./../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
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
        <main>
            <Mouse />
            <motion.div
                className="contact"
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7 }}
                variants={variants}
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 rue Laplace</p>
                            <p>77300 Fontainebleau</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <p
                                onClick={(e) =>
                                    copy(
                                        e.target.innerText,
                                        alert(`${e.target.innerText} copié !`)
                                    )
                                }
                                style={{ cursor: "pointer" }}
                            >
                                06 00 00 00 00
                            </p>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <p
                                onClick={(e) =>
                                    copy(
                                        e.target.innerText,
                                        alert(`${e.target.innerText} copié !`)
                                    )
                                }
                                style={{ cursor: "pointer" }}
                            >
                                test@test.com
                            </p>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="creadits">
                        <p>Jean Baradat avec From Scratch - 2022</p>
                    </div>
                </div>
                <Buttons left={"/projet-4"} />
            </motion.div>
        </main>
    );
};

export default Contact;
