import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    width:100%;
    padding-bottom:0.5rem;
    font-size:0.7rem;
    font-weight:bold;
    color:#4298f4;
    text-align:left;
`;
const LabelComp = (params) =>{
    const forElement = params.lfor;
    const text = params.text;

    return(
        <Label htmlfor={forElement}>
            {text}
        </Label>
    )
}

export default LabelComp;