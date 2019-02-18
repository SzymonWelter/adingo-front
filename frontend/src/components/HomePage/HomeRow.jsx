import React from 'react';
import { Col, Row} from "react-bootstrap";


const HomeRow = ({children,xs,lg}) => {
    return (
        <Row>
            <Col>
                {children[0]}
            </Col>
            <Col xs={xs} lg={lg}>
                {children[1]}
            </Col>
            <Col>
                {children[2]}
            </Col>
        </Row>
    );
};
export default HomeRow;

