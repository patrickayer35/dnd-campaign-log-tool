import React from 'react';
import './Tooltip.module.scss';

export default function Tooltip(props) {

    return(
        <span className='tooltip'>
            {props.text}
        </span>
    );

}