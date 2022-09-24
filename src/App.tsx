import { useRoutes, useLocation } from '@solidjs/router'
import { createMemo, Show } from 'solid-js'

import styles from '@/App.module.scss'
import KeyVisual from '@/components/KeyVisual/KeyVisual'
import Navigation from '@/components/Navigation/Navigation'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import { PageInfo, PAGES_INFO } from '@/constants'
import { routes } from '@/router'
import { trailingSlash } from '@/utils'

function App() {
  const Routes = useRoutes(routes)
  const location = useLocation()
  const pathname = createMemo(() => trailingSlash(location.pathname))
  const currentPageInfo = createMemo(() => PAGES_INFO.filter((info: PageInfo) => info.path === pathname())[0])
  const isNotFoundPage = createMemo(() => !currentPageInfo())
  const isTopPage = createMemo(() => {
    return pathname() === PAGES_INFO.filter((info: PageInfo) => info.name === 'top')[0].path
  })

  return (
    <>
      <Show when={!isNotFoundPage()} fallback={<Routes />}>
        <KeyVisual isActive={!isTopPage()} />
        <section class={styles.section}>
          <Show when={!isTopPage()}>
            <SectionHeader pageInfo={currentPageInfo()} />
          </Show>
          <Routes />
        </section>
      </Show>
      <Navigation />
    </>
  )
}

export default App
