import  { useState } from 'react';
import PropTypes from 'prop-types';

function FileExplorer({ folderData }) {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div className="container">
      <h5>
        {folderData.type === 'folder' ? (showChildren ? '📂' : '📁' ): '🗄️'}
        <span onClick={handleClick}>{folderData.name}</span>
      </h5>
      {showChildren &&
        folderData?.children?.map((childData, index) => (
          <FileExplorer key={index} folderData={childData} />
        ))}
    </div>
  );
}

FileExplorer.propTypes = {
  folderData: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        // Add other properties here if necessary
      })
    ),
  }).isRequired,
};

export default FileExplorer;
