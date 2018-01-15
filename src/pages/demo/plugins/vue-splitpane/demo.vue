<template>
  <Container>
    <PageHeader
      slot="header"
      title="基本示例"
      url="https://github.com/PanJiaChen/vue-split-pane">
    </PageHeader>
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
