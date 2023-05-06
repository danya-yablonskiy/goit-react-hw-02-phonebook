export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contact by name <br />
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};