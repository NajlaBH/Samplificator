import React, { Component } from 'react';
import CRUDTable,
{
  Fields,
  Field,
  Pagination
} from 'react-crud-table';



 
 
export default class StaffuserPage extends Component {
  static propTypes = {

  };

  state = {
    isLoading: true,
    staffusers: []
  };

  async componentDidMount() {
    const response = await fetch('/api/v1/staffusers');
    const body = await response.json();
    this.setState({ staffusers: body, isLoading: false });
  }
  
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
      STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
    };
  
    const getSorter = data => {
    const mapper = x => x[data.field];
    let sorter = SORTERS.STRING_ASCENDING(mapper);
  
    if (data.field === "id") {
      sorter =
        data.direction === "ascending"
          ? SORTERS.NUMBER_ASCENDING(mapper)
          : SORTERS.NUMBER_DESCENDING(mapper);
    } else {
      sorter =
        data.direction === "ascending"
          ? SORTERS.STRING_ASCENDING(mapper)
          : SORTERS.STRING_DESCENDING(mapper);
    }
    return sorter;
    };
  
    //let count = staffusers.length;
    const service = {
      fetchItems: payload => {
        const { activePage, itemsPerPage } = payload.pagination;
        const start = (activePage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        let result = Array.from(staffusers);
        result = result.sort(getSorter(payload.sort));
        return Promise.resolve(result.slice(start, end));
      },
      fetchTotal: payload => {
        return Promise.resolve(staffusers.length);
      }
    };
    return (
      <div className="staffuserc-staffuser-page">
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
            </Fields>)}
            <Pagination
              itemsPerPage={4}
              fetchTotalOfItems={payload => service.fetchTotal(payload)}
            />
          </CRUDTable>
          </div>
      </div>
    );
  }
}