import shutil, pathlib

base = pathlib.Path(r"D:\WorkBuddy\Obsidian\TMG-Blog")
ptb = base / "Platform Topic Batch"

# Move platform subfolders into TMG-Blog root platform folders
platform_map = {
    "Baidu": "Baidu",
    "Bilibili": "Bilibili",
    "BingChina": "BingChina",
    "Douyin": "Douyin",
    "WeChat": "WeChat",
    "Xiaohongshu": "Xiaohongshu",
}

ok = 0
for src_name, dst_name in platform_map.items():
    src_dir = ptb / src_name
    dst_dir = base / dst_name
    if not src_dir.exists():
        print(f"SKIP: {src_name} not found")
        continue
    for child in src_dir.iterdir():
        dst = dst_dir / child.name
        if dst.exists():
            print(f"SKIP (exists): {dst_name}/{child.name}")
            continue
        shutil.move(str(child), str(dst))
        ok += 1
        print(f"  {src_name}/{child.name} -> {dst_name}/")

# Move loose Bilibili articles from PTB root
loose = {
    "Bilibili Search Content Matching": "Bilibili",
    "Bilibili Search Creative Lab": "Bilibili",
    "Bilibili Search Funnel Guide": "Bilibili",
    "Bilibili Search Performance 2026": "Bilibili",
    "Youth Search Ads on Bilibili": "Bilibili",
}
for name, platform in loose.items():
    src = ptb / name
    dst = base / platform / name
    if src.exists() and not dst.exists():
        shutil.move(str(src), str(dst))
        ok += 1
        print(f"  (loose) {name} -> {platform}/")
    elif dst.exists():
        print(f"SKIP (exists): {platform}/{name}")

print(f"\nTotal moved: {ok}")
