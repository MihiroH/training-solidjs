import { NavLink } from '@solidjs/router'
import { Index } from 'solid-js'

import styles from '@/components/Navigation/Navigation.module.scss'
import { links } from '@/constants/index'

const Navigation = () => {
  return (
    <nav class={styles.root}>
      <ul class={styles.container}>
        <Index each={links}>
          {(link) => (
            <li class={styles.item}>
              <NavLink href={link().URL} activeClass={styles.active} class={styles.link} end>
                {link().name}
              </NavLink>
            </li>
          )}
        </Index>
      </ul>
    </nav>
  )
}

export default Navigation
