import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { StorageSerializers, useStorage } from "@vueuse/core";
const user = useStorage("user", null, localStorage, {
  serializer: StorageSerializers.object,
}); //user放到外部让他缓存user只执行一次
export const useUser = () => {
  const loginModel = ref({
    username: "",
    password: "",
  });
  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username };
    console.log(user.value);
    ElMessage.success("login sucess");
  };
  const loggedIn = computed(() => user.value?.id);
  const loginOut = async () => {
    user.value = null;
    ElMessage.success("login out");
  };
  return {
    loginModel,
    user,
    login,
    loggedIn,
    loginOut,
  };
};
