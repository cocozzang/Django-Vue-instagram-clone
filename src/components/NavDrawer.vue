<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-avatar>
          <v-img src="@/assets/user.png" />
        </v-avatar>
      </v-col>
      <v-col cols="6">
        <div>
          coco
        </div>
        <div class="grey--text text--lighten-1">
          cocozzing
        </div>
      </v-col>
      <v-col
        cols="3"
        class="align-self-center"
      >
        <div class="blue--text text--lighten-1">
          전환
        </div>
      </v-col>
    </v-row>
    <v-row :justify="space-between">
      <v-col cols="8">
        <div class="text-body-2 font-weight-bold grey--text text--lighten-1">
          회원님을 위한 추천
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-body-2 font-weight-bold">
          모두 보기
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="2"
        :align-self="center"
      >
        <v-avatar size="38">
          <v-img src="https://images.unsplash.com/photo-1643653855685-42e3f82e5681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </v-avatar>
      </v-col>
      <v-col
        cols="7"
      >
        <div class="text-body-2">
          이쁜 누님
        </div>
        <div class="text-caption grey--text overflow-auto">
          coco님이 팔로우 합니다
        </div>
      </v-col>
      <v-col
        cols="3"
        align-self="center"
      >
        <div class="text-caption blue--text text--lighten-1 font-weight-bold">
          팔로우
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="2"
        :align-self="center"
      >
        <v-avatar size="38">
          <v-img src="https://images.unsplash.com/photo-1643653855685-42e3f82e5681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </v-avatar>
      </v-col>
      <v-col
        cols="7"
      >
        <div class="text-body-2">
          이쁜 누님2
        </div>
        <div class="text-caption grey--text overflow-auto">
          coco님이 팔로우 합니다
        </div>
      </v-col>
      <v-col
        cols="3"
        align-self="center"
      >
        <div
          class="text-caption blue--text text--lighten-1 font-weight-bold"
        >
          팔로우
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="2"
        :align-self="center"
      >
        <v-avatar size="38">
          <v-img src="https://images.unsplash.com/photo-1643653855685-42e3f82e5681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </v-avatar>
      </v-col>
      <v-col
        cols="7"
      >
        <div class="text-body-2">
          이쁜 누님3
        </div>
        <div class="text-caption grey--text overflow-auto">
          coco님이 팔로우 합니다
        </div>
      </v-col>
      <v-col
        cols="3"
        align-self="center"
      >
        <div
          class="text-caption blue--text text--lighten-1 font-weight-bold"
        >
          팔로우
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-caption grey--text text--lighten-1">
          소개 도움말 홍보 센터 API 채용 정보 <br>
          개인정보처리방침약관위치인기 계정해시태그언어
        </div>
      </v-col>
    </v-row>
    <v-spacer />
    <v-row>
      <v-col>
        <div class="text-caption grey--text text--lighten-1">
          © 2022 INSTAGRAM FROM META
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
