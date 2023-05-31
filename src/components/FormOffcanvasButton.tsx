import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { showFormOffcanvas } from '../actions/FormOffcanvasActions';
import { RJSFSchema, UiSchema } from '@rjsf/utils';


const FormOffcanvasButton = ({schema, uiSchema, formData, showFormOffcanvas, text=null, variant="light", 
        title=null, className='', ...props}) => {

         
  const clickHandler = function () {
      
      return showFormOffcanvas(schema, uiSchema, formData, title);
  }

    return (<Button variant={variant} onClick={clickHandler}
      title={title ? title : "Show form"}
      className={className} {...props}
      >{text ? text : (<i className="bi bi-braces"></i>)}</Button> );
    
}


export default connect(undefined, {showFormOffcanvas})(FormOffcanvasButton);