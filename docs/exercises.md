The exercises ask you to gradually build a node for the course's blockchain network.
The full protocol is described in the
[protocol specification](/docs/protocol).

# Exercise 0

In this exercise, you will set up your repository and exchange a 'hello' message
with any peer connecting to you.

- Decide what programming language you will use. We recommend a language you are proficient in.
- Share your repository URL on GitHub/GitLab so that we can put it on the course website.
- Implement the networking core of your node. Your node must listen to TCP port 18018 (or a port of your choice) for connections.
- Implement message parsing, defragmentation, and canonical JSON encoding and decoding.
- Implement the protocol handshake using the `hello` messages.

# Exercise 1

In this exercise, you will extend your peer-to-peer node so that it can exchange
messages and perform peer discovery.

- Implement peer discovery bootstrapping by hard-coding some peers.
- Store a list of discovered peers locally. These should survive reboots.
- Implement peer discovery using the `getpeers` and `peers` messages.
- Devise a policy to decide which peers to connect to and how many to connect to.

# Exercise 2

In this exercise, you will implement content addressable object exchange and gossiping.

- Maintain a local database of known objects.
- Implement object exchange using the `getobject`, `ihaveobject`, `object` messages.
- Reject objects that are already known.
- Accept objects that are new and store them in your database.
- Implement gossiping. Broadcast the knowledge of newly received objects to your peers.

# Exercise 3

In this exercise, you will implement transaction generation and validation.

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

Block validation

# Exercise 5

Mining

# Exercise 6

Difficulty adjustment

# Exercise 7

SPV
