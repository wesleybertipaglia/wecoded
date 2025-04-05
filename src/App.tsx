import AppRoutes from './AppRoutes'
import { Header, Footer } from './components'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-grow'>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  )
}

export default App