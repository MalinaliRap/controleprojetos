import {useLocation} from 'react-router-dom';
import Message from '../layout/Message';

function Projects(props) {

const location = useLocation();
let message = '';
if(location.state){
    message = location.state.message;
}

    return (
       <div>
            <h1>
                Meus Projetos
            </h1>
            {message &&  <Message msg='Alguma Mensagem' type='success'></Message>}
       </div>
    );
}

export default Projects;