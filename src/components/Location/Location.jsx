import React, { useState, useEffect } from "react";
import { fetchLocation } from "../../api/FetchSerials";
import styles from "./Location.module.css";

export const Location = () => {
    const [location, setLocation] = useState([]);
    const [isLocationLoading, setIsLocationLoading] = useState(false);

    const getLocation = async (params) => {
        try {
            setIsLocationLoading(true);
            const res = await fetchLocation(params);
            setLocation(res);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLocationLoading(false);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <>
            <h2 className={styles.all}>Location:</h2>
            <div className={styles.cards}>
                {isLocationLoading ? (
                    <div className={styles.loading}>Loading...</div>
                ) : (
                    location?.data?.results.map((loc) => (
                        <div className={styles.card} key={loc.id}>
                            <h3 className={styles.title}>Название локации:</h3>
                            <p className={styles.after__title}>{loc.name}</p>
                            <h3 className={styles.title}>
                                Название измерения:
                            </h3>
                            <p className={styles.after__title}>
                                {loc.dimension === "unknown" ? (
                                    <>-</>
                                ) : (
                                    loc.dimension
                                )}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};
