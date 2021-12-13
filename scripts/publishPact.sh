#!/bin/sh

pact-broker publish ./pacts --consumer-app-version=1.0.0 --broker-base-url=$PACT_BROKER_BASE_URL --broker-token=$PACT_BROKER_TOKEN
