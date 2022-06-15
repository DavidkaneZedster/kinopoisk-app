import { useState, useEffect } from "react";
import { fetchFilms, fetchTop } from "./api/FetchFilms.jsx";
import styles from "./css/App.module.css";

function App() {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getFilms = async (params) => {
        try {
            setIsLoading(true);
            const res = await fetchFilms(params);
            setFilms(res);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const getTop = async (params) => {
        try {
            setIsLoading(true);
            const res = await fetchTop(params);
            setFilms(res);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    console.log(films);

    useEffect(() => {
        getFilms();
    }, []);

    // const get = () => {
    //     useEffect(() => {
    //         getTop();
    //     }, []);
    // };

    console.log(films);

    return (
        <div className="container">
            <div className={styles.btns}>
                <div>
                    <h1>Фильтры:</h1>
                </div>
                <div>
                    <button className={styles.btn} onClick={() => getTop()}>
                        Топ 250 фильмов
                    </button>
                    <button className={styles.btn}>Популярные</button>
                    <button className={styles.btn}>Новые</button>
                </div>
            </div>
            <h2 className={styles.all}>Все фильмы:</h2>
            <div className={styles.cards}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    films?.data?.items.map((film) => (
                        <div className={styles.card} key={film.kinopoiskId}>
                            <h2 className={styles.title}>{film.nameRu}</h2>
                            <img
                                width={"150px"}
                                height={"150px"}
                                src={film.posterUrl}
                                alt="description"
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default App;
