import styles from '@/pages/JobDescription/JobDescription.module.scss'

const JobDescription = () => {
  return (
    <div class={styles.root}>
      <p class={styles.text}>
        初年度はAmazon勤務になります。
        <br />
        配送数に関わらず固定給をお支払いします。
        <br />
        <br />
        2年目以降は歩合のより高給なお仕事を依頼いたします。
        <br />
        <br />
        【勤務時間】 以下の中から1つ選択していただきます。
        <br />
        <br />
        ・08 : 00 〜 19 : 00
        <br />
        <span class={styles.textS}>&emsp;※荷捌きのスピードによって、21時まで勤務することもあります。</span>
        <br />
        ・18 : 00 〜 22 : 00
        <br />
        ・20 : 00 〜 24 : 00
      </p>
    </div>
  )
}

export default JobDescription
