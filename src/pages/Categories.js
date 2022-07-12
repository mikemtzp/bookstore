import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  return (
    <div>
      <div>{categories}</div>
      <button
        type="button"
        onClick={() => dispatch(checkStatus('Under construction'))}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
