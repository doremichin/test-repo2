import React from 'react';
import {Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Home = React.lazy(() => import("./pages/Home"));
function Routers () {
    return(
        <Container>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </Container>
    )
};

const Container = styled.div`

`;

export default Routers;
