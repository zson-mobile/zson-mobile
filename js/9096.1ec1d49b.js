(self.webpackChunksite=self.webpackChunksite||[]).push([[9096],{29096:function(n,r,e){"use strict";e.r(r),r.default="# Carousel 走马灯\r\n\r\n## 基本用法\r\n\r\n```jsx\r\nimport { Carousel } from 'zson-mobile';\r\n\r\nconst ITEMS = [\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\r\n];\r\n\r\nconst contentRender = () => {\r\n  return ITEMS.map((item, i) => {\r\n    return (\r\n      <div className=\"carousel__item__pic\" key={+i}>\r\n        <img src={item} alt=\"\" draggable={false} />\r\n      </div>\r\n    );\r\n  });\r\n};\r\n\r\nReactDOM.render(\r\n  <Carousel\r\n    onChange={(index) => {\r\n      console.log(`onChange: ${index}`);\r\n    }}\r\n  >\r\n    {contentRender()}\r\n  </Carousel>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## 纵向\r\n\r\n```jsx\r\nimport { Carousel } from 'zson-mobile';\r\n\r\nconst ITEMS = [\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\r\n];\r\n\r\nconst contentRender = () => {\r\n  return ITEMS.map((item, i) => {\r\n    return (\r\n      <div className=\"carousel__item__pic\" key={+i}>\r\n        <img src={item} alt=\"\" draggable={false} />\r\n      </div>\r\n    );\r\n  });\r\n};\r\n\r\nReactDOM.render(\r\n  <Carousel direction=\"up\" height=\"48vw\">\r\n    {contentRender()}\r\n  </Carousel>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## 循环轮播\r\n\r\n```jsx\r\nimport { useRef } from 'react';\r\nimport { Carousel, Button } from 'zson-mobile';\r\n\r\nconst ITEMS = [\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\r\n];\r\n\r\nconst contentRender = () => {\r\n  return ITEMS.map((item, i) => {\r\n    return (\r\n      <div className=\"carousel__item__pic\" key={+i}>\r\n        <img src={item} alt=\"\" draggable={false} />\r\n      </div>\r\n    );\r\n  });\r\n};\r\n\r\nconst Demo = () => {\r\n  const carouselRef = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Carousel\r\n        ref={carouselRef}\r\n        loop\r\n        direction=\"left\"\r\n        onChange={(index) => {\r\n          console.log(`onChange: ${index}`);\r\n        }}\r\n      >\r\n        {contentRender()}\r\n      </Carousel>\r\n      <div className=\"controls\">\r\n        <Button\r\n          block\r\n          size=\"sm\"\r\n          onClick={() => {\r\n            carouselRef.current.onJumpTo(0);\r\n          }}\r\n        >\r\n          无动画切换指定页\r\n        </Button>\r\n\r\n        <Button\r\n          block\r\n          size=\"sm\"\r\n          onClick={() => {\r\n            carouselRef.current.onSlideTo(2);\r\n          }}\r\n        >\r\n          滑动到指定页\r\n        </Button>\r\n      </div>\r\n    </>\r\n  );\r\n};\r\n\r\nReactDOM.render(<Demo />, mountNode);\r\n```\r\n\r\n## 自动循环轮播\r\n\r\n```jsx\r\nimport { Carousel } from 'zson-mobile';\r\n\r\nconst ITEMS = [\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\r\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\r\n];\r\n\r\nconst contentRender = () => {\r\n  return ITEMS.map((item, i) => {\r\n    return (\r\n      <div className=\"carousel__item__pic\" key={+i}>\r\n        <img src={item} alt=\"\" draggable={false} />\r\n      </div>\r\n    );\r\n  });\r\n};\r\n\r\nReactDOM.render(\r\n  <Carousel\r\n    autoPlay\r\n    loop\r\n    direction=\"left\"\r\n    onChangeEnd={(index) => {\r\n      console.log(`onChangeEnd: ${index}`);\r\n    }}\r\n  >\r\n    {contentRender()}\r\n  </Carousel>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## API\r\n\r\n| 属性                 | 类型                           | 默认值 | 说明                                           |\r\n| :------------------- | :----------------------------- | :----- | :--------------------------------------------- |\r\n| direction            | string                         | 'left' | 滑动方向，可选值 `left`、`right`、`up`、`down` |\r\n| height               | number \\| string               | 160    | 设置轮播区域高度                               |\r\n| activeIndex          | number                         | 0      | 当前页面的索引                                 |\r\n| loop                 | boolean                        | false  | 是否循环                                       |\r\n| swipeable            | boolean                        | true   | 是否支持拖拽滑动                               |\r\n| autoPlay             | boolean                        | false  | 是否自动轮播                                   |\r\n| autoPlayIntervalTime | number                         | 3000   | 自动轮播时间间隔，单位：毫秒                   |\r\n| moveDistanceRatio    | number                         | 0.5    | 移动距离比例临界点                             |\r\n| moveTimeSpan         | number                         | 300    | 移动时间跨度临界点，单位：毫秒                 |\r\n| animationDuration    | number                         | 500    | 动画执行时间，单位：毫秒                       |\r\n| showPagination       | boolean                        | true   | 是否显示分页器                                 |\r\n| onChange             | (activeIndex?: number) => void | -      | 值变化时触发的回调函数                         |\r\n| onChangeEnd          | (activeIndex?: number) => void | -      | 值变化动画结束后触发的回调函数                 |\r\n"}}]);