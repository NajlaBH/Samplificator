import React, { Component } from 'react';
//import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import CRUDTable, {Fields, Field, DeleteForm, UpdateForm } from 'react-crud-table';

//import { Link } from 'react-router-dom';

export default class Coolabis extends Component {
  //initialize staffusers for event func
  /*emptyItem = {
    firstName: '',
    lastName: '',
    emailId: '',
    userName: '',
    tokenS: '',
  };*/

  // propos declaration
  constructor(props) {
    super(props);
    this.state = {
      staffusers: [],
      //item: this.emptyItem,
      isLoading: true
    };
    this.remove = this.remove.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    this.updatefunc = this.updatefunc.bind(this);
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
  /*handleChange(event) {
    const target = event.target;
    const value = target.value;
    const firstName = target.firstName;
    let item = {...this.state.item};
    item[firstName] = value;
    this.setState({item});
  }*/

  async updatefunc(id) {
    // event.preventDefault();
    const {staffusers} = this.state;
    await fetch(`/api/v1/staffusers/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({staffusers:staffusers}),
    }).then(() => {
      let updateStaffuser = [...this.state.staffusers].filter(i => i.id !== id);
      this.setState({staffusers: updateStaffuser});
    //this.props.history.push(`/api/v1/staffusers/${id}`);
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

      const SORTERS = {
      NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
      NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
      STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
      STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
    };

    const getSorter = data => {
      const mapper = x => x[data.field];
      let sorter = SORTERS.STRING_ASCENDING(mapper);

      if (data.field === 'id') {
        sorter =
          data.direction === 'ascending'
            ? SORTERS.NUMBER_ASCENDING(mapper)
            : SORTERS.NUMBER_DESCENDING(mapper);
      } else {
        sorter =
          data.direction === 'ascending'
            ? SORTERS.STRING_ASCENDING(mapper)
            : SORTERS.STRING_DESCENDING(mapper);
      }
      return sorter;
    };
    //let count = staffusers.length;
    const service = {
      fetchItems: payload => {
        let result = Array.from(staffusers);
        result = result.sort(getSorter(payload.sort));
        return Promise.resolve(result);
      },
      update: (data) => {
        const staffuser = staffusers.find(t => t.id === data.id);
        staffuser.firstName = data.firstName;
        staffuser.lastName = data.lastName;
        staffuser.emailId = data.emailId;
        staffuser.userName = data.userName;
        staffuser.tokenS = data.tokenS;
        this.updatefunc(staffuser.id);
        //this.updatefunc()
        return Promise.resolve(staffuser);
      },
    };
    return (
      
      <div className="collaborator-coolabis">
        <div style={styles.container}>
          <CRUDTable 
          caption="Staffusers" 
          fetchItems={payload => service.fetchItems(payload)}>
            {staffusers.map(staffuser => (
              <Fields key={staffuser.id}>
                <Field name="id" label="Id" hideInCreateForm />
                <Field name="firstName" label="FirstName" placeholder={staffuser.firstName} />
                <Field name="lastName" label="LastName" placeholder={staffuser.lastName} />
                <Field name="emailId" label="Email" placeholder={staffuser.emailId} />
                <Field name="userName" label="UserName" placeholder={staffuser.userName} />
                <Field name="tokenS" label="tokenS" placeholder={staffuser.tokenS} />
              </Fields>
            ))}
            <DeleteForm
              title="Collaborator Delete Process"
              message="Are you sure you want to delete the Collaborator?"
              trigger="Delete"
              onSubmit={staffuser => this.remove(staffuser.id)}
              submitText="Delete"
              validate={values => {
                const errors = {};
                if (!values.id) {
                  errors.id = 'Please, provide id';
                }
                return errors;
              }}
            />
            <UpdateForm
              title="Collaborator Update Process"
              message="Update Collaborator"
              trigger="Update"
              onSubmit={staffuser => service.update(staffuser)}
              submitText="Update"
              validate={(values) => {
                const errors = {};
                //values.firstName = item.firstName;
                if (!values.firstName) {
                  errors.firstName = 'Please, provide Collaborator\'s firstName';
                }

                //values.lastName=item.values.lastName;
                if (!values.lastName) {
                  errors.lastName = 'Please, provide Collaborator\'s lastName';
                }

                //values.emailId=item.emailId;
                if (!values.emailId) {
                  errors.emailId = 'Please, provide Collaborator\'s emailId';
                }

                //values.userName=item.userName;
                if (!values.userName) {
                  errors.userName = 'Please, provide Collaborator\'s userName';
                }

                //values.tokenS=item.tokenS;
                if (!values.tokenS) {
                  errors.tokenS = 'Please, provide Collaborator\'s tokenS';
                }
                return errors;
              }}
            />
          </CRUDTable>
        </div>
      </div>
    );
  }
}