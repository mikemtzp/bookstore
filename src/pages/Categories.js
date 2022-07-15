import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  return (
    <div className="categories-section">
      <div>
        <div className="placeholder-text">{categories}</div>
      </div>
      <button
        type="button"
        className="check-button"
        onClick={() => dispatch(checkStatus('Under construction'))}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
