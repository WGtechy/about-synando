import React, { Suspense, useCallback, useRef, useState } from 'react'
import AppTemplatePage from './AppTemplatePage'
import DownloadPage from './DownloadPage'
import Features from './Features'
import IntroPage from './IntroPage'
import SocialInteraction from './SocialInteraction'

const LandingPage = ({props}) => {
const loading = (<div>Loading...</div>)

  return (
  <Suspense fallback={loading}>
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