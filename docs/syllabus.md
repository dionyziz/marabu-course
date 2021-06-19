## Lesson 1: The Problem / The Setting / Motivation
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
- Exercises 0 and 1

## Lesson 2: The Application Layer - UTXO
- A transaction
- Public and private keys
- Signatures, signing, verifying, correctness, security
- p2pk / p2pkh
- Hashing a public key
- Addresses
- One input and one output
- Amounts
- Inputs and outputs in UTXO
- Splitting money
- Merging money
- Conservation Law
- Change
- Outpoints -- the transaction graph
- A look at the bitcoin transaction graph
- The transaction ledger / transaction serialization
- UTXO as application state
- The evolution of the UTXO
- What money do I own? Calculating balances
- The UTXO as a state machine α with transaction transitions δ
- Double spending
- Exercise 2 and 3

## Lesson 3: Blocks and chains
- The decentralized setting; the network
- Adversarial and honest nodes, corruption, sybil attacks
- Network delays, message delivery
- Broadcasting transactions to everyone - be your own bank
- Money arising out of social consensus
- The double spending attack
- Simple ideas don't work: Serializing transactions naively, the critical time Δ
- Proof-of-work as a consensus mechanism without blocks
- The block
- The chain
- Temporary forks
- Coming to an agreement: Blockchain convergence
- Exercise 4, 5, 6

## Lesson 4: Blockchain Economics
- The weak conservation law
- Fees
- The money supply
- Supply adjustment
- Exercise 7

## Lesson 5: Mining and Wallets
- Mining hardware: CPUs, GPUs, ASICs
- Mining pools
- The pooled mining protocol: light blocks
- The cost of mining: Empty blocks, optimistic mining
- Fast miners
- Online and offline wallets
- Wallet seeds
- Hardware wallets, brain wallets

## Lesson 6: The Application Layer - Accounts
- A transaction
- Balances
- Replaybility and nonces

## Lesson 7: Smart contracts
- Motivation: Payment conditions and covenants
- Smart contracts in the UTXO model
- Bitcoin scripts
- Smart contracts in the accounts model
- Turing completeness and gas
- Contract and personal transactions
- The smart contract transaction format
- The Merkle-Patricia trie
- Smart contract state as a state machine
- Exercise 8

## Lesson 8: Light verification
- Merkle trees
- Construction of a Merkle tree, construction of a proof
- Merkle security definition and proof
- The SPV protocol
- Light clients
- Block state commitment
- Exercises 8, 9

## Lesson 9: Superlight verification
- The non-interactive prover/verifier model
- The polylog verifier
- Superblocks
- The NIPoPoW protocol
- Superlight mining

## Lesson 10: Solidity overview
- Contracts, methods
- Variables, data types, storage location
- Payable methods
- Reverting, exceptions

## Lesson 11: Coding in Solidity
- ERC-20 tokens and ICOs
- ERC-721 tokens and NFTs
- Front-running
- Randomness
- Exercise 10

## Lesson 12: Blockchain Governance
- Soft forks
- Hard forks
- Velvet forks

## Lesson 13: Variable difficulty
- Epochs, the m parameter
- Target recalculation and difficulty adjustment
- Difficulty clamping, the τ parameter
- Exercise 11

## Lesson 14: Consensus in earnest
- The backbone model in the static difficulty setting
- Interactive Turing machines
- The environment
- Synchronous time: The integer round
- The rushing adversary network model
- The Random Oracle model
- The parameters n, t, q, p
- The backbone protocol
- Mining
- The Chain Growth property
- The Common Prefix property
- The Chain Quality property
- Ledger liveness
- Ledger safety
- Liveness from growth and quality
- Safety from common prefix

## Lesson 15: Blockchains are secure
- The honest majority assumption
- Successful rounds and uniquely successful rounds
- The probabilistic treatment using the random variables X, Y, and Z
- Probabilities of success and failure
- The world is a good place: Typical executions
- Convergence opportunities
- A proof of the Chain Growth property
- A proof of the Common Prefix property
- A proof of the Chain Quality property

## Lesson 16: Proof of stake
- The proof-of-work environmental impact
- Proof-of-stake time: The slot
- Epoch randomness
- Verifiable random functions
