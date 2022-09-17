// TODO: @/constants/index.tsに移動
// TODO: @/router/index.tsのroutesはこれを元に作成しなおす
export type PageInfo = {
  name: string
  path: string
  title: {
    english: string
    japanese: string
  }
}

export const pagesInfo: Readonly<PageInfo[]> = Object.freeze([
  {
    name: 'top',
    path: '/',
    title: {
      english: '',
      japanese: '',
    },
  },
  {
    name: 'salary',
    path: '/salary',
    title: {
      english: 'Salary',
      japanese: '給与',
    },
  },
  {
    name: 'feature',
    path: '/feature',
    title: {
      english: 'Feature',
      japanese: '特長',
    },
  },
  {
    name: 'support',
    path: '/support',
    title: {
      english: 'Support',
      japanese: 'サポート',
    },
  },
  {
    name: 'delivery_areas',
    path: '/delivery_areas',
    title: {
      english: 'DeliveryAreas',
      japanese: '配送エリア',
    },
  },
])
