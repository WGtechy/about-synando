import React, { Suspense, lazy } from 'react'
import { loader } from './loader'
const AppTemplatePage = lazy(()=>import('./AppTemplatePage'))
const DownloadPage = lazy(()=>import('./DownloadPage'))
const Features = lazy(()=>import('./Features'))
const IntroPage = lazy(()=>import('./IntroPage'))
const SocialInteraction = lazy(()=>import('./SocialInteraction'))

const LandingPage = ({props}) => {

  return (
  <Suspense fallback={loader}>
   <main className='container'>
   <IntroPage />
   <AppTemplatePage />
   <SocialInteraction />
   <Features />
   {/* <Comment  /> */}
   <DownloadPage />
   </main>
   </Suspense>  
  )
}

export default LandingPage