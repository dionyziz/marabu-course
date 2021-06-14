import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Blockchain Foundations: A Blockchain Course
        </h1>

        <p className="description">
          This graduate-level course teaches you about blockchain foundations. The course focuses on the first principles
          and foundations behind blockchains with the aim of understanding how and why blockchain technology works and is
          secure. We do not focus on Bitcoin or Ethereum engineering peculiarities, but we explore the general concepts
          of the blockchain field. However, the course is heavy on both engineering (writing code) and theory.
        </p>

        <h2>Sylalbus</h2>
        <p>
          This 56-hours course is structured in 16 lessons. We explore proof-of-work, proof-of-stake, transactions in
          the UTXO and accounts model, authenticated data structures such as Merkle Trees, simple payment verification,
          smart contracts, and their programming. A central topic of the course is understanding why blockchains are secure.
          We treat the question in theoretical depth using the cryptographic <em>backbone model</em>. <Link href='docs/syllabus'><a>View the full syllabus</a></Link>.
        </p>

        <h2>Exercises</h2>
        <p>
          The <em>exercises</em> form the most important part of the course. They involve building our own blockchain, Marabu. It is a
          proof-of-work UTXO blockchain designed for educational purposes to be simple to implement and debug. As
          a student, you will implement your own Marabu full node from scratch. Your node must connect to the nodes
          of other students and maintain a common blockchain with them.
          Implement the <Link href='docs/protocol'><a>protocol</a></Link> by
          following through with the <Link href='docs/exercises'><a>exercises</a></Link>.
        </p>

        <p>
          Throughout the course, we will also have a few additional exercises on smart contracts, as well as some theory problems.
        </p>

        <h2>Implementations</h2>
        <p>
          The following implementations are solutions to the exercises. If you want to make your own node, you should try not to look at them too much.

          <ul>
            <li><a href='https://github.com/loukoum/marabu'>marabu</a>, a Marabu node in C++ by Giannis Goulioumis</li>
            <li><a href='https://gogs.decrypto.org/gtklocker/go-marabu'>go-marabu</a>, a Marabu node in Go by Kostis Karantias</li>
            <li><a href='https://github.com/pkakelas/marabou-client'>marabou</a>, a Marabu node in Go by Dimitris Lamprinos</li>
            <li><a href='https://github.com/dionyziz/marabu'>malibu</a>, a Marabu node in TypeScript by Dionysis Zindros</li>
          </ul>
        </p>

        <h2>Who is this course for?</h2>

        <p>
          This is an experimental course for graduate-level students in computer science. We are currently teaching it in-person to
          four students as a test, but it may be offered at the university level once we develop it further. Anyone is welcome to
          develop a node and follow through with the exercises, however.
        </p>

        <p>
          This course is designed for graduate-level students or as an advanced elective course for 4th year undergraduate students.
          The prerequisites for the course are a professional knowledge of at least one programming language (for implementing the node),
          a basic knowledge of networking (TCP/IP), basic understanding of probability theory (probabilities, expectations, distributions,
          tail bounds), discrete mathematics (graphs, proof techniques), and
          a basic understanding of computability/complexity theory (Turing Machines, P, NP, reductions). A very basic understanding of
          cryptography (hashes, signatures, proof techniques) is helpful but not required.
        </p>

        <ul>
          <li>Instructor: Dionysis Zindros</li>
          <li>Teaching Assistant: Kostis Karantias</li>
          <li>Students: Giannis Goulioumis, Nikolaos Kamarinakis, Dimitris Lamprinos, Apostolos Tzinas</li>
        </ul>

        <h2>Bibliography</h2>

        <p>
          The central topic of the course, answering the question of <em>why blockchains are secure</em>, is not yet fully treated in any books.
          We are developing our own lecture notes.
        </p>

        <p>
          Some engineering books on the topic that discuss the specific implementation details of Bitcoin and Ethereum are <a href='https://github.com/bitcoinbook/bitcoinbook'>Mastering Bitcoin</a> and <a href='https://github.com/ethereumbook/ethereumbook'>Mastering Ethereum</a> by Andreas Antonopoulos (but
          the point of the course is not to focus on Bitcoin and Ethereum-specific details). These books are available online
          for free, but you can also buy them in print.
        </p>

        <p>
          As a cryptography reference, we recommend <a href='https://eclass.uniwa.gr/modules/document/file.php/CSCYB105/Reading%20Material/%5BJonathan_Katz%2C_Yehuda_Lindell%5D_Introduction_to_Mo%282nd%29.pdf'>Introduction to Modern Cryptography</a> by Katz and Lindell.
          It is an excellent book.
          If you need to refresh your knowledge in computability,
          the <a href='http://fuuu.be/polytech/INFOF408/Introduction-To-The-Theory-Of-Computation-Michael-Sipser.pdf'>Introduction to the Theory of Computation</a> by Sipser
          is the best book in computer science ever written.
          If you need a refresher in discrete math and discrete probabilities,
          Liu's <a href='https://www.amazon.com/Elements-Discrete-Mathematics-C-Liu/dp/0071005447'>Elements of Discrete Mathematics</a> is great.
        </p>

        <p>
          We will study the following papers throughout the course:
        </p>

        <ul>
          <li><a href='https://bitcoin.org/bitcoin.pdf'>The Bitcoin paper</a> by Satoshi Nakamoto</li>
          <li><a href='https://eprint.iacr.org/2014/765.pdf'>The Bitcoin backbone paper</a> (2020 revision) by Juan Garay, Aggelos Kiayias, and Nikos Leonardos</li>
        </ul>
      </main>

      <footer>
        Creative Commons 4.0 Attribution
      </footer>
    </div>
  )
}
