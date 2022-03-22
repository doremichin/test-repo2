import React from 'react';
import { useQuery } from 'react-query';
import styled, {css} from 'styled-components';
import {getPhotoRest} from "../../api/getPhotoRest";
import HomeComponent from "./Home.view";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {changeToggle} from "../../redux/common/slice";

function HomeContainer () {
    const { isLoading, error,data} = useQuery('photo',getPhotoRest,{
        refetchOnWindowFocus : false
    })

    const dispatch = useDispatch();
    const toggle = useSelector((state : RootState) => state.common.toggle)
    const onClick = () => {
        dispatch(changeToggle())
    }
    if(isLoading || !data) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    const photoData = data.data
    return(
        <Container>
            <Image toggle={toggle}>
                <img src="./assets/amumu.jpeg" alt="amumu"/>
            </Image>
            <ToggleButton onClick={onClick}>
                토글버튼
            </ToggleButton>
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

const Image = styled.div<{toggle : boolean}>`

  position: absolute;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border-radius: 50%;
  border: 15px solid #fff;
  ${props => props.toggle ? css`border-color: #18f;` : css`border-color: #fff;`}
  overflow: hidden;
  img{
    width: 100%;
    object-fit: cover;
  }
`;
const ToggleButton = styled.div`
  border-radius: 6px;
  background-color: #18f;
  color: #fff;
  display: inline-block;
  padding: 10px;
  transform: translateY(250px);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export default HomeContainer;
