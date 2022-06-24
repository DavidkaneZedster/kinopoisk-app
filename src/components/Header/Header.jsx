import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

export const Header = () => {
    return (
        <>
            <div className={styles.btns}>
                <div>
                    <div style={{ textAlign: "center", fontSize: 10 }}>
                        <span>go main</span>
                    </div>
                    <Link to="/">
                        <div style={{ textAlign: "center", marginTop: 10 }}>
                            <Logo />
                        </div>
                    </Link>
                    <h1>Filters:</h1>
                </div>
                <div>
                    <div className={styles.favourites}>
                        <Link to="/favourites">
                            <button className={styles.favourites__btn}>
                                Favourites
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/hero">
                            <button className={styles.btn}>Heroes</button>
                        </Link>
                        <Link to="/episode">
                            <button className={styles.btn}>Episodes</button>
                        </Link>
                        <Link to="/location">
                            <button className={styles.btn}>Location</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
