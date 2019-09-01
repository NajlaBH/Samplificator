import React, { Component } from 'react';
//import CRUDTable, {Fields, Field, DeleteForm, UpdateForm } from 'react-crud-table';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

class Collabolist extends Component {
  // propos declaration
  constructor(props) {
    super(props);
    this.state = {
      staffusers: [],
      isLoading: true
    };
    this.remove = this.remove.bind(this);
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    fetch('/api/v1/staffusers')
      .then(response => response.json())
      .then(data => this.setState({staffusers: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/v1/staffusers/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updateStaffuser = [...this.state.staffusers].filter(i => i.id !== id);
      this.setState({staffusers: updateStaffuser});
    });
  }

  render() {
    const styles = {
      container: { margin: 'auto', width: 'fit-content' },
    };
    const { staffusers, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading staffusers table ...</p>;
    }
    const staffList = staffusers.map(staffuser => {
      return <tr key={staffuser.id}>
        <td style={{whiteSpace: 'nowrap'}}>{staffuser.firstName}</td>
        <td style={{whiteSpace: 'nowrap'}}>{staffuser.lastName}</td>
        <td style={{whiteSpace: 'nowrap'}}>{staffuser.emailId}</td>
        <td style={{whiteSpace: 'nowrap'}}>{staffuser.userName}</td>
        <td style={{whiteSpace: 'nowrap'}}>{staffuser.tokenS}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/api/v1/staffusers/" + staffuser.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(staffuser.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });
      return (    
          <div className="collaborator-collabolist">
          <div style={styles.container}>
            <Container fluid>
              <div className="float-right">
                <Button color="success" tag={Link} to={"/api/v1/staffusers/createStaffuser" }>Add Collaborator</Button>
              </div>
              <h3>Staffusers Management</h3>
              <Table className="mt-4">
                <thead>
                <tr>
                  <th width="20%">FirstName</th>
                  <th width="20%">LastName</th>
                  <th width="20%">Email</th>
                  <th width="15%">UserName</th>
                  <th width="10%">Token</th>
                </tr>
                </thead>
                <tbody>
                {staffList}
                </tbody>
              </Table>
            </Container>
          </div>
        </div>
      );
  }
}
export default withRouter (Collabolist);