import React from 'react';
import Input from '../input';
import Button from '../button';
import Label from '../label';
import Title from '../title';
import Message from '../message';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    padding:3rem 3rem;
    border-radius: 0em 0.4em 0.4em 0em;
    width: 20%;
    height: 50%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color:white;
`;

const LoginContainer = () =>{
    return(
        <Container>
            <Title text={"Log in"}></Title>
            <Message text={"You can login with your actual account"}></Message>
            <Label lfor={"userInput"} text={"User"}></Label>
            <Input initialPH={""} id={"userInput"}  type={"text"}></Input>
            <Label lfor={"passInput"} text={"Password"}></Label>
            <Input initialPH={""} id={"passInput"} type={"password"}></Input>
            <Button text={"Log in"}></Button>
        </Container>
    )
}

export default LoginContainer;

