// table container
interface TableContainerProps {
  children: React.ReactNode;
}

export const TableContainer = ({ children }: TableContainerProps) => (
  <div className="not-prose isolate">
    <figure className="flex flex-col gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
      <div className="not-prose rounded-lg outline outline-white/5 dark:bg-gray-950/50">
        <div className="my-8 overflow-auto">
          <table className="w-full table-auto border-collapse text-sm">
            {children}
          </table>
        </div>
      </div>
    </figure>
  </div>
);

// table head
interface Column {
  label: string;
  align?: 'left' | 'right';
}

interface TableHeadProps {
  columns: Column[];
}

const headStyles =
  'border-b border-gray-200 p-4 pt-0 pb-3 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200';

export const TableHead = ({ columns }: TableHeadProps) => (
  <thead>
    <tr>
      {columns.map((col, index) => (
        <th
          key={index}
          className={`${headStyles} ${index === 0 ? 'pl-8' : ''} ${index === columns.length - 1 ? 'pr-8' : ''}`}
        >
          {col.label}
        </th>
      ))}
    </tr>
  </thead>
);

// table body
interface TableBodyProps {
  children: React.ReactNode;
}

export const TableBody = ({ children, ...props }: TableBodyProps) => (
  <tbody {...props}>{children}</tbody>
);

// table row
interface TableRowProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

export const TableRow = ({ children, ...props }: TableRowProps) => (
  <tr {...props}>{children}</tr>
);

// table cell
interface TableCellProps {
  children: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}

const cellStyles =
  'border-b border-gray-100 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400';

export const TableCell = ({
  children,
  isFirst,
  isLast,
}: TableCellProps) => (
  <td
    className={`${cellStyles} ${isFirst ? 'pl-8' : ''} ${isLast ? 'pr-8' : ''}`}
  >
    {children}
  </td>
);