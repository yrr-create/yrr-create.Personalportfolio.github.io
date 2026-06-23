let isEnglish = true;

        const translations = {
            en: {
                navHome: "Home",
                navExperience: "Experience",
                navPortfolio: "Portfolio",
                navContact: "Contact",
                companyProjectsText: "Company Projects",
                personalProjectsText: "Personal Projects",
                keyWorkText: "Key Work",
                backText: "Click Back",
                detailsText: "More details",
                mainTitle: "YI RONGRONG",
                subtitle: "Embedded Firmware Engineer",
                aboutTitle: "About Me",
                aboutText: `
                Hi, I am Rongrong, an embedded firmware engineer with 4 years of experience in mass-produced smart wearable products, including smart rings, watches, and bands.
<br><br>
My main production experience is based on the Actions Technology AB56xx series wearable firmware platform, with additional project exposure to DA1468x and BK3288/BK32886 related firmware projects.
<br><br>
My work focuses on Bluetooth/BLE application development, application-layer features, UI/display adaptation, full-device firmware maintenance, issue investigation, flashing, validation, and customer-specific firmware customization.
<br><br>
I work across multiple SDKs and customer project branches using Source Insight, Code::Blocks, Visual Studio, SVN, SEGGER J-Link, and Git for code reading, firmware development, debugging, version control, and issue tracking.
                `,
                expTitle: "Experience",
                expContent: `
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2023 - Present</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Embedded Firmware Engineer</h3>
                        <h4>Shenzhen Jianyun Hulian Technology Co., Ltd.</h4>
                        <ul>
                            <li>Responsible for firmware development and maintenance of smart wearable products, including AI bracelets, smart rings and smart watches, using C/C++ for embedded feature development and iteration.</li>
                            <li>Developed, ported and debugged capacitive touch panel (CTP), display, sensor, charging, motor and other peripheral drivers based on AB5682C and AB202x platforms.</li>
                            <li>Implemented and optimized BLE communication features, including device pairing, data synchronization, notification handling, OTA/FOTA support and connection stability tuning.</li>
                            <li>Collaborated with hardware, QA and production teams to analyze defects, verify fixes and improve firmware stability for mass production.</li>
                            <li>Managed code versions using SVN, and maintained technical documents, release notes, issue records and debugging logs.</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2024 - 2026</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Bachelor's Degree | Part-time Undergraduate</h3>
                        <h4>Changsha University of Science and Technology | Computer Science and Technology</h4>
                        <p class="timeline-note"><strong>Core Courses:</strong> Assembly Language and Interface Technology, Operating Systems, Computer Organization Principles, C Programming, Computer Network Principles and Technology, Software Engineering.</p>

                        <h4>Graduation Design | BLE + SoftAP Camera Debugging App</h4>
                        <ul>
                            <li>Built an Android Kotlin debugging app for smart camera/glasses devices as a graduation design project.</li>
                            <li>Implemented BLE device discovery, GATT connection, SoftAP activation commands, Wi-Fi hotspot connection, and TCP SDK communication.</li>
                            <li>Supported live camera preview, audio channel testing, device status reading, factory control, logging, and issue diagnosis.</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2020 - 2023</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Associate Degree</h3>
                        <h4>Hunan Chemical Industry Polytechnic | Software Technology</h4>
                        <p class="timeline-note"><strong>Core Courses:</strong> Programming Fundamentals (C/C++), Data Structures and Algorithms, Linux Technology and Applications, Software Engineering, Python Programming, Database Principles.</p>
                        <p class="timeline-note"><strong>Awards:</strong> National Second Prize | National Undergraduate Mathematical Contest in Modeling (NUMCM)</p>

                        <h4>Student Union Office | Administrative Assistant</h4>
                        <p class="timeline-note">Planned and coordinated internal activities, sorted and filed official documents to ensure daily office efficiency.</p>
                        <p class="timeline-note">Assist instructors with arranging teaching venues and preparing course materials; collect, record and grade students' assignments.</p>
                        
                        <h4>Teaching Assistant</h4>
                        <p class="timeline-note">Provided academic and daily guidance for freshmen.</p>


                    </div>
                </div>
                `,
                contactTitle: "Contact Me",
                contactEmailLabel: "Email",
                contactEmail: "yirongrong012@gmail.com",
                contactFocusLabel: "Focus",
                contactFocus: "BLE Wearables · Embedded Firmware · MCU Development · IoT Devices",
                contactAvailabilityLabel: "Availability",
                contactAvailability: "Open to job opportunities and collaboration.",
                cvText: "Download CV",
                cvFile: "CV/Yi_Rongrong_Embedded_Firmware_Engineer_CV.pdf",
                sendEmailText: "Copy Email",
                copiedEmailText: "Email Copied",
                langBtn: "English"
            },
            zh: {
                navHome: "首页",
                navExperience: "经验",
                navPortfolio: "作品",
                navContact: "联系",
                companyProjectsText: "公司项目",
                personalProjectsText: "个人项目",
                keyWorkText: "主要工作",
                backText: "点击返回",
                detailsText: "查看详情",
                mainTitle: "易蓉蓉",
                subtitle: "嵌入式固件工程师",
                aboutTitle: "关于我",
                aboutText: `我是一名嵌入式固件工程师，拥有 4 年智能穿戴量产产品开发经验，参与过智能戒指、手表、手环等产品的固件开发与维护。
<br><br>
我的主要量产项目经验基于中科蓝讯 AB56xx 系列穿戴固件平台，同时也接触过 DA1468x、BK3288/BK32886 相关固件项目。
<br><br>
我的工作内容主要覆盖 Bluetooth/BLE 应用开发、应用层功能维护、UI/显示资源适配、整机固件维护、问题定位、烧录验证，以及客户定制版本的功能修改和问题跟进。
<br><br>
我日常使用 Source Insight、Code::Blocks、Visual Studio、SVN、SEGGER J-Link 和 Git 进行代码阅读、固件开发、调试、版本管理和问题跟踪。
                `,


                expTitle: "工作经历",
                expContent: `
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2023 - 至今</span>
                    </div>
                    <div class="timeline-content">
                        <h3>嵌入式固件工程师</h3>
                        <h4>深圳市健云互联科技有限公司</h4>
                        <ul>
                            <li>负责智能穿戴产品的固件开发与维护，包括 AI 手环、智能戒指和智能手表，使用 C/C++ 进行嵌入式功能开发和版本迭代。</li>
                            <li>基于 AB5682C 和 AB202x 平台进行电容触摸屏、显示屏、传感器、充电、马达等外设驱动的移植、适配和调试。</li>
                            <li>实现并优化 BLE 通信相关功能，包括设备配对、数据同步、消息通知处理、OTA/FOTA 支持和连接稳定性调试。</li>
                            <li>配合硬件、测试和生产团队分析缺陷、验证修复结果，并提升量产阶段固件稳定性。</li>
                            <li>使用 SVN 进行代码版本管理，并维护技术文档、发布说明、问题记录和调试日志。</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2024 - 2026</span>
                    </div>
                    <div class="timeline-content">
                        <h3>本科 | 非全日制</h3>
                        <h4>长沙理工大学 | 计算机科学与技术</h4>
                        <p class="timeline-note"><strong>核心课程：</strong>汇编语言与接口技术、操作系统、计算机组成原理、C 语言程序设计、计算机网络原理与技术、软件工程。</p>

                        <h4>毕业设计 | BLE + SoftAP 摄像头调试 App</h4>
                        <ul>
                            <li>作为毕业设计项目，开发面向智能摄像头/眼镜设备的 Android Kotlin 调试 App。</li>
                            <li>实现 BLE 设备发现、GATT 连接、SoftAP 激活指令、Wi-Fi 热点连接和 TCP SDK 通信流程。</li>
                            <li>支持实时摄像头预览、音频通道测试、设备状态读取、工厂控制、日志记录和问题诊断。</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2020 - 2023</span>
                    </div>
                    <div class="timeline-content">
                        <h3>大专</h3>
                        <h4>湖南化工职业技术学院 | 软件技术</h4>
                        <p class="timeline-note"><strong>核心课程：</strong>C/C++ 程序设计基础、数据结构与算法、Linux 技术与应用、软件工程、Python 程序设计、数据库原理。</p>
                        <p class="timeline-note"><strong>获奖：</strong>全国大学生数学建模竞赛国家二等奖</p>

                        <h4>学生会办公室 | 行政助理</h4>
                        <p class="timeline-note">策划并协调内部活动，整理和归档正式文件，协助保障办公室日常工作效率。</p>
                        <p class="timeline-note">协助讲师安排授课场地与准备授课材料，记录与收集学生的课程作业并参与评分。</p>
                        <h4>助教</h4>
                        <p class="timeline-note">为新生提供学习和日常事务方面的指导。</p>
                       
                    </div>
                </div>
                `,
                contactTitle: "联系我",
                contactEmailLabel: "邮箱",
                contactEmail: "3305855572@qq.com",
                contactFocusLabel: "方向",
                contactFocus: "BLE 可穿戴 · 嵌入式固件 · MCU 开发 · 物联网设备",
                contactAvailabilityLabel: "可联系方向",
                contactAvailability: "开放求职机会和技术协作。",
                cvText: "下载简历",
                cvFile: "CV/嵌入式软件工程师-易蓉蓉的简历.pdf",
                sendEmailText: "复制邮箱",
                copiedEmailText: "已复制",
                langBtn: "中文"
            }
        };

        function switchLanguage() {
            const lang = isEnglish ? 'zh' : 'en';
            const t = translations[lang];
            
            // 更新导航栏
            document.querySelector('.nav-home').textContent = t.navHome;
            document.querySelector('.nav-experience').textContent = t.navExperience;
            document.querySelector('.nav-portfolio').textContent = t.navPortfolio;
            document.querySelector('.nav-contact').textContent = t.navContact;
            document.querySelector('[data-category="company"]').textContent = t.companyProjectsText;
            document.querySelector('[data-category="personal"]').textContent = t.personalProjectsText;
            
            // 更新标题和 About
            document.getElementById('mainTitle').textContent = t.mainTitle;
            document.getElementById('subtitle').textContent = t.subtitle;
            document.getElementById('aboutTitle').textContent = t.aboutTitle;
            document.getElementById('aboutText').innerHTML = t.aboutText;
            
            // 更新 Experience 标题
            const expTitle = document.getElementById('expTitle');
            if (expTitle) expTitle.textContent = t.expTitle;
            const timeline = document.querySelector('#experience .timeline');
            if (timeline) timeline.innerHTML = t.expContent;
            
            // 更新 Contact 区域
            const contactTitle = document.getElementById('contactTitle');
            const contactEmailLabel = document.getElementById('contactEmailLabel');
            const contactEmail = document.getElementById('contactEmail');
            const contactFocusLabel = document.getElementById('contactFocusLabel');
            const contactFocus = document.getElementById('contactFocus');
            const contactAvailabilityLabel = document.getElementById('contactAvailabilityLabel');
            const contactAvailability = document.getElementById('contactAvailability');
            const cvBtn = document.getElementById('cvBtn');
            const emailBtn = document.getElementById('emailBtn');
            if (contactTitle) contactTitle.textContent = t.contactTitle;
            if (contactEmailLabel) contactEmailLabel.textContent = t.contactEmailLabel;
            if (contactEmail) {
                contactEmail.textContent = t.contactEmail;
                contactEmail.href = `mailto:${t.contactEmail}`;
            }
            if (contactFocusLabel) contactFocusLabel.textContent = t.contactFocusLabel;
            if (contactFocus) contactFocus.textContent = t.contactFocus;
            if (contactAvailabilityLabel) contactAvailabilityLabel.textContent = t.contactAvailabilityLabel;
            if (contactAvailability) contactAvailability.textContent = t.contactAvailability;
            if (cvBtn) {
                cvBtn.href = t.cvFile;
                cvBtn.innerHTML = t.cvText;
            }
            if (emailBtn) {
                emailBtn.href = `mailto:${t.contactEmail}`;
                emailBtn.textContent = t.sendEmailText;
            }
            
            // 更新按钮文字
            document.getElementById('langSwitch').textContent = t.langBtn;
            document.documentElement.lang = lang;
            isEnglish = !isEnglish;
            updateCompanyProject();
            updatePersonalProject();
        }

        document.getElementById('langSwitch').addEventListener('click', switchLanguage);

        function copyTextFallback(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.setAttribute('readonly', '');
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            const copied = document.execCommand('copy');
            document.body.removeChild(textArea);
            return copied;
        }

        async function copyContactEmail(event) {
            event.preventDefault();

            const lang = isEnglish ? 'en' : 'zh';
            const t = translations[lang];
            const emailBtn = document.getElementById('emailBtn');

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(t.contactEmail);
                } else if (!copyTextFallback(t.contactEmail)) {
                    window.location.href = `mailto:${t.contactEmail}`;
                    return;
                }

                if (emailBtn) {
                    emailBtn.textContent = t.copiedEmailText;
                    window.setTimeout(() => {
                        const currentLang = isEnglish ? 'en' : 'zh';
                        emailBtn.textContent = translations[currentLang].sendEmailText;
                    }, 1600);
                }
            } catch (error) {
                window.location.href = `mailto:${t.contactEmail}`;
            }
        }

        document.getElementById('emailBtn').addEventListener('click', copyContactEmail);
        
        // ========== 平滑滚动跳转 ==========
        document.querySelectorAll('.nav-menu a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // ========== Portfolio 数据 ==========
        const companyProjects = [
            {
                img: "img/company_projects/APP/app.png",
                title: "BLE + SoftAP Camera Debugging App",
                titleZh: "BLE + SoftAP 摄像头调试 App",
                desc: "Android Kotlin debugging tool for smart camera/glasses devices. It uses BLE to discover and activate the device, connects to the device SoftAP Wi-Fi, and builds a TCP SDK link for live camera preview, audio, device status, and factory control.",
                descZh: "基于 Android Kotlin 开发的智能摄像头/眼镜设备调试工具。App 通过 BLE 发现并激活设备，连接设备 SoftAP Wi-Fi，并通过 TCP SDK 建立实时预览、音频、设备状态和工厂控制通道。",
                tags: ["Android", "BLE", "SoftAP", "TCP", "Camera"],
                tagsZh: ["Android", "BLE", "SoftAP", "TCP", "摄像头"],
                keyWork: [
                    "Implemented BLE scanning, device filtering, RSSI-based selection, GATT connection, and notification handling.",
                    "Sent BLE commands to switch the device into SoftAP mode and parsed the returned Wi-Fi SSID.",
                    "Connected to the device hotspot using WifiNetworkSpecifier and bound the app network to SoftAP.",
                    "Integrated the TCP SDK for live preview, audio, device status, and control.",
                    "Added logs and breadcrumbs to diagnose BLE, Wi-Fi, TCP, and preview issues."
                ],
                keyWorkZh: [
                    "实现 BLE 扫描、设备过滤、RSSI 最强设备选择、GATT 连接和通知监听。",
                    "通过 BLE 下发进入 SoftAP 模式的控制命令，并解析设备返回的 Wi-Fi SSID。",
                    "使用 WifiNetworkSpecifier 连接设备热点，并将 App 网络绑定到 SoftAP 连接。",
                    "集成 TCP SDK，实现实时预览、音频、设备状态和控制通道。",
                    "增加日志和 breadcrumb，用于定位 BLE、Wi-Fi、TCP 和预览链路问题。"
                ]
            },
            {
                img: "img/company_projects/G22C/call.jpg",
                title: "G22C Round Smart Watch Firmware Production Project",
                titleZh: "G22C 圆屏智能手表固件量产项目",
                desc: "Production firmware project for a 360x360 round-screen smart watch based on the AB5682C platform, covering UI adaptation, BLE connectivity, FOTA, health features, sports modes, and release packaging.",
                descZh: "基于 AB5682C 平台交付的 360x360 圆屏智能手表固件项目，覆盖 UI 适配、BLE 连接、FOTA、健康功能、运动模式和出货包生成。",
                tags: ["AB5682C", "BLE", "FOTA", "Round UI", "Production"],
                tagsZh: ["AB5682C", "BLE", "FOTA", "圆屏 UI", "量产"],
                keyWork: [
                    "Adapted and debugged round-screen UI, menus, sports modes, settings, and device-side interactions.",
                    "Integrated 360x360 GC9C01 round display, touch input, button/rotary controls, motor alerts, and related peripherals.",
                    "Debugged connectivity features including BLE, ANCS, FOTA, and Bluetooth calling.",
                    "Supported issue investigation and release fixes for heart rate, step counting, sports records, sleep, and other health features.",
                    "Handled customer customization, UI resource packaging, version output, and pre-production issue closure.",
                    "Assisted firmware release packaging, version validation, and pre-production issue closure."
                ],
                keyWorkZh: [
                    "负责圆屏 UI、菜单、运动模式、设置项等功能适配与联调。",
                    "适配 360x360 GC9C01 圆屏显示、触控、按键/旋钮、马达等外设。",
                    "调试 BLE、ANCS、FOTA、蓝牙通话等连接类功能。",
                    "参与心率、计步、运动记录、睡眠等健康功能的问题定位与出货修复。",
                    "处理客户定制需求、资源打包、版本输出和量产前问题闭环。",
                    "协助完成固件出货包生成、版本验证和量产交付前的问题闭环。"
                ]
            },
            {
                img: "img/company_projects/K6/2.jpg",
                title: "AI Screenless Bracelet Firmware Adaptation and Voice Interaction Project",
                titleZh: "AI 无屏手环固件适配与语音交互项目",
                desc: "AB5682C-based firmware adaptation for an AI screenless bracelet project, covering BLE communication, audio recording and upload, AI conversation entry, translation recording, camera and short-video control, power management, and abnormal state feedback.",
                descZh: "基于 AB5682C 平台完成 AI 无屏手环项目的固件适配，覆盖 BLE 通信、录音与音频上传、AI 对话入口、翻译录音、拍照与短视频控制、电源管理和异常状态反馈。",
                tags: ["AB5682C", "BLE", "Audio", "Screenless UI", "Low Power"],
                tagsZh: ["AB5682C", "BLE", "音频", "无屏交互", "低功耗"],
                keyWork: [
                    "Developed firmware for an AI screenless bracelet project based on the AB5682C platform, supporting low-power BLE communication, audio recording, health data collection, and screenless interaction control.",
                    "Designed screenless interaction logic using single click, double click, long press, swing/shake gestures, RGB LED indicators, motor vibration, and audio prompts to provide clear user feedback without a display.",
                    "Implemented key functions including audio recording, offline audio storage, audio upload, AI conversation entry, translation recording, remote camera control, short-video control, incoming call handling, and alarm reminders.",
                    "Implemented BLE protocol handling for App command parsing, device status reporting, audio data transmission, health data synchronization, and connection state management.",
                    "Adapted peripheral modules including the heart rate sensor, motion sensor, battery voltage detection, charging detection, RGB LED, and vibration motor, covering low-battery alerts, charging status, full-charge status, and low-power standby behavior.",
                    "Supported OPUS audio encoding, BLE packet transmission, and offline recording upload workflow to meet the requirements of real-time voice interaction and stable data transfer.",
                    "Handled abnormal scenarios such as BLE disconnection, insufficient storage, recording file limit, and recording failure, with user feedback through LED and vibration patterns."
                ],
                keyWorkZh: [
                    "基于 AB5682C 平台完成 AI 无屏手环项目的固件开发与适配，支持低功耗 BLE 通信、录音、健康数据采集和无屏交互控制。",
                    "设计无屏交互逻辑，通过单击、双击、长按、甩动/摇一摇手势、RGB LED 指示、马达振动和语音提示，在无显示屏场景下提供清晰的用户反馈。",
                    "实现录音、离线音频存储、音频上传、AI 对话入口、翻译录音、远程拍照控制、短视频控制、来电处理和闹钟提醒等核心功能。",
                    "实现 BLE 协议处理，包括 App 指令解析、设备状态上报、音频数据传输、健康数据同步和连接状态管理。",
                    "适配心率传感器、运动传感器、电池电压检测、充电检测、RGB LED 和振动马达等外设，覆盖低电提醒、充电状态、满电状态和低功耗待机行为。",
                    "支持 OPUS 音频编码、BLE 分包传输和离线录音上传流程，满足实时语音交互和稳定数据传输需求。",
                    "处理 BLE 断开、存储空间不足、录音文件数量限制和录音失败等异常场景，并通过 LED 和振动模式进行用户反馈。"
                ]
            },
            {
                img: "img/company_projects/ring/yuya.jpg",
                title: "Tuya BLE Smart Ring Firmware Adaptation",
                titleZh: "Tuya BLE 智能戒指固件适配项目",
                desc: "AB202x-based smart ring firmware adaptation with Tuya BLE protocol integration, device authorization, app binding, health data upload, FOTA, dot-matrix display, sensor collection, and low-power feature debugging.",
                descZh: "基于 AB202x 平台完成一款 Tuya BLE 智能戒指固件适配，负责涂鸦 BLE 协议栈接入、设备授权配置、App 绑定通信、健康数据上报、FOTA 升级、点阵显示、传感器采集和低功耗功能联调。",
                tags: ["AB202x", "Tuya BLE", "FOTA", "Sensors", "Low Power"],
                tagsZh: ["AB202x", "Tuya BLE", "FOTA", "传感器", "低功耗"],
                keyWork: [
                    "Adapted smart ring firmware on the AB202x platform with low-power BLE communication and health data collection.",
                    "Integrated TuyaOS / Tuya BLE protocol features for app binding, device authentication, data synchronization, and OTA upgrade.",
                    "Configured Tuya device authorization information including PID, UUID, AuthKey, BLE advertising, connection, and data reporting logic.",
                    "Supported core smart ring features including heart rate, SpO2, step counting, sleep, brightness, find device, camera control, and message reminders.",
                    "Debugged connection stability, light display, low power behavior, sensor collection, dot-matrix display, and version iteration issues."
                ],
                keyWorkZh: [
                    "基于 AB202x 平台完成智能戒指固件适配，支持低功耗 BLE 通信与健康数据采集。",
                    "接入 TuyaOS / Tuya BLE 协议栈，实现涂鸦 App 绑定、设备认证、数据同步和 OTA 升级能力。",
                    "完成 Tuya 设备 PID、UUID、AuthKey 等授权信息配置，并适配 BLE 广播、连接和数据上报逻辑。",
                    "适配心率、血氧、计步、睡眠、亮度、找设备、拍照控制、消息提醒等智能戒指核心功能。",
                    "参与连接稳定性、灯光显示、低功耗、传感器采集、点阵显示和版本迭代问题调试。"
                ]
            },
            {
                img: "img/company_projects/W25/W25.png",
                title: "W25 Rectangular Smart Watch Firmware Adaptation",
                titleZh: "W25 长方屏智能手表固件适配项目",
                desc: "AB5682C-based firmware adaptation for a 172x320 rectangular-screen smart watch, covering display, touch, UI layout, Bluetooth features, health monitoring, sports modes, notifications, FOTA, and factory test workflows.",
                descZh: "基于 AB5682C 平台完成一款 172x320 长方屏智能手表固件适配，覆盖屏幕显示、触控、UI 布局、蓝牙功能、健康监测、运动模式、消息提醒、FOTA 和工厂测试流程。",
                tags: ["AB5682C", "172x320", "Touch", "FOTA", "Production"],
                tagsZh: ["AB5682C", "172x320", "触控", "FOTA", "量产"],
                keyWork: [
                    "Adapted the 172x320 rectangular-screen UI and layout on the AB5682C wearable firmware platform.",
                    "Integrated the GUI_TFT_JD9853_HSD147_172320 display configuration and CST816D touch solution.",
                    "Debugged full watch features including BLE, ANCS, FOTA, Bluetooth calling, heart rate, step counting, sports modes, messages, women's health, and factory tests.",
                    "Handled screen, touch, UI resource, and hardware-related adaptation issues during firmware integration.",
                    "Supported release package output, upgrade file validation, and pre-production issue closure."
                ],
                keyWorkZh: [
                    "基于 AB5682C 平台适配 172x320 长方屏 UI 和页面布局。",
                    "适配 GUI_TFT_JD9853_HSD147_172320 屏幕方案和 CST816D 触控方案。",
                    "联调 BLE、ANCS、FOTA、蓝牙通话、心率、计步、运动、消息、女性健康和工厂测试等完整手表功能。",
                    "处理屏幕、触控、UI 资源和硬件适配相关问题。",
                    "支持版本出货包输出、升级文件验证和量产前问题闭环。"
                ]
            },
            
        ];

        const personalProjects = [
            {
                img: "img/personal_projects/ble/2.jpg",
                
                title: "BLE Smart Asset Tracker",
                titleZh: "BLE 智能资产追踪器",
                desc: "A BLE warehouse asset tag prototype based on nRF52810 and Ebyte E73-2G4M04S1A. The device supports nearby item finding, BLE command control, physical LED/buzzer alerts, button-based stop control, and environmental monitoring with temperature, humidity, and VOC index reporting.",
                descZh: "基于 nRF52810 与亿佰特 E73-2G4M04S1A 开发的 BLE 仓储资产标签原型。设备支持近距离物品查找、BLE 命令控制、实体 LED/蜂鸣器提醒、按键停止控制，以及温湿度和 VOC 指数上报等环境监测功能。",
                tags: ["nRF52810", "BLE", "E73", "AHT20", "SGP40", "VOC"],
                tagsZh: ["nRF52810", "BLE", "E73", "AHT20", "SGP40", "VOC"],
                keyWork: [
                    "Implemented a BLE asset tag workflow covering advertising, connection, idle state, find-alert state, and alert stop behavior.",
                    "Built BLE UART communication on nRF52810 with S112 SoftDevice, using findon, findoff, and s? commands for device control and status query.",
                    "Added physical asset finding feedback with P0.18 LED indication, PWM buzzer alert, and board button stop control.",
                    "Integrated AHT20 over I2C for temperature and humidity monitoring, with env=normal/warning/alarm status reporting.",
                    "Integrated GY-SGP / SGP40 over I2C and added Sensirion VOC Index processing for air quality-related asset environment monitoring.",
                    "Changed sensor reporting to background periodic sampling, so BLE status queries return cached temperature, humidity, gas, and VOC data.",
                    "Verified BLE scanning, connection, notification, command writing, LED control, buzzer behavior, button stop, and sensor status reporting using nRF Connect.",
                    "Documented hardware wiring, flashing steps, SDK setup, debugging notes, sensor bring-up, and reproducible firmware setup."
                ],
                keyWorkZh: [
                    "实现 BLE 资产标签工作流程，覆盖广播、连接、空闲、查找提醒和提醒停止行为。",
                    "基于 nRF52810 与 S112 SoftDevice 实现 BLE UART 通信，使用 findon、findoff 和 s? 命令完成设备控制与状态查询。",
                    "通过 P0.18 LED 指示、PWM 蜂鸣器提醒和板载按键停止控制，实现实体资产查找反馈。",
                    "通过 I2C 集成 AHT20，实现温度和湿度监测，并支持 env=normal/warning/alarm 状态上报。",
                    "通过 I2C 集成 GY-SGP / SGP40，并加入 Sensirion VOC Index 处理，用于资产环境空气质量相关监测。",
                    "将传感器上报改为后台周期采样，使 BLE 状态查询可以返回缓存的温度、湿度、气体和 VOC 数据。",
                    "使用 nRF Connect 验证 BLE 扫描、连接、通知、命令写入、LED 控制、蜂鸣器行为、按键停止和传感器状态上报。",
                    "整理硬件接线、烧录步骤、SDK 搭建、调试记录、传感器 bring-up 和可复现的固件搭建说明。"
                ]
            },
            {
                img: "img/personal_projects/voice_recorder/1.jpg",
                title: "Basic Meeting Audio Recorder",
                titleZh: "基础会议录音存储器",
                desc: "Planned and researched a basic meeting audio recorder focused on an app-free, network-free, and account-free recording experience. The device starts recording with a physical button, stores audio as standard WAV files, and exposes recordings directly to a computer through USB-C.",
                descZh: "规划并预研一款基础会议录音存储设备，目标是实现免 App、免联网、免账号的录音体验。设备通过实体按键开始录音，将音频保存为标准 WAV 文件，并通过 USB-C 连接电脑后直接显示录音文件。",
                tags: ["ESP32-S3", "I2S", "WAV", "microSD", "USB-C", "Audio"],
                tagsZh: ["ESP32-S3", "I2S", "WAV", "microSD", "USB-C", "音频"],
                keyWork: [
                    "Planned the minimum hardware architecture using ESP32-S3, digital MEMS microphone, microSD, USB-C, physical button, and LED indication.",
                    "Designed the core recording, storage, and USB file export workflow to verify the most basic end-to-end loop first.",
                    "Researched WAV file storage behavior, including file numbering, header rewrite after recording stops, and power-loss protection.",
                    "Planned the firmware state machine for standby, recording, saving, USB export, and error states.",
                    "Defined the first development phase without App, Bluetooth, Wi-Fi, AI transcription, display, or dual-microphone noise reduction to reduce early complexity.",
                    "Defined the verification order: button and LED, microSD file access, I2S microphone capture, WAV saving, computer playback, and USB MSC export."
                ],
                keyWorkZh: [
                    "规划 ESP32-S3、数字 MEMS 麦克风、microSD、USB-C、实体按键和 LED 指示的最小硬件方案。",
                    "设计录音、存储、USB 文件导出三条核心链路，优先验证最基础的端到端闭环。",
                    "预研 WAV 文件保存方式，包括文件编号、录音停止后回填 header、异常断电保护等关键点。",
                    "规划固件状态机，包括待机、录音、保存、USB 导出和错误状态。",
                    "明确第一阶段暂不加入 App、蓝牙、Wi-Fi、AI 转写、屏幕、双麦降噪等非核心功能，降低初期开发复杂度。",
                    "制定开发验证顺序：按键和 LED、microSD 文件读写、I2S 麦克风采集、WAV 保存、电脑播放和 USB MSC 导出。"
                ]
            },
            {
                img: "img/personal_projects/stm32/1.jpg",
                title: "STM32 Learning Projects",
                desc: "Various STM32 development projects including peripherals and RTOS.",
                tags: ["STM32", "ARM", "RTOS"]
            }
        ];
        //1.获取所有导航菜单的链接
        const navLinks = document.querySelectorAll('.nav-menu a');
        //2.绑定点击事件
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                //3.移除所有链接的active类名
                navLinks.forEach(nav  => {
                    nav.classList.remove('active')
                });
                //4.给当前点击的链接添加active类名
                this.classList.add('active');
            });
        });


        // 当前索引
        let companyIndex = 0;
        let personalIndex = 0;
        let companyDetailsOpen = false;
        let personalDetailsOpen = false;
        
        // 自动轮播定时器
        let autoInterval;
        const carouselPauseReasons = new Set();

        function getProjectText(project, field) {
            const zhField = `${field}Zh`;
            return !isEnglish && project[zhField] ? project[zhField] : project[field];
        }

        function getCurrentLangText(key) {
            return translations[isEnglish ? 'en' : 'zh'][key];
        }

        function getCurrentProject(type) {
            return type === 'company' ? companyProjects[companyIndex] : personalProjects[personalIndex];
        }

        function renderProjectContent(type, project, detailsOpen) {
            const content = document.querySelector(`#${type}-project-card .project-content`);
            const card = document.getElementById(`${type}-project-card`);
            const carousel = document.querySelector(`#${type}-projects .carousel`);
            const details = getProjectText(project, 'keyWork');

            card.classList.toggle('detail-open', detailsOpen);
            carousel.classList.toggle('detail-open', detailsOpen);

            if (detailsOpen && details && details.length) {
                content.innerHTML = `
                    <button class="project-back-btn" type="button" onclick="closeProjectDetails('${type}')">${getCurrentLangText('backText')}</button>
                    <h3>${getCurrentLangText('keyWorkText')}</h3>
                    <ul class="project-key-work">
                        ${details.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                `;
                return;
            }

            const detailsButton = details && details.length
                ? `<button class="project-more-btn" type="button" onclick="openProjectDetails('${type}')" aria-label="${getCurrentLangText('detailsText')}" title="${getCurrentLangText('detailsText')}">···</button>`
                : '';

            content.innerHTML = `
                <h3 id="${type}-project-title">${getProjectText(project, 'title')}</h3>
                <p id="${type}-project-desc">${getProjectText(project, 'desc')}</p>
                <div class="project-tags" id="${type}-project-tags">
                    ${getProjectText(project, 'tags').map(tag => `<span>${tag}</span>`).join('')}
                </div>
                ${detailsButton}
            `;
        }

        function renderProjectMedia(type, project) {
            const mediaContainer = document.querySelector(`#${type}-project-card .project-image`);
            const mediaId = `${type}-project-img`;
            const altText = getProjectText(project, 'title');
            mediaContainer.classList.toggle('has-video', project.img.endsWith('.mp4'));

            if (project.img.endsWith('.mp4')) {
                mediaContainer.innerHTML = `
                    <video id="${mediaId}" autoplay loop muted playsinline>
                        <source src="${project.img}" type="video/mp4">
                    </video>
                `;
            } else {
                mediaContainer.innerHTML = `<img id="${mediaId}" src="${project.img}" alt="${altText}">`;
            }
        }

        // 更新公司项目显示
        function updateCompanyProject() {
            const project = companyProjects[companyIndex];
            if (project) {
                renderProjectMedia('company', project);
                renderProjectContent('company', project, companyDetailsOpen);
            }
            updateDots('company');
        }

        // 更新个人项目显示
        function updatePersonalProject() {
            const project = personalProjects[personalIndex];
            if (project) {
                renderProjectMedia('personal', project);
                renderProjectContent('personal', project, personalDetailsOpen);
            }
            updateDots('personal');
        }

        // 更新导航点
        function updateDots(type) {
            const projects = type === 'company' ? companyProjects : personalProjects;
            const currentIndex = type === 'company' ? companyIndex : personalIndex;
            const dotsContainer = document.getElementById(`${type}-dots`);
            
            dotsContainer.innerHTML = '';
            projects.forEach((_, idx) => {
                const dot = document.createElement('span');
                dot.className = 'dot' + (idx === currentIndex ? ' active' : '');
                dot.onclick = () => {
                    if (type === 'company') {
                        companyIndex = idx;
                        updateCompanyProject();
                        resetAutoTimer();
                    } else {
                        personalIndex = idx;
                        updatePersonalProject();
                        resetAutoTimer();
                    }
                };
                dotsContainer.appendChild(dot);
            });
        }

        // 切换项目
        function changeProject(type, direction) {
            if (type === 'company') {
                companyDetailsOpen = false;
                resumeCarousel('details');
                companyIndex = (companyIndex + direction + companyProjects.length) % companyProjects.length;
                updateCompanyProject();
            } else {
                personalDetailsOpen = false;
                resumeCarousel('details');
                personalIndex = (personalIndex + direction + personalProjects.length) % personalProjects.length;
                updatePersonalProject();
            }
            resetAutoTimer();
        }

        function openProjectDetails(type) {
            pauseCarousel('details');
            if (type === 'company') {
                companyDetailsOpen = true;
                updateCompanyProject();
            } else {
                personalDetailsOpen = true;
                updatePersonalProject();
            }
        }

        function closeProjectDetails(type) {
            if (type === 'company') {
                companyDetailsOpen = false;
                updateCompanyProject();
            } else {
                personalDetailsOpen = false;
                updatePersonalProject();
            }
            resumeCarousel('details');
        }

        function pauseCarousel(reason) {
            carouselPauseReasons.add(reason);
        }

        function resumeCarousel(reason) {
            carouselPauseReasons.delete(reason);
            if (carouselPauseReasons.size === 0) {
                resetAutoTimer();
            }
        }

        function advanceActiveProject() {
            if (carouselPauseReasons.size > 0) return;

            // 获取当前激活的分类
            const activeContainer = document.querySelector('.projects-container.active-container');
            if (activeContainer && activeContainer.id === 'company-projects') {
                companyIndex = (companyIndex + 1) % companyProjects.length;
                updateCompanyProject();
            } else if (activeContainer && activeContainer.id === 'personal-projects') {
                personalIndex = (personalIndex + 1) % personalProjects.length;
                updatePersonalProject();
            }
        }

        // 重置自动轮播定时器
        function resetAutoTimer() {
            if (autoInterval) clearInterval(autoInterval);
            autoInterval = setInterval(advanceActiveProject, 5000);
        }

        function setupCarouselPause() {
            document.querySelectorAll('.carousel').forEach(carousel => {
                carousel.addEventListener('mouseenter', () => pauseCarousel('hover'));
                carousel.addEventListener('mouseleave', () => resumeCarousel('hover'));
                carousel.addEventListener('pointerdown', () => pauseCarousel('press'));
                carousel.addEventListener('pointerup', () => resumeCarousel('press'));
                carousel.addEventListener('pointercancel', () => resumeCarousel('press'));
                carousel.addEventListener('focusin', () => pauseCarousel('focus'));
                carousel.addEventListener('focusout', () => resumeCarousel('focus'));
            });
        }

        function openImageLightbox(type) {
            const project = getCurrentProject(type);
            if (!project || project.img.endsWith('.mp4')) return;

            const lightbox = document.getElementById('imageLightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            const lightboxCaption = document.getElementById('lightboxCaption');

            lightboxImage.src = project.img;
            lightboxImage.alt = getProjectText(project, 'title');
            lightboxCaption.textContent = getProjectText(project, 'title');
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            pauseCarousel('lightbox');
        }

        function closeImageLightbox() {
            const lightbox = document.getElementById('imageLightbox');
            const lightboxImage = document.getElementById('lightboxImage');

            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
            lightboxImage.src = '';
            document.body.style.overflow = '';
            resumeCarousel('lightbox');
        }

        function setupImageLightbox() {
            document.getElementById('company-project-card').querySelector('.project-image').addEventListener('click', () => openImageLightbox('company'));
            document.getElementById('personal-project-card').querySelector('.project-image').addEventListener('click', () => openImageLightbox('personal'));
            document.getElementById('lightboxClose').addEventListener('click', closeImageLightbox);
            document.getElementById('imageLightbox').addEventListener('click', event => {
                if (event.target.id === 'imageLightbox') {
                    closeImageLightbox();
                }
            });
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape' && document.getElementById('imageLightbox').classList.contains('open')) {
                    closeImageLightbox();
                }
            });
        }

        // 分类切换
        const tabBtns = document.querySelectorAll('.tab-btn');
        const companyContainer = document.getElementById('company-projects');
        const personalContainer = document.getElementById('personal-projects');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                if (category === 'company') {
                    personalDetailsOpen = false;
                    resumeCarousel('details');
                    companyContainer.classList.add('active-container');
                    personalContainer.classList.remove('active-container');
                    updatePersonalProject();
                    updateCompanyProject();
                    resetAutoTimer();
                } else {
                    companyDetailsOpen = false;
                    resumeCarousel('details');
                    personalContainer.classList.add('active-container');
                    companyContainer.classList.remove('active-container');
                    updateCompanyProject();
                    updatePersonalProject();
                    resetAutoTimer();
                }
            });
        });


        // 初始化
        setupCarouselPause();
        setupImageLightbox();
        updateCompanyProject();
        updatePersonalProject();
        resetAutoTimer();
        
        // 将 changeProject 挂载到 window 对象
        window.changeProject = changeProject;
        window.openProjectDetails = openProjectDetails;
        window.closeProjectDetails = closeProjectDetails;
