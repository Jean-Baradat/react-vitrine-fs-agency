import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formMess = document.querySelector(".form-message");

        emailjs
            .sendForm(
                "service_ltywq85",
                "template_ghsuq6j",
                form.current,
                process.env.REACT_APP_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    formMess.innerHTML =
                        "<p className='success'>Message envoyé</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);
                },
                (error) => {
                    console.log(error.text);
                    formMess.innerHTML =
                        "<p className='error'>Une erreur est survenue, veuillez réessayer</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 5000);
                }
            );
    };

    return (
        <div className="form-container">
            <h2>contactez-nous</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label>nom</label>
                <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                    id="name"
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    in="email"
                />
                <label>Message</label>
                <textarea name="message" required id="mess" />
                <input type="submit" value="Envoyer" className="hover button" />
            </form>
            <div className="form-message"></div>
        </div>
    );
};

export default ContactForm;
