import React from 'react';
import {Button} from "react-bootstrap";

export const HomeButton = ({name, href, ...rest}) => {
    return (
        <a href={href}>
            <Button {...rest} style={{height: 300}} variant={"deep-purple"} block>
                {name}
            </Button>
        </a>
    );
};

