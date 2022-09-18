import { Index } from 'solid-js'

import RadarChart from '@/components/RadarChart/RadarChart'
import { Feature as FeatureType, features } from '@/pages/Feature'
import styles from '@/pages/Feature/Feature.module.scss'
import { strictEntries } from '@/utils'

// JSXで扱いやすいように加工
type FormattedFeatures = Record<keyof FeatureType, string[]>

const formattedFeatures = features.reduce((all, feature) => {
  strictEntries(feature).forEach(([key, value]) => {
    if (!all[key]) {
      all[key] = []
    }
    all[key].push(value)
  })
  return all
}, {} as FormattedFeatures)

// tableとして扱いやすいように加工
const { companyName: head, ...body } = formattedFeatures

const Feature = () => {
  return (
    <div class={styles.root}>
      <div class={styles.radarChartWrapper}>
        <div class={styles.radarChartTitle}>1. 給与</div>
        <div class={styles.radarChartBox}>
          <div class={styles.radarChartTitle}>2. 勤務時間</div>
          <RadarChart class={styles.radarChart} />
          <div class={styles.radarChartTitle}>4. サポート</div>
        </div>
        <div class={styles.radarChartTitle}>3. 出勤場所</div>
      </div>
      <table class={styles.table}>
        <thead>
          <tr>
            <td />
            <Index each={head}>{(value) => <th class={styles.tableHead}>{value()}</th>}</Index>
          </tr>
        </thead>
        <tbody class={styles.tableBody}>
          <Index each={Object.values(body)}>
            {(values, i) => (
              <tr>
                <td class={styles.tableDataOrder}>({i + 1})</td>
                <Index each={values()}>{(value) => <td class={styles.tableData} innerHTML={value()} />}</Index>
              </tr>
            )}
          </Index>
        </tbody>
      </table>
    </div>
  )
}

export default Feature
