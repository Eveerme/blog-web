import { defineStore } from "pinia";
import { ref } from "vue";


export const useLoadingStore = defineStore("loading", () => {
  /**
   * 加载动画的开关
   * @type {Ref<boolean>}
   */
  const loading = ref<boolean>(false);

  /**
   * 设置加载动画状态
   * @returns {void} 无返回值
   */
  function setLoading(): void {
    loading.value = !loading.value;
  }

  return { loading, setLoading };
});