const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const CompiledFactory = require('../ethereum/build/CampaignFactory.json');
const CompliedCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach( async()=>{
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(CompiledFactory.interface))
        .deploy({
            data: CompiledFactory.bytecode
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        })

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];

    campaign = await new web3.eth.Contract(JSON.parse(CompliedCampaign.interface), campaignAddress)

})

describe('Campaign', ()=>{
    it('deploys factory and a campaign', ()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })
    it('marks the caller as the campaign manager', async ()=>{
        const manager = await campaign.methods.manager().call();
        assert.equal(manager, accounts[0]);
    })
    it('allow people to contribute and make them as a contributor', async ()=>{
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '200'
        })
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    })
    it('requires a minimum contribution', async()=>{
        
        try {
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: '50'
            })
            assert(false);
        } catch (error) {
            assert(error);
        }
    })
    it('allows a manager to make a payment requests', async()=>{
        await campaign.methods
            .createRequest("Buy Something", '100', accounts[2])
            .send({
                from: accounts[0],
                gas: '1000000'
            })

        const request = await campaign.methods.requests(0).call();
        assert.equal('Buy Something', request.description);

    })
    it('process request', async()=>{
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        })

        await campaign.methods
            .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            })

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);

        console.log(balance);
        assert(balance > 104);
        
    })
})