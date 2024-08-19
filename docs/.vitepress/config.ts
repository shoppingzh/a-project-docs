import { defineConfig } from 'vitepress'
import { autoGenerateSidebar, getFirstDocLink } from 'press-util'
import vite from './vite.config'

export default defineConfig({
  base: '/',
  appearance: true,
  title: '工程化',
  description: '一个项目背后的故事',
  lastUpdated: true,
  // 标签页logo
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }], // chrome pwa
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    }
  },
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo.png',
    lastUpdatedText: '最近更新于',
    // 2/3/4级标题均形成目录
    outline: [2, 4],
    outlineTitle: '目录',
    nav: [{
      text: '工程基础',
      link: getFirstDocLink('base')
    }, {
      text: '应用上层',
      link: getFirstDocLink('app')
    }],
    sidebar: autoGenerateSidebar() as any,
    // 编辑
    editLink: {
      pattern: 'https://github.com/shoppingzh/a-project-docs/edit/main/docs/:path',
      text: '在Github编辑',
    },
    // 搜索
    search: {
      provider: 'local',
    },
  },
  vite,
})
