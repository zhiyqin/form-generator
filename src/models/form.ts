import { FormSchema } from '../schema/config';
import { cloneDeep } from 'lodash';
export const form = {
  state: {
    formSchema: cloneDeep(FormSchema),
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
    // 设置表单属性
    setFormProperty(state: any, payload: any) {
      state.formSchema = { ...payload };
      return { ...state };
    },
    // 支持JSON数据修改
    SetFormWithJSON(state: any, payload: any) {
      state = { ...payload };
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
