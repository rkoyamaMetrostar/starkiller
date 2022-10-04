import { Story, Meta } from '@storybook/react';
import Button, { ButtonVariant } from '../button/button';
import Documentation from '../storybook-utils/documentation';
import { ButtonGroup } from './button-group';

export default {
  component: ButtonGroup,
  title: 'Components/Button Group',
} as Meta;

const title = 'Button Group';
const whenToUse = 'A button group collects similar or related actions.';

export const LeftAligned: Story = () => {
  const handleClick = () => {
    return;
  };

  return (
    <ButtonGroup>
      <Button
        id="cancel"
        variant={ButtonVariant.Secondary}
        onClick={handleClick}
      >
        Cancel
      </Button>
      <Button id="save" onClick={handleClick}>
        Save
      </Button>
    </ButtonGroup>
  );
};

LeftAligned.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const RightAligned: Story = () => {
  const handleClick = () => {
    return;
  };

  return (
    <div className="width-mobile">
      <ButtonGroup className="float-right">
        <Button
          id="cancel"
          variant={ButtonVariant.Secondary}
          onClick={handleClick}
        >
          Cancel
        </Button>
        <Button id="save" onClick={handleClick}>
          Save
        </Button>
      </ButtonGroup>
    </div>
  );
};

RightAligned.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
