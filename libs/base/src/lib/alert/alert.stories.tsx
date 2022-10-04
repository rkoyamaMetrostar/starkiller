import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Alert, AlertType } from './alert';

export default {
  component: Alert,
  title: 'Components/Alert',
} as Meta;

const title = 'Alert';
const whenToUse = 'An alert keeps users informed of important and sometimes time-sensitive changes.';

export const StandardAlerts: Story = () => {
  return (
    <>
      <Alert id="alert1" type={AlertType.Info} heading="Information">
        This is an information alert.
      </Alert>
      <Alert id="alert2" type={AlertType.Warning} heading="Warning">
        This is a warning alert.
      </Alert>
      <Alert id="alert3" type={AlertType.Success} heading="Success">
        This is a success alert.
      </Alert>
      <Alert id="alert4" type={AlertType.Error} heading="Error">
        This is an error alert.
      </Alert>
    </>
  );
};

StandardAlerts.decorators = [
  (Story: Story) => (
    <>
        <Documentation heading={title} body={whenToUse} />
        <Story />
    </>
  ),
];

export const SlimAlert: Story = () => {
  return (
    <Alert id="alert1" slim={true}>
      This is a slim alert.
    </Alert>
  );
};

SlimAlert.decorators = [
  (Story: Story) => (
    <>
        <Documentation heading={title} body={whenToUse} />
        <Story />
    </>
  ),
];

export const NoIcon: Story = () => {
  return (
    <Alert id="alert1" noIcon={true}>
      This is an alert with no icon.
    </Alert>
  );
};

NoIcon.decorators = [
  (Story: Story) => (
    <>
        <Documentation heading={title} body={whenToUse} />
        <Story />
    </>
  ),
];

export const CustomClass: Story = () => {
  return (
    <Alert id="alert1" className="width-mobile">
      This is an alert with a custom class.
    </Alert>
  );
};

CustomClass.decorators = [
  (Story: Story) => (
    <>
        <Documentation heading={title} body={whenToUse} />
        <Story />
    </>
  ),
];