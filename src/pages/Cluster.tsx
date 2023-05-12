import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useBuildClusterQuery, BuildClusterApiArg } from '../api/StackdApi';
import { useParams } from 'react-router-dom';


import DictCard from '../components/DictCard';
import NestedDictCard from '../components/NestedDictCard';
import ConfigFileOffcanvasButton from '../components/ConfigFileOffcanvasButton';


const Cluster = () => {

  const { clusterName } = useParams();
  const { data, error, isLoading } = useBuildClusterQuery({ clusterName: clusterName });

 // const [key, setKey] = useState("{cluster-${clusterName}-tabs}");

  

  console.log(data, error, isLoading, JSON.stringify(data, null, 2));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className='mb-4'>

      <Row>
        <Col md={12} className='mt-3'><h1>Cluster: <code><u>{data.name}</u></code>
          <ConfigFileOffcanvasButton config_file={data.config_file} />
        </h1></Col>
        <Col>

        </Col>
        <Col md={12}>
          <Tab.Container id="{cluster-${clusterName}-tabs}" defaultActiveKey="first">
            <Tabs
              id="{cluster-${clusterName}-tabs}"
             
              className="mb-3"
              defaultActiveKey="stacks"
            >
              <Tab eventKey="stacks" title="Stacks">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Stack</th>
                      <th>Source</th>
                      <th>Modules</th>
                      <th>Operations</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Object.keys(data.stacks).map((stackName) => {
                    const stack = data.stacks[stackName];
                    return (
                      <tr key={stack.name}>
                        <td>
                          {stack.name}                          
                        </td>
                        <td>{stack.src}</td>
                        <td>
                          {Object.keys(stack.stack.modules).map((module) => (
                            <Button variant={"success"} className="mx-1 mb-2" size="sm" key={module}>{module}</Button>
                          ))}
                        </td>
                        <td>
                          {Object.keys(stack.stack.operations).map((operation) => (
                            <Button variant={"primary"} className="mx-1 mb-2" size="sm" key={operation}>{operation}</Button>
                          ))}
                        </td>
                        <td><ConfigFileOffcanvasButton config_file={stack.stack.config_file} size="sm" /></td>
                      </tr>
                    );
                          })}
                    
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="vars" title="Variables">
                <DictCard title="Variables" data={data.vars} />
              </Tab>
              <Tab eventKey="json" title="JSON"> <code><pre>
                {JSON.stringify(data, null, 2)}
              </pre></code></Tab>

            </Tabs>

          </Tab.Container>
        </Col>

      </Row>
    </Container>

  );
  /*
  <div>
      <h1>Stackd Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>*/
};

export default Cluster;
