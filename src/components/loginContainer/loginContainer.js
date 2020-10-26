import React from 'react';
import Input from '../input'
import Button from '../button'
import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    padding:3rem 3rem;
    width: 20%;
    height: 50%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color:white;
`;

const Label = styled.label`
    width:100%;
    padding-bottom:0.5rem;
    font-size:0.7rem;
    font-weight:bold;
    color:#4298f4;
    text-align:left;
`;

const Title = styled.h2`
    font-weight:bold;
    color:#4298f4;
`;

const Message = styled.p`
    /* font-weight:bold; */
    width:100%;
    text-align:left;
    font-size:0.8em;
    color:#4298f4;
`;

const LoginContainer = (elements) =>{
    return(
        <Container>
            <Title>Log in</Title>
            <Message>You can login with your actual account</Message>
            <Label for={"userInput"}>{"User"}</Label>
            <Input initialPH={""} id={"userInput"}  type={"text"}></Input>
            <Label for={"passInput"}>{"Password"}</Label>
            <Input initialPH={""} id={"passInput"} type={"password"}></Input>
            <Button text={"Log in"}></Button>
        </Container>
    )
}

export default LoginContainer;