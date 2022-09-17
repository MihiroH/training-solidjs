import { useRoutes, useLocation } from '@solidjs/router'
import { createMemo } from 'solid-js'

import KeyVisual from '@/components/KeyVisual/KeyVisual'
import { routes } from '@/router'

function App() {
  const Routes = useRoutes(routes)
  const location = useLocation()
  const isTopPage = createMemo(() => location.pathname === '/')

  return (
    <div>
      <KeyVisual isActive={!isTopPage()} />
      <Routes />
    </div>
  )
}

export default App
