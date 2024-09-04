// components/AlternatingSections.js

// data.js
export const sections = [
  {
    id: 1,
    heading: "First Heading",
    description: "This is the description for the first section.",
    buttonText: "Learn More",
    image:
      "https://hostingard.themetags.com/wp-content/uploads/2024/04/img-18-1.png", // replace with your actual image path
  },
  {
    id: 2,
    heading: "Second Heading",
    description: "This is the description for the second section.",
    buttonText: "Discover",
    image:
      "https://hostingard.themetags.com/wp-content/uploads/2024/04/img-18-1.png", // replace with your actual image path
  },
  {
    id: 1,
    heading: "First Heading",
    description: "This is the description for the first section.",
    buttonText: "Learn More",
    image:
      "https://hostingard.themetags.com/wp-content/uploads/2024/04/img-18-1.png", // replace with your actual image path
  },
  {
    id: 2,
    heading: "Second Heading",
    description: "This is the description for the second section.",
    buttonText: "Discover",
    image:
      "https://hostingard.themetags.com/wp-content/uploads/2024/04/img-18-1.png", // replace with your actual image path
  },
  {
    id: 1,
    heading: "First Heading",
    description: "This is the description for the first section.",
    buttonText: "Learn More",
    image:
      "https://hostingard.themetags.com/wp-content/uploads/2024/04/img-18-1.png", // replace with your actual image path
  },
  {
    id: 2,
    heading: "Second Heading",
    description: "This is the description for the second section.",
    buttonText: "Discover",
    image:
      "https://hostingard.themetags.com/wp-content/uploads/2024/04/img-18-1.png", // replace with your actual image path
  },
  // Add more sections as needed
];

const AlternatingSections = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={section.image}
              alt={section.heading}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
            <p className="text-gray-700 mb-6">{section.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {section.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingSections;
