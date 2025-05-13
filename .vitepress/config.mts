import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '博客',
  description: '我的博客',
  base: '/blog/',
  cleanUrls: true,
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
        items: [
          { text: 'Flutter Shorebird热更新教程', link: '/flutter/Flutter Shorebird热更新教程/index.md' },
          { text: '实现Dart版本对象存储(COS)插件', link: '/flutter/实现Dart版本对象存储(COS)插件/index.md'},
          { text: 'Flutter Web在《一起漫部》的性能优化探索与实践', link: '/flutter/Flutter Web在《一起漫部》的性能优化探索与实践/index.md' },
          { text: 'Flutter的首次尝试-小独App', link: '/flutter/Flutter的首次尝试-小独App/index.md' },
        ],
        collapsed: false,
      },
      {
        text: 'ReactNative',
        items: [
          { text: 'react-native-tab-view插件', link: '/react-native/react-native-tab-view插件/index.md' },
          {
            text: 'ReactNative脚手架工程',
            items: [
              { text: 'Detox自动化测试', link: '/react-native/ReactNative脚手架工程 - Detox自动化测试/index.md' },
              { text: 'Jest单元测试', link: '/react-native/ReactNative脚手架工程 - Jest单元测试/index.md' },
              { text: '集成Typescript', link: '/react-native/ReactNative脚手架工程 - 集成Typescript/index.md' },
              { text: '代码规范', link: '/react-native/ReactNative脚手架工程 - 代码规范/index.md' },
              { text: '目录结构', link: '/react-native/ReactNative脚手架工程 - 目录结构/index.md' },
              { text: '初始化工程', link: '/react-native/ReactNative脚手架工程 - 初始化工程/index.md' },
              { text: '认识RN', link: '/react-native/ReactNative脚手架工程 - 认识RN/index.md' },
            ],
            collapsed: true,
          },
          { text: '关于ReactNative如何配置ESLint、Prettier、Pre-commit Hook', link: '/react-native/关于ReactNative如何配置ESLint、Prettier、Pre-commit Hook/index.md' },
          { text: 'ReactNative开发常用命令', link: '/react-native/ReactNative开发常用命令/index.md' },
        ],
        collapsed: false,
      },
      {
        text: 'Android',
        items: [
          { 
            text: 'Android-x86-6.0定制之路',
            items: [
              { text: '绕过USB权限弹窗实现静默授权', link: '/android/Android-x86-6.0定制之路 - 绕过USB权限弹窗实现静默授权/index.md' },
              { text: '动态显示、隐藏状态栏和导航栏(广播方式)', link: '/android/Android-x86-6.0定制之路 - 动态显示、隐藏状态栏和导航栏(广播方式)/index.md' },
              { text: '永不休眠功能', link: '/android/Android-x86-6.0定制之路 - 永不休眠功能/index.md' },
              { text: '辛酸路开始', link: '/android/Android-x86-6.0定制之路 - 辛酸路开始/index.md' },
            ], 
            collapsed: false,
          }
        ],
        collapsed: false,
      },
      {
        text: 'Linux',
        items: [
          { text: 'Ubuntu服务器的基本操作', link: '/linux/Ubuntu服务器的基本操作/index.md' }
        ],
        collapsed: false,
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
