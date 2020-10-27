import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
    width:100%;
    text-align:left;
    font-size:0.8em;
    color:#4298f4;
`;

const MessageComp = (params) =>{
    const text = params.text;
    return(
        <Message>
            {text}
        </Message>
    )
}

export default MessageComp;