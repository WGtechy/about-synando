import { lazy } from 'react';



const  IntroPage = lazy(()=> import('./IntroPage'));
const  AppTemplatePage = lazy(()=> import('./AppTemplatePage'));
// const  Comment = lazy(()=> import('./Comment'));
const  DownloadPage = lazy(()=> import('./DownloadPage'));
const  SocialInteraction = lazy(()=> import('./SocialInteraction'));
const  Features = lazy(()=> import('./Features'));

export {
    IntroPage,
    AppTemplatePage,
    // Comment,
    DownloadPage,
    SocialInteraction,
    Features
}