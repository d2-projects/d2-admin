<template>
  <d2-container>
    <p class="d2-mt-0">$log.capsule</p>
    <el-button size="small" type="primary" @click="$log.capsule('title', 'primary')">
      $log.capsule('title', 'primary')
    </el-button>
    <el-button size="small" type="success" @click="$log.capsule('title', 'success', 'success')">
      $log.capsule('title', 'success', 'success')
    </el-button>
    <el-button size="small" type="warning" @click="$log.capsule('title', 'warning', 'warning')">
      $log.capsule('title', 'warning', 'warning')
    </el-button>
    <el-button size="small" type="danger" @click="$log.capsule('title', 'danger', 'danger')">
      $log.capsule('title', 'danger', 'danger')
    </el-button>
    <p>$log.colorful</p>
    <el-button size="small" @click="handleColorful">
      colorful
    </el-button>
    <p>$log.default | primary | success | warning | danger</p>
    <el-button size="small" @click="$log.default('default style')">
      $log.default('default style')
    </el-button>
    <el-button size="small" type="primary" @click="$log.primary('primary style')">
      $log.primary('primary style')
    </el-button>
    <el-button size="small" type="success" @click="$log.success('success style')">
      $log.success('success style')
    </el-button>
    <el-button size="small" type="warning" @click="$log.warning('warning style')">
      $log.warning('warning style')
    </el-button>
    <el-button size="small" type="danger" @click="$log.danger('danger style')">
      $log.danger('danger style')
    </el-button>
  </d2-container>
</template>

<script>
export default {
  methods: {
    handleColorful () {
      this.$log.colorful([
        { text: 'H', type: 'default' },
        { text: 'e', type: 'primary' },
        { text: 'l', type: 'success' },
        { text: 'l', type: 'warning' },
        { text: 'o', type: 'danger' }
      ])
    }
  }
}
</script>

