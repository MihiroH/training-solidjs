import { Component, JSX } from 'solid-js'

import styles from '@/components/Button/Button.module.scss'

type Props = {
  class?: string
  children: JSX.Element
}

const Button: Component<Props> = (props) => {
  return <span class={[styles.root, styles.class].join(' ')}>{props.children}</span>
}

export default Button
