<template>
  <div class="menu-edit">
    <!-- 引入并通过 is-edit -->
    <create-or-edit :is-edit="true" :d="a"></create-or-edit>
  </div>
</template>

<script>
import CreateOrEdit from './components/CreateOrEdit'
export default {
  name: 'MenuEdit',
  components: {
    CreateOrEdit
  },
  data () {
    return {
      a: {
        n: 1,
        b: 2
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
