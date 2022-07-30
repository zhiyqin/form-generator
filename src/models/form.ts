import { FormSchema } from '../schema/config';
export const form = {
  state: {
    formSchema: FormSchema,
    children: [] as [],
    currentSelected: 0, // 当前被选中的元素
  },
  // 同步改变state
  reducers: {
    // 向formList中添加一个item
    addFormItem(state: any, payload: any) {
      state.children.push(payload);
      return { ...state };
    },
    // 重新排序formList
    refreshFormList(state: any, payload: any) {
      state.children = [...payload];
      return { ...state };
    },
    setSelectedItem(state: any, index: number) {
      state.currentSelected = index;
      return { ...state };
    },
  },
  // 异步改变state
  // effects: (dispatch: any) => ({
  //   //   设置form表单属性
  //   // async setFormSchema(payload: object) {
  //   //   dispatch.setFormSchema(payload);
  //   // },
  // }),
};
