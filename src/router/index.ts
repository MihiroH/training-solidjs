import { RouteDefinition } from '@solidjs/router'
import { lazy } from 'solid-js'

import DeliveryAreas from '@/pages/DeliveryAreas/DeliveryAreas'
import Feature from '@/pages/Feature/Feature'
import Internship from '@/pages/Internship/Internship'
import JobDescription from '@/pages/JobDescription/JobDescription'
import Recruit from '@/pages/Recruit/Recruit'
import Salary from '@/pages/Salary/Salary'
import Schedule from '@/pages/Schedule/Schedule'
import Support from '@/pages/Support/Support'

export const routes: RouteDefinition[] = [
  {
    path: '/',
  },
  {
    path: '/top',
    data({ navigate }) {
      navigate('/')
    },
  },
  {
    path: '/salary',
    component: Salary,
  },
  {
    path: '/feature',
    component: Feature,
  },
  {
    path: '/support',
    component: Support,
  },
  {
    path: '/schedule',
    component: Schedule,
  },
  {
    path: '/delivery_areas',
    component: DeliveryAreas,
  },
  {
    path: '/job_description',
    component: JobDescription,
  },
  {
    path: '/recruit',
    component: Recruit,
  },
  {
    path: '/internship',
    component: Internship,
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/NotFound/NotFound')),
  },
]
