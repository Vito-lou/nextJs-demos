// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './pages/index'

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);


import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './pages/index'

hydrateRoot(document.getElementById('root'), <App />);