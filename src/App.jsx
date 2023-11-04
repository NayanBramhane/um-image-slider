// Import the CSS file for styling
import "./App.css";

// Import the ImageSlider component from a local file
import ImageSlider from "./components/ImageSlider";

// Define the main App component
function App() {
  // An array of image objects with 'url' properties
  const sliderImages = [
    {
      url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88",
    },
    {
      url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/IMG_4067.jpg?crop=0%2C462%2C1200%2C675&wid=800&hei=450&scl=1.5",
    },
    {
      url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/TNC_PC2023_8c082832f34b8fd32db4b749deae5664-original.jpg?crop=533%2C0%2C6592%2C5109&wid=800&hei=620&scl=8.240322580645161",
    },
    {
      url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/TNC_PC2023_Local_1e71d2ac323ea0abc039e2ce5dca33f2-original.jpg?crop=0%2C0%2C4400%2C3300&wid=800&hei=600&scl=5.5",
    },
    {
      url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/b/a/Baby_Gorilla.jpg?crop=0%2C0%2C1728%2C1296&wid=800&hei=600&scl=2.16",
    },
    // Add more image objects here
  ];

  return (
    <>
      {/* Title for the App */}
      <h2 className="title">Image Slider</h2>

      {/* Render the ImageSlider component with provided props */}
      {/* you can also remove auto-slide by removing 'autoSlideInterval' attribute and reload browser*/}
      {/* duration's measure unit is 'milliseconds', 1000 milliseconds = 1 second */}
      {/* If you want auto-slide again - autoSlideInterval={3000} */}
      <ImageSlider sliderImages={sliderImages} autoSlideInterval={3000} />
    </>
  );
}

// Export the App component as the default export
export default App;
