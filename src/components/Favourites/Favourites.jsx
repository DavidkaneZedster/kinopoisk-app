import styles from "./Favourites.module.css";
import { useSelector } from "react-redux";

export const Favourites = () => {
    const storeData = useSelector((state) => state.favouritesReducer);

    return (
        <>
            <div className={styles}>Favourites</div>
        </>
    );
};
