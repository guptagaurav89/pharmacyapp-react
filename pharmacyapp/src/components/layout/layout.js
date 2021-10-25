import * as React from 'react';
import { Container } from 'react-bootstrap';
import NavMenu from './navigation/NavMenu';

export default class Layout extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <NavMenu />
                <Container className={"container"}>
                    {this.props.children}
                </Container>
            </React.Fragment>
        );
    }
}