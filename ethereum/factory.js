import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4EF262a6b7E77BD0DB32ad4Eb0fF3314C0D93CC0'
);

export default instance;