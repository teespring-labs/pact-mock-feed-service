## Step 0
Install the dependencies. Disclaimer: do not move on to the Provider kickoff repo before completing this.

## Step 1 
Test locally by running `npm test` to run the jest tests locally. This is to create the contract, and verify that your consumer is able to publish a valid contract to PactFlow.

## Step 2
Export 2 environment variables - `$PACT_BROKER_URL` and `$PACT_BROKER_TOKEN`. Find those variables on `https://ts-eng.pactflow.io/settings/api-tokens`. You can find the password to the PactFlow account on 1 password. 

## Step 3 
You should see a new folder called `pacts`, where the new contract is. Publish it by running `npm pact:publish`.

## Step 4
Visit `https://ts-eng.pactflow.io/overview/provider/Mock%20User%20Service/consumer/Mock%20Feed%20Service` to confirm that your new contract has been published. Remember that this is only to publish the contract, not to have it verified by the provider.

## Step 5
Continue to the Provider repo by using this link - `https://github.com/teespring-labs/pactflow-js-provider-kickoff`