import subprocess
import os
import sys

# 10MB batches for ultra-stability
BATCH_SIZE_LIMIT = 10 * 1024 * 1024 

def get_target_files():
    # Get all untracked files
    untracked = subprocess.check_output(['git', 'ls-files', '--others', '--exclude-standard']).decode('utf-8').splitlines()
    # Get all modified but not staged files
    modified = subprocess.check_output(['git', 'ls-files', '--modified']).decode('utf-8').splitlines()
    
    all_pending = list(set(untracked + modified))
    
    # Filter to only include media and key configs, exclude node_modules or dist if any
    targets = []
    for f in all_pending:
        if 'public/assets/img/stories' in f or f in ['src/narrative_config.js', '.github/workflows/deploy.yml']:
            if os.path.exists(f) and os.path.isfile(f):
                targets.append(f)
    return targets

def sync_batch(files):
    if not files:
        return
    
    print(f"\n>>> Syncing {len(files)} files...")
    try:
        # Add files one by one to avoid shell length limits
        for f in files:
            subprocess.run(['git', 'add', f], check=True)
        
        # Commit
        msg = f"sync: media batch ({os.path.basename(files[0])[:20]}...)"
        subprocess.run(['git', 'commit', '-m', msg], check=True)
        
        # Push with retry logic
        attempts = 0
        while attempts < 3:
            try:
                subprocess.run(['git', 'push', 'origin', 'main'], check=True)
                print("✓ Batch pushed!")
                break
            except subprocess.CalledProcessError:
                attempts += 1
                print(f"! Push failed, retrying ({attempts}/3)...")
    except Exception as e:
        print(f"FAILED batch: {e}")

def main():
    targets = get_target_files()
    if not targets:
        print("No files need syncing.")
        return

    print(f"Found {len(targets)} files to sync. Starting chunked upload...")
    
    current_batch = []
    current_size = 0
    
    for file_path in targets:
        file_size = os.path.getsize(file_path)
        
        if current_size + file_size > BATCH_SIZE_LIMIT and current_batch:
            sync_batch(current_batch)
            current_batch = []
            current_size = 0
            
        current_batch.append(file_path)
        current_size += file_size
        
    if current_batch:
        sync_batch(current_batch)

    print("\n✨ ALL MEDIA SYNCED SUCCESSFULLY!")

if __name__ == "__main__":
    main()
