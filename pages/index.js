import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          A Blockchain Course
        </h1>

        <p className="description">
          Review the <Link href='docs/syllabus'><a>syllabus</a></Link>
        </p>

        <p>
          Implement the <Link href='docs/protocol'><a>protocol</a></Link> by
          following through with the <Link href='docs/exercises'><a>exercises</a></Link>.
        </p>
      </main>

      <footer>
        Creative Commons 4.0 Attribution
      </footer>
    </div>
  )
}
