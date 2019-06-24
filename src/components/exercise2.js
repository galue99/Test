import React from 'react';
import PropTypes from 'prop-types';
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

import Cards from './cards';
import { URL } from '../utils/url';

class Exercise2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            number: "",
            spinner: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            spinner: true
        });
        fetch(`${URL}?page=${this.state.number}`)
            .then(response => response.json())
            .then(res => this.setState({ data: res.data, spinner: false }));
    }


    render(){
        const { data, spinner } = this.state;
        return(
            <div>
                <h1>Ejercicio 2</h1>
                <p>Mostrar las imagenes de usuarios de una página dada por parámetro desde el front</p>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Valor:
                            <input type="number"
                                   min={0}
                                   name="number"
                                   value={this.state.value}
                                   onChange={this.handleChange}
                            />
                            <input type="submit"
                                   value="Consultar"
                            />
                        </label>
                    </form>
                </div>
                { spinner ?
                    <Spinner style={{width: '3rem', height: '3rem'}}/> :
                    <Cards value={data}/>
                }

            </div>
        );
    }
}


Exercise2.propTypes = {
    data: PropTypes.array,
};


export default Exercise2;

