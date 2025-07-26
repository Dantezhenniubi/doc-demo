---
# outline: false
# aside: false
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// 导入简化版图片工具
import { getImage } from '../.vitepress/utils/imageImports.js'

const members = [
  {
    avatar: getImage('DailyRecord/assets', 'DtZNB', 'jpg'),
    name: 'DtZNB',
    title: '创作者',
    links: [
      { icon: 'github', link: 'https://github.com/Dantezhenniubi' },
      { icon: {
          svg: '<svg t="1746271485235" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3483" width="200" height="200"><path d="M387.5 241.7l-74.9-72.6s-11.7-14.4 8.1-30.7c19.9-16.2 20.9-9 27.6-4.5 6.7 4.5 111.4 107.8 111.4 107.8h-72.2z m248.8 2.7l74.9-72.6s11.7-14.4-8.1-30.7c-19.8-16.2-20.9-9-27.6-4.5-6.7 4.5-111.4 107.8-111.4 107.8h72.2z" fill="#FB759C" p-id="3484"></path><path d="M917.4 378.8c-2.7-113.7-101.5-135.3-101.5-135.3s-506.2-4.1-611.8 0c-105.6 29.8-97.5 135.3-97.5 135.3s1.4 226-0.1 340.4c11.4 114.4 99.6 132.6 99.6 132.6s35.2 0.7 60.9 0.7c2.7 7.4 4.7 43.3 44.7 43.3 39.9 0 44.7-43.3 44.7-43.3s292.4-1.4 316.7-1.4c1.4 12.2 7.4 45.3 47.4 44.7 39.9-0.7 42.6-47.4 42.6-47.4s13.5-1.4 54.1 0c94.7-17.6 100.2-128.6 100.2-128.6s-1.3-227.3 0-341z m-81.5 361.9c0 17.9-14.2 32.5-31.7 32.5H227.9c-17.5 0-31.7-14.5-31.7-32.5V359c0-17.9 14.2-32.5 31.7-32.5h576.3c17.5 0 31.7 14.5 31.7 32.5v381.7z" fill="#FB759C" p-id="3485"></path><path d="M256.9 466.8l169.2-32.5 12.8 63.6-167.8 32.5z m526.5 0l-169.2-32.5-12.9 63.6 167.9 32.5zM438.9 624.5s37.2 67 78.5-21.7c39.9 86.6 83.9 23 83.9 23l25 16.3s-46.7 75.1-108.3 18.3c-52.1 56.8-106.9-18.1-106.9-18.1l27.8-17.8z" fill="#FB759C" p-id="3486"></path></svg>',
        },
        link: "https://space.bilibili.com/16735280", }
    ]
  }
  // 如需添加更多成员，请在此处添加，每个成员之间用逗号分隔
]

const partners = [
  {
    avatar: getImage('DailyRecord/assets', '夏娜', 'jpg'),
    name: '夏娜',
    title: '炎发灼眼的杀手',
  },
  {
    avatar: getImage('DailyRecord/assets', '艾丽妮', 'jpg'),
    name: '艾丽妮',
    title: '伊比利亚审判官',
  },
  {
    avatar: getImage('DailyRecord/assets', '椎名真白', 'jpg'),
    name: '椎名真白',
    title: '樱花庄天才绘画少女',
  },
  {
    avatar: getImage('DailyRecord/assets', '宵宫', 'jpg'),
    name: '宵宫',
    title: '长野原烟花店老板',
  },
  {
    avatar: getImage('DailyRecord/assets', '八奈见杏菜', 'jpg'),
    name: '八奈见杏菜',
    title: '4K败犬女主',
  },
  {
    avatar: getImage('DailyRecord/assets', '洛可可', 'jpg'),
    name: '洛可可',
    title: '愚人剧团大副',
  },
  {
    avatar: getImage('DailyRecord/assets', '安比·德玛拉', 'jpg'),
    name: '安比·德玛拉',
    title: '白银小队队长',
  },
  {
    avatar: getImage('DailyRecord/assets', '银狼', 'jpg'),
    name: '银狼',
    title: '星核猎手天才黑客少女',
  },
  {
    avatar: getImage('DailyRecord/assets', '喜多郁代', 'jpg'),
    name: '喜多郁代',
    title: '结束乐队主唱',
  },
  {
    avatar: getImage('DailyRecord/assets', '珂莱塔·莫塔里', 'jpg'),
    name: '珂莱塔·莫塔里',
    title: '莫塔里家族二小姐',
  },
  {
    avatar: getImage('DailyRecord/assets', '椿', 'jpg'),
    name: '椿',
    title: '黑海岸执花',
  },
  {
    avatar: getImage('DailyRecord/assets', '夏目蓝', 'jpg'),
    name: '夏目蓝',
    title: '夏目家长女',
  },
  {
    avatar: getImage('DailyRecord/assets', '结城希亚', 'jpg'),
    name: '结城希亚',
    title: '芭菲女王',
  },
  {
    avatar: getImage('DailyRecord/assets', '丛雨', 'jpg'),
    name: '丛雨',
    title: '丛雨丸的管理者',
  },
  {
    avatar: getImage('DailyRecord/assets', '君原结爱', 'jpg'),
    name: '君原结爱',
    title: '洋馆中独自生活的少女',
  },
  {
    avatar: getImage('DailyRecord/assets', '蓼科伊舞', 'jpg'),
    name: '蓼科伊舞',
    title: '蓼科·M（麦克布莱德）·伊舞瓦莉（Tateshina McBride Euvely）警察厅长官的女儿',
  }
]
// 在GitHub Pages上显示图片需要使用完整路径，包含仓库名称作为基础路径
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      感到迷茫时，就先迈出第一步吧！
    </template>
    <template #lead>
      试用一下团队页功能
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />

  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
