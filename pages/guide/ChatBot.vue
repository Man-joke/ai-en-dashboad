<template>
    <div class="achieveWord">
        <div class="top d-flex align-center">
            <div class="mgr30">
                <!-- 활성화 일경우 .cuteTalk_active -->
                <p class="ico cuteTalk_active">1</p>
                <p class="ico cuteTalk_basis">2</p>
                <p class="ico cuteTalk_basis">3</p>
                <p class="ico cuteTalk_basis">4</p>
                <p class="ico cuteTalk_basis">5</p>
            </div>
            <h3 class="bullet">
                학생들의 챗봇 학습 중에서 다소 민감한 주제(다문화, 인권, 장애 관련)의 어휘나 표현들은 드래그하여 미노출 등록을 하세요.
            </h3>
        </div>
        <v-sheet class="bottom mgt20">
            <div class="chat-list">
                <!-- .group 큐리, 학생이 대화 한 한줄 -->
                <div class="group d-flex align-center">
                    <div class="curi-box">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="cuteTalk" alt="프로필" class="avatar-item avatar-item-60 border-none" />
                            </div>
                            <p class="ml-2 txt">How are you?</p>
                        </div>
                    </div>
                    <div class="student">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="avatar" alt="아바타 이미지" class="avatar-item avatar-item-60" />
                            </div>
                            <!-- .drag 영역표시에 따른  위치 변경-->
                            <!-- <p class="ml-2 txt mgr20">Not so mad <span class="drag" style="right: 1.2rem; width: 5.8rem"></span></p> -->

                            <!-- 개발ver 소스 수정 -->
                            <p class="ml-2 txt mgr20">Not so <span class="text-drag">mad</span></p>
                            <v-btn rounded flat class="primary" @click="dialog = true">미노출 등록</v-btn>
                        </div>
                    </div>
                </div>

                <div class="group d-flex align-center">
                    <div class="curi-box">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="cuteTalk" alt="프로필" class="avatar-item avatar-item-60 border-none" />
                            </div>
                            <p class="ml-2 txt">What is your name?</p>
                        </div>
                    </div>
                    <div class="student">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="avatar" alt="아바타 이미지" class="avatar-item avatar-item-60" />
                            </div>
                            <p class="ml-2 mgr20 txt">I`m 9살이야</p>
                        </div>
                    </div>
                </div>

                <div class="group d-flex align-center">
                    <div class="curi-box">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="cuteTalk" alt="프로필" class="avatar-item avatar-item-60 border-none" />
                            </div>
                            <p class="ml-2 txt">How are you? How are you? How are you? How are you?</p>
                        </div>
                    </div>
                    <div class="student">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="avatar" alt="아바타 이미지" class="avatar-item avatar-item-60" />
                            </div>
                            <!-- .drag 영역표시에 따른  위치 변경-->
                            <!-- <p class="ml-2 mgr20 txt">Thank you<span class="drag" style="right: 1.4rem; width: 4.9rem"></span></p> -->
                            
                            <!-- 개발ver 소스 수정 -->
                            <p class="ml-2 mgr20 txt">Thank <span class="text-drag">you</span></p>
                            <v-btn rounded flat class="primary" disabled>미노출 등록 완료</v-btn>
                        </div>
                    </div>
                </div>

                <div class="group d-flex align-center">
                    <div class="curi-box">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="cuteTalk" alt="프로필" class="avatar-item avatar-item-60 border-none" />
                            </div>
                            <p class="ml-2 txt">What is your name?</p>
                        </div>
                    </div>
                    <div class="student">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="avatar" alt="아바타 이미지" class="avatar-item avatar-item-60" />
                            </div>
                            <!-- 개발ver 소스 수정 + 두 줄 case 추가-->
                            <p class="ml-2 mgr20 txt">학생 학습결과 성취기준 모아보기 팝업 생활기록부 발행주간 클릭시 단원별 평어 작성 클릭시 <span class="text-drag">개인별 필기노트 단어기준 알고 모르는 AI분석 학생 학습결과</span> 성취기준 모아보기 팝업 생활기록부 발행주간 클릭시 단원별 평어 작성 클릭시 <span class="text-drag">개인별 필기노</span>트 단어기준 알고 모르는 AI분석</p>
                        </div>
                    </div>
                </div>

                <div class="group d-flex align-center">
                    <div class="curi-box">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="cuteTalk" alt="프로필" class="avatar-item avatar-item-60 border-none" />
                            </div>
                            <p class="ml-2 txt">How are you? How are you? How are you? How are you?</p>
                        </div>
                    </div>
                    <div class="student">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img :src="avatar" alt="아바타 이미지" class="avatar-item avatar-item-60" />
                            </div>
                            <!-- .drag 영역표시에 따른  위치 변경-->
                            <!-- <p class="ml-2 mgr20 txt">Thank you<span class="drag" style="right: 14px; width: 4.9rem"></span></p> -->

                            <!-- 개발ver 소스 수정 -->
                            <p class="ml-2 mgr20 txt">Thank <span class="text-drag">you</span></p>
                            <v-btn rounded flat class="primary size_md" disabled>버튼</v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </v-sheet>

        <!-- 미노출 등록  -->
        <v-dialog persistent transition="dialog-center-transition" width="auto" v-model="dialog">
            <template v-slot:default="{ isActive }">
                <div class="dialog">
                    <div class="dialog_message">
                        선택한 단어 및 표현을 <br />
                        미노출 등록 하시겠습니까?
                    </div>
                    <div class="dialog_btn_wrap mt-6">
                        <v-btn @click="isActive.value = false" rounded flat class="secondary size_md">취소</v-btn>
                        <v-btn rounded flat class="primary size_md" type="submit" @click="[register = true, dialog = false]">등록</v-btn>
                    </div>
                </div>
            </template>
        </v-dialog>

        <!-- 등록 완료   -->
        <v-dialog persistent transition="dialog-center-transition" width="auto" v-model="register">
            <div class="dialog">
                <div class="dialog_message">
                    <p class="txt">등록되었습니다.</p>
                    <p class="mgt10 desc">‘설정 > 미노출단어·표현‘ 에서 확인하실 수 있습니다.</p>
                </div>
                <div class="dialog_btn_wrap mt-6">
                    <v-btn rounded flat class="primary size_md" type="submit" @click="register = false">확인</v-btn
                    >
                </div>
            </div>
        </v-dialog>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import cuteTalk from '@/assets/images/img_cuteTalk.svg';
import avatar from '@/assets/images/temp/img_pho_st01.png';

const dialog = ref(false);
const register = ref(false);
const tab = ref(null);
</script>
