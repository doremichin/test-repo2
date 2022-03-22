import React from 'react';
import styled from 'styled-components';
interface MainListProps {
    data : Array<any>
    children(item : any, index : number) : any
}
function MainList ({data, children} : MainListProps) {
    return(
        <Container>
            <Row>
                {
                    data.map((item,index) => (
                        <Col>
                            {children(item,index)}
                        </Col>
                        )
                    )
                }
            </Row>
        </Container>
    )
};

const Container = styled.div`

`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  margin-bottom: 20px;
  width: 33.33%;
  padding: 0 10px;
`;
export default MainList;
