import React from 'react';
import {Button} from "react-bootstrap";
import {history} from '../../helpers';

const HomeButton = ({name, href, ...rest}) => (
    <Button {...rest} onClick={(e) => history.push(href)} style={{height: 300}} variant={"deep-purple"} block>
        {name}
    </Button>
);

export default HomeButton;

