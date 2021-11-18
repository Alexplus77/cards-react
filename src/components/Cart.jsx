import "App.css";
const Cart = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.children[2]}
      <div className="card-body">
        {props.children[0]}
        {props.children[1]}
        <a href="/#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Cart;
