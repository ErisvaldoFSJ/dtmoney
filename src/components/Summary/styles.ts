import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -6rem;

    div{ 
        background: var(--shape);
        padding:1.5rem;
        border-radius: 0.25rem;
        color: var(--text-tile);

        header{ 
        display: flex;
        align-items: center;
        justify-content: space-between;
        }// end header

        strong{
            display: block; // faz o elemento virar uma div, ai pode usar os margins
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: normal;
            line-height: 3rem;
        }//end strong

        &.highligth-backgound{
            background: var(--green);
            color: #FFF;
        }

    } //end div
    
   

`;