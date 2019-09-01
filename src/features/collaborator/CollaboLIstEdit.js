import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Container, Label, Input } from 'reactstrap';
class CollaboLIstEdit extends Component {
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
    const target = event.target;
    const value = target.value;
    const firstName = target.firstName;
    let item = {...this.state.item};
    item[firstName] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch(`/api/v1/staffusers/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/staffusers');
  }
  render() {
    const {item} = this.state;
    return (
      <div className="collaborator-collabo-l-ist-edit">
        <div>
          <Container>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="firstName">FirstName</Label>
                  <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
                        onChange={this.handleChange} autoComplete="firstName"/>
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">LastName</Label>
                  <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
                        onChange={this.handleChange} autoComplete="lastName"/>
                </FormGroup>
                <FormGroup>
                  <Label for="emailId">Email</Label>
                  <Input type="text" name="emailId" id="emailId" value={item.emailId || ''}
                        onChange={this.handleChange} autoComplete="emailId"/>
                </FormGroup>
                <div className="row">
                  <FormGroup className="col-md-4 mb-3">
                    <Label for="userName">UserName</Label>
                    <Input type="text" name="userName" id="userName" value={item.userName || ''}
                          onChange={this.handleChange} autoComplete="userName"/>
                  </FormGroup>
                  <FormGroup className="col-md-5 mb-3">
                    <Label for="tokenS">Token</Label>
                    <Input type="text" name="tokenS" id="tokenS" value={item.tokenS || ''}
                          onChange={this.handleChange} autoComplete="tokenS"/>
                  </FormGroup>
                </div>
                <FormGroup>
                  <Button color="primary" type="submit">Save</Button>{' '}
                  <Button color="secondary" tag={Link} to="/api/v1/collaborator">Cancel</Button>
                </FormGroup>
              </Form>
            </Container>
        </div>
      </div>
    );
  }
}
export default withRouter (CollaboLIstEdit);