import styles from './BoxDisplay.module.css';

const BoxDisplay = (props) => {




    return (
        <div className={styles.boxContainer}>
        { 
            props.boxList.map( (item, index) => 
            <div key={index} style={item} className={styles.boxItem} >{index}</div>
            )
        }
        </div>
    )
}
export default BoxDisplay;