import { Component, createMemo } from 'solid-js'

import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import PageTop from '@/components/PageTop/PageTop'
import styles from '@/pages/Salary/Salary.module.scss'
import { mailtoTemplate } from '@/utils/mailtoTemplate'

type CardSalaryProps = {
  workingDaysPerWeek: number
  workingTime: string
  salary: number
  numberOfBonuses: number
}

const CardSalary: Component<CardSalaryProps> = (props) => {
  const workingDaysPerMonth = createMemo(() => props.workingDaysPerWeek * 4)

  return (
    <Card
      head={
        <p>
          週<span class={styles.cardTextStrong}>{props.workingDaysPerWeek}</span>日 (月{workingDaysPerMonth()}日) &emsp;
          {props.workingTime}
        </p>
      }
      body={
        <div class={styles.cardBodyInner}>
          <div class={styles.cardBodyItem}>
            <div>
              <h3 class={styles.cardTitle}>給与</h3>
              <p class={styles.cardTextWithMarker}>
                <span class={styles.cardTextStrong}>{props.salary}</span>万円
              </p>
              <span class={styles.cardAttention}>※月末締め翌月末払い</span>
            </div>
          </div>
          <div class={styles.cardBodyItem}>
            <div>
              <h3 class={styles.cardTitle}>賞与</h3>
              <p class={styles.cardTextWithMarker}>
                年<span class={styles.cardTextStrong}>{props.numberOfBonuses}</span>回
              </p>
            </div>
          </div>
        </div>
      }
    />
  )
}

const Salary = () => {
  return (
    <div class={styles.root}>
      <div class={[styles.item, 'fadeUp-1'].join(' ')}>
        <div class={styles.subTitle}>1年目</div>
        <div class={styles.cards}>
          <CardSalary workingDaysPerWeek={5} workingTime="08 : 00 〜 19 : 00" salary={26} numberOfBonuses={1} />
          <CardSalary workingDaysPerWeek={6} workingTime="08 : 00 〜 19 : 00" salary={36} numberOfBonuses={1} />
        </div>
      </div>

      <div class={[styles.item, 'fadeUp-2'].join(' ')}>
        <div class={styles.subTitle}>2年目</div>
        <div class={styles.cards}>
          <CardSalary workingDaysPerWeek={5} workingTime="08 : 00 〜 19 : 00" salary={49} numberOfBonuses={2} />
          <CardSalary workingDaysPerWeek={6} workingTime="08 : 00 〜 19 : 00" salary={63} numberOfBonuses={2} />
        </div>
      </div>
      <div class={[styles.item, 'fadeUp-3'].join(' ')}>
        <div class={styles.subTitle}>その他</div>
        <div class={[styles.cards, styles.cardsColumnDesktop].join(' ')}>
          <Card
            body={
              <>
                <h3 class={styles.cardTitle}>紹介制度</h3>
                <p class={styles.cardDesc}>
                  1人紹介につき毎月の給与に
                  <span class={styles.cardTextWithMarker}>
                    +<span class={styles.cardTextStrong}>1</span>万円
                  </span>
                  <br />
                  5人紹介で年収
                  <span class={styles.cardTextWithMarker}>
                    +<span class={styles.cardTextStrong}>60</span>万円
                  </span>
                </p>
              </>
            }
          />
          <Card
            body={
              <>
                <h3 class={styles.cardTitle}>自己負担</h3>
                <p class={styles.cardDesc}>
                  レンタル代：3.3万円 (購入も可能)
                  <br />
                  自動車保険：1.5万円
                  <br />
                  貨物保険　：0.5万円
                  <br />
                  ガソリン代：運転状況により変動
                  <br />
                  駐車場代　：自宅に駐車場がない場合
                </p>
              </>
            }
          />
        </div>
      </div>
      <a href={mailtoTemplate.recruit} target="_blank" class={styles.button}>
        <Button>採用に応募する</Button>
      </a>
      <PageTop class={styles.pageTop} />
    </div>
  )
}

export default Salary
