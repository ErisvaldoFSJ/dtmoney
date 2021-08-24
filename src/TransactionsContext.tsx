import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    createdAt: string;
    ammount: number;
}

interface TransactionproviderPropos {
    children: ReactNode;
}

interface TrancactionsContexData {
    transactions: Transaction[];
    createTransaction: (transaction: transactionInput) => Promise<void>;
}

type transactionInput = Omit<Transaction, 'id' | 'createdAt'>;



export const TransactionContext = createContext<TrancactionsContexData>(
    {} as TrancactionsContexData
);

export function Transactionsprovider({ children }: TransactionproviderPropos) {
    const [transactions, setTransactions] = useState<Transaction[]>([])


    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: transactionInput) {
        const response = await api.post('/transactions',
            {
                ...transactionInput,
                createdAt: new Date()
            })
        const { transaction } = response.data;
        setTransactions([
            ...transactions,
            transaction
        ])
    }


    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}