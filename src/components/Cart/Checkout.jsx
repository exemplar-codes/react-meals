import classes from "./Checkout.module.css";

function Checkout(props) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Your Name</label>
        <input type="text" id="postak" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.action}>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        &nbsp;
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
