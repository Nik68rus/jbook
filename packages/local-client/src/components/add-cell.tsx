import { useActions } from '../hooks/use-actions';
import './add-cell.scss';

interface AddCellProps {
  prevId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ prevId }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className="add-cell">
      <button
        className="button is-rounded is-primary is-small"
        onClick={() => insertCellAfter(prevId, 'code')}
      >
        <span className="icon is-small">
          <i className="fas fa-plus" />
        </span>
        <span>Code</span>
      </button>
      <button
        className="button is-rounded is-primary is-small"
        onClick={() => insertCellAfter(prevId, 'text')}
      >
        <span className="icon is-small">
          <i className="fas fa-plus" />
        </span>
        <span>Text</span>
      </button>
    </div>
  );
};

export default AddCell;
