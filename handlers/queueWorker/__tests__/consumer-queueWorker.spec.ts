import {
  asynchronousBodyHandler,
  Matchers,
  MessageConsumerPact,
} from "@pact-foundation/pact"
import { main as queueWorker } from "../index";
const { like } = Matchers
const path = require('path');

describe("Message Consumer Test", () => {
  const messagePact = new MessageConsumerPact({
    consumer: "QueueWorker",
    dir: path.resolve(process.cwd(), "pacts"),
    pactfileWriteMode: "update",
    provider: "Mock Rails Service",
    logLevel: "info",
  })

  describe("receiving a listing event", () => {
    it("accepts a listing event", () => {
      return messagePact
        .given("some state")
        .expectsToReceive("a request for a listing")
        .withContent(JSON.stringify({
          body: {
            Message: JSON.stringify({
              id: like(1),
              listingId: like("100")
            })
          }
        }))
        .withMetadata({
          "content-type": "application/json",
        })
        .verify(asynchronousBodyHandler(queueWorker))
    })
  })
})