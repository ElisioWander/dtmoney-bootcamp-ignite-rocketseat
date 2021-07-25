import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        font-size: 1.5rem;

        color: var(--text-title);

        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;
        
        font-size: 1rem;
        font-weight: 400;

        border: 1px solid #D7D7D7;
        border-radius: 0.25rem;


        background-color: var(--input-background);

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;

        margin-top: 1.5rem;
        padding: 0 1.5rem;

        font-size: 1rem;
        font-weight: 600;

        border: none;
        border-radius: 0.25rem;

        color: #FFF;
        background-color: var(--green);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean
    activeColor: 'green' | 'red'
}

const colors = {
    green: '#33CC95',
    red: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px #D7D7D7;
    border-radius: 0.5rem;

    background: ${(props) => props.isActive 
    ?  transparentize(0.9, colors[props.activeColor])
    : 'transparent'};

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#D7D7D7')};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        margin-left: 1rem;

        display: inline-block;

        font-size: 1rem;

        color: var(--text-title);
    }
`