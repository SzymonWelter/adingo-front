import React from 'react';
import {Button, Col} from "react-bootstrap";
import {history} from '../../helpers';

const HomeButton = ({name, href, ...rest}) => (
    <Col>
        <Button {...rest} onClick={(e) => history.push(href)} style={{height: 300}} variant={"deep-purple"} block>
            {name}
        </Button>
    </Col>
);

export default HomeButton;

