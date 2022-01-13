/**
 * Parses the event and delegates to the correct worker
 *
 * @param {object} event - The message json from SNS
 * */
export default async (event: any): Promise<void> => {
  const body = event.body;

  const { Message } = body;
  if (!Message || !Message.listingId) {
    throw new Error ("missing listing Id");
  }
  return Message;
};
