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
  - The concept of self-enforceability:
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
  - Money today is fiat (but money as a social construct is ascribed to "non-fiat" money such as gold and shells, too)
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
- **Reading**: Chapter 5 introduction and section 5.1 from [Modern Cryptography](https://eclass.uniwa.gr/modules/document/file.php/CSCYB105/Reading%20Material/%5BJonathan_Katz%2C_Yehuda_Lindell%5D_Introduction_to_Mo%282nd%29.pdf) (2nd ed.)
- **Reading**: Chapter 12 introduction (skip comparison to MACs and relation to encryption) and sections 12.1, 12.2, 12.3 from [Modern Cryptography](https://eclass.uniwa.gr/modules/document/file.php/CSCYB105/Reading%20Material/%5BJonathan_Katz%2C_Yehuda_Lindell%5D_Introduction_to_Mo%282nd%29.pdf) (2nd ed.)
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
- The honest computational majority assumption
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

## Lesson 4: Blockchain Economics and Attacks

**2021-06-28**

- Probability of obtaining a block; the value p
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
- Attacks of a minority miner
  - The Selfish Mining attack
  - Selfish Mining simulation and bounds for 1/3 and 1/2 adversaries
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
- A look at Bitcoin's blockchain explorer blocks and transactions
- Mining pools
- The pooled mining protocol
  - Why pools? The variance problem
  - Decreasing variance while keeping expectation the same
  - Centralized pools and pool operators
  - Light blocks (shares) and the light PoW equation
- **Reading**: [Satoshi's Bitcoin paper](https://www.debr.io/article/21260.pdf)
- **Optional Reading**: [Selfish Mining paper](https://www.cs.cornell.edu/~ie53/publications/btcProcFC.pdf)
- **Exercises 6 and 7**

## Lesson 5: Mining and Wallets

**2021-07-02**

- Mining hardware: CPUs, GPUs, ASICs
- GetWork / the mining template
- The cost of mining: Empty blocks, optimistic mining
- Online and offline wallets
- Wallet seeds
- Hardware wallets, brain wallets
- **Optional Reading**: [Bitcoin Brain Drain](https://jbonneau.com/doc/VBCKM16-FC-bitcoin_brain_wallets.pdf)
- **Exercise 8**

## Lesson 6: The Application Layer - Accounts

**2021-07-02**

- Maintaining your own UTXOs for spending
- Optimizing for fees: Wallet UTXO selection policy
- p2pk / p2pkh and quantum security
- Hashing a public key
- The transaction as a state machine transition
- The UTXO as a state machine α with transaction transitions δ
- Account states: Balances
- A transaction in accounts
- Replayability and nonces
- The account balances as a state machine α with transaction transitions δ
- Practical transactions in Bitcoin and Ethereum
- Look at the Bitcoin and Ethereum transaction graph
- Motivation: Payment conditions and covenants
- Smart contracts in the UTXO model
- Bitcoin scripts
- **Exercise 9**

## Lesson 7: Light verification

**2021-07-05**

- The Random Oracle model
- Random Oracles are collision resistant
- Random Oracle collision resistance security proof
- Random Oracles are pre-image resistant
- Random Oracle pre-image resistance security proof
- Block predictions are difficult in the Random Oracle model
- Authenticated data structures
- Merkle trees
- Building a complete Merkle tree from data
- Building a Merkle tree proof
- Validating a Merkle tree proof
- Merkle trees in the torrent protocol
- Merkle tree game-based security definition
- Merkle tree security theorem and proof
- The SPV protocol
- Light clients
- Sparse Merkle trees, Merkle-Patricia tries: Polynomial data in an exponential sea
- **Reading**: Section 5.5 from [Modern Cryptography](https://eclass.uniwa.gr/modules/document/file.php/CSCYB105/Reading%20Material/%5BJonathan_Katz%2C_Yehuda_Lindell%5D_Introduction_to_Mo%282nd%29.pdf) (2nd ed.)
- **Exercise 10**

## Lesson 8: Consensus in earnest

**2021-07-07**

- The backbone model in the static difficulty setting
- Interactive Turing machines
- The environment
- Synchronous time: The integer round
- The theoretical network model
- The rushing adversary
- The Sybil adversary
- The parties: The parameters n, t
- The honest majority assumption: The parameter δ
- Mining modeled as a Random Oracle: The parameter q
- The backbone protocol
- Validating blocks
- The longest chain rule
- Mining
- The Chain Growth property: The parameters s and τ
- The Common Prefix property: The parameter k
- The Chain Quality property: The parameters ℓ and μ
- Ledger liveness: The parameter u
- Ledger safety
- Proof of liveness from Chain Growth and Chain Quality
- Calculation of the liveness parameter u
- Proof of safety from Common Prefix
- Successful rounds and uniquely successful rounds
- The probabilistic treatment using the random variables X, Y, and Z
- Probabilities of success and failure
- Chernoff bound intuition
- Chernoff bound theorem for binomial distributions: The parameter ε
- Convergence opportunities
- Uniquely successful rounds avoid fan-out attacks unless matched by adversarial mining power
- **Reading**: Pages 1-19 of the [Backbone paper](https://eprint.iacr.org/2014/765.pdf)

## Lesson 9: Blockchains are secure

**2021-07-09**

- The equal computational split model
- The world is a good place: Typical executions
- The distance between X and Y: The block production parameter f
- The distance between Y and Z: The Chernoff error parameter ε
- The Chernoff waiting time λ
- The balancing equation 3ε + 3f < δ, setting ε = f = δ / 3
- Calculating the relationship between adversarial power (n, t), network diameter, and block production rate
- The Typicality Theorem
- The Chain Growth Lemma
- A proof of the Chain Growth property, calculation of the parameters s=λ and τ=(1 - ε)f
- The Chain Slowness Lemma
- The Pairing Lemma
- A proof of the Common Prefix property
- **Reading**: Pages 19-25 of the [Backbone paper](https://eprint.iacr.org/2014/765.pdf)

## Lesson 10: Smart contracts

**2021-07-15**

- Smart contracts in the accounts model
- Turing completeness, quasi turing completeness
- Gas, gas price, starting gas
- Contract and personal accounts
- Value transfers between personal accounts
- The smart contract transaction format
- Transaction initiation
- Message passing between contracts
- Smart contract state as a state machine
- State commitment in block headers
- Nested Merkle tries
- Receipts
- Light mining using block state commitments
- The Ethereum Virtual Machine
- Contracts, methods
- The ABI
- Contract execution must be deterministic and isolated
- An attack against Common Prefix in a minority-adversary non-deterministic contract world
- Oracles
- A flight insurance contract
- Validating an HTTPS response from a contract

## Lesson 11: Solidity overview

**2021-07-22**

- Solidity grammar and syntax
- Contracts, methods
- Flow control, loops, conditions
- Variables, simple and complex data types, storage locations
- Payable methods
- Reverting, exceptions
- Gas costs of operations
- ERC-20 tokens and ICOs
- ERC-721 tokens and NFTs
- **Exercise 11**

## Lesson 12: Coding in Solidity

**2021-07-22**

- Reentrancy
- Auctions
- Front-running
- Naming services, ENS
- Commit/reveal schemes
- Randomness
- Events
- The receipts tree
- Decentralized mining pools
- **Exercise 12**

## Lesson 13: Superlight verification

**2021-07-29**

- The non-interactive prover/verifier model
- The one honest prover assumption
- The polylog verifier
- Superblocks
- The superblock equation: The level μ parameter
- The LCA block and repetition for Chernoff concentration
- The interactive PoPoW protocol
- PoPoW interactivity succinctness: Logarithmic number of rounds
- PoPoW communication succinctness: Constant communication per round
- PoPoW security
- Non-interactivity: The limited superfork argument
- NIPoPoWs
- Light mining with full verification in chains with state commitments
- Online NIPoPoWs
- Superlight mining

## Lesson 14: Proof of stake

**2021-08-29**

- The proof-of-work environmental impact
- The honest stake assumption
- Grinding attacks
- Proof-of-stake time: The slot
- Combining honest and adversarial randomness to obtain unbiased randomness
- Pseudorandomness: Getting more randomness from little randomness
- Epoch randomness
- Slot leaders
- The Ouroboros protocol
- k+1 blocks in any continuous 2k slots
- Secret Sharing Schemes
- Verifiable Secret Sharing
- Publicly Verifiable Secret Sharing
- Force-opening commitments using honest majority
- Verifiable random functions
- The proof-of-stake equation
- The Ouroboros Praos protocol

## Lesson 15: DeFi, Blockchain Governance and Evolution
- ERC-20 and ICOs
- ERC-721, ERC-1155 and NFTs
- Soft forks
- Hard forks
- Velvet forks
- DAOs
- TheDAO hack, Ethereum and Ethereum Classic
- Epochs, the m parameter
- Target recalculation and difficulty adjustment
- Difficulty clamping, the τ parameter
- **Exercises 13 and 14**

## Lesson 16: Privacy Coins
- The problem of linkability
- The problem of traceability
- Privacy in UTXO and in accounts
- Address reuse
- Ring signatures
- Elliptic Curves as additive groups
- Group generators
- Private and public keys in elliptic curves
- The DLOG problem in Elliptic Curves
- Unlinkability using ring signatures
- Untraceability using stealth addresses
- CryptoNote and Monero
