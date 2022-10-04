import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Button, ButtonVariant } from './button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const title = 'Button';
const whenToUse =
  'A button draws attention to important actions with a large selectable surface.';

export const Primary: Story = () => {
  const handleClick = () => {
    console.log('Primary buton clicked!');
  };

  return (
    <>
      <Button id="btn1" onClick={handleClick}>
        Primary
      </Button>
      <Button id="btn2" onClick={handleClick} disabled={true}>
        Disabled
      </Button>
    </>
  );
};

Primary.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const Secondary: Story = () => {
  const handleClick = () => {
    console.log('Secondary button clicked!');
  };

  return (
    <>
      <Button id="btn1" variant={ButtonVariant.Secondary} onClick={handleClick}>
        Secondary
      </Button>
      <Button
        id="btn2"
        variant={ButtonVariant.Secondary}
        onClick={handleClick}
        disabled={true}
      >
        Disabled
      </Button>
    </>
  );
};

Secondary.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const Outline: Story = () => {
  const handleClick = () => {
    console.log('Secondary button clicked!');
  };

  return (
    <>
      <Button id="btn1" variant={ButtonVariant.Outline} onClick={handleClick}>
        Outline
      </Button>
      <Button
        id="btn2"
        variant={ButtonVariant.Outline}
        onClick={handleClick}
        disabled={true}
      >
        Disabled
      </Button>
    </>
  );
};

Outline.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const Unstyled: Story = () => {
  const handleClick = () => {
    console.log('Secondary button clicked!');
  };

  return (
    <>
      <Button id="btn1" variant={ButtonVariant.Unstyled} onClick={handleClick}>
        Unstyled
      </Button>
      <Button
        id="btn2"
        variant={ButtonVariant.Unstyled}
        onClick={handleClick}
        disabled={true}
      >
        Disabled
      </Button>
    </>
  );
};

Unstyled.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
