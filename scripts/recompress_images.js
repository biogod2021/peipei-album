import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const STORIES_ROOT = 'public/assets/img/stories';
const PREVIEW_DIR_NAME = 'ai_preview';
const TARGET_WIDTH = 1024;
const JPEG_QUALITY = 75;

async function compressDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    const previewDir = path.join(dir, PREVIEW_DIR_NAME);
    if (!fs.existsSync(previewDir)) {
        fs.mkdirSync(previewDir);
    }

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
            if (entry.name !== PREVIEW_DIR_NAME) {
                await compressDirectory(fullPath);
            }
            continue;
        }

        const ext = path.extname(entry.name).toLowerCase();
        const supportedExts = ['.jpg', '.jpeg', '.png', '.webp'];
        
        if (supportedExts.includes(ext)) {
            const outputName = path.basename(entry.name, ext) + '.jpg';
            const outputPath = path.join(previewDir, outputName);

            try {
                console.log(`Processing: ${entry.name} -> ${outputName}`);
                // Use .rotate() before resize to auto-orient based on EXIF
                await sharp(fullPath)
                    .rotate()
                    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
                    .toFormat('jpeg', { quality: JPEG_QUALITY })
                    .toFile(outputPath);
            } catch (err) {
                console.error(`Error processing ${entry.name}:`, err.message);
            }
        }
    }
}

async function run() {
    console.log('Starting image compression for AI reading (with EXIF rotation fix)...');
    try {
        await compressDirectory(STORIES_ROOT);
        console.log('Compression complete!');
    } catch (err) {
        console.error('Fatal error during compression:', err);
    }
}

run();
