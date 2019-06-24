import React from 'react';
import { PropTypes } from 'prop-types';
import { Badge } from 'reactstrap';

const Percentage = ({ value }) => {

    let personsLength = value.length;
    let persons = 0;

    for (let person of value) {
        let fullName = person.first_name + person.last_name;
        if( fullName.length > 12 ){
            persons++;
        }
    }

    return (
        <div>
            <p>Obtener el porcentaje de personas cuyo nombre y apellido tienen mas de 12 caracteres</p>
            <p>{ persons/personsLength !== 0 ?
                ((persons/personsLength)*100) <= 50 ?
                    <Badge color={'warning'}>{((persons/personsLength)*100)}%</Badge>
                    :
                    <Badge color={'success'}>{((persons/personsLength)*100)}%</Badge> :
                <Badge color={'danger'}>0%</Badge>}
            </p>
        </div>
    );

};

Percentage.propTypes = {
    value: PropTypes.array.isRequired,
};

export default Percentage;