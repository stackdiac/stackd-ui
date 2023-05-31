import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs, Table, Nav } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {RootState} from '../store';
import Form from '@rjsf/fluent-ui';
import validator from '@rjsf/validator-ajv8';

const yaml = require('js-yaml');


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { hideFormOffcanvas, submitFormOffcanvas } from '../actions/FormOffcanvasActions';

const mapStateToProps = (state: RootState) => ({
  state: state.FormOffcanvasStore,
});


const connector = connect(mapStateToProps, {hideFormOffcanvas, submitFormOffcanvas});
const log = (type) => console.log.bind(console, type);


function FormOffcanvas({state, hideFormOffcanvas, submitFormOffcanvas}) {
      
    
    return (
    <Offcanvas show={state.show} onHide={hideFormOffcanvas} placement={'end'}>
    
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{state.title}</Offcanvas.Title>        
      </Offcanvas.Header>
      <Offcanvas.Body>       
      <Form 
                schema={state.schema}
                uiSchema={state.uiSchema || {}}
                validator={validator}
                onChange={log('changed')}
                onSubmit={submitFormOffcanvas}
                onError={log('errors')}
                formData={state.formData}
            />
    
      </Offcanvas.Body>
      
    </Offcanvas> );
}


export default connector(FormOffcanvas);
