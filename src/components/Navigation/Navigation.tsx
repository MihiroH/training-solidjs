import { NavLink } from '@solidjs/router'
import { Index } from 'solid-js'

import styles from '@/components/Navigation/Navigation.module.scss'
import { PAGES_INFO } from '@/constants'
import { mailtoTemplate } from '@/utils/mailtoTemplate'

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
        <li class={styles.item}>
          <a href={mailtoTemplate.contact} target="_blank" class={[styles.active, styles.link].join(' ')}>
            お問い合わせ
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
