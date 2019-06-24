import React from 'react';
import { PropTypes } from 'prop-types';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Spinner
} from 'reactstrap';

const Cards = ({ value }) => {

    return (
        <Row>
            { value !== null ? value.map((data, index) => {
                return (
                    <Col sm="4" key={index}>
                        <div>
                            <Card>
                                <CardImg top width="100%" src={data.avatar} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Name: {data.first_name} {data.last_name}</CardTitle>
                                    <CardSubtitle>Email: {data.email}</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                );
            }) : ''}
        </Row>
    );

};

Cards.propTypes = {
    value: PropTypes.array.isRequired,
};

export default Cards;