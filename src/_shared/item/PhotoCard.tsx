import React from 'react';
import styled from 'styled-components';
import { IPhoto } from '../../models/IPhoto';

function PhotoCard ({data} : {data : IPhoto}) {
    return(
        <Container>
            <Image>
                <img src={data.urls.regular} alt=""/>
            </Image>
        </Container>
    )
};

const Container = styled.div`
    height: 100%;
`;
const Image = styled.div`
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default PhotoCard;
