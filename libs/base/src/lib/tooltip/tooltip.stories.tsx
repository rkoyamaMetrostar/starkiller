import { Story, Meta } from '@storybook/react';
import { Button } from '../button/button';
import Documentation from '../storybook-utils/documentation';
import { Tooltip } from './tooltip';

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
} as Meta;

const title = 'Tooltip';
const whenToUse =
  'A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.';

export const StandardTooltips: Story = () => {
  return (
    <>
      <Tooltip label="Top" position="top">
        <Button id="top">Show on top</Button>
      </Tooltip>
      <Tooltip label="Right" position="right">
        <Button id="right">Show on right</Button>
      </Tooltip>
      <Tooltip label="Bottom" position="bottom">
        <Button id="bottom">Show on bottom</Button>
      </Tooltip>
      <Tooltip label="Left" position="left">
        <Button id="left">Show on left</Button>
      </Tooltip>
    </>
  );
};

StandardTooltips.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
