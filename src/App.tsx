import {GlobalStyle} from './styles/global';
import { Header} from './components/Header';
import { Deashboard } from './components/Dashboard';
import {NewTransactionModal} from './components/NewTransactionModal';
import Modal from 'react-modal';
import { useState } from 'react';
import {Transactionsprovider} from './TransactionsContext';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransitionModal, setIsNewTransitionModal] = useState(false);
  function handleopenNewTransitionModal() {
    setIsNewTransitionModal(true);
  }
  function handlecloseNewTransitionModal() {
    setIsNewTransitionModal(false);
  }


  return (
    <Transactionsprovider>
      <Header onOpenNewTransactionModal={handleopenNewTransitionModal}/>
      <Deashboard /> 
            <NewTransactionModal 
            isOpen={isNewTransitionModal}
            onRequestClose={handlecloseNewTransitionModal}
            />
      <GlobalStyle />
    </Transactionsprovider>
  );
}

