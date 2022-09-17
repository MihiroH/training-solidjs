import { Link } from '@solidjs/router'
import { Component } from 'solid-js'

import IconEmail from '@/assets/img/icon_email.svg'
import LogoTripleBox from '@/assets/img/logo_triple_box.svg'
import styles from '@/components/SectionHeader/SectionHeader.module.scss'
import { PageInfo } from '@/constants/pagesInfo'

type Props = {
  backgroundImage: PageInfo['headerBackGroundImage']
  title: PageInfo['title']
}

const SectionHeader: Component<Props> = (props) => {
  return (
    <div class={styles.root} style={{ 'background-image': `url(${props.backgroundImage})` }}>
      <div class={styles.inner}>
        <Link href="/" class={styles.logo}>
          <img src={LogoTripleBox} alt="TOPページへ戻る" />
        </Link>
        <div class={styles.title}>
          <div class={styles.titleEnglish}>{props.title.english}</div>
          <h2 class={styles.titleJapanese}>{props.title.japanese}</h2>
        </div>
        <a class={styles.iconContact}>
          <img src={IconEmail} alt="お問い合わせ" />
        </a>
      </div>
    </div>
  )
}

export default SectionHeader
