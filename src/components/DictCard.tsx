import React from 'react';
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const DictCard = ({title, data, actions=[]}) => {
    /* this creates bootstrap card with a title and a body */
    const filteredData = Object.entries(data).filter(([key, value]) => value !== null);

    return (
      <Card>
        <Card.Header className="justify-content-between">
          {title}
          <ButtonGroup size="sm" className='float-end'>
            {actions.map((action) => (<action.component key={action.name} {...action.props} />))}
          </ButtonGroup>        
        </Card.Header>
        <Card.Body>
          <Table hover>
            <tbody>
              {filteredData.map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{typeof value === "object" ? JSON.stringify(value) : value as React.ReactNode}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
};

export default DictCard;