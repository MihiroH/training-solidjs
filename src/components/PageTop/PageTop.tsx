import { Component } from 'solid-js'

import Image from '@/components/Image/Image'
import styles from '@/components/PageTop/PageTop.module.scss'

type Props = {
  class?: string
}

const PageTop: Component<Props> = (props) => {
  const scrollTop = (event: Event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const logoSub = '/img/logo-sub.svg'

  return (
    <a class={[styles.inner, props.class].join(' ')} href="#" onClick={scrollTop}>
      <div class={styles.logoL}>
        <Image src={logoSub} alt="" width="33" height="33" />
      </div>
      <div class={styles.logoM}>
        <Image src={logoSub} alt="" width="33" height="33" />
      </div>
      <p class={styles.text}>PAGE TOP</p>
      <div class={styles.logoM}>
        <Image src={logoSub} alt="" width="33" height="33" />
      </div>
      <div class={styles.logoL}>
        <Image src={logoSub} alt="" width="33" height="33" />
      </div>
    </a>
  )
}

export default PageTop
