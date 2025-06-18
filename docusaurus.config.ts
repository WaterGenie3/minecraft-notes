import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Minecraft Notes',
  tagline: 'Just my personal notes trying to understand Minecraft :)',
  favicon: 'img/bee.webp',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://watergenie3.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/minecraft-notes/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // https://docusaurus.io/docs/deployment#deploying-to-github-pages
  organizationName: 'WaterGenie3', // Usually your GitHub org/user name.
  projectName: 'minecraft-notes', // Usually your repo name.
  deploymentBranch: 'github-pages', // gh is a weird abbrev so I'll just use the full name
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true
  },
  themes: [
    '@docusaurus/theme-mermaid'
  ],

  // For katex
  // https://docusaurus.io/docs/markdown-features/math-equations
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    }
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    blog: {
      sidebar: {
        groupByYear: false
      }
    },
    navbar: {
      title: 'Notes',
      logo: {
        alt: 'WaterGenie3',
        src: 'img/bee.webp',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'}
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true
    },
    prism: {
      theme: prismThemes.gruvboxMaterialLight,
      darkTheme: prismThemes.gruvboxMaterialDark,
      additionalLanguages: ['java', 'yaml', 'json', 'bash'],
    },
    mermaid: {
      theme: {
        light: 'default',
        dark: 'dark'
      },
      options: {
        flowchart: {
            markdownAutoWrap: false,
            wrappingWidth: 600
        }
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
