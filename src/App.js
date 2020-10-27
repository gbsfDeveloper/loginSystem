import React from 'react';
import LoginContainer from './components/loginContainer';
import ImageContainer from './components/loginBackImage';
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const App = () => {
    return (
        <Main>
            <ImageContainer Mimg={'/imgs/Captura.PNG'}></ImageContainer>
            <LoginContainer/>
        </Main>
    )
}

export default App;