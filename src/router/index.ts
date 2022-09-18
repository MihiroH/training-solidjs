import { RouteDefinition } from '@solidjs/router'
import { lazy } from 'solid-js'

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
    component: lazy(() => import('@/pages/Salary/Salary')),
  },
  {
    path: '/feature',
    component: lazy(() => import('@/pages/Feature/Feature')),
  },
  {
    path: '/support',
    component: lazy(() => import('@/pages/Support/Support')),
  },
  {
    path: '/schedule',
    component: lazy(() => import('@/pages/Schedule/Schedule')),
  },
  {
    path: '/delivery_areas',
    component: lazy(() => import('@/pages/DeliveryAreas/DeliveryAreas')),
  },
  {
    path: '/job_description',
    component: lazy(() => import('@/pages/JobDescription/JobDescription')),
  },
  {
    path: '/recruit',
    component: lazy(() => import('@/pages/Recruit/Recruit')),
  },
  {
    path: '/internship',
    component: lazy(() => import('@/pages/Internship/Internship')),
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/NotFound/NotFound')),
  },
]
