import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-portfolio" style={{cursor: "default"}}>
                    Portfolio
                    <ul className="nav-projects">
                        <NavLink
                            to="/projet-1"
                            className={(nav) =>
                                nav.isActive ? "nav-active hover" : "hover"
                            }
                        >
                            <li>projet 1</li>
                        </NavLink>
                        <NavLink
                            to="/projet-2"
                            className={(nav) =>
                                nav.isActive ? "nav-active hover" : "hover"
                            }
                        >
                            <li>projet 2</li>
                        </NavLink>
                        <NavLink
                            to="/projet-3"
                            className={(nav) =>
                                nav.isActive ? "nav-active hover" : "hover"
                            }
                        >
                            <li>projet 3</li>
                        </NavLink>
                        <NavLink
                            to="/projet-4"
                            className={(nav) =>
                                nav.isActive ? "nav-active hover" : "hover"
                            }
                        >
                            <li>projet 4</li>
                        </NavLink>
                    </ul>
                </li>

                <NavLink
                    to="/contact"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
