// 整体form的属性设置
export const FormSchema = {
  colon: true, // 是否显示冒号
  disabled: false, // 表单是否禁用
  size: '', // 表单尺寸
  layout: 'horizontal',
  labelAlign: 'right', // 标签对齐方式
  labelWrap: false,
  name: 'antd-form',
  labelCol: null,
  onFieldsChange: null,
  onFinish: null,
  onFinishFailed: null,
  onValuesChange: null,
  // initialValues: {},
};

// 输入型组件左侧面板
export const inputComponents = [
  {
    // formItem 属性
    itemSchem: {
      name: null, // 字段名
      label: '单行文本',
      required: true,
      rules: [],
      // initialvalues: '', // 表单默认值
    },
    _selfConfig_: {
      changeTag: true, // 左侧面板可以替换当前组件的类型
      tag: 'Input',
    },
    // 直接写在组件标签上的属性
    controlSchema: {
      placeholder: '请输入',
      style: { width: '100%' },
      allowClear: true,
      prefix: '', // 前缀图标
      suffix: '', // 后缀图标
      maxLength: null,
      showCount: false,
      readOnly: false,
      disabled: false,
    },
  },
];
