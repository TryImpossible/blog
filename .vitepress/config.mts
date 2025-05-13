import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '博客',
  description: '我的博客',
  base: '/blog/',
  srcDir: './src',
  srcExclude: ['./README.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.svg',

    outline: {
      label: '页面导航'
    },

    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: 'Flutter',
        // collapsed: true,
        items: [
          { text: 'Flutter Shorebird热更新教程', link: '/flutter/Flutter Shorebird热更新教程/index' },
          { text: '实现Dart版本对象存储(COS)插件', link: '/flutter/实现Dart版本对象存储(COS)插件/index'},
          { text: 'Flutter Web在《一起漫部》的性能优化探索与实践', link: '/flutter/Flutter Web在《一起漫部》的性能优化探索与实践/index' },
          { text: 'Flutter的首次尝试-小独App', link: '/flutter/Flutter的首次尝试-小独App/index' }
        ]
      },
      {
        text: 'ReactNative',
        // collapsed: true,
        items: [
          { text: 'ReactNative脚手架工程 - Detox自动化测试', link: '/react-native/ReactNative脚手架工程 - Detox自动化测试/index' },
          { text: 'ReactNative脚手架工程 - Jest单元测试', link: '/react-native/ReactNative脚手架工程 - Jest单元测试/index' },
          { text: 'ReactNative脚手架工程 - 集成Typescript', link: '/react-native/ReactNative脚手架工程 - 集成Typescript/index' },
          { text: 'ReactNative脚手架工程 - 代码规范', link: '/react-native/ReactNative脚手架工程 - 代码规范/index' },
          { text: 'ReactNative脚手架工程 - 目录结构', link: '/react-native/ReactNative脚手架工程 - 目录结构/index' },
          { text: 'ReactNative脚手架工程 - 初始化工程', link: '/react-native/ReactNative脚手架工程 - 初始化工程/index' },
          { text: 'ReactNative脚手架工程 - 认识RN', link: '/react-native/ReactNative脚手架工程 - 认识RN/index' },
          { text: '关于ReactNative如何配置ESLint、Prettier、Pre-commit Hook', link: '/react-native/关于ReactNative如何配置ESLint、Prettier、Pre-commit Hook/index' },
          { text: 'ReactNative开发常用命令', link: '/react-native/ReactNative开发常用命令/index' }
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/example/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/example/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TryImpossible' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
