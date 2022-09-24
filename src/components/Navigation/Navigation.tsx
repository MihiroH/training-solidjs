import { NavLink } from '@solidjs/router'
import { Index } from 'solid-js'

import styles from '@/components/Navigation/Navigation.module.scss'
import { PAGES_INFO } from '@/constants'

const Navigation = () => {
  return (
    <nav class={styles.root}>
      <ul class={styles.container}>
        <Index each={PAGES_INFO}>
          {(page) => (
            <li class={styles.item}>
              <NavLink href={page().path} activeClass={styles.active} class={styles.link} end>
                {page().title.japanese}
              </NavLink>
            </li>
          )}
        </Index>
      </ul>
    </nav>
  )
}

export default Navigation
