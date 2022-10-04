import { Story, Meta } from '@storybook/react';
import Label from '../label/label';
import Documentation from '../storybook-utils/documentation';
import { TextInput } from './text-input';

export default {
  component: TextInput,
  title: 'Components/Forms/Text Input',
} as Meta;

const title = 'Text Input';
const whenToUse =
  'A text input allows users to enter any combination of letters, numbers, or symbols.';

export const StandardInput: Story = () => {
  return (
    <>
      <Label htmlFor="input1">Input label</Label>
      <TextInput id="input1" name="input1" />
    </>
  );
};

StandardInput.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const InputWithDefaultValue: Story = () => {
  return (
    <>
      <Label htmlFor="input1">Input label</Label>
      <TextInput id="input1" name="input1" defaultValue="Razor Crest" />
    </>
  );
};

InputWithDefaultValue.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const InputWithPlaceholder: Story = () => {
  return (
    <>
      <Label htmlFor="input1">Input label</Label>
      <TextInput id="input1" name="input1" placeholder="Last, First" />
    </>
  );
};

InputWithPlaceholder.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
