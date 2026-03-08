import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const STORIES_ROOT = 'public/assets/img/stories';

function convertHeicToHiresJpg(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
            // Ignore the ai_preview folders
            if (entry.name !== 'ai_preview') {
                convertHeicToHiresJpg(fullPath);
            }
            continue;
        }

        const ext = path.extname(entry.name).toLowerCase();
        if (ext === '.heic') {
            // e.g., "photo.HEIC" -> "photo.jpg"
            const outputName = path.basename(entry.name, path.extname(entry.name)) + '.jpg';
            const outputPath = path.join(dir, outputName);

            if (fs.existsSync(outputPath)) {
                console.log(`Skipping (already exists): ${outputName}`);
                continue;
            }

            try {
                console.log(`Converting Hi-Res: ${entry.name} -> ${outputName}`);
                // Using sips to convert HEIC to JPG at 100% quality, keeping original resolution
                execSync(`sips -s format jpeg -s formatOptions 100 "${fullPath}" --out "${outputPath}"`, { stdio: 'ignore' });
            } catch (err) {
                console.error(`Error processing ${entry.name} with sips:`, err.message);
            }
        }
    }
}

console.log('Starting Hi-Res HEIC to JPG conversion...');
convertHeicToHiresJpg(STORIES_ROOT);
console.log('Hi-Res Conversion complete!');
