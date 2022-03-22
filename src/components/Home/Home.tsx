import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import {getPhotoRest} from "../../api/getPhotoRest";
import HomeComponent from "./Home.view";

function HomeContainer () {
    const { isLoading, error,data} = useQuery('photo',getPhotoRest,{
        refetchOnWindowFocus : false
    })

    if(isLoading || !data) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    const photoData = data.data
    return(
        <Container>
            <Image>
                <img src="./assets/amumu.jpeg" alt="amumu"/>
            </Image>
            <HomeComponent data={photoData}/>
        </Container>
    )
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border-radius: 50%;
  border: 15px solid #fff;
  overflow: hidden;
  img{
    width: 100%;
    object-fit: cover;
  }
`;

export default HomeContainer;
