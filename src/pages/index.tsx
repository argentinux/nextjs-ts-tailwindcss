import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <header className="center bg-dark">
        <h1 className="text-white text">Next.js</h1>
      </header>
      <main className="center bg-primary">
        <h1 className="text text-4xl text-white">Preact</h1>
      </main>
      <footer className="center">
        <h1 className="text">Tailwind CSS</h1>
      </footer>
    </Layout>
  )
}