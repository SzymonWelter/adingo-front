import React from 'react';
import {Button} from "react-bootstrap";
import {history} from '../../helpers'

export const HomeButton = ({name,href,...rest}) => {
    return (
        <Button {...rest} style={{height: 300}} variant={"secondary"} onClick={()=>{history.push(href)}} block>
            {name}
        </Button>
    );
};

