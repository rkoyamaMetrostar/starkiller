import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { FormGroup } from '../form-group/form-group';
import { TextInput, Label } from '../..';

export default {
  component: FormGroup,
  title: 'Components/Forms/Form Group',
} as Meta;

const title = 'Form Group';
const whenToUse = 'A form allows users to enter information into a page.';

const defaultDecorators = [
  (Story: Story) => (
    <div className="margin-left-05">
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </div>
  ),
];

export const FormGroupNoErrors: Story = () => {
  return (
    <FormGroup>
      <Label htmlFor="input1">Name</Label>
      <TextInput id="input1" name="input1" />
    </FormGroup>
  );
};

FormGroupNoErrors.decorators = defaultDecorators;

export const FormGroupWithErrors: Story = () => {
  const errors: string[] = [''];
  return (
    <FormGroup errors={errors}>
      <Label htmlFor="input1">Name</Label>
      <TextInput id="input1" name="input1" />
    </FormGroup>
  );
};

FormGroupWithErrors.decorators = defaultDecorators;
