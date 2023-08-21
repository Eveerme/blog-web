import { defineStore } from "pinia";
import { setToken, removeLocalSToken } from "@/utils/localstorage/TokenUtils";
import { UserInfo } from "@/type/user";
import { ref, reactive } from "vue";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("");

  const userInfo = reactive<UserInfo>({
    id: "",
    userName: "",
    nickName: "",
    avatar: "",
    userType: "",
    authorities: []
  });

  function addToken(tokenValue: string) {
    setToken(tokenValue);
    token.value = tokenValue;
  }

  function addUserInfo(userInfoData: UserInfo){
    userInfo.id = userInfoData.id;
    userInfo.userName = userInfoData.userName;
    userInfo.nickName = userInfoData.nickName;
    userInfo.avatar = userInfoData.avatar;
    userInfo.userType = userInfoData.userType;
    userInfo.authorities = userInfoData.authorities;
  }

  function removeToken(){
    token.value = "";
    removeLocalSToken();
  }
  function removeUserInfo(){
    userInfo.id = "";
    userInfo.userName = "";
    userInfo.nickName = "";
    userInfo.userType = "";
    userInfo.avatar = "";
    userInfo.authorities = [];
  }

  return { token,userInfo,addToken,addUserInfo,removeToken,removeUserInfo };
})