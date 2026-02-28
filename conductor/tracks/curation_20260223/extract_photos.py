import os
import shutil
import sqlite3
import subprocess

# Configuration
DB_PATH = "/Volumes/TOSHIBA EXT/time_letter_data/photo_index.sqlite"
DEST_DIR = "/Users/jay/LocalProjects/photo_project/git_repo/peipei-album/public/assets/img/stories/00_supplement"

# Targeted Categories for May 2025
CATEGORIES = {
    "May_Study": ["教室", "自习", "图书馆", "书本", "桌面", "阶梯教室", "学术"],
    "May_Daily": ["生活气息", "生活记录", "校园", "散步", "路灯", "背影"],
    "May_Food": ["食堂", "吃饭", "美食", "餐桌", "饮品", "food"]
}

def extract_may_daily():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)
    else:
        for f in os.listdir(DEST_DIR):
            os.remove(os.path.join(DEST_DIR, f))

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    total_extracted = 0
    
    for cat_name, keywords in CATEGORIES.items():
        print(f"Searching for: {cat_name}...")
        kw_clause = " OR ".join([f"curation_tags LIKE '%{kw}%'" for kw in keywords])
        
        # Focus ONLY on May 2025 for these specific life moments
        query = f"""
        SELECT file_path, date_time_original, curation_score, curation_tags
        FROM photos 
        WHERE date_time_original LIKE '2025-05%'
        AND ({kw_clause})
        ORDER BY curation_score DESC
        LIMIT 10;
        """
        
        cursor.execute(query)
        rows = cursor.fetchall()
        
        for file_path, date, score, tags in rows:
            if not os.path.exists(file_path): continue
            
            ext = os.path.splitext(file_path)[1].lower()
            clean_date = date.split(' ')[0] if date else "2025-05-XX"
            base_name = os.path.basename(file_path)
            
            # Format: 01_May_Study_S7_2025-05-13_IMG_0112.jpg
            new_name = f"{cat_name}_S{score}_{clean_date}_{base_name}"
            target_path = os.path.join(DEST_DIR, os.path.splitext(new_name)[0] + ".jpg")
            
            if ext == ".heic" or ext == ".mov":
                # Convert first frame or image to jpg
                try:
                    subprocess.run(["magick", f"{file_path}[0]", target_path], check=True)
                    total_extracted += 1
                except:
                    print(f"Failed to convert {file_path}")
            else:
                shutil.copy2(file_path, target_path)
                total_extracted += 1

    conn.close()
    print(f"\nDone! Extracted {total_extracted} May 2025 Daily Life photos to {DEST_DIR}")

if __name__ == "__main__":
    extract_may_daily()
