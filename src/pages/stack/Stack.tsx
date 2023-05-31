import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useReadClusterQuery } from '../../api/StackdApi';
import { useParams } from 'react-router-dom';


import DictCard from '../../components/DictCard';
import NestedDictCard from '../../components/NestedDictCard';
import SpecOffcanvasButton from '../../components/SpecOffcanvasButton';

import Secrets from './Secrets';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

const yaml = require('js-yaml');

const Stack = () => {

  const { clusterName, stackName } = useParams();
  const { data, error, isLoading } = useReadClusterQuery({ clusterName: clusterName });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const stack = data.stacks[stackName];
  const cluster = data;

  return (
    
    <Container fluid>
      <h1 className='mb-3'>
        Stack: <code><u>{cluster.name}/{stack.name}</u></code>
      </h1>
    <Tabs defaultActiveKey="secrets" id="stack-tabs" className="mb-3">
      
      <Tab eventKey="modules" title="Modules">
        <Card className="mt-3">
          <Card.Header>
            <Card.Title>Modules</Card.Title>
          </Card.Header>
          <Card.Body>
        <Table className="mt-3" hover>
          <thead>
            <tr>
              <th>Module</th>
              <th>Source</th>
              <th>Providers</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {Object.values(stack.stack.modules).map((module) => (
              <tr key={module.name}>
                <td>{module.name}</td>
                <td>{module.src}</td>
                <td>
                  {module.providers.map((provider) => (<Badge className="me-1" bg="secondary">{provider}</Badge>))}
                </td>
                <td></td>
                </tr>
            ))}
          </tbody>
        </Table>
        </Card.Body>
        </Card>
      </Tab>
      <Tab eventKey="variables" title="Variables"><DictCard title="Variables" data={stack.vars} /></Tab>
      <Tab eventKey="secrets" title="Secrets"><Secrets stack={stack}/></Tab>
      <Tab eventKey="operations" title="Operations">Operations</Tab>
      <Tab eventKey="stack" title="Stack">
        <SyntaxHighlighter language="yaml" style={theme}>{yaml.dump(stack)}</SyntaxHighlighter>
      </Tab>
    </Tabs>
    </Container>

  );

};

export default Stack;
