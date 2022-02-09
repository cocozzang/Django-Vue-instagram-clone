<template>
  <v-app
    style="background: #fafafa;"
  >
    <v-app-bar
      fixed
      color="white"
      elevation="1"
      app
      clipped-right
      height="80"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="auto">
          <v-btn text>
            <v-img
              src="@/assets/instagram.png"
            />
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-text-field
            style="max-width: 300px;"
            label="search"
            solo
            clearable
            filled
            shaped
            hide-details="auto"
            class="mx-10"
          />
        </v-col>

        <v-col cols="auto">
          <v-btn text>
            <v-icon>mdi-home-outline</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon>mdi-send-circle-outline</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon>mdi-compass-outline</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      right
      floating
      style="width: 450px; background: #fafafa; padding-right: 150px"
      class="pt-8"
    >
      <!-- routing 내 프로필 추천 영역 -->
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
      <!-- routing 내 프로필 추천 영역 -->
    </v-navigation-drawer>

    <v-main app>
      <v-container
        app
        style="width: 614px"
      >
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
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
