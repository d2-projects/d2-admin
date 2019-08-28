<template>
  <d2-container>
    <template slot="header">径向树图</template>
    <div class="inner">
      <ve-tree :data="chartData" :settings="chartSettings" v-bind="pubSetting"></ve-tree>
    </div>
    <d2-link-btn
      slot="footer"
      title="更多示例和文档"
      link="https://v-charts.js.org"/>
  </d2-container>
</template>

<script>
import list from '@/views/demo/charts/list/_mixin/list.js'
export default {
  mixins: [
    list
  ],
  data () {
    this.chartSettings = {
      seriesMap: {
        tree1: {
          layout: 'radial'
        }
      }
    }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [
              {
                name: 'f',
                value: 1,
                link: 'https://ele.me',
                children: [
                  {
                    name: 'a',
                    value: 1,
                    link: 'https://ele.me',
                    children: [
                      {
                        name: 'a-a',
                        link: 'https://ele.me',
                        value: 2
                      },
                      {
                        name: 'a-b',
                        link: 'https://ele.me',
                        value: 2
                      }
                    ]
                  },
                  {
                    name: 'b',
                    value: 1,
                    link: 'https://ele.me',
                    children: [
                      {
                        name: 'b-a',
                        link: 'https://ele.me',
                        value: 2
                      },
                      {
                        name: 'b-b',
                        link: 'https://ele.me',
                        value: 2
                      }
                    ]
                  },
                  {
                    name: 'c',
                    value: 3,
                    link: 'https://ele.me',
                    children: [
                      {
                        name: 'c-a',
                        link: 'https://ele.me',
                        value: 4
                      },
                      {
                        name: 'c-b',
                        link: 'https://ele.me',
                        value: 2
                      }
                    ]
                  },
                  {
                    name: 'd',
                    value: 3,
                    link: 'https://ele.me',
                    children: [
                      {
                        name: 'd-a',
                        link: 'https://ele.me',
                        value: 4
                      },
                      {
                        name: 'd-b',
                        link: 'https://ele.me',
                        value: 2
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  position: absolute;
  top: 20px;
  right:  20px;
  bottom: 20px;
  left: 20px;
}
</style>
