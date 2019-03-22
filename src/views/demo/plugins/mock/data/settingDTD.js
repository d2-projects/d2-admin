/* eslint-disable */
export default [
  // 字符串
  {
    title: "复制1-10次固定字符串",
    json: {
      "string|1-10": "★"
    }
  },
  {
    title: "复制3次",
    json: {
      "string|3": "Ha"
    }
  },
  // 数字
  {
    title: "范围随机取值",
    json: {
      "number|1-100": 50
    }
  },
  {
    title: "累加1",
    json: {
      "number|+1": 10
    }
  },
  {
    title: "累加2",
    json: {
      "number|+2": 10
    }
  },
  {
    title: "浮点数",
    json: {
      "number1|1-100.1-10": 1,
      "number2|123.1-10": 1,
      "number3|123.3": 1,
      "number4|123.10": 1.123
    }
  },
  // 布尔值
  {
    title: "true 的概率是 1/2",
    json: {
      "boolean|1": true
    }
  },
  // 对象
  {
    title: '随机选择3个属性',
    json: {
      "obj|3": {
        name: 'FairyEver',
        use: 'vue.js',
        sex: 1,
        qq: '1711467488',
        tel: '123-4567-8910',
        city: 'beijing',
        mail: '1711467488liyang@gmail.com',
        github: 'https://github.com/d2-projects',
        blog: 'http://www.fairyever.com/',
        creatDate: '2018-1-1',
        updateDate: '2018-1-2',
        delFlag: 0
      }
    }
  },
  {
    title: '随机选择4-8个属性',
    json: {
      "obj|4-8": {
        name: 'FairyEver',
        use: 'vue.js',
        sex: 1,
        qq: '1711467488',
        tel: '123-4567-8910',
        city: 'beijing',
        mail: '1711467488liyang@gmail.com',
        github: 'https://github.com/FairyEver',
        blog: 'http://www.fairyever.com/',
        creatDate: '2018-1-1',
        updateDate: '2018-1-2',
        delFlag: 0
      }
    }
  },
  // 数组
  {
    title: '随机选1个',
    json: {
      "arr|1": ['1-vue', '2-react', '3-angular', '4-node', '5-java']
    }
  },
  {
    title: '顺序选1个',
    json: {
      "arr|+1": ['1-vue', '2-react', '3-angular', '4-node', '5-java']
    }
  },
  {
    title: '重复3次',
    json: {
      "arr|3": ['o', 'o - o', 'o - o - o']
    }
  },
  {
    title: '重复2-10次',
    json: {
      "arr|2-10": ['-', '----']
    }
  }
]
