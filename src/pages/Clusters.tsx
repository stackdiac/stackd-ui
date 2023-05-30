import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';


import { useGetClustersQuery } from '../api/StackdApi';
import  DictCard from '../components/DictCard';
import NestedDictCard from '../components/NestedDictCard';


const Clusters = () => {
  const { data, error, isLoading } = useGetClustersQuery();

  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{`error: {error}`}</div>;
  }
  

  return (
    <Container fluid className='mb-4'>
   
      <Row>
      <Col md={12} className='mt-3'>
      <Card>
        
        <Card.Body>
          <Table hover>
            <thead>
              <tr>
                <th>Cluster</th>
                <th>Stacks</th>                
              </tr>
            </thead>
            <tbody>
              {data.map((cluster) => (
                <tr key={cluster.name}>
                  <td>
                  <LinkContainer to={`/build/${cluster.name}`}>
                    <Button size="sm" variant="link">{cluster.name}</Button>
                  </LinkContainer>
                    
                  </td>
                  <td>
                    {Object.keys(cluster.stacks).map((stack) => (
                      <Button variant={"success"} className="mx-1" size="sm" key={stack}>{stack}</Button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
        </Card.Body>          
      </Card>
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

export default Clusters;
