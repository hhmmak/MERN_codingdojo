import styles from './Main.module.css'

const Main = (props) => {
    return (
        <div className={styles.block}>
            {props.children}
        </div>
    )
}
export default Main