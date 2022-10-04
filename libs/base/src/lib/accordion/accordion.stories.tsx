import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Accordion } from './accordion';
import AccordionGroup from './accordion-group';

export default {
  component: Accordion,
  title: 'Components/Accordion',
} as Meta;

const title = 'Accordion';
const whenToUse =
  'An accordion is a list of headers that hide or reveal additional content when selected.';
const firstAmendment =
  'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.';
const secondAmendment =
  'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.';
const thirdAmendment =
  'No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.';

export const Standard: Story = () => {
  return (
    <AccordionGroup id="accordion1">
      <Accordion id="a1" heading="First Amendment">
        {firstAmendment}
      </Accordion>
      <Accordion id="a2" heading="Second Amendment">
        {secondAmendment}
      </Accordion>
      <Accordion id="a3" heading="Third Amendment">
        {thirdAmendment}
      </Accordion>
    </AccordionGroup>
  );
};

Standard.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const ExpandedByDefault: Story = () => {
  return (
    <AccordionGroup id="accordion2">
      <Accordion id="b1" heading="First Amendment" expanded={true}>
        {firstAmendment}
      </Accordion>
      <Accordion id="b2" heading="Second Amendment">
        {secondAmendment}
      </Accordion>
      <Accordion id="b3" heading="Third Amendment">
        {thirdAmendment}
      </Accordion>
    </AccordionGroup>
  );
};

ExpandedByDefault.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const MultiSelect: Story = () => {
  return (
    <AccordionGroup id="accordion3" allowMultiSelect={true}>
      <Accordion id="c1" heading="First Amendment">
        {firstAmendment}
      </Accordion>
      <Accordion id="c2" heading="Second Amendment">
        {secondAmendment}
      </Accordion>
      <Accordion id="c3" heading="Third Amendment">
        {thirdAmendment}
      </Accordion>
    </AccordionGroup>
  );
};

MultiSelect.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const CustomClass: Story = () => {
  return (
    <AccordionGroup id="accordion1">
      <Accordion
        id="a1"
        heading="First Amendment"
        className="bg-primary-vivid text-white"
      >
        {firstAmendment}
      </Accordion>
    </AccordionGroup>
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
