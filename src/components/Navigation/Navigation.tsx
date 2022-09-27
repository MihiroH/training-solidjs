import { NavLink, useLocation } from '@solidjs/router'
import { Index, createMemo, createEffect } from 'solid-js'

import styles from '@/components/Navigation/Navigation.module.scss'
import { PAGES_INFO, NAVIGATION_SCROLL_EXTRA_AMOUNT } from '@/constants'
import { mailtoTemplate } from '@/utils/mailtoTemplate'

const Navigation = () => {
  let navigationContainer!: HTMLUListElement
  const currentLocation = useLocation()
  const currentPathIndex = createMemo(() => PAGES_INFO.findIndex((item) => item.path === currentLocation.pathname))

  createEffect(() => {
    const currentNavChild = navigationContainer.childNodes[currentPathIndex()] as HTMLLIElement
    const navChildPosition = currentNavChild.getBoundingClientRect().left + navigationContainer.scrollLeft

    navigationContainer.scrollTo({
      left: navChildPosition - NAVIGATION_SCROLL_EXTRA_AMOUNT,
      behavior: 'smooth',
    })
  })

  return (
    <nav class={styles.root}>
      <ul class={styles.container} ref={navigationContainer}>
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
