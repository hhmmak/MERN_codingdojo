import styles from './Header.module.css'

const Header = (props) => {

  const {title} = props;

  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;