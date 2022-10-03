import { DeepReadonly } from '@/types'

export const MAIL_ADDRESS = 'human.create24@gmail.com'

export type PageInfo = {
  name: string
  path: string
  title: {
    english: string
    japanese: string
  }
}

export const PAGES_INFO: DeepReadonly<PageInfo[]> = [
  {
    name: 'top',
    path: '/',
    title: {
      english: 'TOP',
      japanese: 'トップ',
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
    name: 'schedule',
    path: '/schedule',
    title: {
      english: 'Daily Schedule',
      japanese: '1日のスケジュール',
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
  {
    name: 'job_description',
    path: '/job_description',
    title: {
      english: 'JobDescription',
      japanese: '業務内容',
    },
  },
  {
    name: 'recruit',
    path: '/recruit',
    title: {
      english: 'Recruit',
      japanese: '採用の流れ',
    },
  },
  {
    name: 'internship',
    path: '/internship',
    title: {
      english: 'Internship',
      japanese: '職場体験',
    },
  },
]
