import pathlib
ptb = pathlib.Path(r"D:\WorkBuddy\Obsidian\TMG-Blog\Platform Topic Batch")
remaining = list(ptb.iterdir())
print(f"Remaining in Platform Topic Batch: {len(remaining)}")
for r in remaining:
    print(f"  {r.name} ({'dir' if r.is_dir() else 'file'})")
