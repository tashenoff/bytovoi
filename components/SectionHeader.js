const SectionHeader = ({ title, description }) => {
    return (
      <div className="section-header my-8 text-center py-10 card">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default SectionHeader;
  