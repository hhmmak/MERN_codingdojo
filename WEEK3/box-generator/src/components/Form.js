import {useState} from 'react';

import styles from './Form.module.css';

const Form = (props) => {
    
    const [color, setColor] = useState("");
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);

    const [emptyBox, setEmptyBox] = useState(false);

    const handleSubmit = (e) => {
        setEmptyBox(false)
        e.preventDefault();
        console.log(`-----Form.js: form submitted - ${color}, ${height}, ${width}`);
        (color !== '' && height !== '' && width !== '')
            ? props.onFormSubmit(color, height, width)
            : setEmptyBox(true);

        setColor('');
        setHeight('');
        setWidth('');
    };

    
    return (
    <div>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label className={styles.formLabel}>Color</label>
                <input type="text" onChange={(e) => { setColor(e.target.value) }} className={styles.formText} value={color} />
            </div>
            <div>
                <label className={styles.formLabel}>Height</label>
                <input type="number" onChange={(e) => {setHeight(Math.round(e.target.value))}} className={styles.formText} value={height} />
            </div>
            <div>
                <label className={styles.formLabel}>Width</label>
                <input type="number" onChange={(e) => {setWidth(Math.round(e.target.value))}} className={styles.formText} value={width} />
            </div>
            <button type="submit" className={styles.btn} >Add</button>
        </form>

        { emptyBox && 
            (<div>
                <p className={styles.validation}>Please enter all fields</p>
            </div>)
        }
    </div>
    )
}

export default Form