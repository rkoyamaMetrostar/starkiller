import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Tag, TagSize } from './tag';

export default {
  component: Tag,
  title: 'Components/Tag',
} as Meta;

const title = 'Tag';
const whenToUse =
  'A tag draws attention to new or categorized content elements.';

export const Tags: Story = () => {
  return (
    <>
      <Tag id="tag1">Default Size</Tag>
      <Tag id="tag2" size={TagSize.Big}>
        Big Size
      </Tag>
      <Tag id="tag3" className="bg-red">
        Red Background
      </Tag>
      <Tag id="tag4" className="bg-base-darkest text-gold">
        Darkest Background with gold text color
      </Tag>
    </>
  );
};

Tags.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
