#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the current commit hash
let commitHash = 'main';
try {
  commitHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
} catch (error) {
  console.warn('Warning: Could not get git commit hash, using "main"');
}

// Get the current date
const buildDate = new Date().toISOString();

// Create the environment file content
const envContent = `VITE_COMMIT_HASH=${commitHash}
VITE_BUILD_DATE=${buildDate}
`;

// Write to .env.local file
const envPath = path.join(__dirname, '..', '.env.local');
fs.writeFileSync(envPath, envContent);

console.log(`✅ Build environment created:
  Commit Hash: ${commitHash.substring(0, 7)}
  Build Date: ${new Date(buildDate).toLocaleDateString()}
  File: ${envPath}
`);

// Also create a .env file for production builds
const envProdPath = path.join(__dirname, '..', '.env');
fs.writeFileSync(envProdPath, envContent);

console.log(`✅ Production environment file created: ${envProdPath}`);
