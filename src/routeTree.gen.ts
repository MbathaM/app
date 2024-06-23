/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SuccessImport } from './routes/success'
import { Route as AuthImport } from './routes/auth'
import { Route as PublicImport } from './routes/_public'
import { Route as DashboardImport } from './routes/_dashboard'
import { Route as AuthVerifyEmailImport } from './routes/auth/verify-email'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as AuthResendVerificationImport } from './routes/auth/resend-verification'
import { Route as AuthPasswordResetImport } from './routes/auth/password-reset'
import { Route as AuthPasswordRecoveryImport } from './routes/auth/password-recovery'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as PublicTermsImport } from './routes/_public/terms'
import { Route as PublicPolicyImport } from './routes/_public/policy'
import { Route as DashboardDashboardImport } from './routes/_dashboard/dashboard'
import { Route as DashboardDashboardSettingsImport } from './routes/_dashboard/dashboard/settings'
import { Route as DashboardDashboardProfileImport } from './routes/_dashboard/dashboard/profile'

// Create Virtual Routes

const UnauthorizedLazyImport = createFileRoute('/unauthorized')()
const UnauthenticatedLazyImport = createFileRoute('/unauthenticated')()
const PublicIndexLazyImport = createFileRoute('/_public/')()
const PublicContactLazyImport = createFileRoute('/_public/contact')()
const PublicAboutLazyImport = createFileRoute('/_public/about')()

// Create/Update Routes

const UnauthorizedLazyRoute = UnauthorizedLazyImport.update({
  path: '/unauthorized',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/unauthorized.lazy').then((d) => d.Route))

const UnauthenticatedLazyRoute = UnauthenticatedLazyImport.update({
  path: '/unauthenticated',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/unauthenticated.lazy').then((d) => d.Route),
)

const SuccessRoute = SuccessImport.update({
  path: '/success',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const PublicRoute = PublicImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const PublicIndexLazyRoute = PublicIndexLazyImport.update({
  path: '/',
  getParentRoute: () => PublicRoute,
} as any).lazy(() => import('./routes/_public/index.lazy').then((d) => d.Route))

const PublicContactLazyRoute = PublicContactLazyImport.update({
  path: '/contact',
  getParentRoute: () => PublicRoute,
} as any).lazy(() =>
  import('./routes/_public/contact.lazy').then((d) => d.Route),
)

const PublicAboutLazyRoute = PublicAboutLazyImport.update({
  path: '/about',
  getParentRoute: () => PublicRoute,
} as any).lazy(() => import('./routes/_public/about.lazy').then((d) => d.Route))

const AuthVerifyEmailRoute = AuthVerifyEmailImport.update({
  path: '/verify-email',
  getParentRoute: () => AuthRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any)

const AuthResendVerificationRoute = AuthResendVerificationImport.update({
  path: '/resend-verification',
  getParentRoute: () => AuthRoute,
} as any)

const AuthPasswordResetRoute = AuthPasswordResetImport.update({
  path: '/password-reset',
  getParentRoute: () => AuthRoute,
} as any)

const AuthPasswordRecoveryRoute = AuthPasswordRecoveryImport.update({
  path: '/password-recovery',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

const PublicTermsRoute = PublicTermsImport.update({
  path: '/terms',
  getParentRoute: () => PublicRoute,
} as any)

const PublicPolicyRoute = PublicPolicyImport.update({
  path: '/policy',
  getParentRoute: () => PublicRoute,
} as any)

const DashboardDashboardRoute = DashboardDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardDashboardSettingsRoute = DashboardDashboardSettingsImport.update(
  {
    path: '/settings',
    getParentRoute: () => DashboardDashboardRoute,
  } as any,
)

const DashboardDashboardProfileRoute = DashboardDashboardProfileImport.update({
  path: '/profile',
  getParentRoute: () => DashboardDashboardRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_dashboard': {
      id: '/_dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      id: '/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/success': {
      id: '/success'
      path: '/success'
      fullPath: '/success'
      preLoaderRoute: typeof SuccessImport
      parentRoute: typeof rootRoute
    }
    '/unauthenticated': {
      id: '/unauthenticated'
      path: '/unauthenticated'
      fullPath: '/unauthenticated'
      preLoaderRoute: typeof UnauthenticatedLazyImport
      parentRoute: typeof rootRoute
    }
    '/unauthorized': {
      id: '/unauthorized'
      path: '/unauthorized'
      fullPath: '/unauthorized'
      preLoaderRoute: typeof UnauthorizedLazyImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard/dashboard': {
      id: '/_dashboard/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardDashboardImport
      parentRoute: typeof DashboardImport
    }
    '/_public/policy': {
      id: '/_public/policy'
      path: '/policy'
      fullPath: '/policy'
      preLoaderRoute: typeof PublicPolicyImport
      parentRoute: typeof PublicImport
    }
    '/_public/terms': {
      id: '/_public/terms'
      path: '/terms'
      fullPath: '/terms'
      preLoaderRoute: typeof PublicTermsImport
      parentRoute: typeof PublicImport
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/auth/password-recovery': {
      id: '/auth/password-recovery'
      path: '/password-recovery'
      fullPath: '/auth/password-recovery'
      preLoaderRoute: typeof AuthPasswordRecoveryImport
      parentRoute: typeof AuthImport
    }
    '/auth/password-reset': {
      id: '/auth/password-reset'
      path: '/password-reset'
      fullPath: '/auth/password-reset'
      preLoaderRoute: typeof AuthPasswordResetImport
      parentRoute: typeof AuthImport
    }
    '/auth/resend-verification': {
      id: '/auth/resend-verification'
      path: '/resend-verification'
      fullPath: '/auth/resend-verification'
      preLoaderRoute: typeof AuthResendVerificationImport
      parentRoute: typeof AuthImport
    }
    '/auth/signup': {
      id: '/auth/signup'
      path: '/signup'
      fullPath: '/auth/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
    '/auth/verify-email': {
      id: '/auth/verify-email'
      path: '/verify-email'
      fullPath: '/auth/verify-email'
      preLoaderRoute: typeof AuthVerifyEmailImport
      parentRoute: typeof AuthImport
    }
    '/_public/about': {
      id: '/_public/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof PublicAboutLazyImport
      parentRoute: typeof PublicImport
    }
    '/_public/contact': {
      id: '/_public/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof PublicContactLazyImport
      parentRoute: typeof PublicImport
    }
    '/_public/': {
      id: '/_public/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof PublicIndexLazyImport
      parentRoute: typeof PublicImport
    }
    '/_dashboard/dashboard/profile': {
      id: '/_dashboard/dashboard/profile'
      path: '/profile'
      fullPath: '/dashboard/profile'
      preLoaderRoute: typeof DashboardDashboardProfileImport
      parentRoute: typeof DashboardDashboardImport
    }
    '/_dashboard/dashboard/settings': {
      id: '/_dashboard/dashboard/settings'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardDashboardSettingsImport
      parentRoute: typeof DashboardDashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  DashboardRoute: DashboardRoute.addChildren({
    DashboardDashboardRoute: DashboardDashboardRoute.addChildren({
      DashboardDashboardProfileRoute,
      DashboardDashboardSettingsRoute,
    }),
  }),
  PublicRoute: PublicRoute.addChildren({
    PublicPolicyRoute,
    PublicTermsRoute,
    PublicAboutLazyRoute,
    PublicContactLazyRoute,
    PublicIndexLazyRoute,
  }),
  AuthRoute: AuthRoute.addChildren({
    AuthLoginRoute,
    AuthPasswordRecoveryRoute,
    AuthPasswordResetRoute,
    AuthResendVerificationRoute,
    AuthSignupRoute,
    AuthVerifyEmailRoute,
  }),
  SuccessRoute,
  UnauthenticatedLazyRoute,
  UnauthorizedLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_dashboard",
        "/_public",
        "/auth",
        "/success",
        "/unauthenticated",
        "/unauthorized"
      ]
    },
    "/_dashboard": {
      "filePath": "_dashboard.tsx",
      "children": [
        "/_dashboard/dashboard"
      ]
    },
    "/_public": {
      "filePath": "_public.tsx",
      "children": [
        "/_public/policy",
        "/_public/terms",
        "/_public/about",
        "/_public/contact",
        "/_public/"
      ]
    },
    "/auth": {
      "filePath": "auth.tsx",
      "children": [
        "/auth/login",
        "/auth/password-recovery",
        "/auth/password-reset",
        "/auth/resend-verification",
        "/auth/signup",
        "/auth/verify-email"
      ]
    },
    "/success": {
      "filePath": "success.tsx"
    },
    "/unauthenticated": {
      "filePath": "unauthenticated.lazy.tsx"
    },
    "/unauthorized": {
      "filePath": "unauthorized.lazy.tsx"
    },
    "/_dashboard/dashboard": {
      "filePath": "_dashboard/dashboard.tsx",
      "parent": "/_dashboard",
      "children": [
        "/_dashboard/dashboard/profile",
        "/_dashboard/dashboard/settings"
      ]
    },
    "/_public/policy": {
      "filePath": "_public/policy.tsx",
      "parent": "/_public"
    },
    "/_public/terms": {
      "filePath": "_public/terms.tsx",
      "parent": "/_public"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx",
      "parent": "/auth"
    },
    "/auth/password-recovery": {
      "filePath": "auth/password-recovery.tsx",
      "parent": "/auth"
    },
    "/auth/password-reset": {
      "filePath": "auth/password-reset.tsx",
      "parent": "/auth"
    },
    "/auth/resend-verification": {
      "filePath": "auth/resend-verification.tsx",
      "parent": "/auth"
    },
    "/auth/signup": {
      "filePath": "auth/signup.tsx",
      "parent": "/auth"
    },
    "/auth/verify-email": {
      "filePath": "auth/verify-email.tsx",
      "parent": "/auth"
    },
    "/_public/about": {
      "filePath": "_public/about.lazy.tsx",
      "parent": "/_public"
    },
    "/_public/contact": {
      "filePath": "_public/contact.lazy.tsx",
      "parent": "/_public"
    },
    "/_public/": {
      "filePath": "_public/index.lazy.tsx",
      "parent": "/_public"
    },
    "/_dashboard/dashboard/profile": {
      "filePath": "_dashboard/dashboard/profile.tsx",
      "parent": "/_dashboard/dashboard"
    },
    "/_dashboard/dashboard/settings": {
      "filePath": "_dashboard/dashboard/settings.tsx",
      "parent": "/_dashboard/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
