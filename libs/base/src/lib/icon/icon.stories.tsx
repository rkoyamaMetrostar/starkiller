import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Icon, IconSize, IconType } from './icon';

export default {
  component: Icon,
  title: 'Components/Icon',
} as Meta;

const title = 'Icon';
const whenToUse =
  'Icons help communicate meaning, actions, status, or feedback.';

export const BasicExample: Story = () => {
  return (
    <Icon id="icon1" type={IconType.accessibility_new} size={IconSize.size3} />
  );
};

BasicExample.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const Types: Story = () => {
  const icons: string[] = [];
  for (const icon in IconType) {
    icons.push(icon);
  }

  return (
    <div className="grid-container">
      <div className="grid-row">
        {icons.map((icon: string, index: number) => (
          <div
            key={`row${index}`}
            className="grid-col-1 padding-2"
            title={icon as IconType}
          >
            <Icon id={`icon${index}`} type={icon as IconType} />
          </div>
        ))}
      </div>
    </div>
  );
};

Types.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <p>
        <i>Note: mouse over each icon to see its type.</i>
      </p>
      <Story />
    </>
  ),
];

export const Sizes: Story = () => {
  return (
    <>
      <Icon
        id="icon1"
        type={IconType.accessibility_new}
        size={IconSize.size3}
      />
      <Icon
        id="icon2"
        type={IconType.accessibility_new}
        size={IconSize.size4}
      />
      <Icon
        id="icon3"
        type={IconType.accessibility_new}
        size={IconSize.size5}
      />
      <Icon
        id="icon4"
        type={IconType.accessibility_new}
        size={IconSize.size6}
      />
      <Icon
        id="icon5"
        type={IconType.accessibility_new}
        size={IconSize.size7}
      />
      <Icon
        id="icon6"
        type={IconType.accessibility_new}
        size={IconSize.size8}
      />
      <Icon
        id="icon7"
        type={IconType.accessibility_new}
        size={IconSize.size9}
      />
    </>
  );
};

Sizes.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const WithColor: Story = () => {
  return (
    <>
      <Icon
        id="icon1"
        type={IconType.accessibility_new}
        size={IconSize.size9}
      />
      <Icon
        id="icon2"
        type={IconType.accessibility_new}
        size={IconSize.size9}
        className="text-primary"
      />
      <Icon
        id="icon3"
        type={IconType.accessibility_new}
        size={IconSize.size9}
        className="text-secondary"
      />
    </>
  );
};

WithColor.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
