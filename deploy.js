const fs = require('fs');
const path = require('path');

const TOKEN = process.env.VERCEL_TOKEN || '';
const TEAM_ID = 'team_c8vCNGkEiMXDd3zeSIfK6yIF';
const PROJECT_NAME = 'rent2ride';

const filesToDeploy = [
  'index.html',
  'code.html',
  'DESIGN.md',
  'README.md',
  'vercel.json',
  'logo.png'
];

async function deploy() {
  console.log('🚀 Preparing deployment payload for Vercel REST API...');

  const files = [];

  for (const relativePath of filesToDeploy) {
    const fullPath = path.join(__dirname, relativePath);
    if (fs.existsSync(fullPath)) {
      const buffer = fs.readFileSync(fullPath);
      const isBinary = relativePath.endsWith('.png') || relativePath.endsWith('.jpg');
      
      files.push({
        file: relativePath,
        data: buffer.toString(isBinary ? 'base64' : 'utf-8'),
        encoding: isBinary ? 'base64' : 'utf-8'
      });
      console.log(`  + Packed ${relativePath} (${buffer.length} bytes)`);
    }
  }

  const payload = {
    name: PROJECT_NAME,
    files: files,
    projectSettings: {
      framework: null
    },
    target: 'production'
  };

  const url = `https://api.vercel.com/v13/deployments?teamId=${TEAM_ID}`;
  console.log(`📡 Sending deployment request to Vercel API (${url})...`);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Vercel API Error:', JSON.stringify(data, null, 2));
      process.exit(1);
    }

    console.log('✅ DEPLOYMENT SUCCESSFUL!');
    console.log('🔗 Deployment Production URL:', `https://${data.url}`);
    console.log('🔗 Main Domain: https://rent2ride.vercel.app');
    console.log('🔗 Character Creator: https://rent2ride.vercel.app/character.html');
  } catch (err) {
    console.error('❌ Request Exception:', err);
    process.exit(1);
  }
}

deploy();
