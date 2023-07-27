// This is a functional component named Avatar that takes a prop called 'image'
const Avatar = ({ image }) => {
    // The component returns JS code that displays an image within a div
    return (
      <>
        {/* The outer div with the className 'avatar-container' */}
        <div className="avatar-container">
          {/* The image element with 'avatar' alt text and the source set to the 'image' prop */}
          <img alt="avatar" src={image} className="avatar" />
        </div>
      </>
    );
  };
  
  // Export the Avatar component as the default export
  export default Avatar;
  