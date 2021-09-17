const Loader = ({ loading, children }) => {
  return loading ? (
    <h3 className="text-uppercase text-white my-5 m-auto text-center">loading...</h3>
  ) : (
    children
  );
};

export default Loader;
