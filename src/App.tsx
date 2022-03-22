import React, { Suspense } from 'react';
import styled from 'styled-components';
import Routers from "./Routers";
import {GlobalStyle} from "./styled/GlobalStyle";
import { QueryClient, QueryClientProvider } from 'react-query'

function App () {
    const queryClient = new QueryClient()
    return(
        <Container>
            <GlobalStyle/>
            <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>loading....</div>}>
                    <Routers/>
            </Suspense>
            </QueryClientProvider>
        </Container>
    )
};

const Container = styled.div`

`;

export default App;
