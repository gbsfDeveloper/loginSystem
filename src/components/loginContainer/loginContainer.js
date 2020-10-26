import React,{useState} from 'react';
import Input from '../input'
import Button from '../button'
import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    width: 20%;
    height: 100%;
    /* background-color:rgb(235, 239, 243); */
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

const LoginContainer = (elements) =>{
    return(
        <Container>
            <Input initialPH={"User"}></Input>
            <Input initialPH={"Password"}></Input>
            <Button text={"Log in"}></Button>
        </Container>
    )
}

export default LoginContainer;