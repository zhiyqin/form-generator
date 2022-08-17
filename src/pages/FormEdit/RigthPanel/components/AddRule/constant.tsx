export const ruleType = [
  {
    label: '最小值',
    value: 'min',
  },
  {
    label: '最大值',
    value: 'max',
  },
  {
    label: '必选字段',
    value: 'required',
  },
  {
    label: '正则表达式',
    value: 'pattern',
  },
];
export const showTitleMap: { [key: string]: string } = {
  min: '最小值',
  max: '最大值',
  required: '必选',
  pattern: '正则表达式',
};
