import { Input, Radio, Button } from 'antd';
import React from 'react';

export function getComponentByType(props: any) {
  const { tag, children, eventProps, ...rest } = props;
  let component = null;
  switch (tag) {
    case 'Input':
      component = <Input {...rest} />;
      break;
    case 'RadioGroup':
      component = <Radio.Group {...rest} />;
      break;
    case 'Button':
      component = (
        <Button {...rest} onClick={() => {}}>
          {children}
        </Button>
      );
      break;
  }
  const eventCb = eventProps && Object.keys(eventProps);
  if (eventCb && component) {
    const name = eventCb[0];
    const value = new Function(eventProps[name]);
    component = React.cloneElement(component, {
      [name]: value(),
    });
  }
  return component;
}
