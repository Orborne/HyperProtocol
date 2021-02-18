const {BN, constants, expectEvent} = require('@openzeppelin/test-helpers');

const HRPToken = artifacts.require("HRPToken");

contract("HRPToken", async (accounts) => {

  it("Should mint some HRPs in advance when deploying HRPToken smart contract", async () => {
    var amount = new BN('10000000000000000000');

    var hrp = await HRPToken.new(accounts[1], amount);

    console.log("HRP token smart contract address:", hrp.address);

    assert.equal(await hrp.name(), 'HRPToken', 'HRP token name disagreement');
    assert.equal(await hrp.symbol(), 'HRP', 'HRP token symbol disagreement');
    assert.equal(await hrp.decimals(), 18, 'HRP token decimals disagreement');
    assert.equal((await hrp.totalSupply()).toString(), amount, 'HRP token supply disagreement');
    assert.equal((await hrp.balanceOf(accounts[1])).toString(), amount, 'should mint some hrps to accounts[1] in advance when deploying');
      
    await expectEvent.inConstruction(hrp, 'Transfer', {from:constants.ZERO_ADDRESS, to:accounts[1], value:amount});
  });

});
