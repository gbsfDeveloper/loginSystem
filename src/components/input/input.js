import React,{useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    margin-top:1rem;
    padding: 1rem;
    border:none;
    outline:none;
    color: #2c68a7;
    font-size: 1em;
`;

const DefaultInput = (params) =>{
    const placeHolder = params.initialPH
    const [busqueda,setBusqueda] = useState('');
    return(
        <Input 
            value={busqueda}
            onChange={(e)=>{setBusqueda(e.target.value)}}
            placeholder={placeHolder}>
        </Input>
    )
}

export default DefaultInput;