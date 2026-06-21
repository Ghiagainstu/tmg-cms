Title: 微软 Copilot，像个乱贴小广告的街溜子-36氪

URL Source: https://36kr.com/p/3750697076015878

Published Time: 2026-06-17T18:10:29+08:00

Markdown Content:
绝了，真的绝了。

**微软旗下的 AI 助手 Copilot，开始自作主张，在开源代码仓库里加广告了……**

上周，澳大利亚开发者 Zach Manson 发现，自己在 GitHub 上提交的代码合并请求 (PR) 里面，不知道为什么被插入了一段广告。

一番调查后他发现，又是 Copilot 整的烂活：

首先，这个 PR 是 Manson 自己提交的；公司有个同事，发现有个错别字，于是用 Copilot 改了一下。

结果，Copilot 在 PR 的最下方加了一行广告：

*   在 macOS 或 Windows 上快速启动 Copilot 编程智能体，就用 Raycast！

**更别提这广告里甚至还加上了链接……**

![Image 1](https://img.36krcdn.com/hsossms/20260403/v2_faac195b40f741768f98b4d14ab24211@000000_oswg204428oswg1080oswg690_img_000?x-oss-process=image/format,jpg/interlace,1)

「这太可怕了。我知道自己迟早会遇到这种蠢事，但没想到会这么快。」他写到。

Raycast 是一款 macOS 和 Windows 上的多功能启动器，确实挺好用，被很多效率用户喜爱。但是在跟 Raycast 完全没关系的用户代码库里，加上这种毫无来由的广告，未免也太离谱了。

Raycast 的联合创始人兼 CEO Thomas Paul Mann 事后表示对此不知情，也否认了做过此种形式的投放（这压根就不是一种合理的投放形式……）

![Image 2](https://img.36krcdn.com/hsossms/20260403/v2_d01d549f04e24da1b957ff1a364cbd7d@000000_oswg40767oswg1080oswg352_img_000?x-oss-process=image/format,jpg/interlace,1)

CEO 也分享了更多背后的细节：

> 事情的经过是这样的：GitHub 团队的某位成员，在 Copilot 提交的 PR 中加入了对 Raycast 的提及，纯粹因为他们使用并且喜欢我们的产品。
> 
> 
> 这些提及，最初只会出现在 Copilot 创建的 PR 上，旨在为开发者提供帮助。但由于某个 bug，当有人 @Copilot 让它做修改的时候，这些提及（也就是这次的广告）会出现在人为创建的 PR 中。
> 
> 
> GitHub 已经修复了这个问题，我相信这并非出于恶意，只是一系列不幸的事件造成的巧合。
> 
> ![Image 3](https://img.36krcdn.com/hsossms/20260403/v2_e16635d0ec9f477abf64b47fb5f31d74@000000_oswg263317oswg1080oswg712_img_000?x-oss-process=image/format,jpg/interlace,1)

## **01 Copilot 为什么选中了 Raycast 呢？**

事情还要从去年说起。

大家知道 GitHub 早就被微软收购了。去年 8 月，GitHub 跟 Raycast 合作推出官方集成，让用户可以直接在启动器里来管理 Copilot 代码任务。

换句话说，Raycast 出现在这个广告里可能不是随机的。这个事儿说大了，相当于微软的官方合作伙伴的广告被 Copilot 强行插进了第三方的 GitHub 代码库里。

以为事情到了这里就完了？

并没有。用这段广告的关键词去 GitHub 上搜了一下：**同样的文字，出现在超过 1.1 万个 PR 当中，分布在数千个不同的代码仓库里。**

而打开这些 PR 的原始 markdown 文件，会看到广告前面有一段隐藏的 HTML 注释，内容是「START COPILOT CODING AGENT TIPS」。

**这只可能是预设好的模板/功能，不可能是 AI 随机生成的。**

![Image 4](https://img.36krcdn.com/hsossms/20260403/v2_3eae94ee384842ffbedaedd5ef94feb9@000000_oswg139835oswg1080oswg456_img_000?x-oss-process=image/format,jpg/interlace,1)

除了 Raycast 之外，数以万计的 PR 里还能看到其它产品的广告，包括并不限于 Slack、微软 Teams、JetBrains、VSCode、Visual Studio 等等……

这些产品/工具，要么是微软自己开发的，要么是跟 Raycast 类似，和 Copilot 有深度合作的产品。

![Image 5](https://img.36krcdn.com/hsossms/20260403/v2_bba7efca07284fb289ebb2cb70b17ebc@000000_oswg96281oswg1080oswg318_img_000?x-oss-process=image/format,jpg/interlace,1)

![Image 6](https://img.36krcdn.com/hsossms/20260403/v2_86c5bd0efeab4ccfa27d51c4f3e87964@000000_oswg174822oswg1080oswg699_img_000?x-oss-process=image/format,jpg/interlace,1)

**Copilot 搞的这些骚操作，再一次挑战了人们对于「AI 泔水」的底线。**

舆论爆发之后，GitHub 当天就关掉了这个功能。产品经理 Tim Rogers 发帖谢罪，在用户不知情的前提下，让 Copilot 修改真人用户提交的 PR，是一个「错误的决定」。

![Image 7](https://img.36krcdn.com/hsossms/20260403/v2_6230ca3c57d04f77aca4a99d0db7d323@000000_oswg173332oswg1080oswg369_img_000?x-oss-process=image/format,jpg/interlace,1)

GitHub 开发者关系副总裁 Martin Woodward 也出面承认，这个「产品提示」功能确实很烦人。

**但 APPSO 觉得话还是要讲清楚：这哪儿是什么提示啊，不就是广告吗？不就是「泔水」吗？**

![Image 8](https://img.36krcdn.com/hsossms/20260403/v2_2a88358a468544d1aa1bd7f138a848cf@000000_oswg406901oswg1080oswg1111_img_000?x-oss-process=image/format,jpg/interlace,1)

## **02 Copilot 搞砸了多少次了？**

平心而论，这次 GitHub PR 广告事件，本身造成的损失的确有限。

**但它之所以能引起如此之大的反感，是因为：人们早已经受够 Copilot 和它整的这些烂活了。**

### **Copilot 胡乱生图**

微软有个网站叫做「Windows 学习中心」，里面有大量的 Win 11 功能推广博客，以及很多关于如何使用 Windows 操作系统的教学文章。过去，这些文章基本都还是人工编辑的，配图也是人找的。

但是就在最近，微软不知道哪根弦没搭对，开始用 Copilot 生成配图了：有篇文章里有这样一张图，讲的是 Win 11 的小组件功能，下面配文写着「AI Art Created via Copilot」。

问题是，这张图完全不对。真实的 Windows 小组件，根本不长这个样子（见下图）。

![Image 9](https://img.36krcdn.com/hsossms/20260403/v2_5865a59dddac404a9b4e81f5d1077102@000000_oswg66014oswg1080oswg664_img_000?x-oss-process=image/format,jpg/interlace,1)

![Image 10](https://img.36krcdn.com/hsossms/20260403/v2_9c9e6bdb564d42a5af9282cd51f2295e@000000_oswg103566oswg1080oswg608_img_000?x-oss-process=image/format,jpg/interlace,1)

一家市值万亿美元的公司，还能租不起影棚，请不起摄影师和模特？微软肯定不是不愿意花这笔钱的。但是营销团队里有个大聪明，决定用尽一切手段来推广 Copilot，连配图都没放过，谁也拦不住——

结果，就是生成这种幻觉图片，却被官方当做使用教程。但凡真有用户看了这篇文章，发现怎么也找不到对应的功能，微软这不是搬起石头砸自己脚吗？

### **Copilot 跟 Window 不熟**

去年，微软跟 YouTuber UrAvgConsumer 合作了一条商单视频，里面演示了 Copilot 如何帮助用户完成一些日常操作。博主问，「我想调大文字」，Copilot 说「我们可以调整屏幕的缩放比例」，博主追问「那么应该调到多少？」Copilot 说：「我们可以先从 150% 开始。」

问题是，Windows 系统默认的缩放比例就是 150%，Copilot 这属于完全无效的信息。

在视频中我们可以看到，博主直接手选了 200%，然后这段就过去了……

![Image 11](https://img.36krcdn.com/hsossms/20260403/v2_186555691345497c8e7110af8a9e64c5@6100851_img_gif?x-oss-process=image/quality,q_80)

然而问题还不止于此：对于「调整文字大小」的用户意图，Copilot 其实不应该调整屏幕缩放比例，因为这么干不只会调大文字，还会让所有 UI 元素都一起变大。

更何况，Windows 操作系统是有专门的文字大小调节的……

微软官方账号把这条视频发到了 X 上，结果下面网友直接给写了个社区通知：Copilot 的建议是错的。

![Image 12](https://img.36krcdn.com/hsossms/20260403/v2_d88d84e4060546c087bf8012825b57b1@000000_oswg44489oswg526oswg623_img_000?x-oss-process=image/format,jpg/interlace,1)

### **Copilot：加密？什么是加密？**

APPSO 之前的 AIPC 文章曾经提过，在 2024 年 Copilot 刚进入 Windows 系统成为核心 AI 功能的时候，微软曾经整过一个大烂活：把用户的隐私数据明文存储。

当时，微软给 Copilot+ PC 推出的核心功能叫做记忆召回 (Recall)，大概的实现方法，就是在用户使用电脑的时候，每隔几秒在后台截个屏，保存起来并用 Copilot 进行分析，这样用户回头问 Copilot「我上周在某个网页看到过什么什么」之类的问题，它能答上来。

但是在这个功能推出后，有开发者发现，所有的截图都存在一个完全没有加密的明文数据库里，而且没有做任何的信息脱敏。比方说用户访问过银行账户页面、或者在输入密码的时候点了「显示密码」，这些隐私内容只要在屏幕上出现过，就都会原封不动的保存起来。

而任何能使用这台电脑（本地或者远程），知道这个文件夹存放位置的人，都可以直接读取这些私密资料。

![Image 13](https://img.36krcdn.com/hsossms/20260403/v2_6d7434e74b63462b957c74872ea6b239@000000_oswg57800oswg430oswg430_img_000?x-oss-process=image/format,jpg/format,jpg/interlace,1)

这个事情曝光出来，直接导致微软被迫下线了 Recall 功能，花了一年时间重做安全机制。直到最后，这个功能又上线了，但是改成默认关闭。

这倒是安全了，但微软在 AI PC 时代的第一个重大功能，就这么草草收场，真是不要太讽刺。

## **03 假若 Copilot 从未来过，该有多好？**

上述这些情况，都还可以算是孤立事件。

**然而自打小冰/小娜 (Cortana) 退役以来，微软把所有的 AI 对话/助手/智能体之类的功能，全都囊括在 Copilot 这一个包装之下，开足马力营销。**

而 Copilot 犯下的错误又这么多，孤立的事件连在一起，勾勒出来的画面，就能看出一以贯之的逻辑，也怪不得人看不起它了。

今天的微软 Copilot，越来越像早年的 Facebook：Move fast, break things. 然而问题是，聚焦全部放在了「动作快」上，一路打破了各种各样的体验，也打破了用户的信任。

回到一开头的 PR 广告，发现它的开发者 Zach Manson 在自己的博客里引用了一段科幻作家 Cory Doctorow 的话：

> 一个平台的死亡过程通常是这样的：一开始，它们对用户挺好的；然后，它们为了商业客户的利益开始恶心普通用户；最后，他们为了自己的利益，甚至连商业客户都敢坑。最后，他们走向衰亡。

这话放在微软身上，可能有点重了。毕竟，Copilot 的笑话一天接一个，大家吃瓜看热闹都来不及呢。

但这次塞的是 Raycast 的广告，下次会在你的 PR，甚至你的代码库里塞些什么东西，你知道吗？

大公司的泔水，我真是一口都咽不下了。

本文来自微信公众号 [“爱范儿”（ID：ifanr）](https://mp.weixin.qq.com/s?__biz=MjgzMTAwODI0MA==&mid=2652449242&idx=1&sn=bd22660256d13c4c9054fbfc07c6a827&chksm=9a2b09a84d2000567186a12d16bb26faf0db13db25d37002436141cafeb2eb8aa2cb8cc37523&scene=0&xtrack=1#rd)，作者：咽不下泔水的，36氪经授权发布。
