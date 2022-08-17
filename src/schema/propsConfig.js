// 描述左侧属性面板配置
export const FormCommonProps = {
  colon: false,
  labelAlign: 'right',
  labelCol: {
    span: 6,
  },
  labelWrap: true,
};

export const InputTypeProps = [
  {
    itemSchem: {
      label: '字段名',
      name: 'name',
    },
    tag: 'Input',
  },
  {
    itemSchem: {
      label: '标题',
      name: 'label',
    },
    tag: 'Input',
  },
  {
    itemSchem: {
      label: '是否必填',
      name: 'required',
    },
    tag: 'RadioGroup',
    controlSchema: {
      options: [
        {
          label: '是',
          value: true,
        },
        {
          label: '否',
          value: false,
        },
      ],
    },
  },
];
