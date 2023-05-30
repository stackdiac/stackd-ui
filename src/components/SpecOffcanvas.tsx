import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs, Table, Nav } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {RootState} from '../store';

const yaml = require('js-yaml');


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { hideSpecOffcanvas } from '../actions/SpecOffcanvasActions';

const mapStateToProps = (state: RootState) => ({
  state: state.SpecOffcanvasStore,
});


const connector = connect(mapStateToProps, {hideSpecOffcanvas});

type SpecOffcanvasProps = {} & ConnectedProps<typeof connector>;

function SpecOffcanvas(props: SpecOffcanvasProps) {
  const {state, hideSpecOffcanvas} = props;
    
    if (state.spec == null) {
      return null;
    }
      

    return (
    <Offcanvas show={state.show} onHide={hideSpecOffcanvas} placement={'end'}>
      <Tab.Container id="cfo-tabs" defaultActiveKey="data">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>file: {state.spec.relpath}</Offcanvas.Title>        
        <Nav variant="pills" className="ms-auto me-2">
            <Nav.Item>
              <Nav.Link eventKey="data">Data</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="source">Source</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="rendered">Rendered</Nav.Link>
            </Nav.Item>
          </Nav>
      </Offcanvas.Header>
      <Offcanvas.Body>       
      <Tab.Content>
      <Tab.Pane eventKey="data" title="Data">
      
      <SyntaxHighlighter language="yaml" style={theme}>{yaml.dump(state.spec.data)}</SyntaxHighlighter>
      
      </Tab.Pane>
      <Tab.Pane eventKey="source" title="Source">
      <SyntaxHighlighter language="yaml" style={theme}>{state.spec.source}</SyntaxHighlighter>
      </Tab.Pane>
      <Tab.Pane eventKey="rendered" title="Rendered">
      <SyntaxHighlighter language="yaml" style={theme}>{state.spec.rendered}</SyntaxHighlighter>
      </Tab.Pane>
          </Tab.Content>
 
    
      </Offcanvas.Body>
      </Tab.Container>
    </Offcanvas> );
}


export default connector(SpecOffcanvas);
