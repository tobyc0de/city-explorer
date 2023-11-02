function Form({ handleSubmit, handleSearchChange }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search here"
          onChange={handleSearchChange}
        />
        <button>Go</button>
      </form>
    </>
  );
}

export default Form;
