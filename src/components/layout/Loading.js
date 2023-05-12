import styles from './Loading.module.css'
import loading from '../../img/loading.svg'

function Loading(props) {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="loading"></img>            
        </div>
    );

}

export default Loading;