import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Label } from '../label/label';

export default {
  component: Label,
  title: 'Components/Forms/Label',
} as Meta;

const title = 'Label';
const whenToUse = 'A label defines a label for an element.';

export const BasicLabel: Story = () => {
  return <Label>Label</Label>;
};

BasicLabel.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const LabelWithRequiredIndicator: Story = () => {
  return <Label required={true}>Label</Label>;
};

LabelWithRequiredIndicator.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
