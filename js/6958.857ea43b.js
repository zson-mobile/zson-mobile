(self.webpackChunksite=self.webpackChunksite||[]).push([[6958],{76958:function(r,n,e){"use strict";e.r(n),n.default="# Keyboard 虚拟键盘\r\n\r\n## Keyboard 平铺键盘\r\n\r\n```jsx\r\nimport { useState } from 'react';\r\nimport { Cell, Radio, Keyboard } from 'zson-mobile';\r\n\r\nconst Demo = () => {\r\n  const [type, setType] = useState('number');\r\n\r\n  return (\r\n    <>\r\n      <Cell\r\n        title=\"键盘类型\"\r\n        description={\r\n          <Radio.Group compact type=\"button\" value={type} onChange={setType}>\r\n            <Radio value=\"number\">数字键盘</Radio>\r\n            <Radio value=\"price\">金额键盘</Radio>\r\n            <Radio value=\"idcard\">身份证键盘</Radio>\r\n          </Radio.Group>\r\n        }\r\n      />\r\n      <Keyboard type={type} onKeyClick={(key) => console.log(key)} />\r\n    </>\r\n  );\r\n};\r\n\r\nReactDOM.render(<Demo />, mountNode);\r\n```\r\n\r\n## KeyboardPicker 键盘触发器\r\n\r\n```jsx\r\nimport { useState } from 'react';\r\nimport { Cell, Button, KeyboardPicker } from 'zson-mobile';\r\n\r\nconst Demo = () => {\r\n  const [visible, setVisible] = useState(false);\r\n\r\n  const toggle = () => {\r\n    setVisible(!visible);\r\n  };\r\n\r\n  const onKeyClick = (key) => {\r\n    console.log(key);\r\n    if (['close', 'ok'].indexOf(key) > -1) {\r\n      toggle();\r\n      return;\r\n    }\r\n    // do something...\r\n  };\r\n\r\n  return (\r\n    <>\r\n      <Cell\r\n        description={\r\n          <Button size=\"xs\" onClick={toggle}>\r\n            {visible ? '关闭' : '开启'}\r\n          </Button>\r\n        }\r\n      >\r\n        拾取器触发方式\r\n      </Cell>\r\n\r\n      <KeyboardPicker visible={visible} onKeyClick={onKeyClick} />\r\n    </>\r\n  );\r\n};\r\n\r\nReactDOM.render(<Demo />, mountNode);\r\n```\r\n\r\n## API\r\n\r\n| 属性       | 类型                   | 默认值   | 说明                                         |\r\n| :--------- | :--------------------- | :------- | :------------------------------------------- |\r\n| type       | string                 | 'number' | 键盘类型，可选值 `number`、`price`、`idcard` |\r\n| onKeyClick | (key?: string) => void | -        | 点击按键时触发的回调函数                     |\r\n\r\n### 仅 KeyboardPicker 支持的属性\r\n\r\n| 属性    | 类型    | 默认值 | 说明                   |\r\n| :------ | :------ | :----- | :--------------------- |\r\n| visible | boolean | false  | 是否展示               |\r\n| destroy | boolean | true   | 弹层关闭后是否移除节点 |\r\n"}}]);