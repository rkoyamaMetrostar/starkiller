import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Banner, BannerType } from './banner';

export default {
  component: Banner,
  title: 'Components/Banner',
} as Meta;

const title = 'Banner';
const whenToUse =
  'The banner identifies official websites of government organizations in the United States. It also helps visitors understand how to tell that a website is both official and secure.';

export const GovBanner: Story = () => {
  return <Banner id="banner1" type={BannerType.gov} />;
};

GovBanner.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const MilitaryBanner: Story = () => {
  return <Banner id="banner2" type={BannerType.mil} />;
};

MilitaryBanner.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
