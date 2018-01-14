<template>
  <Container>
    <!-- <template slot="title">演示</tempalte> -->
    <p slot="more"><GithubLink url="https://github.com/PanJiaChen/vue-split-pane"></GithubLink></p>
    <div style="height: 400px; margin: -16px;">
      <SplitPane :min-percent='20' :default-percent='30' split="vertical">
        <template slot="paneL"><div style="margin: 10px;">左</div></template>
        <template slot="paneR">
          <SplitPane split="horizontal">
            <template slot="paneL"><div style="margin: 10px;">右上</div></template>
            <template slot="paneR"><div style="margin: 10px;">右下</div></template>
          </SplitPane>
        </template>
      </SplitPane>
    </div>
  </Container>
</template>
