import {Container, TransactionTypeContainer, RadioBox} from './styles'
import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface onOpenNewTransactionModal {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({ isOpen, onRequestClose}:onOpenNewTransactionModal){
    
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState ('deposit');


    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        const data = ({
            title,
            value,
            category,
            type,

        }       
        )
        api.post('transactions', data)

    }
    return(
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                > 
                    <button 
                    type="button" 
                    onClick={onRequestClose} 
                    className="react-modal-close">
                        <img src={closeImg} alt="Fechar Modal" />
                    </button>
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar Nova transição</h2>
                    <input type="text"
                        placeholder="Titulo"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <input type="number"
                        placeholder="Valor"
                        value={value}
                        onChange={event => setValue(Number(event.target.value))}
                    />
                    <TransactionTypeContainer>
                        <RadioBox 
                            type="button" 
                            onClick={()=> {setType('deposit')}}
                            isActive={type === 'deposit'}
                            activeColor = 'green'
                            >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                        </RadioBox>
                        <RadioBox 
                            type="button"
                            onClick={()=> {setType('withdwraw')}}
                            isActive={type === 'withdwraw'}
                            activeColor = 'red'
                            >
                            <img src={outcomeImg} alt="Saida" />
                            <span>Saida</span>
                        </RadioBox>
                        
                    </TransactionTypeContainer>
                    <input type="text"
                        placeholder="Categoria"
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal> //fim modal
    )
}