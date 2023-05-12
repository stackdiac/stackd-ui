import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs, Table, Nav } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {RootState} from '../store';

const yaml = require('js-yaml');


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { hideConfigFileOffcanvas } from '../actions/ConfigFileOffcanvasActions';

const mapStateToProps = (state: RootState) => ({
  state: state.ConfigFileOffcanvasStore,
});


const connector = connect(mapStateToProps, {hideConfigFileOffcanvas});

type ConfigFileOffcanvasProps = {} & ConnectedProps<typeof connector>;

function ConfigFileOffcanvas(props: ConfigFileOffcanvasProps) {
  const {state, hideConfigFileOffcanvas} = props;
    
    if (state.config_file == null) {
      return null;
    }
      

    return (
    <Offcanvas show={state.show} onHide={hideConfigFileOffcanvas} placement={'end'}>
      <Tab.Container id="cfo-tabs" defaultActiveKey="data">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>file: {state.config_file.relpath}</Offcanvas.Title>        
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
      
      <SyntaxHighlighter language="yaml" style={theme}>{yaml.dump(state.config_file.data)}</SyntaxHighlighter>
      
      </Tab.Pane>
      <Tab.Pane eventKey="source" title="Source">
      <SyntaxHighlighter language="yaml" style={theme}>{state.config_file.source}</SyntaxHighlighter>
      </Tab.Pane>
      <Tab.Pane eventKey="rendered" title="Rendered">
      <SyntaxHighlighter language="yaml" style={theme}>{state.config_file.rendered}</SyntaxHighlighter>
      </Tab.Pane>
          </Tab.Content>
 
    
      </Offcanvas.Body>
      </Tab.Container>
    </Offcanvas> );
}


export default connector(ConfigFileOffcanvas);
