## Lesson 1: The Setting

**2021-06-12**

- Administrivia
  - Course outline
  - 56 hours total
  - Theory
  - Coding
    * Goal: Make a simple working blockchain with a common protocol
    * The blockchains of all students must work with one another
- An untrustworthy world
  - The concept of self-enforcability:
    * We don't want adversaries to be caught after the fact
    * We want adversarial behavior to be impossible
  - Adversaries can be *very* bad:
    - They can break laws
    - Burn money just so that you suffer
    - Kill people
    - Take over corporations
    - Take over governments
    - Change laws
    - Take over the courts
    - Sybil attack: Create an unlimited number of emails/IP addresses
    - Do this all in secret
- The vision of money self-sovereignty
  - What if banks and regulators lied to you about how much money they have?
  - What if a single bank lies about some customers having more money than they actually do?
- Goal:
  - Transparency / verifiability (everyone knows that the money they claim they have, they *actually* have)
  - Decentralized money, self-sovereign money (money issuance should not be controlled by a centralized -despite elected- party)
  - We can pick and choose which of these features we like, e.g. centralized issuance + public verifiability
- What is money?
  - Money is not inherently worthy -- it has value because we socially ascribe value to it
  - It is a social construct, or social delusion (similar to laws, corporations, and human rights)
  - Money today is fiat (but money as a social contrsuct is ascribed to "non-fiat" money such as gold and shells, too)
  - Some historical notes on money
  - How do we know today who owns what? Did we track it through history? Do we have that history? No -- we trust our social environment. A kind of "honest majority" setting.
- The role of computer science
  - Understanding and systematizing the computational aspect of rules, regulations, and processes
- The adversary
  - Probabilistic algorithms
  - Polynomial-time algorithms (and the complexity classes P, BPP, NP)
  - Game-based security
  - Probability of success
  - "For all" adversaries
  - Negligibility
  - Problems hard in the average case VS problems hard in the worst case
- The network
  - Connectedness and message delivery
  - The non-eclipsing assumption
  - The gossip protocol
- **Exercises 0 and 1**

## Lesson 2: The Application Layer - UTXO

**2021-06-17**

- Commitment schemes
- The binding and hiding games
- Hashes
- The collision resistance and pre-image resistance games
- Public and private keys
- Signatures, signing, verifying, correctness, security
- The existential unforgeability game
- A transaction
- Addresses
- One input and one output
- Amounts
- Inputs and outputs in UTXO
- Splitting money
- Merging money
- Conservation Law
- Change
- Outpoints -- the transaction graph
- The transaction ledger / transaction serialization
- UTXO as application state
- The evolution of the UTXO
- What money do I own? Calculating balances
- Double spending
- **Reading**: Chapter 5 introduction and section 5.1 from Modern Cryptography (2nd ed.)
- **Reading**: Chapter 12 introduction (skip comparison to MACs and relation to encryption) and sections 12.1, 12.2, 12.3 from Modern Cryptography (2nd ed.)
- **Exercises 2 and 3**

## Lesson 3: Blocks and chains

**2021-06-22**

- The decentralized setting; the network
- Adversarial and honest nodes, corruption, sybil attacks
- Network delays, message delivery
- Broadcasting transactions to everyone - be your own bank
- Money arising out of social consensus
- The double spending attack
- Simple ideas don't work: Serializing transactions naively, the critical time Δ
- Proof-of-work as a consensus mechanism without blocks
- The proof-of-work equation; the parameters T and κ
- The block
- The chain
- The longest chain rule
- The mempool
- Temporary forks / reorgs
- Coming to an agreement: Blockchain convergence
- The genesis block; the arrow of time
- Verifying chains
- The Chain Growth, Common Prefix, and Chain Quality, intuitively
- Transaction confirmation rules; the Common Prefix parameter k
- The minority double spending attack and its inevitable failure; negligibility in k
- Maintaining the UTXO under reorgs
- **Exercises 4 and 5**

## Lesson 4: Blockchain Economics

**2021-06-28**

- Probability of obtaining a block; the value p
- Attacks of a minority miner
  - The Selfish Mining attack
  - Selfish Mining simulation and bounds for 1/3 and 1/2 adversaries
- Attacks of a majority miner
  - Censoring transactions
  - Double spending
  - The impossibility of spending others' money
  - The impossibility of breaking chain growth
- Healing from temporary dishonest majority
  - Healing from censorship
  - Temporarily rejecting payments: resilience to double spending attacks
- The expected block generation time η
- Balancing the values T and k
  - Loss of security due to small k and small T: variance attacks
  - Loss of security due to large k and large T: fan-out attacks
- The weak conservation law
- Fees
- The coinbase transaction, the inductive base of the UTXO graph
- The money supply
- Supply adjustment in Bitcoin - halving
- The limited total money supply of Bitcoin
- Supply adjustment in Monero - smooth emission
- Empty blocks
- Rational miners, miner incentivisation
- The block size limit
- Collecting transactions into blocks, the knapsack algorithm
- Mining pools
- The pooled mining protocol
  - Why pools? The variance problem
  - Decreasing variance while keeping expectation the same
  - Centralized pools and pool operators
  - Light blocks (shares) and the light PoW equation
- Read Satoshi's Bitcoin paper
- **Exercises 6 and 7**

## Lesson 5: Mining and Wallets

**2021-06-28**

- Mining hardware: CPUs, GPUs, ASICs
- GetWork / the mining template
- The cost of mining: Empty blocks, optimistic mining
- Online and offline wallets
- Wallet seeds
- Hardware wallets, brain wallets
- **Exercise 8**

## Lesson 6: The Application Layer - Accounts

**2021-07-05**

- p2pk / p2pkh and quantum security
- Hashing a public key
- The transaction as a state machine transition
- The UTXO as a state machine α with transaction transitions δ
- A transaction
- Balances
- Replaybility and nonces
- The account balances as a state machine α with transaction transitions δ
- Practical transactions in Bitcoin and Ethereum
- Look at the Bitcoin and Ethereum transaction graph
- **Exercise 9**

## Lesson 7: Smart contracts

**2021-07-08**

- Motivation: Payment conditions and covenants
- Smart contracts in the UTXO model
- Bitcoin scripts
- Smart contracts in the accounts model
- Turing completeness and gas
- Contract and personal transactions
- The smart contract transaction format
- Smart contract state as a state machine

## Lesson 8: Light verification
- Merkle trees
- Construction of a Merkle tree, construction of a proof
- Merkle security definition and proof
- The SPV protocol
- Light clients
- Authenticated data structures
- Sparse Merkle trees: Polynomial data in an exponential sea
- The Merkle-Patricia trie
- Block state commitment: UTXO commitment or account balances commitment
- Light mining
- **Exercises 10**

## Lesson 9: Superlight verification
- The non-interactive prover/verifier model
- The polylog verifier
- Superblocks
- The NIPoPoW protocol
- Superlight mining

## Lesson 10: Solidity overview
- Contracts, methods
- Flow control, loops, conditions
- Variables, simple and complex data types, storage locations
- Payable methods
- Reverting, exceptions
- Gas costs of operations
- ERC-20 tokens and ICOs
- ERC-721 tokens and NFTs
- **Exercise 11**

## Lesson 11: Coding in Solidity
- Reentrancy
- Auctions
- Front-running
- Naming services, ENS
- Commit/reveal schemes
- Randomness
- Events
- The receipts tree
- **Exercise 12**

## Lesson 12: Blockchain Governance
- Soft forks
- Hard forks
- Velvet forks
- TheDAO hack, Ethereum and Ethereum Classic
- **Exercise 13**

## Lesson 13: Variable difficulty
- Epochs, the m parameter
- Target recalculation and difficulty adjustment
- Difficulty clamping, the τ parameter
- **Exercise 14**

## Lesson 14: Consensus in earnest
- The backbone model in the static difficulty setting
- Interactive Turing machines
- The environment
- Synchronous time: The integer round
- The rushing adversary network model
- The Random Oracle model
- The parameters n, t, q
- The backbone protocol
- Mining
- The Chain Growth property
- The Common Prefix property
- The Chain Quality property
- Ledger liveness
- Ledger safety
- Liveness from growth and quality
- Safety from common prefix
- **Reading**: Section 5.5 from Modern Cryptography (2nd ed.)
- **Reading**: Pages 1-19 of the [Backbone paper](https://eprint.iacr.org/2014/765.pdf)

## Lesson 15: Blockchains are secure
- The honest majority assumption
- Successful rounds and uniquely successful rounds
- The probabilistic treatment using the random variables X, Y, and Z
- Probabilities of success and failure
- Chernoff bounds
- The world is a good place: Typical executions
- Convergence opportunities
- A proof of the Chain Growth property
- A proof of the Common Prefix property
- A proof of the Chain Quality property
- **Reading**: Pages 19-25 of the [Backbone paper](https://eprint.iacr.org/2014/765.pdf)

## Lesson 16: Proof of stake
- The proof-of-work environmental impact
- Proof-of-stake time: The slot
- Epoch randomness
- Verifiable random functions
