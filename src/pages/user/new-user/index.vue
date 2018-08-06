<template>
  <d2-container>
    <el-radio-group v-model="dateIndex" size="mini" slot="header" @change="dateFilter(dateIndex)">
      <el-radio-button label="2">两天内</el-radio-button>
      <el-radio-button label="5">五天内</el-radio-button>
      <el-radio-button label="7">七天内</el-radio-button>
      <el-radio-button label="30">三十天内</el-radio-button>
    </el-radio-group>
    <div class="wraper">
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 15px;"
        max-height="500"
        :row-class-name="tableRowClassName">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="头像">
          <template slot-scope="scope">
            <img class="profile" :src="scope.row.profilePhoto">
          </template>
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="250"></el-table-column>
        <el-table-column label="注册时间" width="250">
          <template slot-scope="scope">
            <span>{{ timeFormat(scope.row.dateJoined) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="friendCount" label="好友数"></el-table-column>
        <el-table-column prop="storyCount" label="Story数"></el-table-column>
        <el-table-column prop="appVersion" label="版本"></el-table-column>
        <el-table-column prop="os" label="系统"></el-table-column>
      </el-table>
      <el-pagination
        ref="userPagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

  </d2-container>
</template>

<script>
  import util from '@/libs/util.js'
  export default {
    data () {
      return {
        tableData: [],
        total: 0,
        currentPage: 1,
        currentPageSize: 10,
        dateIndex: 2
      }
    },
    methods: {
      timeFormat: time => util.formatTimestamp(time, "yyyy-MM-dd hh:mm:ss"),
      tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 === 1) {
          return 'success-row'
        }
        return ''
      },
      dateFilter (index) {
        this.dateIndex = index;
        this.$axios({
          method: 'get',
          url: 'NewUserList',
          params: {
            day: this.dateIndex,
            limit: this.currentPageSize,
            offset: (this.currentPage - 1) * this.currentPageSize
          }
        })
          .then(res => {
            this.total = res.users.total
            this.tableData = res.users.persons
          })
          .catch(err => {
            this.$message.error(err)
          })
      },
      handleSizeChange(val) {
        this.currentPage = 1;
        this.currentPageSize = val;
        this.dateFilter(this.dateIndex)
      },
      handleCurrentChange(val) {
        this.dateFilter(this.dateIndex)
      }
    },
    mounted () {
      this.dateFilter(2)
    }
  }
</script>

<style lang="scss">
  .wraper{
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  .el-table {
    position: inherit!important;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .el-table td, .el-table th {
    padding: 6px 0;
  }

  .profile{
    width: 25px;
  }
</style>
