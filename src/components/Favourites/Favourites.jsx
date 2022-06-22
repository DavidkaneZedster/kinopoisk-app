import styles from "./Favourites.module.css";
import { useSelector } from "react-redux";

export const Favourites = () => {
    const storeData = useSelector((state) => state.favouritesReducer);
    console.log(storeData);

    return (
        <>
            <div className={styles}>Favourites</div>
        </>
    );
};
