import Form from "./Forms/Form";
import Header from "./Header";
import PageName from "./PageName";
import "./checkout.css";
import SideFrame from "./SideFrame";
import FormHead from "./Forms/FormHead";
import FormInput from "./Forms/FormInput";

function CheckOut() {
  const cart = [
    {
      productName: "Vintage shirt",
      productPrice: 16000,
      productColor: "Brown",
      productSize: "Size",
      productQuantity: 1,
      productImage: "vintage.jpg",
    },
    {
      productName: "Cargo Pants",
      productPrice: 20000,
      productColor: "Black",
      productSize: "Large",
      productQuantity: 1,
      productImage: "cargoPants.jpg",
    },
  ];
  return (
    <div className="bd">
      <Header />
      <PageName PGname="Checkout" />
      <div className="main">
        <div className="forms-container">
          <Form>
            <FormHead
              title="Personal Details"
              link=""
              linkText="Use profile details"
            />
            <FormInput
              type="text"
              label="First Name"
              placeholder="First Name"
              className="text-input"
            />
            <FormInput
              type="text"
              label="Last Name"
              placeholder="Last Name"
              className="text-input"
            />
          </Form>
          <Form>
            <FormHead
              title="Delivery Details"
              link=""
              linkText="Use profile details"
            />
            <FormInput
              type="text"
              label="Delivery Address"
              placeholder="Delivery Address"
              className="text-input"
            />
            <FormInput
              type="text"
              label="State"
              placeholder="State"
              className="text-input"
            />
            <FormInput
              type="text"
              label="Phone Number"
              placeholder="+234"
              className="text-input"
            />
          </Form>
          <Form>
            <FormHead title="Payment Method" />
            <div
              style={{ width: "100%", display: "flex", margin: "0.5em auto" }}
            >
              <input type="radio" className="radio-input" />
              <span style={{ marginRight: "1rem" }}>Pay on delivery</span>
              <input type="radio" className="radio-input" />
              <span>Pay with Card</span>
            </div>
            <FormInput
              type="text"
              label="Card Number"
              placeholder="Your Card Number"
              className="text-input"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "70%",
              }}
            >
              <div>
                <FormInput
                  type="text"
                  label="Expiry Date"
                  placeholder="MM/YY"
                  className="text-input-short"
                />
              </div>
              <div>
                <FormInput
                  type="text"
                  label="CVV"
                  placeholder="Back of Card"
                  className="text-input-short"
                />
              </div>
            </div>
          </Form>
        </div>
        <div className="sideBar-container">
          <SideFrame items={cart} />
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
