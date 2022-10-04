import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { ErrorMessages } from './error-messages';

export default {
  component: ErrorMessages,
  title: 'Components/Forms/Error Messages',
} as Meta;

const title = 'Error Messages';
const whenToUse = 'Provides text based error messages for form fields.';

export const BasicError: Story = () => {
  const errors: string[] = ['This is an error.'];
  return <ErrorMessages errors={errors} />;
};

BasicError.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const MultipleErrors: Story = () => {
  const errors: string[] = ['This is an error.', 'This is another error.'];
  return <ErrorMessages errors={errors} />;
};

MultipleErrors.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
