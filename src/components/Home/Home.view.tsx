import React from 'react';
import styled from 'styled-components';
import { IPhoto } from '../../models/IPhoto';
import PhotoCard from '../../_shared/item/PhotoCard';
import MainList from "../../_shared/list/MainList";
interface Props {
    data : IPhoto[]
}
function HomeComponent ({data} : Props) {
    console.log(data)

    return(
        <Container>
            <MainList data={data}>
                {(item, index) => <PhotoCard key={index} data={item}/>}
            </MainList>
        </Container>
    )
};

const Container = styled.div`
position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default HomeComponent;
