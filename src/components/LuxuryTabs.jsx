import React, { useState } from 'react';
import { motion } from 'framer-motion';

function LuxuryTabs({ tabs = [], activeId: controlledActiveId, onChange, defaultActiveId }) {
  const isControlled = controlledActiveId !== undefined && onChange;
  const [uncontrolledActiveId, setUncontrolledActiveId] = useState(defaultActiveId ?? (tabs[0]?.id ?? null));
  const activeId = isControlled ? controlledActiveId : uncontrolledActiveId;

  function handleSelect(id) {
    if (isControlled) {
      onChange(id);
    } else {
      setUncontrolledActiveId(id);
    }
  }

  return (
    <div>
      <div className="lux-tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <div
              key={tab.id}
              className={`lux-tab ${isActive ? 'active' : ''}`}
              onClick={() => handleSelect(tab.id)}
            >
              {isActive && <motion.div layoutId="lux-underline" className="lux-underline" />}
              <span style={{ position: 'relative', zIndex: 2 }}>{tab.label}</span>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 16 }}>
        {tabs.find((t) => t.id === activeId)?.content}
      </div>
    </div>
  );
}

export default LuxuryTabs;


