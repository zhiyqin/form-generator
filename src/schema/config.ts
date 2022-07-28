// 输入型组件左侧面板
export const inputComponents = [
  {
    name: null, // 唯一标识
    // 自定义配置的属性
    _selfConfig_: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      changeTag: true, // 左侧面板可以替换当前组件的类型
      tag: 'Input',
      defaultValue: undefined,
      required: true,
    },
    // 正则校验规则
    rules: {
      regList: [],
    },
    // 直接写在组件标签上的属性
    componentProps: {
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
  {
    // 自定义配置的属性
    _selfConfig_: {
      label: '多行文本',
      labelWidth: null,
      showLabel: true,
      changeTag: true, // 左侧面板可以替换当前组件的类型
      tag: 'Input',
      defaultValue: undefined,
      required: true,
    },
    // 正则校验规则
    rules: {
      regList: [],
    },
    // 直接写在组件标签上的属性
    componentProps: {
      placeholder: '请输入',
      style: { width: '100%' },
      clearable: true,
      'prefix-icon': '',
      'suffix-icon': '',
      maxlength: null,
      'show-word-limit': false,
      readonly: false,
      disabled: false,
      type: 'textarea',
    },
  },
];
