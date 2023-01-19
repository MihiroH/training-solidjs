import Image from '@/components/Image/Image'
import styles from '@/pages/NotFound/NotFound.module.scss'

const NotFound = () => {
  return (
    <div class={styles.root}>
      <div class={styles.logo}>
        <Image src="/img/logo-sub.svg" alt="" width="33" height="33" />
      </div>
      <p class={styles.title}>404</p>
      <p class={styles.text}>
        お探しのページが見つかりません。
        <br />
        移動もしくは削除された可能性があります。
      </p>
    </div>
  )
}

export default NotFound
