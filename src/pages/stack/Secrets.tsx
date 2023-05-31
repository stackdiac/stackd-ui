import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Tabs, Card, Table, Button } from 'react-bootstrap';
import { ClusterStackModel, Module, ModuleSecret } from '../../api/StackdApi';
var { openapiSchemaToJsonSchema: toJsonSchema } = require("@openapi-contrib/openapi-schema-to-json-schema");
import { useParams } from 'react-router-dom';

import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/fluent-ui';
import { RJSFSchema, UiSchema } from '@rjsf/utils';

import { useListModuleSecretsQuery } from '../../api/StackdApi';

import FormOffcanvasButton from '../../components/FormOffcanvasButton';

interface StackSecret {
    secret: ModuleSecret
    secret_name: string
    module_name: string
    module: Module
    stack: ClusterStackModel
    json_schema: any
};

// const uiSchema: UiSchema = {
//     'ui:options': {
//       widget: 'textarea',
//       rows: 15,
//     }
//   };

const Actions = ({ ss }) => {

    if (ss.secret.status == "not_exists") {
        return (<>
            <FormOffcanvasButton text="create" size="sm" schema={ss.json_schema}
                title={`Create secret ${ss.module_name}/${ss.secret_name}`} />
        </>);
    }
    return (<>&mdash;{ss.secret.status}</>);
}

export default function Secrets({ stack }) {
    const { clusterName, stackName } = useParams();


    var secrets = [];

    for (const m of Object.values(stack.stack.modules)) {
        const module: Module = m;
        if (!module.secrets) {
            continue;
        }

        for (const secret of Object.values(module.secrets)) {

            // const schema: RJSFSchema = {
            //     type: "object",
            //     properties: {
            //         module_name: { type: "string" },
            //         secret_name: { type: "string" },                        
            //         secret: toJsonSchema(secret.secret_schema),
            //     },
            // };
            
            var ss: StackSecret = {
                secret: secret,
                secret_name: secret.name,
                module_name: module.name,
                module: module,
                stack: stack,
                json_schema: toJsonSchema(secret.secret_schema)
            };

            secrets.push(ss);
        }
    }



    const log = (type) => console.log.bind(console, type);
    return (<>
        <Card>
            <Card.Header>
                <Card.Title>Stack Vault Secrets</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table className="mt-3" hover>
                    <thead>
                        <tr>
                            <th>Module</th>
                            <th>Secret</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {secrets.map((ss) => (
                            <tr key={ss.secret_name}>
                                <td>{ss.module_name}</td>
                                <td>{ss.secret_name}</td>
                                <td>{ss.secret.secret_type}</td>
                                <td>{ss.secret.status}</td>
                                <td><Actions ss={ss} /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>

    </>);
}