import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    font-weight:bold;
    color:#4298f4;
`;

const TitleComp = (params) =>{
    const text = params.text;
    return(
        <Title>
            {text}
        </Title>
    )
}

export default TitleComp;