import styles from '@/pages/Support/Support.module.scss'

const Support = () => {
  return (
    <div class={styles.root}>
      <p class={styles.text}>
        こんな仕事をしてみたい！
        <br />
        もっと給与が欲しい！
        <br />
        もっと休みが欲しい！
      </p>
      <p class={styles.text}>
        あなたの日常の
        <br />
        『悩み』や『希望』を
        <br />
        定期的に行う面談を通して
        <br />
        ヒヤリングさせて頂きます。
      </p>
      <p class={styles.text}>
        その声を元に、
        <br />
        あなたがより快適に楽しく
        <br />
        仕事ができる環境づくりを
        <br />
        弊社は、全力でサポートさせて頂きます!
      </p>
    </div>
  )
}

export default Support
