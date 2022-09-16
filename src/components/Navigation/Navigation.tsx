import { For, createEffect } from 'solid-js'

import styles from '@/components/Navigation/Navigation.module.scss'
import { links } from '@/constants/index'
import { cloneDomScrollHandler } from '@/utils/handler'

const Navigation = () => {
  let navSection: HTMLDivElement | undefined

  createEffect(() => {
    navSection?.addEventListener('scroll', cloneDomScrollHandler)
    return () => {
      navSection?.removeEventListener('scroll', cloneDomScrollHandler)
    }
  })

  return (
    <div class={styles.navigation}>
      <nav class={styles.container} ref={navSection}>
        <For each={links}>
          {(link) => (
            <a href={link.URL} class={styles.item}>
              {link.name}
            </a>
          )}
        </For>
      </nav>
    </div>
  )
}

export default Navigation
