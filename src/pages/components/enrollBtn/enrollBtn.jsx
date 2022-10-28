// importing dependency's components
import useRazorpay from "react-razorpay";

const EnrollBtn = (props) => {
  const Razorpay = useRazorpay();

  const handleClick = async () => {
    // Step 1: Get the order Id from the server
    const res = await fetch(
      "https://vayuyastra.herokuapp.com/payment/checkout",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          userId: props.vID,
          amount: "2",
        }),
      }
    );

    const data = await res.json();
    // console.log(data);

    var options = {
      // Enter the Key ID generated from the Dashboard
      key: "rzp_live_9OFbjTM3IZVPfJ",
      // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      amount: "5",
      currency: "INR",
      //title
      name: "Vayuvyastra",
      //deatils - order summary
      description: "Enrollment into Club",
      //title logo - app logo
      image:
        "https://raw.githubusercontent.com/vayuvyastra/en-roll/loginSignUpPage/public/favicon_io/android-chrome-512x512.png",
      //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      order_id: data.orderId,

      // Step 2: Here the handler handles the payment process from razorpay and responds payment details
      handler: async function (response) {
        const cre = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          userId: data.user.userId,
        };
        // console.log(response);

        // Step 3: Verifying the payment details from the server
        const res = await fetch(
          "https://vayuyastra.herokuapp.com/payment/verifyPayment",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(cre),
          }
        );
        // Handle successful payments
        const paymentStatus = await res.json();
        if (paymentStatus.status === "success") {
          props.onSuccess(paymentStatus.razorpay_payment_id);
        }
        // console.log(paymentStatus);
      },

      prefill: {
        //autofill with the user data
        name: data.user.name,
        email: data.user.email,
        contact: data.user.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#07253f",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <button className="enrollBtn submitBtn" onClick={handleClick}>
      Make Payment
    </button>
  );
};

export default EnrollBtn;
