import React,{useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 90%;
    margin-bottom:1rem;
    padding: 1rem;
    background-color:#d4f7ff;
    border:1px solid transparent;
    outline:none;
    color: #2c68a7;
    font-size: 1em;
    transition: 0.3s;
    &:hover{
        border: 1px solid  #2c68a7;
    }
    &:focus{
        border: 3px solid  #2c68a7;
    }
`;

const DefaultInput = (params) =>{
    const placeHolder = params.initialPH;
    const id = params.id;
    const type = params.type;
    const [busqueda,setBusqueda] = useState('');
    return(
        <Input 
            value={busqueda}
            onChange={(e)=>{setBusqueda(e.target.value)}}
            placeholder={placeHolder}
            type={type}
            id={id}>
        </Input>
    )
}

export default DefaultInput;