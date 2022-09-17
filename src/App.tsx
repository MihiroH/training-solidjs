import { useRoutes, useLocation } from '@solidjs/router'
import { createMemo, Show } from 'solid-js'

import styles from '@/App.module.scss'
import KeyVisual from '@/components/KeyVisual/KeyVisual'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import { PageInfo, pagesInfo } from '@/constants/pagesInfo'
import { routes } from '@/router'
import { trailingSlash } from '@/utils'

function App() {
  const Routes = useRoutes(routes)
  const location = useLocation()
  const pathname = createMemo(() => trailingSlash(location.pathname))
  const currentPageInfo = createMemo(() => pagesInfo.filter((info: PageInfo) => info.path === pathname())[0])
  const isNotFoundPage = createMemo(() => !currentPageInfo())
  const isTopPage = createMemo(() => {
    return pathname() === pagesInfo.filter((info: PageInfo) => info.name === 'top')[0].path
  })

  return (
    <>
      <Show when={!isNotFoundPage()} fallback={<Routes />}>
        <KeyVisual isActive={!isTopPage()} />
        <div class={styles.section}>
          <SectionHeader page={currentPageInfo()} />
          <Routes />
        </div>
      </Show>
    </>
  )
}

export default App
