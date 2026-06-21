import shutil, pathlib

base = pathlib.Path(r"D:\WorkBuddy\Obsidian\TMG-Blog")
moves = {
    "AI-Platform": ["AI Super Portal War Baidu vs Doubao vs Qianwen","ByteDance vs Alibaba Content Agent War","DeepSeek 74B Funding Tencent Leads","DeepSeek Opens Its Eyes","DeepSeek Opens Its Eyes — What Image Recognition Means for GEO","DeepSeek V4 Cuts Token Prices 75 Percent — What This Means for GEO","Doubao Ads GEO — Is It Still Worth It","Doubao Goes Paid — What Advertisers Need to Know","Doubao Goes Paid — What This Means for GEO","Doubao Goes Paid What This Means for GEO"],
    "Alipay": ["Alipay Abao AI Launch"],
    "Baidu": ["Baidu Advertising Complete Guide 2026","Baidu Demographics — Who Are These 735M Users","百度AI营收突破52%——四大厂AI布局全解析"],
    "Bilibili": ["Bilibili Ads Are Coming","Bilibili Demographics — Who Are These Gen Z Users","Bilibili Gen Z Marketing","Bilibili Phone PC Marketing Playbook 2026"],
    "BingChina": ["Bing China Demographics — Who Are These Users","Bing China Premium Audience Guide","Microsoft Copilot China Ad Opportunity"],
    "China-General": ["China Big Tech AI Monetization 2026","China Mobile Internet Spring 2026"],
    "Douyin": ["Douyin Advertising Complete Guide 2026","Douyin E-Commerce 618 AI Ad War","Douyin Enterprise Account Setup Guide","Ocean Engine AI Assistant for Advertisers","Ocean Engine Local Reach","Ocean Engine Overview","Pangle Ads — ByteDance's In-App Network"],
    "Education": ["Ad Billing Models Explained","Attribution Models Guide","CPM Is Rising — Why That's Bad for Advertisers","CPM, oCPM, eCPM Explained","Smart Bidding Strategies Explained"],
    "GEO": ["China GEO Market Mid-2026 Review","Every Medium Has Two Types of Traffic — Doubao Ads and the Future of GEO in China","GEO Channel Weight 2026 Test Results"],
    "Kuaishou": ["Kuaishou Demographics — Who Are These 400M Users"],
    "News": ["Pentagon Blacklists Alibaba Baidu What Advertisers Need to Know"],
    "Tencent": ["Tencent Ad Revenue AI Deep Dive 2026","Tencent Ads Home & Furnishing Influencer Marketing A Complete Playbook for 2026","Tencent AI Pivot Yuanbao Sidelined WorkBuddy Takes Center Stage","Tencent Hy-Memory — Fixes AI's 3-Week Amnesia"],
    "WeChat": ["WeChat Advertising Complete Guide 2026","WeChat AI Agent Coming for Advertisers","WeChat AI Opens to Developers What It Means for Mini-Program Advertisers","WeChat Pay AI Exclusive Card 2026","WeChat vs Alipay AI Payment Agent War"],
    "Xiaohongshu": ["Xiaohongshu 618 2026 Guide","Xiaohongshu Advertising Complete Guide 2026","Xiaohongshu Consumer Research Insights","Xiaohongshu Demographics — Who Are These 350M Users","Xiaohongshu vs Brand Crisis 2026"],
    "618": ["618 2026 AI Takes Over Chinas Largest Shopping Festival","618 2026 Final Push AI Is Now Infrastructure","618 2026 GEO Goes Mainstream","618 AI Native Era 2026","618 AI Shopping Search War 2026","618 Data Review 2026"],
}

ok = 0; fail = 0
for platform, articles in moves.items():
    dst_dir = base / platform
    dst_dir.mkdir(exist_ok=True)
    for article in articles:
        src = base / article
        dst = dst_dir / article
        if src.exists():
            shutil.move(str(src), str(dst))
            ok += 1
        else:
            print(f"NOT FOUND: {article}")
            fail += 1
print(f"Moved: {ok}, Failed: {fail}")
