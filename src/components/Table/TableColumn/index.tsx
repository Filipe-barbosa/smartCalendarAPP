import Translator from '../../Translator';

type TitleProps = {
  label: string;
};

export const TableColumn = ({ label }: TitleProps) => {
  return (
    <th
      scope="col"
      className="px-6 py-4"
    >
      <Translator path={'scheduledTable.' + label} />
    </th>
  );
};
