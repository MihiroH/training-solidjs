import { For } from 'solid-js'

import styles from '@/components/Navigation/Navigation.module.scss'
import { links } from '@/constants/index'

const Navigation = () => {
  return (
    <div class={styles.navigation}>
      <div class={styles.container}>
        <For each={links}>
          {(link) => (
            <a href={link.URL} class={styles.item}>
              {link.name}
            </a>
          )}
        </For>
      </div>
    </div>
  )
}

export default Navigation
