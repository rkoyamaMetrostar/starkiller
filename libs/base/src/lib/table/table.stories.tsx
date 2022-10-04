import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { ITableColumn, SortDirection, Table } from './table';

export default {
  component: Table,
  title: 'Components/Table',
} as Meta;

const title = 'Table';
const whenToUse = 'A table shows information in columns and rows.';

export const BasicTable: Story = () => {
  const columns: ITableColumn[] = [
    { id: 'name', name: 'Name' },
    { id: 'orderAdmitted', name: 'Order admitted to union' },
    { id: 'dateOfVote', name: 'Date of ratification vote' },
    { id: 'dateAdmitted', name: 'Date admitted to union' },
    { id: 'percentVoters', name: 'Percent of voters in favor of ratification' },
    { id: 'votesCast', name: 'Votes cast in favor of ratification' },
    {
      id: 'estimatedPopulation',
      name: 'Estimated population at time of admission',
    },
  ];

  interface IStateData {
    name: string;
    orderAdmitted: string;
    dateOfVote: string;
    dateAdmitted: string;
    percentVoters: string;
    votesCast: string;
    estimatedPopulation: string;
  }

  const data: IStateData[] = [
    {
      name: 'Hawaii',
      orderAdmitted: '50th',
      dateOfVote: 'Apr. 24, 1956',
      dateAdmitted: 'Aug. 21, 1959',
      percentVoters: '94.3%',
      votesCast: '132,773',
      estimatedPopulation: '632,772',
    },
    {
      name: 'Alaska',
      orderAdmitted: '49th',
      dateOfVote: 'Jun. 27, 1959',
      dateAdmitted: 'Jan. 3, 1959',
      percentVoters: '68.1%',
      votesCast: '17,477',
      estimatedPopulation: '226,167',
    },
    {
      name: 'Arizona',
      orderAdmitted: '48th',
      dateOfVote: 'Feb. 9, 1911',
      dateAdmitted: 'Feb. 14, 1912',
      percentVoters: '78.7%',
      votesCast: '12,187',
      estimatedPopulation: '204,354',
    },
  ];

  return <Table id="table1" columns={columns} data={data} />;
};

BasicTable.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const SortableTable: Story = () => {
  const columns: ITableColumn[] = [
    { id: 'name', name: 'Name' },
    { id: 'orderAdmitted', name: 'Order admitted to union' },
    { id: 'dateOfVote', name: 'Date of ratification vote' },
    { id: 'dateAdmitted', name: 'Date admitted to union' },
    { id: 'percentVoters', name: 'Percent of voters in favor of ratification' },
    { id: 'votesCast', name: 'Votes cast in favor of ratification' },
    {
      id: 'estimatedPopulation',
      name: 'Estimated population at time of admission',
    },
  ];

  interface IStateData {
    name: unknown;
    orderAdmitted: unknown;
    dateOfVote: unknown;
    dateAdmitted: unknown;
    percentVoters: unknown;
    votesCast: unknown;
    estimatedPopulation: unknown;
  }

  const data: IStateData[] = [
    {
      name: { value: 'Hawaii', sortValue: 'Hawaii' },
      orderAdmitted: { value: '50th', sortValue: '50' },
      dateOfVote: { value: 'Apr. 24, 1956', sortValue: '331844400' },
      dateAdmitted: { value: 'Aug. 21, 1959', sortValue: '327092400' },
      percentVoters: { value: '94.3%', sortValue: '0.943' },
      votesCast: { value: '132,773', sortValue: '132773' },
      estimatedPopulation: { value: '632,772', sortValue: '632772' },
    },
    {
      name: { value: 'Alaska', sortValue: 'Alaska' },
      orderAdmitted: { value: '49th', sortValue: '49' },
      dateOfVote: { value: 'Jun. 27, 1959', sortValue: '431978400' },
      dateAdmitted: { value: 'Jan. 3, 1959', sortValue: '346960800' },
      percentVoters: { value: '68.1%', sortValue: '0.681' },
      votesCast: { value: '17,477', sortValue: '17477' },
      estimatedPopulation: { value: '226,167', sortValue: '226167' },
    },
    {
      name: { value: 'Arizona', sortValue: 'Arizona' },
      orderAdmitted: { value: '48th', sortValue: '48' },
      dateOfVote: { value: 'Feb. 9, 1911', sortValue: '1858528800' },
      dateAdmitted: { value: 'Feb. 14, 1912', sortValue: '1826560800' },
      percentVoters: { value: '78.7%', sortValue: '0.787' },
      votesCast: { value: '12,187', sortValue: '12187' },
      estimatedPopulation: { value: '204,354', sortValue: '204354' },
    },
  ];

  return (
    <Table
      id="table2"
      columns={columns}
      data={data}
      sortable={true}
      sortIndex={1}
      sortDir={SortDirection.Descending}
    />
  );
};

SortableTable.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const ScrollableTable: Story = () => {
  const columns: ITableColumn[] = [
    { id: 'name', name: 'Name' },
    { id: 'orderAdmitted', name: 'Order admitted to union' },
    { id: 'dateOfVote', name: 'Date of ratification vote' },
    { id: 'dateAdmitted', name: 'Date admitted to union' },
    { id: 'percentVoters', name: 'Percent of voters in favor of ratification' },
    { id: 'votesCast', name: 'Votes cast in favor of ratification' },
    {
      id: 'estimatedPopulation',
      name: 'Estimated population at time of admission',
    },
  ];

  interface IStateData {
    name: string;
    orderAdmitted: string;
    dateOfVote: string;
    dateAdmitted: string;
    percentVoters: string;
    votesCast: string;
    estimatedPopulation: string;
  }

  const data: IStateData[] = [
    {
      name: 'Hawaii',
      orderAdmitted: '50th',
      dateOfVote: 'Apr. 24, 1956',
      dateAdmitted: 'Aug. 21, 1959',
      percentVoters: '94.3%',
      votesCast: '132,773',
      estimatedPopulation: '632,772',
    },
    {
      name: 'Alaska',
      orderAdmitted: '49th',
      dateOfVote: 'Jun. 27, 1959',
      dateAdmitted: 'Jan. 3, 1959',
      percentVoters: '68.1%',
      votesCast: '17,477',
      estimatedPopulation: '226,167',
    },
    {
      name: 'Arizona',
      orderAdmitted: '48th',
      dateOfVote: 'Feb. 9, 1911',
      dateAdmitted: 'Feb. 14, 1912',
      percentVoters: '78.7%',
      votesCast: '12,187',
      estimatedPopulation: '204,354',
    },
  ];

  return (
    <div className="width-tablet">
      <Table
        id="table3"
        columns={columns}
        data={data}
        scrollable={true}
        tabIndex={0}
      />
    </div>
  );
};

ScrollableTable.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
