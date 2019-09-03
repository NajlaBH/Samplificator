import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

class CollabEdit extends Component {
  static propTypes = {

  };
  emptyItem = {
    firstName: '',
    lastName: '',
    emailId: '',
    userName: '',
    tokenS: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      //value: this.props.defaultValue,
      value: '',
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    if (this.props.match.params.id !== 'createStaffuser') {
      const staffuser = await (await fetch(`/api/v1/staffusers/${this.props.match.params.id}`)).json();
      this.setState({item: staffuser});
    }
  }

  handleChange(event) {
    /*
    //defaultValue={this.props.default || item.UserName}//
    onChange={this.handleChange}
    //onChange={this.handleChange.bind(this)} //
    const target = event.target;
    const value = target.value;
    const firstName = target.firstName;
    let item = {...this.state.item};
    item[firstName] = value;
    this.setState({item});
    this.setState({value: event.target.value});
    this.setState({[event.target.name]: event.target.value});
    
    if (event.target.id === 'firstName') {
      this.setState({firstName: event.target.value});
    } else if (event.target.id === 'lastName') {
      this.setState({lastName: event.target.value});
    } else if (event.target.id === 'emailId') {
      this.setState({tokenS: event.target.value});
    } else if (event.target.id === 'UserName') {
      this.setState({UserName: event.target.value});
    } else if (event.target.id === 'tokenS') {
      this.setState({tokenS: event.target.value});
    }
    this.setState({value: event.target.value});
    */
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;
    await fetch('/api/v1/staffusers', {
      method: (item.id) ? 'POST' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/api/collabolist');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Group' : 'Add Group'}</h2>;
    return (
      <div className="collaborator-collab-edit">
        <div>
          <Container>
              {title}
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="firstName">FirstName</Label>
                  <Input 
                    type="text" 
                    name="firstName"
                    id="firstName"
                    value={item.firstName || ''}
                    onChange={this.handleChange.bind(this)} 
                    autoComplete="firstName" 
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">LastName</Label>
                  <Input
                    type="text" 
                    name="lastName"
                    id="lastName"
                    defaultValue={this.props.default || ''}
                    value={item.lastName || this.state.value}
                    onChange={this.handleChange.bind(this)} 
                    autoComplete="lastName"                  
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="emailId">Email</Label>
                  <Input 
                    type="text" 
                    name="emailId"
                    id="emailId"
                    value={item.emailId || ''}
                    onChange={this.handleChange.bind(this)} 
                    autoComplete="emailId"    
                  />
                </FormGroup>
                <div className="row">
                  <FormGroup className="col-md-4 mb-3">
                    <Label for="userName">Username</Label>
                    <Input
                      type="text" 
                      name="userName"
                      id="userName"
                      defaultValue={this.props.default || ''}
                      value={item.userName || this.state.value}
                      onChange={this.handleChange.bind(this)} 
                      autoComplete="userName"   
                    />
                  </FormGroup>
                  <FormGroup className="col-md-5 mb-3">
                    <Label for="tokenS">Token</Label>
                    <Input
                      type="text" 
                      name="tokenS"
                      id="tokenS"
                      defaultValue={this.props.default || ''}
                      value={item.tokenS || this.state.value}
                      onChange={this.handleChange.bind(this)} 
                      autoComplete="tokenS" 
                    />
                  </FormGroup>
                </div>
                <FormGroup>
                  <Button color="primary" type="submit">Save</Button>{' '}
                  <Button color="secondary" tag={Link} to="/api/collaborator">Cancel</Button>
                </FormGroup>
              </Form>
            </Container>
        </div>
      </div>
    )};
}
export default withRouter(CollabEdit);

