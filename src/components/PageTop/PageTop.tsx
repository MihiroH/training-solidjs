import { Component } from 'solid-js'

import LogoSub from '@/assets/img/logo-sub.svg'
import styles from '@/components/PageTop/PageTop.module.scss'

type Props = {
  class?: string
}

const PageTop: Component<Props> = (props) => {
  const scrollTop = (event: Event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a class={[styles.inner, props.class].join(' ')} href="#" onClick={scrollTop}>
      <div class={styles.logoL}>
        <img src={LogoSub} alt="" />
      </div>
      <div class={styles.logoM}>
        <img src={LogoSub} alt="" />
      </div>
      <p class={styles.text}>PAGE TOP</p>
      <div class={styles.logoM}>
        <img src={LogoSub} alt="" />
      </div>
      <div class={styles.logoL}>
        <img src={LogoSub} alt="" />
      </div>
    </a>
  )
}

export default PageTop
