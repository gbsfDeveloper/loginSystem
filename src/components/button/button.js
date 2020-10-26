import React,{useState} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
    border: none;
    background-color:#4298f4;
    color:white;
    outline: none;
    &:hover{
        background-color: #2c68a7;
        border: none;
        cursor: pointer;
        transition: 0.5s;
    }
    &:not(:hover){
        transition: 0.5s;
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