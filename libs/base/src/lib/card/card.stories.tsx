import { Button } from '../button/button';
import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Card } from './card';

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

const title = 'Card';
const whenToUse = 'Cards contain content and actions about a single subject.';

export const BasicCard: Story = () => {
  return (
    <Card id="card1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
      tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis
      dolores molestias! Quas quisquam a officia eos.
    </Card>
  );
};

BasicCard.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const CardWithHeader: Story = () => {
  return (
    <Card id="card2" heading="Card with Header">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
      tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis
      dolores molestias! Quas quisquam a officia eos.
    </Card>
  );
};

CardWithHeader.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const CardWithFooter: Story = () => {
  const footer = (
    <Button
      id="btn1"
      onClick={() => {
        return;
      }}
    >
      Visit Florida Keys
    </Button>
  );

  return (
    <Card id="card3" heading="Card with Footer" footer={footer}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
      tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis
      dolores molestias! Quas quisquam a officia eos.
    </Card>
  );
};

CardWithFooter.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const CustomClass: Story = () => {
  return (
    <Card id="card4" className="bg-base-lightest">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
      tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis
      dolores molestias! Quas quisquam a officia eos.
    </Card>
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
