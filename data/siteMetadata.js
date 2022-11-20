const siteMetadata = {
  title: 'Alex Dev Cafe',
  author: 'Alex Khant',
  headerTitle: 'AlexDevCafe',
  description: 'Programming tips and tricks',
  language: 'en-us',
  siteUrl: 'https://alexdev.cafe',
  siteRepo: 'https://github.com/alexdevcafe/personal-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/logo.png',
  email: 'grashupfer99@gmail.com',
  github: 'https://github.com/grashupfer99',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  youtube: 'https://www.youtube.com/channel/UCesSMMekpptuQgHrGbZ3-fg',
  linkedin: 'https://www.linkedin.com/in/alexkhant',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID, // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus',
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
