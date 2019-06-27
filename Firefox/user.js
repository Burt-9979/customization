//20190626

/*
# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.
# Note:
- OurSticky扩展导致百度网盘离线下载添加BT种子时窗口无法弹出
- Don't Fuck with my Scrolling脚本会导致某些直播视频无法加载
*/

/******************************************************************************************
 *这里是通用设置。
 *******************************************************************************************/

//*==========选项卡里的设置==========*//
user_pref("privacy.userContext.enabled", true);//启用身份标签页
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("browser.shell.checkDefaultBrowser", false);//总是检查是否为默认浏览器(否)
user_pref("browser.search.update", false);//禁用搜索引擎自动更新
user_pref("browser.search.suggest.enabled", false);//禁用搜索建议


//内容拦截
user_pref("browser.contentblocking.category", "custom");//内容拦截: 模式(自定义)
user_pref("privacy.trackingprotection.pbmode.enabled", false);//内容拦截: 跟踪器(否)
user_pref("network.cookie.cookieBehavior", 0);//内容拦截: cookie(否)
user_pref("privacy.trackingprotection.cryptomining.enabled", true);//内容拦截: 挖矿程序(是)
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);//内容拦截: 数字指纹跟踪程序(是)


//*==========标签相关==========*//
user_pref("browser.tabs.loadBookmarksInTabs", true);//新标签打开书签
user_pref("browser.tabs.warnOnClose", false);//关闭多个标签时不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//关闭其它标签时不提示
user_pref("browser.tabs.closeWindowWithLastTab", false);//关闭最后一个标签时不关闭Firefox
user_pref("browser.link.open_newwindow.restriction", 0);//单窗口模式(弹出窗口用标签打开)



//*==========下载相关==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次讯问我要存到何处
user_pref("browser.safebrowsing.downloads.enabled", false);//解决下载卡在最后一秒的问题
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*==========网络协议问题==========*//
user_pref("network.security.esni.enabled", true);


//*==========FX其它类==========*//
user_pref("general.warnOnAboutConfig", false);//AboutConfig警告
user_pref("extensions.e10sBlockedByAddons", false);//扩展禁用列表
user_pref("accessibility.force_disabled", 1); //禁用无障碍环境
user_pref("security.mixed_content.block_active_content", false); //关闭ssl不安全内容和混合内容保护1 (让小书签在https页面上起作用 )
user_pref("security.mixed_content.block_display_content", false); //关闭ssl不安全内容和混合内容保护2
user_pref("security.dialog_enable_delay", 0);//安装附加组件时的等待时间
user_pref("datareporting.healthreport.uploadEnabled", false);//关闭安全检测健康中心
user_pref("datareporting.policy.dataSubmissionEnabled", false); //关闭安全检测健康中心
user_pref("datareporting.healthreport.service.enabled", false);//禁止遥测往prefs.js写入数据
user_pref("browser.safebrowsing.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.safebrowsing.malware.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.safebrowsing.phishing.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不弹出"What's New"页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("browser.backspace_action", 2);//禁止Backspace键返回上一页
user_pref("dom.webcomponents.shadowdom.enabled", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("network.IDN_show_punycode", true);//避免钓鱼
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);//69以后自动加载 userChrome.ss 和 userContent.css



//*==========Firefox设置==========*//
//书签相关
user_pref("browser.bookmarks.autoExportHTML", true);//退出时自动备份书签html文件
user_pref("browser.bookmarks.max_backups", 5);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

//平滑滚动参数
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 150);
user_pref("mousewheel.acceleration.factor", 15);
user_pref("mousewheel.acceleration.start", 3);
user_pref("mousewheel.default.delta_multiplier_y", 160);

//插件
user_pref("dom.ipc.plugins.sandbox-level.flash", 0);//64位flash关闭沙箱
user_pref("extensions.blocklist.enabled", false);//关闭flash版本过旧被屏蔽的提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true); //直接用火狐禁用flash保护模式
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false); //flash崩溃报告crashreporter
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); //允许Firefox代您发送积压的崩溃报告（禁止）


//开启流媒体API
user_pref("dom.streams.enabled", true); 


/**
*会话相关
*/
user_pref("browser.sessionstore.interval", 3600000);//防止向SSD写入大量数量: 重写recovery.js文件的默认数值为“15000ms”(间隔时间15s), 改为1小时

/******************************************************************************************
 *这里是个人设置。
 *******************************************************************************************/

//*==========主页==========*//
user_pref("browser.startup.page", 1);//启动Firefox时显示主页
user_pref("browser.startup.homepage", "about:newtab");//首页
//标签页固定的网站(16个)
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://hbr.org/\",\"title\":\"HBR\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"https://www.wsj.com/\",\"title\":\"wsj\"},{\"url\":\"http://www.ft.com/\",\"title\":\"ft.com\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"https://www.techmeme.com/\",\"title\":\"Techmeme\"},{\"url\":\"http://www.ideamsg.com\",\"title\":\"灵感日报\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"卡饭\"},{\"url\":\"http://www.techweb.com.cn/\",\"title\":\"techweb\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"cnbeta\"},{\"url\":\"https://www.huxiu.com/\",\"title\":\"虎嗅\"},{\"url\":\"http://dig.chouti.com/\",\"title\":\"抽屉新热榜\"},{\"url\":\"http://www.tmtpost.com/\",\"title\":\"钛媒体\"},{\"url\":\"https://36kr.com/\",\"title\":\"36Kr\"},{\"url\":\"http://www.zhihu.com/\",\"title\":\"知乎\"}]");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);//常用网站2行展示
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);//不展示只言片语
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);//不展示集锦
