<template>
  <d2-container type="full" class="page">
    <template slot="header">D2Admin 版本检查</template>
    <div class="banner">
      <img src="@/assets/image/logo/d2admin.png">
    </div>
    <div v-if="update" class="releases">
      <h1>有新版本 {{releases.tag_name}}</h1>
      <p>更新日期 {{dayjs(releases.created_at).format('YYYY年M月D日')}}</p>
      <a
        :href="releases.html_url"
        class="el-button el-button--primary d2-mb">
        {{releases.html_url}}
      </a>
    </div>
    <div v-else class="up2date">
      已经是最新版本
      <p class="d2-mb-0">
        <a
          href="https://github.com/d2-projects/d2-admin"
          class="el-button el-button--primary"
          target="blank">
          <d2-icon name="github" class="d2-mr-5"/>
          D2Admin on Github
        </a>
      </p>
    </div>
    <template slot="footer">
      <el-button
        :type="updateNotify ? 'primary' : 'default'"
        size="mini"
        @click="d2adminUpdateNotifySet(!updateNotify)">
        {{updateNotify ? '关闭更新提醒 (当前:打开)' : '打开更新提醒 (当前:关闭)'}}
      </el-button>
    </template>
  </d2-container>
</template>

<script>
import dayjs from 'dayjs';
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      dayjs,
    };
  },
  computed: {
    ...mapState({
      version: state => state.d2admin.version,
      releases: state => state.d2admin.releases,
      update: state => state.d2admin.update,
      updateNotify: state => state.d2admin.updateNotify,
    }),
  },
  methods: {
    ...mapMutations([
      'd2adminUpdateNotifySet',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
  .banner {
    text-align: center;
    img {
      width: 250px;
    }
  }
  .releases {
    padding: 20px;
    border-radius: 4px;
    background-color: $color-bg;
  }
  .up2date {
    padding: 20px;
    border-radius: 4px;
    background-color: $color-bg;
  }
}
</style>
