import React from 'react';
import { Navbar, Nav, NavbarBrand, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useGetClustersQuery } from '../api/StackdApi';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const links = [
 // { name: 'Clusters', url: '/clusters' },
  // { name: 'Repositories', url: '/repo' },
  // { name: 'Config', url: '/config' },
];

const ClusterDropdown = () => {
  const { data, error, isLoading } = useGetClustersQuery();
  const { clusterName } = useParams();
  console.log("CN", clusterName);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <NavDropdown title={`cluster: ${clusterName}`} id="clusters">
      {data.map((cluster) => (
        <LinkContainer key={cluster.name} to={`/build/${cluster.name}`}>
          <NavDropdown.Item>{cluster.name}</NavDropdown.Item>
        </LinkContainer>
      ))}
    </NavDropdown>
  );
};

const CustomNavbar = () => {
  const { data, error, isLoading } = useGetClustersQuery();
  const { clusterName } = useParams();
  console.log("CN", clusterName);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Container fluid className='pt-2 mb-4'>
      <Navbar bg="light" variant="light" expand="lg" className="shadow-sm rounded border">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>Stackd</Navbar.Brand>
          </LinkContainer>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {links.map((link, index) => (
                <LinkContainer key={index} to={link.url}>
                  <Nav.Link>{link.name}</Nav.Link>
                </LinkContainer>
              ))}
            </Nav>
            <Routes>
             
              <Route path="/build/:clusterName" element={<ClusterDropdown />} />
              <Route element={<ClusterDropdown />} />
          
            </Routes>
          </Navbar.Collapse>
          <Nav className="ms-auto">


            <Nav.Link href="/docs">API</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default CustomNavbar;
