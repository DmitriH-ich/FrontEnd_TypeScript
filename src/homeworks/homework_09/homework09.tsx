import ButtonStyledComponent from "./components/buttonStyledHomeWork/ButtonStyledHomeWork";
import styles from './homework09.module.css'



export default function Homework09() {
    return (
        <div className={styles.container}>
            <h1>Homework 09</h1>
            <div className={styles.buttonContainer}>
                <ButtonStyledComponent />
            </div>
        </div>
    );
}