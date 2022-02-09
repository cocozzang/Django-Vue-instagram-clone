<template>
  <v-navigation-drawer
    app
    clipped
    right
    floating
    style="width: 450px; background: #fafafa; padding-right: 150px"
    class="pt-8"
  >
    <!-- routing 내 프로필 추천 영역 -->
    <nav-drawer />
    <!-- routing 내 프로필 추천 영역 -->
  </v-navigation-drawer>
</template>

<script>
import NavDrawer from '@/components/NavDrawer'
export default {
  name: 'DefaultDrawer',
  components: { NavDrawer },
}
</script>

<style>

</style>
