export const form = {
  state: [],
  // 同步改变state
  reducers: {
    // 向formList中添加一个item
    addFormItem(state: any, payload: any) {
      return [...state, payload];
    },
    // 重新排序formList
    refreshFormList(state: any, payload: any) {
      return [...payload];
    },
  },
  // 异步改变state
  effects: (dispatch: any) => ({
    //   设置form表单属性
    async setFormSchema(payload: object) {
      dispatch.setFormSchema(payload);
    },
  }),
};
