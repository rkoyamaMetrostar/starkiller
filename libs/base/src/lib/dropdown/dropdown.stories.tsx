import { Story, Meta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import Label from '../label/label';
import Documentation from '../storybook-utils/documentation';
import { Dropdown, DropdownOption } from './dropdown';

export default {
  component: Dropdown,
  title: 'Components/Forms/Dropdown',
} as Meta;

const title = 'Dropdown';
const whenToUse =
  'A dropdown allow users to select one option from a temporary modal menu.';
const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

export const Standard: Story = () => {
  const options = loremWords.map((word) => {
    return { value: word.toLowerCase(), label: word } as DropdownOption;
  });

  const [selectedValue, setSelectedValue] = useState('');
  const onChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedValue(event.target.value);
  return (
    <>
      <Label htmlFor="dropdown1">Dropdown label</Label>
      <Dropdown
        id="dropdown1"
        name="dropdown-name"
        options={options}
        onChange={onChange}
      />
      <p>Selected value: {selectedValue}</p>
    </>
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

export const NoDefault: Story = () => {
  const options = loremWords.map((word) => {
    return { value: word.toLowerCase(), label: word } as DropdownOption;
  });

  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const onChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedValue(event.target.value);
  return (
    <>
      <Label htmlFor="dropdown1">Dropdown label</Label>
      <Dropdown
        id="dropdown1"
        name="dropdown-name"
        options={options}
        defaultOption={null}
        onChange={onChange}
      />
      <p>Selected value: {selectedValue}</p>
    </>
  );
};

NoDefault.decorators = [
  (Story: Story) => (
    <>
      <Documentation
        heading="Dropdown without default option"
        body={whenToUse}
      />
      <Story />
    </>
  ),
];
