import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
} from 'react-crud-table';

class CollaboratorEdit extends Component {
  render() {
    const styles = {
    container: { margin: "auto", width: "fit-content" }
    };
  
    const {staffusers, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading Staffusers Table ...</p>;
    }
    
    const SORTERS = {
      NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
      NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
      STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
      STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
    };
    
    const getSorter = (data) => {
      const mapper = x => x[data.field];
      let sorter = SORTERS.STRING_ASCENDING(mapper);
    
      if (data.field === 'id') {
        sorter = data.direction === 'ascending' ?
          SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
      } else {
        sorter = data.direction === 'ascending' ?
          SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
      }
      return sorter;
    };
    let count = staffusers.length;
    const service = {
      fetchItems: (payload) => {
        let result = Array.from(staffusers);
        result = result.sort(getSorter(payload.sort));
        return Promise.resolve(result);
      },
      create: (staffuser) => {
        count += 1;
        staffusers.push({
          ...staffuser,
          id: count,
        });
        return Promise.resolve(staffuser);
      },
      update: (data) => {
        const staffuser = staffusers.find(t => t.id === data.id);
        staffuser.firstName = data.firstName;
        staffuser.lastName = data.lastName;
        staffuser.emailId = data.emailId;
        staffuser.userName = data.userName;
        staffuser.tokenS = data.tokenS;
        return Promise.resolve(staffuser);
      },
    };
    return (
      <div className="collaborator-collaborator-edit">
        <div style={styles.container}>
          <CRUDTable
            caption="Staffusers"
            fetchItems={payload => service.fetchItems(payload)}
          >
          {staffusers.map(staffuser => 
            <Fields key={staffuser.id}>
              <Field name="id" label="Id" hideInCreateForm />
              <Field name="firstName" label="FirstName" placeholder={staffuser.firstName} />
              <Field name="lastName" label="LastName" placeholder={staffuser.lastName} />
              <Field name="emailId" label="Email" placeholder={staffuser.emailId}  />
              <Field name="userName" label="UserName" placeholder={staffuser.userName} />
              <Field name="tokenS" label="tokenS" placeholder={staffuser.tokenS} />          
            </Fields>)}
            <CreateForm
              title="Collaborator Creation"
              message="Create a new Collaborator!"
              trigger="Create Collaborator"
              onSubmit={(staffuser) => service.create(staffuser.id)}
              submitText="Create"
              validate={(values) => {
                const errors = {};
                if (!values.firstName) {
                  errors.firstName = 'Please, provide Collaborator\'s firstName';
                }

                if (!values.lastName) {
                  errors.lastName = 'Please, provide Collaborator\'s lastName';
                }

                if (!values.emailId) {
                  errors.emailId = 'Please, provide Collaborator\'s emailId';
                }
                if (!values.userName) {
                  errors.userName = 'Please, provide Collaborator\'s userName';
                }
                if (!values.tokenS) {
                  errors.tokenS = 'Please, provide Collaborator\'s tokenS';
                }
                return errors;
              }}
            />
            <UpdateForm
              title="Collaborator Update Process"
              message="Update Collaborator"
              trigger="Update"
              tag={Link}
              to={`/api/v1/staffusers/${this.state.staffuser.id}`}
              onSubmit={(staffuser) => service.update(staffuser.id)}
              submitText="Update"
              validate={(values) => {
                const errors = {};
                if (!values.id) {
                  errors.id = 'Please, provide id';
                }
                if (!values.firstName) {
                  errors.firstName = 'Please, provide Collaborator\'s firstName';
                }

                if (!values.lastName) {
                  errors.lastName = 'Please, provide Collaborator\'s lastName';
                }

                if (!values.emailId) {
                  errors.emailId = 'Please, provide Collaborator\'s emailId';
                }

                if (!values.userName) {
                  errors.userName = 'Please, provide Collaborator\'s userName';
                }    
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
export default withRouter(CollaboratorEdit);