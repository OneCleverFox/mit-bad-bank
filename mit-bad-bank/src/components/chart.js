// Import the necessary dependencies
import { Bar } from "react-chartjs-2"; // Importing the Bar component from the react-chartjs-2 library
import { Chart as ChartJS } from "chart.js/auto"; // Importing the Chart component from the chart.js/auto library

// Create a functional component named Chart that takes 'chartData' as a prop
const Chart = ({ chartData }) => {
  // Render the Bar chart using the 'chartData' prop
  return <Bar data={chartData} />;
};

// Export the Chart component as the default export of this module
export default Chart;
