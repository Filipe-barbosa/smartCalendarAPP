import { TableRow } from './TableRow';
import { TableColumn } from './TableColumn';

type TableProps = {
  data: { [key: string]: string | number }[];
};

export const Table = ({ data }: TableProps) => {
  return (
    <div className="flex flex-col m-8">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="border rounded-lg">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-[#F7F7F7] font-medium ">
                <tr>
                  {Object.keys(data[0]).map(key => (
                    <TableColumn
                      label={key}
                      key={key}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <TableRow
                    rowData={Object.values(item)}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
