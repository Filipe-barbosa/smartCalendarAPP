type LineProps = {
  rowData: (string | number)[];
};

export const TableRow = ({ rowData }: LineProps) => {
  return (
    <tr className="border-b">
      {rowData.map((value, i) => (
        <td
          key={i}
          className="whitespace-nowrap  px-6 py-4"
        >
          {value}
        </td>
      ))}
    </tr>
  );
};
