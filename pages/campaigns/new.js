import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../component/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({loading: true, errorMessage: ""});
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
          // We only have to specify the gas value in test network no need to do it here.
        });
    } catch (error) {
      this.setState({errorMessage: error.message}); 
    }
    this.setState({loading: false});
  };

  render() {
    return (
      <Layout>
        <h3>Create Camapaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}> {/* This error property is required to render our Message component */}
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(e) =>
                this.setState({ minimumContribution: e.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} type="submit" primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
