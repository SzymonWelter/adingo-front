import React from 'react';
import {Button} from "react-bootstrap";

export const HomeButton = (props) => {
    return (
        <Button block variant={"secondary"} style={{height: 300}}>
            {props.name}
        </Button>
    );
};

