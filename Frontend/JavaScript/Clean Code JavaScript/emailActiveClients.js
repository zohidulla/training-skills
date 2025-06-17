function generateUUID() {
  // Generate a random part
  const randomPart = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  // Concatenate random parts and timestamps
  return (
    randomPart() +
    randomPart() +
    '-' +
    randomPart() +
    '-' +
    randomPart() +
    '-4' +
    randomPart().substr(0, 3) +
    '-' +
    randomPart() +
    randomPart() +
    randomPart()
  );
}

// Assume a simple database object with a lookup function
const database = {
  lookup(client) {
    // Assuming there is some logic to fetch client records from the database
    // For the sake of this example, we'll return a dummy client record
    const clientRecord = { ...client, id: generateUUID() };

    return {
      ...clientRecord,
      isActive() {
        return client.ordersQty > 1;
      },
      // Other client properties and methods can be added here
    };
  },
};

// Assume a simple email function
function emailClient(client) {
  // Replace this with your actual email sending logic
  console.log(`Sending email to ${client.name}`);
}

// Keep the provided functions unchanged
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(emailClient);
}

function isActiveClient(client) {
  return getClientRecord(client).isActive();
}

function getClientRecord(client) {
  return database.lookup(client);
}

// Example usage with an array of client objects
const clientList = [
  { name: 'client1', ordersQty: 5 },
  { name: 'client2', ordersQty: 0 },
  { name: 'client3', ordersQty: 2 },
];

emailActiveClients(clientList);
