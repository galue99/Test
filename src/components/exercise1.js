import React from 'react';
import Percentage from './percentage';
import PropTypes from 'prop-types';
import { URL } from '../utils/url';

class Exercise extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch(`${URL}?page=1`)
            .then(response => response.json())
            .then(res => this.setState({ data: res.data }));
    }


    render(){
        const { data } = this.state;
        return (
            <div>
                <h1>Ejercicio 1</h1>
               <div>
                   <p>Obtener el porcentaje de personas cuyo nombre y apellido tienen mas de 12 caracteres</p>
                   <Percentage value={data} />
               </div>
            </div>
        );
    }
}

Exercise.propTypes = {
    data: PropTypes.array,
};

export default Exercise;
