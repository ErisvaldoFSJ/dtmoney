import styled from "styled-components";
import {darken, transparentize} from 'polished'

//inside container modal
export const Container= styled.form`
    h2{
    color: var(--text-title);
    font-size:1.5rem;
    margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.5rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }
        & + input{
            margin-top: 1rem;
        }
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.5rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2;
        &:hover{
            filter: brightness(0.9);
        }
    }

`;
// container for RadioBox
export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

//interface to index.js, RadioBox recive props for manipulate elements
interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}
// color can be used
const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}
// buton RadioBox, for submit form
export const RadioBox = styled.button<RadioBoxProps>`
        height:4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props)=> props.isActive 
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'};   

        display: flex;
        align-items: center;
        justify-content: center;
        
        transition: border-color 0.2s;
        &:hover{
            border-color: ${darken(0.1, '#d7d7d7')};
        }
        img{
            height:20px;
            width:20px;
        }
        span{
            display: inline-block;
            margin-left:1rem;
            font-size: 1rem;
            color:var(--text-title);
        }
`;






