import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    width: 20%;
    height: 50%;
    padding:3rem 1rem;
    border-radius: 0.4em 0em 0em 0.4em;
    background:url(${params => params.mimg});
`;

const logImgComp = (params) =>{
    const Mimg = params.Mimg;
    console.log(params.Mimg);
    return(
        <ImageContainer mimg={Mimg}>
        </ImageContainer>
    )
}

export default logImgComp;