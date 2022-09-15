import { useRoutes } from '@solidjs/router'

import { routes } from '@/router'

function App() {
  const Routes = useRoutes(routes)

  return (
    <div>
      <Routes />
    </div>
  )
}

export default App
