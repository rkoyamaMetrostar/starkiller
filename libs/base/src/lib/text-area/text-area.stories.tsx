import { Story, Meta } from '@storybook/react';
import Label from '../label/label';
import Documentation from '../storybook-utils/documentation';
import { TextArea } from './text-area';

export default {
  component: TextArea,
  title: 'Components/Forms/Text Area',
} as Meta;

const title = 'Text Area';
const whenToUse =
  'A text area allows users to enter any combination of letters, numbers, or symbols. Text areas can span single or multiple lines.';

export const StandardTextArea: Story = () => {
  return (
    <>
      <Label htmlFor="textarea1">Text Area label</Label>
      <TextArea id="textarea1" name="textarea1" />
    </>
  );
};

StandardTextArea.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const TextAreaWithDefaultValue: Story = () => {
  return (
    <>
      <Label htmlFor="textarea1">Text Area label</Label>
      <TextArea
        id="textarea1"
        name="textarea1"
        defaultValue="A long time ago in a galaxy far, far away...."
      />
    </>
  );
};

TextAreaWithDefaultValue.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const TextAreaWithRows: Story = () => {
  return (
    <>
      <Label htmlFor="textarea1">Text Area label</Label>
      <TextArea id="textarea1" name="textarea1" rows={2} />
    </>
  );
};

TextAreaWithRows.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
