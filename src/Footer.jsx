import PropTypes from "prop-types";

const Footer = ({ order, setOrder, data }) => {
  return (
    <footer>
      {data.length ? (
        <div>
          <div>
            <select
              className="order"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="input">Sort by input order</option>
              <option value="name">Sort by name</option>
              <option value="packed">Sort by packed status</option>
            </select>
          </div>
          <div>
            <h2>
              You have {data.length} item{data.length !== 1 ? "s" : ""} on your
              list
              {data.length > 0 && (
                <>
                  {"and you already packed "}
                  {data.filter((item) => item.packed === true).length} (
                  {(
                    (data.filter((item) => item.packed === true).length /
                      data.length) *
                    100
                  ).toFixed(2)}
                  %)
                </>
              )}
            </h2>
          </div>
        </div>
      ) : (
        <p className="p">You have no items currently</p>
      )}
    </footer>
  );
};

Footer.propTypes = {
  order: PropTypes.string.isRequired,
  setOrder: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default Footer;
