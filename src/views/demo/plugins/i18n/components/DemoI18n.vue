<i18n>
{
  "cn": {
    "subtitle": "点击上面的按钮，你可以在两个示例页面之间切换，检查语言变化",
    "hello": "你好",
    "vue": "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。",
    "check": {
      "title": "请选择",
      "label": {
        "Beijing": "北京",
        "Tokyo": "东京",
        "NewYork": "纽约"
      }
    }
  },
  "en": {
    "subtitle": "Click the button above, you can switch between two sample pages to check language changes",
    "hello": "hello",
    "vue": "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",
    "check": {
      "title": "Please choose",
      "label": {
        "Beijing": "Beijing",
        "Tokyo": "Tokyo",
        "NewYork": "NewYork"
      }
    }
  },
  "ja": {
    "subtitle": "上のボタンをクリックして，あなたは2つの例のページの間で切り替えて、言語の変化を検査することができます",
    "hello": "こんにちは",
    "vue": "Vue (発音は /vjuː/、view と同様）はユーザーインターフェイスを構築するためのプログレッシブフレームワークです。他の一枚板(モノリシック: monolithic)なフレームワークとは異なり、Vue は少しずつ適用していけるように設計されています。中核となるライブラリは view 層だけに焦点を当てています。そのため、使い始めるのも、他のライブラリや既存のプロジェクトに統合するのも、とても簡単です。また、モダンなツールやサポートライブラリと併用することで、洗練されたシングルページアプリケーションの開発も可能です。",
    "check": {
      "title": "選択してください",
      "label": {
        "Beijing": "北京",
        "Tokyo": "東京",
        "NewYork": "ニューヨーク"
      }
    }
  }
}
</i18n>

<template>
  <div>
    <p>{{$t('subtitle')}}</p>
    <el-tag>{{$t('hello')}}</el-tag>
    <p>{{$t('vue')}}</p>
    <p>{{$t('check.title')}}</p>
    <el-checkbox-group v-model="check">
      <el-checkbox label="a">{{$t('check.label.Beijing')}}</el-checkbox>
      <el-checkbox label="b">{{$t('check.label.Tokyo')}}</el-checkbox>
      <el-checkbox label="c">{{$t('check.label.NewYork')}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: ['a', 'b']
    }
  }
}
</script>
