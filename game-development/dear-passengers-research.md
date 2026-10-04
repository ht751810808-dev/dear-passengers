# Dear Passengers：浏览器样板研究

核验日期：2026-10-04（Asia/Shanghai）。用途：指导本站独立实现可玩的浏览器概念样板。不是官方游戏源码、官方 Demo 或官方发布版本。

## 一手资料与当前状态

- [Steam 商店，App 4534960](https://store.steampowered.com/app/4534960/Dear_Passengers/)：FLEXUS 开发/发行，商店仍显示未发行、2026 年；本次没有看到公开 Demo 下载入口。核心是第一人称合作经营混乱航空公司，飞行、服务乘客、风险货物、物理混乱与天气。
- [FLEXUS 官方游戏网站](https://dearpassengers.game/)：由 Steam 的官网链接指向；名称相近的 `.com`、`.org`、`.net`、wiki/guide 网站大量为第三方，不能当作官方。
- [2026-10-02 官方 Q&A（Steam 新闻）](https://steamcommunity.com/app/4534960/allnews/)：当前最多 4 人；邀请码/好友邀请；近距离语音；无固定职业；飞机操作详细但简化，可离开驾驶位，允许撞机；风险货物会实际引发事件；有航班间成长；闭测计划通过 Discord 公布。没有承诺具体发行日期，暂不计划沙盒模式、难度档或竞技模式。网络上仍写「人数未公布」「没有成长信息」的 7—9 月攻略已经过时。
- [FLEXUS 官方 1:58 公告预告片](https://www.youtube.com/watch?v=XRvd_HZesys)：宣传剪辑，不是完整无剪辑 Demo。无法由此核定键位、计分、伤害数值、任务数量或完整流程。
- [Steam 结构化公共数据](https://store.steampowered.com/api/appdetails?appids=4534960)：本次取得 10 张官方截图及预告片流地址，作为视觉依据。

## 视觉还原优先级（直接检查官方截图）

1. **第一人称站在机舱中。** 视点接近成人站立高度，手在画面下方；主视角手部为明亮蓝色、有圆润手指。拿咖啡、汉堡托盘、锤子、冰镐时具有明显前景物件。
2. **机舱辨识度。** 大尺寸圆角矩形舷窗、乳白色分段内壁、灰色机身拱肋、深蓝地毯、浅灰两条通道线。座椅为鲜亮皇家蓝，白/奶油色椅背外壳、棕色扶手、黑色安全带；深蓝行李架底部有白色分段灯。窗外明亮蓝天与层云。
3. **角色形状胜过复杂贴图。** 身体和头部偏长胶囊形，硕大的凸出白眼球、很小的黑色瞳孔，圆润短四肢。机组为纯色红/黄/绿/蓝，穿白短袖衬衫、深蓝领带、金条肩章、紫蓝飞行员帽和黑帽檐。乘客为肉色，卡通块状头发与休闲衣服，神情夸张。
4. **生活物件产生喜剧。** 红/黄/蓝/粉色行李箱，淡蓝塑料水瓶、罐子、香蕉皮、消防器、棕色泰迪熊。送餐是圆汉堡与酒红咖啡杯、浅色杯盖。仓内可以摆网状货物笼、木箱。
5. **驾驶舱。** 环绕式大玻璃、灰蓝仪表板、圆形模拟仪表、绿色雷达屏、红/绿发光按钮、双杆油门、黑色操纵盘。上方深蓝显示屏是飞机线框轮廓加受损区域标识。飞机外壳白色、黄色腰线、蓝色机腹与发动机。
6. **混乱是空间事件。** 行李横向滑动、乘客挥手/摇晃，红灯警报，舱壁破洞、黑色焦边、露出电线，窗外暗蓝暴风与飞行碎片。不要只做菜单数字变化；摇晃、物件位移和角色反应才接近公开画面。

官方截图以无 HUD 或极少 HUD 为主；能直接看到的玩家名是悬浮白色圆胖字，上方有语音扬声器图标。没有足够资料还原最终主菜单和计分界面，本站此部分需明确为样板设计。

另已抽样检查官方 Steam 预告片帧：能看到玩家用双手扣乘客安全带、手持咖啡杯、货物笼和敞开后舱门、颠簸使行李与乘客升空、机翼结冰并持冰镐、红色警报灯覆盖机舱、端汉堡托盘。这些可作为具体交互/反馈依据；抽帧检查图位于 `/tmp/dear-passengers-research/trailer-sheet.jpg`，每约 7 秒一帧，不代表连续流程顺序。

## 可执行的样板循环（实现建议，非官方玩法规格）

以 3—5 分钟单航班压缩呈现：选货物风险 → 起飞 → 在机舱移动、按乘客要求端咖啡/汉堡 → 颠簸让行李散落 → 用工具处理电路/舱壁或灭火 → 可进入驾驶舱调整稳定度 → 风险货物制造额外事件 → 飞抵终点并结算。

建议将服务、维修、货物固定设为距离内交互，鼠标视角 + WASD/方向键移动；第一分钟给清晰可达的小任务。为浏览器单人版补充自动驾驶，需标记这是概念样板，不声称官方单人规则。模式/计分、任务时间、具体按键、数值及关卡路线都是实现设计。

## 逐张官方截图索引

截图临时检查副本位于 `/tmp/dear-passengers-research/steam-0.jpg` 至 `steam-9.jpg`，不作为生产资产依赖。

| 编号 | 直接观察 | 官方原图 |
|---|---|---|
| 0 | 蓝色双手、操纵盘、圆形仪表、机头外红绿机组 | [驾驶舱](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/b28210ec5549d2cda898099e6d4a5c29153b2f35/ss_b28210ec5549d2cda898099e6d4a5c29153b2f35.1920x1080.jpg) |
| 1 | 汉堡托盘、黄色机组举锤、破裂舱壁、飞出窗外乘客 | [损坏机舱](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/8587fe02b49b18e907bc271403aca145aac23b2d/ss_8587fe02b49b18e907bc271403aca145aac23b2d.1920x1080.jpg) |
| 2 | 玻璃机场大厅、登机队列、行李传送带与安检门 | [机场](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/de1051493ef5690ab1a17d7c2fc35a74a42a4ea1/ss_de1051493ef5690ab1a17d7c2fc35a74a42a4ea1.1920x1080.jpg) |
| 3 | 咖啡服务、蓝座椅、系安全带乘客、绿色机组拿扫把 | [日间机舱](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/12ea170121330ac9040a00257436552a9b2368a1/ss_12ea170121330ac9040a00257436552a9b2368a1.1920x1080.jpg) |
| 4 | 林地机场、敞开后货舱坡道、行李车 | [装载](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/7d572221193bf6d9a3294f7a59af4d093afb6ba1/ss_7d572221193bf6d9a3294f7a59af4d093afb6ba1.1920x1080.jpg) |
| 5 | 手持锤子、从机外看到破壁和起火顶棚 | [修复](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/59919ca43b7423a86e31e69e5f7ddc7b1fe7dcc3/ss_59919ca43b7423a86e31e69e5f7ddc7b1fe7dcc3.1920x1080.jpg) |
| 6 | 驾驶舱后视、顶置飞机状态屏、机头鸟群 | [驾驶仪表布局](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/442dcbff83ae722b28b063e2b453a96d75f1d465/ss_442dcbff83ae722b28b063e2b453a96d75f1d465.1920x1080.jpg) |
| 7 | 冰镐、冰冻机翼、蓝紫色暴风雪 | [结冰](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/9fdf57c8e8d2946d9c82ebece8ce7c311f587d41/ss_9fdf57c8e8d2946d9c82ebece8ce7c311f587d41.1920x1080.jpg) |
| 8 | 后舱门敞开、包裹、警察乘客、外部峡谷 | [货舱](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/a30af7fc82215257ef5f0934d3be1fb5d7f4d5fb/ss_a30af7fc82215257ef5f0934d3be1fb5d7f4d5fb.1920x1080.jpg) |
| 9 | 机翼烧烤、红绿机组、冰箱与饮料瓶 | [机翼](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/0f97770ed578a9ce1a20309e58a3bd1cc3cce099/ss_0f97770ed578a9ce1a20309e58a3bd1cc3cce099.1920x1080.jpg) |

## 不确定项

没有可验证的公开完整版/公开 Demo，因此无法验证正式关卡、单人辅助机制、准确 UI、物理参数、完整物品列表、进度保存、经济数值和全部操控。检索结果还混入同名火车手机游戏，与 FLEXUS 飞机游戏无关。官方 Q&A 的 1—90 分钟表述带有玩笑性质，不宜用作严格时长规格。
