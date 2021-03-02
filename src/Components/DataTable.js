import React, { Component } from 'react';
import {
    Table,
    Container,
    Badge
} from 'react-bootstrap';

import '../CSS/DataTable.css';

class DataTable extends Component {
    handleEditClick = (event, entity, id) => {
        // If I had time, this would allow an admin to Update a record
        // this.props.history.push("/" + entity + (entity.charAt(entity.length-1) == s ? "es" : "s") + "/"+entity+"Update");
        // window.location.reload();
    }

    handleDeleteClick = (event, entity, id) => {
        // If I had time, this would allow an admin to Delete a record
        // this.props.history.push("/" + entity + (entity.charAt(entity.length-1) == s ? "es" : "s") + "/"+entity+"Delete");
        // window.location.reload();
    }

    render() {
        return (
            <Container className="DataTable">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr key="rowHeader">
                            {
                                (this.props.data && this.props.data[0] && Object.keys(this.props.data[0]).length !== 0) ? Object.keys(this.props.data[0]).map(key => {
                                    return (<th key={key+"Header"}>{key}</th>);
                                }) : null
                            }
                            {this.props.adminContent && (
                                <React.Fragment>
                                    <th key="editHeader"></th>
                                    <th key="deleteHeader"></th>
                                </React.Fragment>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.props.data && Object.keys(this.props.data).length !== 0) ?
                            this.props.data.map(segment => {
                                return (
                                    <tr key={"row"+segment.ID}>
                                        {
                                            Object.keys(segment).map(key => {
                                                return (<td key={key + segment.ID}>{segment[key]}</td>);
                                            }) 
                                        }
                                        {this.props.adminContent && (
                                            <React.Fragment>

                                                <td className="edit" key={"edit"+segment.ID}>
                                                    <Badge pill variant="primary" onClick={(e) => this.handleEditClick(e, this.props.entity, segment.ID)}>
                                                        Edit
                                            </Badge>
                                                </td>
                                                <td className="delete" key={"delete"+segment.ID}>
                                                    <Badge pill variant="danger" onClick={(e) => this.handleDeleteClick(e, this.props.entity, segment.ID)}>
                                                        Delete
                                            </Badge>
                                                </td>
                                            </React.Fragment>
                                        )}
                                    </tr>
                                );
                            }) : null
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
}
export default DataTable;