import React,{useState} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 60%;
    margin-top: 1rem;
    padding: 1rem;
    border: none;
    outline: none;
    background-color:#4298f4;
    border-radius:2rem;
    color:white;
    transition: 0.5s;
    &:hover{
        background-color: #2c68a7;
        border: none;
        cursor: pointer;
    }
`;

const DefaultButton = (params) =>{
    const text = params.text;
    const [buttonText] = useState(text);
    return(
        <Button>
            {buttonText}
        </Button>
    )
}

export default DefaultButton;