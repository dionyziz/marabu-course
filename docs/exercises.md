These are programming exercises.

The exercises ask you to gradually build a node for the course's blockchain network, Marabu.
The full protocol is described in the
[protocol specification](/docs/protocol).

Some exercises divert from the main node development and are simple independent programming exercises.

# Exercise 0

Start coding the implementation of your Marabu node.
In this exercise, you will set up your repository and exchange a 'hello' message
with any peer connecting to you.

- Decide what programming language you will use. We recommend a language you are proficient in.
- Find a nice name for your node!
- Share your repository URL on GitHub/GitLab so that we can put it on the course website.
- Implement the networking core of your node. Your node must listen to TCP port 18018 (or a port of your choice) for connections.
- Implement message parsing, defragmentation, and canonical JSON encoding and decoding.
- Implement the protocol handshake using the `hello` messages.

# Exercise 1

In this exercise, you will extend your Marabu node so that it can exchange
messages and perform peer discovery.

- Implement peer discovery bootstrapping by hard-coding some peers.
- Store a list of discovered peers locally. These should survive reboots.
- Implement peer discovery using the `getpeers` and `peers` messages.
- Devise a policy to decide which peers to connect to and how many to connect to.

# Exercise 2

In this exercise, you will extend your Marabu node to implement content addressable object exchange and gossiping.

- Maintain a local database of known objects.
- Implement object exchange using the `getobject`, `ihaveobject`, `object` messages.
- Reject objects that are already known.
- Accept objects that are new and store them in your database.
- Implement gossiping. Broadcast the knowledge of newly received objects to your peers.

# Exercise 3

In this exercise, you will implement transaction generation and validation for your Marabu node.

- Create the logic to represent a transaction.
- A transaction has inputs and outputs.
- Transactions are addressed by txids that are calculated by hashing.
- Inputs contain outpoints and signatures.
- Outpoints are txids and indexes.
- Outpoint validation ensures txid and index existence.
- Input validation ensures outpoint validity and signature validity.
- Signature validation requires running the cryptographic signature check.
- Outputs contain a public key and a value.
- The public keys must be in the correct format.
- Transactions must respect the law of conservation.
- Private keys can sign transaction inputs pointing to their public key.

# Exercise 4

Solve the following [blockchain-course.org](https://blockchain-course.org/assignment) exercises:

- "Breaking SHA256"
- "Performing proof-of-work"

# Exercise 5

In this exercise, you will implement block validation in your Marabu node.

- Create the logic to represent a block.
- Check the proof-of-work.
- Check that all contained transactions are valid.

# Exercise 6

In this exercise, you will implement your own miner for your Marabu node.

- Create the logic to build a block.
- Mine on the candidate block to discover proof-of-work.

# Exercise 7

In this exercise, you will try to attack your peers. Look at the source code
of the implementations of three of your fellow students.

- Find at least one attack against each of your peers.
- Discuss and fix the attacks that your peers found on your node.

You can perform network-level attacks, denial of service attacks, or attack
their transaction and block validation.

# Exercise 8

Solve the "Constructing a Merkle Tree" assignment on [blockchain-course.org](https://blockchain-course.org/assignment).

# Exercise 9

Implement SPV verification for your Marabu node. Participate in the hard fork.

# Exercise 10

Solve the following [blockchain-course.org](https://blockchain-course.org/assignment) exercises:

- "Say hello to Ethereum"
- "Simple storage smart contract"
- "Faucet smart contract"
- "ERC-20 token"
- "Dutch Auction Implementation"
- "Name Service"
- "Vickrey Auction Implementation"
- "Game of Thrones"

# Exercise 11

Difficulty adjustment. Participate in the hard fork.
