// This function returns the current date in the format MM/DD/YYYY
const getCurrentDate = () => {
    // Create a new Date object to get the current date
    const date = new Date();
  
    // Extract the month, day, and year from the date object
    // !!! Note: getMonth() returns a zero-based month. I added "+1" to get the correct month number !!!
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
  
    // Format the date as a string in the format MM/DD/YYYY
    return `${month}/${day}/${year}`;
  };
  
  // Export the getCurrentDate function
  export default getCurrentDate;
  