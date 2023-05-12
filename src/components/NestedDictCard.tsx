import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const NestedDictCard = ({title, columns, data, actions=[]}) => {
    /* this creates bootstrap card with a title and a body */
    const filteredData = Object.entries(data).filter(([key, value]) => value !== null);
    const first = filteredData[0];
    return (
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Table hover>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={'h-' + column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map(([key, value]) => (
                <tr key={key}>                  
                  {columns.map((column) => (
                    <td key={'c-'+column}>{value[column]}</td>
                  ))}                  
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
};

export default NestedDictCard;