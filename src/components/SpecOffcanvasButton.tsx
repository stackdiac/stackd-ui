import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {RootState} from '../store';
import { showSpecOffcanvas } from '../actions/SpecOffcanvasActions';
import { SpecModel } from '../api/StackdApi';


const SpecOffcanvasButton = ({spec, showSpecOffcanvas, text=null, variant="light", className='mx-2 my-1', ...props}) => {


  const clickHandler = ()=>showSpecOffcanvas(spec)
    return (<Button variant={variant} onClick={clickHandler}
      title="Show specification"
      className={className} {...props}
      >{text ? text : (<i className="bi bi-braces"></i>)}</Button> );
    
}


export default connect(undefined, {showSpecOffcanvas})(SpecOffcanvasButton);