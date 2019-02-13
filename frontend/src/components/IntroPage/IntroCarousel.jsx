import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

export class IntroCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First item&bg=373940"
                        alt="First item"
                    />
                    <Carousel.Caption>
                        <h3>First label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second item&bg=282c34"
                        alt="Third item"
                    />

                    <Carousel.Caption>
                        <h3>Second item label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third item&bg=20232a"
                        alt="Third item"
                    />

                    <Carousel.Caption>
                        <h3>Third item label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
