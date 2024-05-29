import Link from 'next/link'
import MyHead from '../components/MyHead'

export default function Home() {
  return (
    <>
      <MyHead
        title="Caley-Linktree"
        description="Welcome to Caley!"
        image="https://caley.app/wp-content/uploads/2024/04/Logo-07.png"
        url="https://caley.app"
      />

      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
        <div className="text-center bg-white p-8 rounded-lg shadow-2xl max-w-md">
        <h1 className="text-4xl text-gray-700 font-semibold mb-4"> Welcome to <br/><span className="text-indigo-600">Caley's LinkTree</span></h1>
        <h2  className="text-xl text-gray-500 mb-6">Discover a world of connections. Create your hub and share your links seamlessly.</h2>
        <Link title='Notice the page loader' className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-500 transition duration-300 ease-in-out" href="/apply">Register Now!</Link>
        </div>
      </main>
    </>
  )
}
