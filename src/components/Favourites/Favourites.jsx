import { useSelector } from "react-redux";
import styles from "./Favourites.module.css";
import { useAction } from "../../hooks/useAction";

export const Favourites = () => {
    const storeData = useSelector((state) => state.favourite.favourites);
    const { setFavourites } = useAction();

    return (
        <>
            <h2 className={styles.all}>All favourites:</h2>
            <div className={styles.cards}>
                {storeData.length !== 0 ? (
                    storeData.map((item) => {
                        return (
                            <div className={styles.card} key={item.id}>
                                <h2 className={styles.title}>{item.name}</h2>
                                <img
                                    className={styles.hero__img}
                                    width={"150px"}
                                    height={"150px"}
                                    src={item.image}
                                    alt="description"
                                />
                                <button
                                    style={{ padding: "5px 10px" }}
                                    onClick={() => setFavourites(item)}
                                >
                                    Delete from favourites
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <div
                        style={{
                            fontSize: "24px",
                            border: "1px solid #000",
                            margin: "0 auto",
                            padding: "5px 10px",
                        }}
                    >
                        Избранного нет
                    </div>
                )}
            </div>
        </>
    );
};
