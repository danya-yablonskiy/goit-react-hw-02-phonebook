export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contact by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};