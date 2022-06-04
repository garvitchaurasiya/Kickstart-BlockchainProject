import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";

import factory from "../ethereum/factory";
import Layout from "../component/Layout";

import web3 from "../ethereum/web3";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }
  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
  }
  renderCampaigns() {
    console.log(this.props.campaigns);
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        <Layout>
          <h3>Open Campaigns</h3>

          <Button floated="right" content="Create Campaign" icon="add circle" primary />
          {this.renderCampaigns()}
        </Layout>
      </div>
    );
  }
}

export default CampaignIndex;
