import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

function ScrollableTable(props) {
  return (
    <div className="tableScroll" role="region" aria-label="Tabelle, bei Bedarf horizontal scrollen" tabIndex={0}>
      <table {...props} />
    </div>
  );
}

export default {...MDXComponents, table: ScrollableTable};
