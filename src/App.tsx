import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Vite + React + Tailwind
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern, fast, and beautiful frontend stack with TypeScript support
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          {/* Counter Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Interactive Counter
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  onClick={() => setCount((count) => count - 1)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  -
                </button>
                <div className="bg-gray-100 px-8 py-3 rounded-lg min-w-[100px]">
                  <span className="text-3xl font-bold text-gray-800">{count}</span>
                </div>
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => setCount(0)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Vite</h3>
              <p className="text-gray-600">
                Lightning fast build tool with instant hot module replacement
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">React</h3>
              <p className="text-gray-600">
                Powerful library for building user interfaces with components
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Vite', color: 'bg-purple-100 text-purple-800' },
                { name: 'React', color: 'bg-blue-100 text-blue-800' },
                { name: 'TypeScript', color: 'bg-indigo-100 text-indigo-800' },
                { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800' },
                { name: 'Yarn', color: 'bg-green-100 text-green-800' },
                { name: 'PostCSS', color: 'bg-pink-100 text-pink-800' },
                { name: 'Autoprefixer', color: 'bg-yellow-100 text-yellow-800' },
                { name: 'ESLint', color: 'bg-red-100 text-red-800' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`${tech.color} px-4 py-2 rounded-lg text-center font-medium`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>Built with ❤️ using Vite, React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
