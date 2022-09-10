import { Fragment, useEffect } from 'react';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import AddCell from './add-cell';
import CellListItem from './cell-list-item';
import './cell-list.scss';

const CellList = () => {
  const {fetchCells, saveCells} = useActions();

  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  useEffect(() => {
    fetchCells();
  }, [fetchCells]);

  return (
    <div className={cells.length === 0 ? 'force-visible cell-list' : 'cell-list'}>
      <AddCell prevId={null} />
      {cells.map((cell) => (
        <Fragment key={cell.id}>
          <CellListItem cell={cell} />
          <AddCell prevId={cell.id} />
        </Fragment>
      ))}
    </div>
  );
};

export default CellList;
