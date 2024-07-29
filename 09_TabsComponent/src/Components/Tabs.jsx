import PropTypes from 'prop-types';
import './Tabs.css';
import { useState } from 'react';

function Tabs({ tabsData }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='tabs'>
            <div className='tabs_Container'>
                {tabsData.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={activeTab === index ? 'active' : ''}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className='tabs_Content'>
                {tabsData[activeTab].content}
            </div>
        </div>
    );
}

Tabs.propTypes = {
    tabsData: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Tabs;
