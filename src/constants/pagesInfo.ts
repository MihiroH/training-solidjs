// TODO: @/constants/index.tsに移動
// TODO: @/router/index.tsのroutesはこれを元に作成しなおす
export type PageInfo = {
  name: string
  path: string
  title: {
    english: string
    japanese: string
  }
  headerBackGroundImage: string
}

export const pagesInfo: Readonly<PageInfo[]> = Object.freeze([
  {
    name: 'top',
    path: '/',
    title: {
      english: '',
      japanese: '',
    },
    headerBackGroundImage: '',
  },
  {
    name: 'salary',
    path: '/salary',
    title: {
      english: 'Salary',
      japanese: '給与',
    },
    headerBackGroundImage: require('@/assets/img/bg_header_salary.png'),
  },
  {
    name: 'feature',
    path: '/feature',
    title: {
      english: 'Feature',
      japanese: '特長',
    },
    headerBackGroundImage: require('@/assets/img/bg_header_feature.png'),
  },
  {
    name: 'support',
    path: '/support',
    title: {
      english: 'Support',
      japanese: 'サポート',
    },
    headerBackGroundImage: require('@/assets/img/bg_header_support.png'),
  },
])
