<template>
  <div>
    <el-card class="list-query" shadow="hover">
      <el-form inline size="mini" label-width="60px">
        <el-form-item label="昵称">
          <el-input v-model="listQuery.nickname"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handlerQuery">筛选</el-button>
          <el-button type="danger" @click="toAdd">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="list-body" shadow="hover">
      <el-table :data="listRes.list" v-loading="listRes.loading" border size="mini">
        <el-table-column prop="id" label="id" align="center"></el-table-column>
        <el-table-column prop="nickname" label="昵称" align="center"></el-table-column>
        <el-table-column prop="created_at" label="创建时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="{row}">
            <el-button size="mini" @click="toEdit(row)">编辑</el-button>
            <el-button size="mini" @click="changePass(row)">重置密码</el-button>
            <el-button size="mini" type="danger" @click="remove(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="list-page" shadow="hover">
      <el-pagination background
                     layout="prev, pager, next, sizes, jumper"
                     :page-sizes="[1,10,20,50,100]"
                     v-model:page-size="listQuery.page_size"
                     v-model:current-page="listQuery.page"
                     :total="listRes.total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { useRepositories, useDel, useToEditOrAdd, useChangePwd } from '@/views/admin/composables'

  export default defineComponent({
    name: 'AdminList',
    setup (props) {

      //列表
      const {
        listRes,
        listQuery,
        handlerQuery,
        getList,
      } = useRepositories()

      const { toEdit, toAdd } = useToEditOrAdd()

      const { changePass } = useChangePwd()

      //删除
      const { del } = useDel()
      const remove = async (row) => {
        const res = await del(row.id)
        if (res) {
          getList(listQuery)
        }
      }

      return {
        listRes,
        listQuery,
        handlerQuery,
        toEdit,
        toAdd,

        changePass,
        remove,

      }
    },

  })
</script>

<style scoped>
  .list-body {
    margin-top: 10px;
  }

  .list-page {
    margin-top: 5px;
  }
</style>
