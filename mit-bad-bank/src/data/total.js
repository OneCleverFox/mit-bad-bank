// Function to calculate the total amount for a given target type in the data array.
const getTotal = (targetType, data) => {
  // If the data array is empty, return 0.
  if (data.length === 0) return "0";

  // Filter the data array to get an array containing only the records with the target type.
  const targetArray = data.filter((record) => record.type === targetType);

  // If no records with the target type are found, return 0.
  if (targetArray.length === 0) return "0";

  // If only one record with the target type is found, return its amount.
  if (targetArray.length === 1) {
    const amount = targetArray[0].amount.toFixed(2);
    return amount.padEnd(amount.length + 1, "0"); // Add a "0" if there's only one decimal place.
  }

  // If multiple records with the target type are found, calculate the total amount using reduce.
  const totalAmount = targetArray.reduce((acc, obj) => acc + obj.amount, 0);
  const formattedTotal = totalAmount.toFixed(2);
  return formattedTotal;
};

// Export the getTotal function
export default getTotal;
