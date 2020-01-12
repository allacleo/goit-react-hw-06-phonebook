import React from 'react';

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 24px',
  },
};

const Layout = ({ children }) => <div style={styles.container}>{children}</div>;

export default Layout;
