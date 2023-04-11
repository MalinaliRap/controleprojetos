import React from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="nome do projeto" 
                name="name" 
                placeholder="Insira nome do projeto">

                </Input>          
                <Input 
                type="number" 
                text="Orçamento do projeto" 
                name="bugget" 
                placeholder="Insira orçamento do projeto"/>
                <Select 
                    name="category_id"
                    text="Selecione a categoria"
                />
                <SubmitButton text={btnText}></SubmitButton>

        </form>
    );
}

export default ProjectForm;