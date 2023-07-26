// This import statement brings in the getCurrentDate function from the file "./getCurrentDate.js".
import getCurrentDate from "./currentdate";

// This function creates a transaction object with the specified type, amount, and current date.
const createTransaction = (type, amount) => {
  return {
    type: type, // The type of the transaction.
    amount: amount, // The amount associated with the transaction.
    date: getCurrentDate(), // The current date obtained using the getCurrentDate() function.
  };
};

// This line exports the createTransaction function as the default export for this module.
export default createTransaction;
