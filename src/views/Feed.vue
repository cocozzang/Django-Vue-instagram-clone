<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- routing feed 영역 -->
        <v-container>
          <v-card
            outlined
            class="mb-4"
          >
            <v-row
              align="center"
              style="height: 60px"
            >
              <v-col
                cols="auto"
                class="pb-0 pl-5 pr-3"
              >
                <v-avatar size="32">
                  <v-img
                    src="https://images.unsplash.com/flagged/photo-1572240425013-991a6d5845a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Andres"
                  />
                </v-avatar>
              </v-col>
              <v-col
                class="pb-0"
                cols="9"
              >
                hi coco
              </v-col>
              <v-col class="pb-0 ml-5">
                <v-icon>
                  mdi-dots-horizontal
                </v-icon>
              </v-col>
            </v-row>


            <v-row>
              <v-col class="py-0">
                <v-img
                  src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Feed"
                  height="535.98"
                />
              </v-col>
            </v-row>
            <v-container>
              <v-row class="mt-1">
                <v-col>
                  <v-icon class="mr-1">
                    mdi-heart-outline
                  </v-icon>
                  <v-icon class="mx-1">
                    mdi-comment-outline
                  </v-icon>
                  <v-icon class="mx-1">
                    mdi-send-circle-outline
                  </v-icon>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    좋아요 21개
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    feed contents
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div class="grey--text text--lighten-1 d-inline-block">
                    댓글 21개 &nbsp;
                  </div>
                  <div class="grey--text text--lighten-1 d-inline-block">
                    모두 보기
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div class="grey--text text--lighten-1 text-caption">
                    3일전
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
        <!-- routing feed 영역 -->
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
