import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source approved on 2026-09-07, revised 2026-10-03.
const landing: Dictionary["landing"] = {
  "metadata": {
    "title": "GhostYak Boxes | 免费 Windows 桌面整理工具",
    "description": "无需移动原文件，即可将文件、文件夹和应用快捷方式整理到盒子中。适用于个人、公司和工作用途的 Windows 桌面整理工具，基本功能免费。"
  },
  "brand": "GhostYak Boxes",
  "skip": "跳转到正文",
  "actions": {
    "download": "免费下载 Windows x64 版",
    "install": "安装指南",
    "viewScreenshot": "查看大图",
    "alternativeTo": "在 AlternativeTo 上了解",
    "release": "最新版本与更新内容",
    "feedback": "报告问题与反馈",
    "copy": "复制链接，在电脑上打开",
    "copied": "链接已复制",
    "copyFailed": "请选中并复制下方地址。",
    "copyField": "在电脑上打开的官网地址"
  },
  "hero": {
    "title": [
      "文件留在原处，",
      "桌面整理，",
      "随你心意。"
    ],
    "platform": "Windows 10/11 · 64 位",
    "mediaAlt": "Windows 桌面上的应用、照片、音乐和项目盒子，以列表视图打开的下载盒子，以及两个已折叠的盒子",
    "caption": "按任务用盒子整理的桌面",
  },
  "workflow": {
    "eyebrow": "按照工作方式整理",
    "title": "存储用文件夹，\n工作用盒子。",
    "description": "项目文件夹、文档和常用应用，即使位于不同位置，也能根据当前任务集中到一起。",
    "originalLabel": "原有文件夹",
    "originalItems": [
      "文档 / 方案",
      "项目 / 设计稿",
      "共享 / 日程"
    ],
    "boxItems": [
      "方案",
      "设计稿",
      "日程"
    ],
    "connection": "通过快捷方式连接",
    "boxLabel": "当前项目",
    "result": "整理方式示意图",
    "steps": [
      {
        "title": "右键拖动创建盒子",
        "description": "在桌面空白处按住鼠标右键拖动，创建所需大小的盒子。"
      },
      {
        "title": "拖入文件和文件夹",
        "description": "将需要的项目拖入盒子。同一个项目也可以连接到多个盒子。"
      },
      {
        "title": "移动、调整大小和折叠",
        "description": "拖动标题栏可移动盒子，拖动边缘可调整大小。双击标题栏空白处可折叠盒子。"
      }
    ],
    "extras": [
      "锁定布局，避免意外移动",
      "按显示器配置恢复位置和大小"
    ]
  },
  "free": {
    "eyebrow": "目前免费提供的功能",
    "title": "在家、在公司，都免费。",
    "description": "个人、公司和工作用途均可免费使用，无需注册账号或填写支付信息。",
    "currentTitle": "桌面整理",
    "price": "免费",
    "currentDescription": "盒子数量、项目数量和使用时间均无限制。",
    "currentFeatures": [
      "整理文件、文件夹和应用快捷方式",
      "移动、调整大小、折叠和锁定盒子",
      "按显示器配置恢复布局",
      "个人、公司和工作用途"
    ],
    "plannedNote": "未来计划将同步作为付费功能提供。具体功能、价格和时间将另行公布。"
  },
  "faq": {
    "title": "安装前的常见问题",
    "items": [
      {
        "question": "在公司使用也免费吗？",
        "answer": "是的。目前提供的桌面整理功能，个人、公司和工作用途均可免费使用，也不存在试用到期后必须付费的限制。"
      },
      {
        "question": "原有桌面图标和原文件会怎样？",
        "answer": "将项目拖入盒子后，会建立到其路径的连接。桌面上的原图标和文件仍然保留，从盒子中移除项目也不会删除原文件。双击桌面空白处，可以隐藏或重新显示所有原有桌面图标。"
      },
      {
        "question": "作为 Fences 替代品，适合哪些工作？",
        "answer": "适合将分散在不同文件夹中的资料和应用按任务集中到盒子中。可以将同一项目连接到多个盒子，折叠或锁定盒子，并记住不同显示器配置的布局。如果同时安装了 Fences，为避免双击冲突，Boxes 的双击功能默认关闭。"
      },
      {
        "question": "如何安装？",
        "answer": "在 64 位 Windows 10/11 上运行安装程序并按提示操作。安装无需管理员权限或 WebView2，按默认设置完成后，Boxes 会自动启动。",
        "link": "install"
      },
      {
        "question": "现在可以使用同步功能吗？",
        "answer": "暂未提供同步功能，未来计划作为付费功能推出。详细信息与发布时间将另行公布。"
      },
      {
        "question": "在哪里报告问题或提出建议？",
        "answer": "请使用 GitHub 的问题报告与反馈链接，并附上 Windows 和 Boxes 版本以及问题发生时的情况。",
        "link": "feedback"
      }
    ]
  },
  "download": {
    "title": "下载后，\n创建你的第一个盒子。",
    "description": "Windows 10/11 · 64 位 · 无需管理员权限即可安装",
    "steps": [
      {
        "title": "运行安装程序",
        "description": "运行下载的 GhostyakBoxes-x64-setup.exe，并按照安装提示操作。"
      },
      {
        "title": "安装完成后自动启动",
        "description": "在完成界面保持勾选运行 Ghostyak Boxes 的选项，完成安装后 Boxes 将自动启动。"
      },
      {
        "title": "创建第一个盒子",
        "description": "在桌面空白处按住右键拖动创建盒子，再拖入需要的文件或文件夹。"
      }
    ],
    "help": {
      "title": "安装后无法启动？",
      "launch": "如果在安装完成界面取消了运行选项，请从开始菜单打开 Ghostyak Boxes。",
      "feedback": "如果仍然无法启动，请提供 Windows 和 Boxes 版本以及错误信息。"
    },
    "source": "官方安装程序 · GitHub Releases"
  },
  "footer": {
    "description": "原文件留在原处，工作空间随你心意。",
    "navigation": "更多信息",
    "blog": "博客",
    "copyright": "© 2026 GhostYak"
  }
};

export default landing;
