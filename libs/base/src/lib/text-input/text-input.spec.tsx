import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './text-input';

describe('TextInput', () => {
  const defaultId = 'input1';
  const defaultName = 'input-name';

  it('should render successfully', () => {
    const { baseElement } = render(
      <TextInput id={defaultId} name={defaultName} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render and input with a default value', () => {
    const defaultValue = 'value1';
    const { baseElement } = render(
      <TextInput
        id={defaultId}
        name={defaultName}
        defaultValue={defaultValue}
      />
    );
    expect(baseElement.querySelector('input')?.value).toEqual(defaultValue);
  });

  it('changing the value should trigger onChanged event handler', () => {
    const onChange = jest.fn();
    const { baseElement } = render(
      <TextInput id={defaultId} name={defaultName} onChange={onChange} />
    );
    const inputElement = baseElement.querySelector('input') as HTMLInputElement;
    expect(onChange).toHaveBeenCalledTimes(0);
    userEvent.type(inputElement, 'a');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
