// ==========================================================================
// 📖 《晏子使楚》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        U_TAG("晏子") + "出使" + U_TAG("楚国") + "。" + U_TAG("楚国") + "人因为" + U_TAG("晏子") + "身材矮小，就在大门旁边开辟了一个小门，来迎接" + U_TAG("晏子") + "进去。" + U_TAG("晏子") + "不肯进去，说道：“出使狗国的人，才从狗门进去；如今我出使" + U_TAG("楚国") + "，不应该从这个小门进去。”接引宾客的礼官只好改变路径，引导" + OMISSION_TAG("宾语", "晏子") + "从大门进去。<br>" +
        OMISSION_TAG("主语", "晏子") + "拜见" + U_TAG("楚") + "王，" + U_TAG("楚") + "王说：“" + U_TAG("齐国") + "难道没有人了吗？竟然派您来做使臣。”" + U_TAG("晏子") + "回答说：“" + U_TAG("齐国") + "的国都" + U_TAG("临淄") + "有三百闾（七千五百户人家），百姓张开衣袖就能遮天形成阴凉，挥洒汗水就像下雨一样，肩挨着肩、脚跟着脚地聚居在那里，为什么说没有人呢？”" + U_TAG("楚") + "王说：“既然这样，那么为什么派您来呢？”" + U_TAG("晏子") + "回答说：“" + U_TAG("齐国") + "派遣使臣是各有不同原则的：那些有才能的人，就派遣" + OMISSION_TAG("宾语", "他们") + "去出使贤明的君主；那些没有才能的人，就派遣" + OMISSION_TAG("宾语", "他们") + "去出使无能的君主。我" + U_TAG("晏婴") + "最没有才能，所以最适合派来出使" + U_TAG("楚国") + "啦！”" +
        "</span><br><br>" +
        "<strong>【古代文化常识与阅读提示（课本第98页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《晏子春秋》是记载" + U_TAG("春秋") + "时期" + U_TAG("齐国") + "著名政治家、外交家" + U_TAG("晏婴") + "（字仲，谥平）言行的历史典籍，后经" + U_TAG("汉朝") + U_TAG("刘向") + "整理为内、外八篇，本文选自《内篇杂下第六》。春秋时期诸侯争霸，到战国时期形成<strong>“战国七雄”（齐、楚、燕、韩、赵、魏、秦）</strong>。文中晏子面对楚国君臣的两次蓄意羞辱，不卑不亢，巧用<strong>归谬法（狗国狗门）</strong>与<strong>请君入瓮法（不肖使使不肖主）</strong>，捍卫了国家尊严与个人人格。</span>",

    paragraphs: {
        1: "<strong>【逐句白话直译与 UASA 考场采分点对照（上文下译）】</strong>" +
           "<div style='font-size:12.5px; color:var(--wrong-text); background:var(--wrong-bg); border:1px dashed var(--wrong-border); padding:6px 12px; border-radius:6px; margin-top:8px; font-weight:600;'>" +
               "💡 <strong>本课三大高频考点：</strong>① “使”字一词多义（出使／派遣／使臣）；② 通假字（道＝导，阴＝荫）；③ 三个源自本文的千古成语（<strong>张袂成阴、挥汗成雨、比肩继踵</strong>）。" +
           "</div>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 第 1 句对照卡片（城门交锋）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("晏子") + "[使]" + U_TAG("楚") + "。" + U_TAG("楚") + "人[以]" + U_TAG("晏子") + "[短]，[为]小门[于]大门之侧，而[延]" + U_TAG("晏子") + "。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("晏子") + "[出使]✓" + U_TAG("楚国") + "。" + U_TAG("楚国") + "人[因为]✓" + U_TAG("晏子") + "[身材矮小]✓，就[在]✓大门的旁边[开辟/设置]✓了一个小门，来[迎接/引进]✓" + U_TAG("晏子") + "。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("短", "身材矮小", "长度小（与“长”相对）") +
                       ANCIENT_MODERN_TAG("延", "引进、迎接", "延长、推迟") +
                       GRAMMAR_TAG("状语后置句", "为小门于大门之侧 ＝ 于大门之侧为小门") +
                   "</div>" +
               "</div>" +

               // 第 2 句对照卡片（狗国狗门之辩）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("晏子") + "不入，曰：“[使]狗国者，从狗门入，今[臣]使" + U_TAG("楚") + "，不[当]从此门入。”[傧者][更][道]" + CARET + "从大门入。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("晏子") + "不进去，说：“[出使]✓狗国的人，才从狗门进去，如今[我]✓出使" + U_TAG("楚国") + "，不[应该]✓从这扇门进去。”[接引宾客的人]✓便[改变]✓路径[引导]✓" + OMISSION_TAG("宾语", "晏子") + "从大门进去。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("道(dǎo)", "通“导”，引导、引路", "道路、道理（读 dào）") +
                       GRAMMAR_TAG("破音字", "更(gēng)＝改变、改换") +
                       GRAMMAR_TAG("逻辑手法", "归谬反击（走小门＝承认楚是狗国）") +
                   "</div>" +
               "</div>" +

               // 第 3 句对照卡片（朝堂交锋一：齐无人耶）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       CARET + "[见]" + U_TAG("楚") + "王，王曰：“" + U_TAG("齐") + "无人[耶]？[使][子]为[使]。”" + U_TAG("晏子") + "[对]曰：“" + U_TAG("齐") + "之" + U_TAG("临淄") + "三百[闾]，[张袂成阴]，[挥汗成雨]，[比肩继踵]而在，[何为]无人？”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       OMISSION_TAG("主语", "晏子") + "[拜见]✓" + U_TAG("楚") + "王，" + U_TAG("楚") + "王说：“" + U_TAG("齐国") + "没有人了[吗]✓？竟[派]✓[您]✓做[使臣]✓。”" + U_TAG("晏子") + "[回答]✓说：“" + U_TAG("齐国") + "的都城" + U_TAG("临淄") + "有三百[闾（居民区）]✓，[张开衣袖就能形成阴凉]✓，[挥洒汗水就像下雨]✓，百姓[肩挨着肩、脚跟着脚]✓地存在，[为什么]✓说没有人呢？”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("子", "对人的尊称，您", "儿子、儿女") +
                       ANCIENT_MODERN_TAG("阴", "通“荫”，阴影、树荫", "阴天、阴暗") +
                       GRAMMAR_TAG("一词多义", "使子（动词：派遣）为使（名词：使臣）") +
                       GRAMMAR_TAG("宾语前置", "何为无人 ＝ 为何无人（为什么）") +
                       GRAMMAR_TAG("修辞手法", "夸张＋排比（张袂成阴、挥汗成雨、比肩继踵）") +
                   "</div>" +
               "</div>" +

               // 第 4 句对照卡片（朝堂交锋二：不肖使楚）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "王曰：“[然则][何为]使子？”" + U_TAG("晏子") + "对曰：“" + U_TAG("齐") + "[使][使]各有所主，其[贤者]，[使]" + CARET + "[使]贤主；[不肖]者，使" + CARET + "使不肖主。" + U_TAG("晏") + "最不肖，[故][宜]使" + U_TAG("楚") + "矣！”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("楚") + "王说：“[既然这样，那么]✓[为什么]✓派您来呢？”" + U_TAG("晏子") + "回答说：“" + U_TAG("齐国") + "[派遣]✓[使臣]✓各有不同的原则，那些[有才能的人]✓，就[派遣]✓" + OMISSION_TAG("宾语", "他们") + "去[出使]✓贤明的君主；那些[没有才能的人]✓，就派遣" + OMISSION_TAG("宾语", "他们") + "去出使无能的君主。我" + U_TAG("晏婴") + "最没有才能，[所以]✓[适合/应该]✓派来出使" + U_TAG("楚国") + "啦！”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("不肖(bú xiào)", "才能不高、没有本领", "子孙品行不好、不孝") +
                       GRAMMAR_TAG("课本原题核心", "齐使（派遣）使（使臣） ／ 使（派遣）使（出使）贤主") +
                       GRAMMAR_TAG("辩论技巧", "将计就计、请君入瓮（自贬最不肖 → 推导出楚王是最不肖之主）") +
                   "</div>" +
               "</div>" +

           "</div>"
    }
};
