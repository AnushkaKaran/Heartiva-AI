const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components',
  'src/pages',
  'src/services'
];

dirs.forEach(dir => {
  const p = path.join(__dirname, dir);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
});

const pages = [
  'Home', 'Solutions', 'Assessment', 'PatientDetails', 
  'Prediction', 'ClinicalInsights', 'ModelAccuracy', 
  'ModelMechanics', 'About', 'Contact'
];

pages.forEach(page => {
  const content = `import React from 'react';

const ${page} = () => {
  return (
    <div className="container section">
      <h1>${page}</h1>
    </div>
  );
};

export default ${page};
`;
  fs.writeFileSync(path.join(__dirname, `src/pages/${page}.jsx`), content);
});

const components = [
  'Navbar', 'Footer'
];

components.forEach(comp => {
  const content = `import React from 'react';

const ${comp} = () => {
  return (
    <div className="${comp.toLowerCase()}">
      ${comp} Component
    </div>
  );
};

export default ${comp};
`;
  fs.writeFileSync(path.join(__dirname, `src/components/${comp}.jsx`), content);
});

console.log('Structure generated!');
