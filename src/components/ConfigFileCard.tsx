import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
const yaml = require('js-yaml');

//import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';




const ConfigFileCard = ({title, cf }) => {
    /* this creates bootstrap card with a title and a body */
    
    return (
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Table hover>
            <tbody>
              <tr><th>Path</th><td><code>{cf.path}</code></td></tr>
              
            </tbody>
          </Table>
          
          <Tabs
            defaultActiveKey="data"
            id="config-file-tabs"
            className="mb-3"
          >
      <Tab eventKey="data" title="Data">
      
      <SyntaxHighlighter language="yaml" style={theme}>{yaml.dump(cf.data)}</SyntaxHighlighter>
      
      </Tab>
      <Tab eventKey="source" title="Source">
      <SyntaxHighlighter language="yaml" style={theme}>{cf.source}</SyntaxHighlighter>
      </Tab>
      <Tab eventKey="rendered" title="Rendered">
      <SyntaxHighlighter language="yaml" style={theme}>{cf.rendered}</SyntaxHighlighter>
      </Tab>
    </Tabs>
        </Card.Body>
      </Card>
    );
};

export default ConfigFileCard;