import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { useGetSdSdGetQuery } from '../api/StackdApi';
import  DictCard from '../components/DictCard';
import NestedDictCard from '../components/NestedDictCard';
import ConfigFileCard from '../components/ConfigFileCard';
import ConfigFileOffcanvasButton from '../components/ConfigFileOffcanvasButton';


const Home = () => {
  const { data, error, isLoading } = useGetSdSdGetQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const projectActions = [
    {
      name: 'Show Config File',
      icon: 'file-earmark',
      component: ConfigFileOffcanvasButton,
      props: {
        config_file: data.conf.config_file        
      }
    }
  ]

  return (
    <Container fluid className='mb-4'>
   
      <Row>
      <Col>
        <DictCard title="Project" data={data.conf.project} actions={projectActions} />
      </Col>
      <Col>
        <DictCard title="Variables" data={data.conf.vars} />
      </Col>
      </Row>
      <Row>


      <Col md={12} className='mt-3'>
        <NestedDictCard title="Binaries" data={data.conf.binaries} columns={["binary", "version", "url", "extract"]}/>
      </Col>
      <Col md={12} className='mt-3'>
        <NestedDictCard title="Providers" data={data.providers} columns={["name", "source", "version"]}/>
      </Col> 
 
       <Col md={12} className='mt-4'>
        <NestedDictCard title="Repos" data={data.conf.repos} columns={["name", "url", "branch", "tag", "local"]}/>
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

export default Home;
