const introNode = {
    question: "侧卫家族识别助手",
    hint: `
        本工具通过一系列选择题帮助你识别侧卫系列战机的具体型号。<br><br>
        <strong>使用说明：</strong><br>
        根据图片或观察到的特征，选择对应的选项，最终将给出型号名称。<br><br>
        点击下方按钮开始。
    `,
    isIntro: true  // 标记为介绍页，渲染时使用特殊按钮
};

const decisionTree = {
    question: "座舱布局",
    hint: "选择座舱布局，单选；单座：一名飞行员；双座串联：两名飞行员，前后排列；双座并列：两名飞行员，并排排列",
    options: [
        {text: "[单座]", next: "single_seat"},
        {text: "[双座]", next: "double_seat"},
    ]
}

const branches = {
    // 单座分支
    single_seat: {
        question: "翼尖是否弧形？",
        hint: "翼尖弧形是判断早期原型机与量产机的关键特征之一 <br> <img src='images/arc_wings.png' width='200'>",
        options: [
            {text: "[是]", next: "arc_wings"},
            {text: "[否]", next: "no_arc_wings"},
        ]
    },
    arc_wings: {
        question: "尾喷管亮吗？",
        hint: " ",
        options: [
            {text: "[亮]", result: {name: "T-10-1/T-10-2", desc: "使用AL-21的早期原型机"}},
            {text: "[暗]", result: {name: "T-10-3", desc: "使用AL-31的原型机"}},
        ]
    },
    no_arc_wings: {
        question: "有无挂架？",
        hint: " ",
        options: [
            {text: "[有]", next: "no_pylon"},
            {text: "[无]", result: {name: "T-10-15", desc: "用来打破记录的改装机"}},
        ]
    },
    no_pylon: {
        question: "IRST是否中置？",
        hint: "IRST，即红外搜索与跟踪系统，在侧卫上通常是座舱前部的一个圆形凸起 <br> <img src='images/IRST.png' width='200'>",
        options: [
            {text: "[无]", result: {name: "苏-27PD", desc: "第一架有完整空中加油装置的现代化改进版本"}},
            {text: "[是]", next: "mid_IRST"},
            {text: "[否]", next: "side_IRST"},
        ]
    },
    mid_IRST: {
        question: "空中加油装置？",
        hint: " ",
        options: [
            {text: "[有]", result: {name: "苏-27SK Indonesia", desc: "有空中加油装置的本土化升级型"}},
            {text: "[无]", next: "no_refuel"}
        ]
    },
    no_refuel: {
        question: "有无MAWS？",
        hint: "MAWS，即导弹预警系统，通常是座舱后部的一个小型天线阵列 <br> <img src='images/MAWS.webp' width='200'>",
        options: [
            {text: "[有]", result: {name: "歼-11A MLU/后期型", desc: "零件全国产化；让被白罗斯大技霸调教催眠后的N001雷达以为自己在射R27半主动雷达弹，实则R77主动雷达弹；配备MAWS"}},
            {text: "[无]", next: "no_MAWS"}
        ]
    },
    no_MAWS: {
        question: "尾喷管长这样吗？",
        hint: "<br> <img src='images/ws-10.png' width='200'>",
        options: [
            {text: "[是]", next: "ws10"},
            {text: "[否]", result: {name: "苏-27SK/歼-11A 早期型", desc: "第一批引进中国的苏-27SK/国产歼-11A，仍使用AL-31F发动机"}}
        ]
    },
    ws10: {
        question: "有海军标吗？",
        hint: " ",
        options: [
            {text: "[有]", result: {name: "歼-11BH", desc: "解放军海军使用的歼-11B，H代表海军"}},
            {text: "[无]", next: "no_navy_mark"}
        ]
    },
    no_navy_mark: {
        question: "雷达罩颜色？",
        hint: " ",
        options: [
            {text: "[灰色]", result: {name: "歼-11BG", desc: "换装了AESA（有源相控阵）雷达的歼-11B"}},
            {text: "[黑色]", result: {name: "歼-11B", desc: "解放军空军吃透设计后生产的第一款大改歼-11，机体航电发动机全面升级，比原装进口苏-27的性能高到不知道哪里去了"}},
        ]
    },
    side_IRST: {
        question: "有无减速板？",
        hint: "侧卫家族的减速板位于机体背部，降落时展开以增加空气阻力 <br> <img src='images/airbrake.png' width='200'>",
        options: [
            {text: "[有]", next: "airbrake"},
            {text: "[无]", result: {name: "苏-35S", desc: "最新的俄罗斯侧卫改进型"}}
        ]
    },
    airbrake: {
        question: "有无矢量推力控制？",
        hint: "矢量推力控制是指喷管能够改变喷气方向",
        options: [
            {text: "[有]", result: {name: "苏-37", desc: "使用AL-37F的T-10M11"}},
            {text: "[无]", next: "no_thrust_vectoring"}
        ]
    },
    no_thrust_vectoring: {
        question: "有无鸭翼？",
        hint: "鸭翼是位于机体前部、主翼前方的小型升力面 <br> <img src='images/canard.jpg' width='200'>",
        options: [
            {text: "[有]", next: "canard"},
            {text: "[无]", next: "no_canard"}
        ]
    },
    no_canard: {
        question: "尾喷管长这样吗？",
        hint: "<br> <img src='images/ws-10.png' width='200'>",
        options: [
            {text: "[是]", result: {name: "歼-11D", desc: "使用新航电系统和复合材料的歼-11，但数量稀少"}},
            {text: "[否]", next: "no_ws10"}
        ]
    },
    no_ws10: {
        question: "有空中加油装置吗？",
        hint: " ",
        options: [
            {text: "[有]", result: {name: "苏-27SKM", desc: "苏-27SK的现代化出口版本"}},
            {text: "[无]", result: {name: "苏-27SM/SM2/SM3", desc: "苏-27S的中期改进型"}},
        ]
    },
    canard: {
        question: "机翼可折叠吗？",
        hint: "如果可以折叠，通常机翼上方会有明显的铰链结构",
        options: [
            {text: "[是]", next: "folding_wings"},
            {text: "[否]", result: {name: "苏-27M", desc: "苏-37前身"}},
        ]
    },
    folding_wings: {
        question: "L型翼尖挂架？",
        hint: "如图 <br> <img src='images/l_pylon.jpg' width='200'>",
        options: [
            {text: "[是]", result: {name: "歼-15", desc: "解放军海军第一款国产舰载机，以从乌克兰购买的T-10K为蓝本设计，L型挂架发射PL-8"}},
            {text: "[否]", next: "no_l_pylon"}
        ]
    },
    no_l_pylon: {
        question: "涂装？",
        hint: " ",
        options: [
            {text: "[灰色]", result: {name: "歼-15T", desc: "弹射型歼-15，苏-33理想中的自己"}},
            {text: "[蓝色]", result: {name: "苏-33", desc: "俄罗斯海军使用的舰载机，然而你大俄连航母都快没了"}},
        ]
    },
    // 双座分支
    double_seat: {
        question: "并联双座？",
        hint: "并联双座：两名飞行员左右并排",
        options: [
            {text: "[是]", next: "nose"},
            {text: "[否]", next: "tandem_seat"},
        ]
    },
    nose: {
        question: "机鼻形状",
        hint: " ",
        options: [
            {text: "[扁平]", result: {name: "苏-34", desc: "俄罗斯的双座重型战斗轰炸机，具有独特的鸭嘴形机鼻"}},
            {text: "[圆形]", result: {name: "苏-33UB", desc: "苏-33的双座教练型，主要用于飞行员训练"}},
        ]
    },
    tandem_seat: {
        question: "中置IRST？",
        hint: " ",
        options: [
            {text: "[是]", next: "tandem_mid_IRST"},
            {text: "[否]", next: "tandem_side_IRST"},
        ]
    },
    tandem_mid_IRST: {
        question: "发动机长这样吗？",
        hint: "<br> <img src='images/ws-10.png' width='200'>",
        options: [
            {text: "[是]", next: "tandem_ws10"},
            {text: "[否]", next: "tandem_ru_engine"}
        ]
    },
    tandem_ws10: {
        question: "有海军标吗？",
        hint: " ",
        options: [
            {text: "[有]", result: {name: "歼-11BSH", desc: "解放军海军使用的双座歼11B"}},
            {text: "[无]", result: {name: "歼-11BS", desc: "解放军空军使用的双座歼11B，一般认为是歼-16的技术来源"}}
        ]
    },
    tandem_ru_engine: {
        question: "前起落架是否厚实？",
        hint: " ",
        options: [
            {text: "[是]", result: {name: "苏-27UB", desc: "基于苏-27S的双座改进型"}},
            {text: "[否]", result: {name: "苏-27UBK", desc: "基于苏-27S的双座改进型，K代表出口"}},
        ]
    },
    tandem_side_IRST: {
        question: "有无减速板？",
        hint: "侧卫家族的减速板位于机体背部，降落时展开以增加空气阻力 <br> <img src='images/airbrake.png' width='200'>",
        options: [
            {text: "[有]", next: "tandem_airbrake"},
            {text: "[无]", result: {name: "苏-35UB", desc: "苏-35双座型"}}
        ]
    },
    tandem_airbrake: {
        question: "多少个挂点？",
        hint: "武器挂载点，决定了作战能力",
        options: [
            {text: "[10]", result: {name: "苏-27PU/苏-30", desc: "早期双座侧卫"}},
            {text: "[12]", next: "armload_12"}
        ]
    },
    armload_12: {
        question: "尾喷管长这样吗？",
        hint: "<br> <img src='images/ws-10.png' width='200'>",
        options: [
            {text: "[是]", next: "td_sdir_ws10"},
            {text: "[否]", next: "td_sdir_ru_engine"}
        ]
    },
    td_sdir_ws10: {
        question: "有无翼尖挂载？",
        hint: "<br> <img src='images/j16d.jpg' width='200'>",
        options: [
            {text: "[有]", result: {name: "歼-16D", desc: "歼-16的电子战版本，可以在东海南海给敌军各种屏幕播放喜羊羊（bushi）"}},
            {text: "[无]", result: {name: "歼-16", desc: "写作多用途，读作炸弹卡车，火力方面评价五个字：请输入文本"}}
        ]
    },
    td_sdir_ru_engine: {
        question: "垂直尾翼是否切角？",
        hint: "<br> <img src='images/cut_tail.png' width='200'>",
        options: [
            {text: "[是]", result: {name: "苏-30MKK/MK2/MKV/M2", desc: "中国/委内瑞拉/俄罗斯的现代化（雷达：？）苏-30"}},
            {text: "[否]", next: "no_cut_tail"}
        ]
    },
    no_cut_tail: {
        question: "有鸭翼吗？",
        hint: "<br> <img src='images/canard.jpg' width='200'>",
        options: [
            {text: "[有]", next: "tandem_canard"},
            {text: "[无]", result: {name: "苏-30M", desc: "早期苏-30"}}
        ]
    },
    tandem_canard: {
        question: "机翼可折叠吗？",
        hint: " ",
        options: [
            {text: "[可]", result: {name: "歼-15S", desc: "歼-15双座型"}},
            {text: "[不]", next: "no_folding_wings"}
        ]
    },
    no_folding_wings: {
        question: "IFF天线在座舱前吗？",
        hint: "IFF，即敌我识别 <br> <img src='images/iff.jpg' width='200'>",
        options: [
            {text: "[是]", result: {name: "苏-30MKI", desc: "使用了部分西方系统的苏-30MKI马来西亚版"}},
            {text: "[不]", next: "no_front_iff"}
        ]
    },
    no_front_iff: {
        question: "垂尾整流罩长这样吗？",
        hint: "<br> <img src='images/s30sm.png' width='200'>",
        options: [
            {text: "[是]", result: {name: "苏-30SM/SM2", desc: "俄罗斯自用的最先进的苏30"}},
            {text: "[不]", result: {name: "苏-30MKI", desc: "有鸭翼和矢量发动机的印度苏-30MK"}}
        ]
    }
}

// 核心渲染逻辑
let currentNode = introNode;

function renderNode(node) {
    const app = document.getElementById("app");
    if (!node) return;

    //如果是结果节点，直接显示结果
    if (node.result) {
        app.innerHTML = `
            <div class="result-box">
                <div style="font-size: 18px; opacity:0.8;">结果</div>
                <div class="result-name">${node.result.name}</div>
                <div class="result-desc">${node.result.desc}</div>
            </div>
        `;
        return;
    }

    // 如果是介绍页（特殊处理，只有一个开始按钮）
    if (node.isIntro) {
        app.innerHTML = `
            <div class="question-box">
                <div class="question-text">${node.question}</div>
                <div class="hint-image"><span>${node.hint}</span></div>
                <div class="options-container">
                    <button class="option-btn" onclick="startRecognition()">开始识别</button>
                </div>
            </div>
        `;
        return;
    }

    // 普通题目节点
    let optionsHtml = '';
    node.options.forEach(opt => {
        optionsHtml += `<button class="option-btn" onclick="handleOptionClick(${JSON.stringify(opt).replace(/"/g, '&quot;')})">${opt.text}</button>`;
    });
    
    const hintHtml = node.hint ? `<div class="hint-image"><span>提示：${node.hint}</span></div>` : '';

    app.innerHTML = `
        <div class="question-box">
            <div class="question-text">${node.question}</div>
            ${hintHtml}
            <div class="options-container">
                ${optionsHtml}
            </div>
        </div>    
    `;
}

// 开始识别：跳转到第一道选择题
function startRecognition() {
    currentNode = decisionTree;
    renderNode(currentNode);
}

function handleOptionClick(selectedOption) {
    if (selectedOption.result) {
        currentNode = {result: selectedOption.result};
    } else if (selectedOption.next) {
        currentNode = branches[selectedOption.next] || decisionTree;
    } else {
        console.error("选项配置错误，缺少result或next属性");
        return;
    }
    renderNode(currentNode);
}

// 重新开始：回到介绍页
function restart() {
    currentNode = introNode;
    renderNode(currentNode);
}

// 初始化
window.onload = () => {
    renderNode(introNode);
};