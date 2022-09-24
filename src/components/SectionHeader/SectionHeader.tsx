import { Link } from '@solidjs/router'
import { Component, createMemo } from 'solid-js'

import Image from '@/components/Image/Image'
import styles from '@/components/SectionHeader/SectionHeader.module.scss'
import { PageInfo } from '@/constants'

type Props = {
  pageInfo: PageInfo
}

const SectionHeader: Component<Props> = (props) => {
  const backgroundImage = createMemo(() => `/img/bg_header_${props.pageInfo.name}.png`)

  return (
    <div class={styles.root} style={{ 'background-image': `url(${backgroundImage()})` }}>
      <div class={styles.inner}>
        <Link href="/" class={styles.logo}>
          <Image src="/img/logo_triple_box.svg" alt="TOPページへ戻る" width="36" height="35" />
        </Link>
        <div class={styles.title}>
          <div class={styles.titleEnglish}>{props.pageInfo.title.english}</div>
          <h2 class={styles.titleJapanese}>{props.pageInfo.title.japanese}</h2>
        </div>
        <a class={styles.iconContact}>
          <Image src="/img/icon_email.svg" alt="お問い合わせ" width="32" height="23" />
        </a>
      </div>
    </div>
  )
}

export default SectionHeader
