import { useDispatch } from "react-redux";
import { filterChange } from "../../../example/src/reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(filterChange(target.value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
