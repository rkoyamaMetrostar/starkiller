import table from '@uswds/uswds/js/usa-table';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

/* eslint-disable-next-line */
export interface TableProps<T = any> {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The table header details for the table
   */
  columns: ITableColumn[];
  /**
   * The data to display in the table rows
   */
  data: T[];
  /**
   * An optional caption to display above the table
   */
  caption?: string;
  /**
   * A boolean indicating if the table is sortable or not
   */
  sortable?: boolean;
  /**
   * The column index to set as the default sort
   */
  sortIndex?: number;
  /**
   * The default sort direction if sortIndex is provided
   */
  sortDir?: SortDirection;
  /**
   * A boolean indicating if the table is scrollabe or not
   */
  scrollable?: boolean;
  /**
   * Additional class names for the table
   */
  className?: string;
  /**
   * Used primarily to make table focusable
   */
  tabIndex?: number;
}

export interface ITableColumn {
  id: string;
  name: string;
}

export interface ITableCell {
  value: string;
  sortValue?: string;
}

export enum SortDirection {
  Ascending = 'ascending',
  Descending = 'descending',
}

export function Table({
  id,
  caption,
  columns,
  data,
  sortable = false,
  sortIndex = 0,
  sortDir = SortDirection.Ascending,
  scrollable = false,
  className,
  tabIndex = -1,
}: TableProps) {
  // Ensure table JS is loaded
  const tableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tableElement = tableRef.current;
    table.on(tableElement);

    // Ensure cleanup after the effect
    return () => table.off(tableElement);
  });

  return (
    <div
      id={id}
      className={classNames(
        { 'usa-table-container': !scrollable },
        { 'usa-table-container--scrollable': scrollable }
      )}
      ref={tableRef}
    >
      <table className={classNames('usa-table', className)} tabIndex={tabIndex}>
        <caption hidden={caption ? true : false}>{caption}</caption>
        <thead>
          <tr>
            {columns.map((column: ITableColumn, index: number) => (
              <th
                id={column.id}
                key={column.id}
                data-sortable={sortable ? sortable : null}
                scope="col"
                role="columnheader"
                aria-sort={
                  sortable === true && sortIndex === index ? sortDir : undefined
                }
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i: number) => {
            const rowData: ITableCell[] = [];
            for (const key in row) {
              if (sortable === true) {
                rowData.push({
                  value: row[key].value,
                  sortValue: row[key].sortValue,
                });
              } else {
                rowData.push({ value: row[key] });
              }
            }

            return (
              <tr key={`tr-${i}`}>
                {rowData.map((row, j) => (
                  <td
                    key={`td-${j}`}
                    data-sort-value={
                      sortable === true ? row.sortValue : row.value
                    }
                  >
                    {row.value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {sortable && (
        <div
          className="usa-sr-only usa-table__announcement-region"
          aria-live="polite"
        ></div>
      )}
    </div>
  );
}

export default Table;
