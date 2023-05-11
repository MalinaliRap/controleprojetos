import {useLocation} from 'react-router-dom';
import Message from '../layout/Message';
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';

function Projects(props) {

const location = useLocation();
let message = '';
if(location.state){
    message = location.state.message;
}

    return (
       <div className={styles.project_container}>
           <div  className={styles.title_container}>
                <h1>
                    Meus Projetos
                </h1>
                <LinkButton to="/newproject" text="Criar projeto"></LinkButton>
           </div>
            {message &&  <Message msg='Alguma Mensagem' type='success'></Message>}
            <Container customClass="start" >
                <p>Projetos ...</p>
            </Container>
       </div>
    );
}

export default Projects;