import getStripe from "../lib/getStripe";

export default async function checkout() {
  // Solution to env error for vite: https://stackoverflow.com/questions/30239060/uncaught-referenceerror-process-is-not-defined
  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      {
        price: import.meta.env.VITE_STRIPE_PRICE_ID,
        quantity: 1,
      },
    ],
    mode: "payment",
    successUrl: `http://localhost:5173/success`,
    cancelUrl: `http://localhost:5173/cancel`,
    customerEmail: "abc@gmail.com",
  });
  console.warn(error.message);
}
