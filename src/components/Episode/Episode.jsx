import React, { useState, useEffect } from "react";
import { fetchEpisode } from "../../api/FetchSerials";
import styles from "./Episode.module.css";

export const Episode = () => {
    const [episodes, setEpisodes] = useState([]);
    const [isEpisodeLoading, setIsEpisodeLoading] = useState(false);

    const getEpisode = async (params) => {
        try {
            setIsEpisodeLoading(true);
            const res = await fetchEpisode(params);
            setEpisodes(res);
        } catch (err) {
            console.error(err);
        } finally {
            setIsEpisodeLoading(false);
        }
    };

    useEffect(() => {
        getEpisode();
    }, []);

    return (
        <>
            <h2 className={styles.all}>Episodes:</h2>
            <div className={styles.cards}>
                {isEpisodeLoading ? (
                    <div className={styles.loading}>Loading...</div>
                ) : (
                    episodes?.data?.results.map((episode) => (
                        <div className={styles.card} key={episode.id}>
                            <h3>Дата выпуска:</h3>
                            <p className={styles.after__title}>
                                {episode.air_date}
                            </p>
                            <h3>Название эпизода:</h3>
                            <p className={styles.after__title}>
                                {episode.name}
                            </p>
                            <p className={styles.episode}>
                                Номер эпизода: {episode.episode}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};
