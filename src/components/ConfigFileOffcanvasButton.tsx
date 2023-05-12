import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {RootState} from '../store';
import { showConfigFileOffcanvas } from '../actions/ConfigFileOffcanvasActions';
import { ConfigFileModel } from '../api/StackdApi';

const connector = connect(null, {showConfigFileOffcanvas});

type ConfigFileOffcanvasProps = {} & ConnectedProps<typeof connector>;

const ConfigFileOffcanvasButton = ({config_file, text=null, variant="light", className='mx-2 my-1', ...props}) => {
  const {showConfigFileOffcanvas} = props;

    return (<Button variant={variant} onClick={()=>showConfigFileOffcanvas(config_file)}
      title="Show specification"
      className={className} {...props}
      >{text ? text : (<i className="bi bi-braces"></i>)}</Button> );
    
}


export default connector(ConfigFileOffcanvasButton);