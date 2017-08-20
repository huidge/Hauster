(function(){
        //折线图
        var echartsLine = echarts.init(document.getElementById('echarts-line'));
        var lineOption = {
            legend: {
                itemWidth: 12,
                itemHeight: 12,
                data:[ { name: '当日接口访问量', icon: 'circle' },{ name: '当日绑定用户量', icon: 'roundRect' } ],
                textStyle: { color: "#ffffff" },
                selectedMode: 'single',
                inactiveColor: "rgba(234,234,234,0.75)"
            },
            color: [ "rgba(255,255,255,0.85)" ],
            tooltip : {
                trigger: 'axis',
                padding: [5, 10],
                axisPointer: { lineStyle: { color: "rgba(255,255,255,0.75)", type: 'dashed' } }
            },
            grid: { show: false, left: '5%', right: '5%', bottom: '5%' },
            xAxis: [{
                type: 'category',
                axisLine: { show: false, lineStyle: { color: "rgba(255,255,255,0.85)" } },
                axisTick: { show: false },
                axisLabel: { show: false },
                splitLine: { show: false },
                boundaryGap: false,
                data: JSON.parse('["2017-01-08","2017-01-09","2017-01-10","2017-01-11","2017-01-12","2017-01-13","2017-01-14","2017-01-15","2017-01-16","2017-01-17","2017-01-18","2017-01-19","2017-01-20","2017-01-21","2017-01-22","2017-01-23","2017-01-24","2017-01-25","2017-01-26","2017-01-27","2017-01-28","2017-01-29","2017-01-30","2017-01-31","2017-02-01","2017-02-02","2017-02-03","2017-02-04","2017-02-05","2017-02-06","2017-02-07","2017-02-08","2017-02-09","2017-02-10","2017-02-11","2017-02-12","2017-02-13","2017-02-14","2017-02-15","2017-02-16","2017-02-17","2017-02-18","2017-02-19","2017-02-20","2017-02-21","2017-02-22","2017-02-23","2017-02-24","2017-02-25","2017-02-26","2017-02-27","2017-02-28","2017-03-01","2017-03-02","2017-03-03","2017-03-04","2017-03-05","2017-03-06","2017-03-07","2017-03-08","2017-03-09","2017-03-10","2017-03-11","2017-03-12","2017-03-13","2017-03-14","2017-03-15","2017-03-16","2017-03-17","2017-03-18","2017-03-19","2017-03-20","2017-03-21","2017-03-22","2017-03-23","2017-03-24","2017-03-25","2017-03-26","2017-03-27","2017-03-28","2017-03-29","2017-03-30","2017-03-31","2017-04-01","2017-04-02","2017-04-03","2017-04-04","2017-04-05","2017-04-06","2017-04-07","2017-04-08","2017-04-09","2017-04-10","2017-04-11","2017-04-12","2017-04-13","2017-04-14","2017-04-15","2017-04-16","2017-04-17","2017-04-18","2017-04-19","2017-04-20","2017-04-21","2017-04-22","2017-04-23","2017-04-24","2017-04-25","2017-04-26","2017-04-27","2017-04-28","2017-04-29","2017-04-30","2017-05-01","2017-05-02","2017-05-03","2017-05-04","2017-05-05","2017-05-06","2017-05-07","2017-05-08","2017-05-09","2017-05-10","2017-05-11","2017-05-12","2017-05-13","2017-05-14","2017-05-15","2017-05-16","2017-05-17","2017-05-18","2017-05-19","2017-05-20","2017-05-21","2017-05-22","2017-05-23","2017-05-24","2017-05-25","2017-05-26","2017-05-27","2017-05-28","2017-05-29"]')
            }],
            yAxis: [{
                type : 'value',
                axisLine: { show: false, lineStyle: { color: "rgba(255,255,255,0.85)" } },
                axisTick: { show: false },
                axisLabel: { show: false },
                splitLine: { show: false }
            }],
            series: [{
                name: '当日接口访问量',
                type: 'line',
                smooth: true,
                smoothMonotone: 'x',
                symbol: 'circle',
                symbolSize: 6,
                showAllSymbol: true,
                lineStyle: { normal: { color: 'rgba(255,255,255,0.5)' } },
                areaStyle: { normal: { color: 'rgba(255,255,255,0.25)' } },
                label: { normal: { show: true, position: 'top', textStyle: { color: 'rgba(255,255,255,0.85)' } } },
                data: JSON.parse('[2085,59314,35753,17182,11336,8718,6150,6764,10686,16257,20440,5380,4601,3570,2787,2245,2392,2351,2169,1944,1904,1722,1686,1525,1656,1570,1730,1726,1452,1641,1734,1747,1749,1979,1824,1798,771,106,616,2536,2231,469,2107,3069,3567,7089,6291,7060,8353,16106,26957,26249,21990,19053,13655,305,8421,19709,17205,16453,13443,10906,4356,7804,15872,18730,17620,16030,12916,6009,8103,19049,18262,17968,15759,11502,5874,6508,17977,16986,19077,14388,12518,9164,3533,3577,8421,16228,13317,12011,6693,8605,16605,21658,12254,4529,4855,5433,8599,18540,22776,16036,8710,11450,5400,11880,29318,21217,17525,17260,11055,3426,3943,9063,21099,20375,17440,15430,7614,23589,35014,22127,19483,17440,12832,6826,25197,24364,20645,19990,17733,13559,5697,9070,19105,20673,21287,18595,14884,15432,4755,4127]')
            }, {
                name: '当日绑定用户量',
                type: 'line',
                smooth: true,
                smoothMonotone: 'x',
                symbol: 'roundRect',
                symbolSize: 6,
                showAllSymbol: true,
                lineStyle: { normal: { color: 'rgba(255,255,255,0.5)' } },
                areaStyle: { normal: { color: 'rgba(255,255,255,0.25)' } },
                label: { normal: { show: true, position: 'top', textStyle: { color: 'rgba(255,255,255,0.85)' } } },
                data: JSON.parse('[86,2282,808,235,116,75,41,35,77,91,114,21,15,7,8,5,11,4,6,3,6,2,4,4,2,6,6,3,6,10,5,3,7,14,6,4,3,4,5,22,5,5,9,14,46,41,15,23,72,99,104,78,40,27,19,51,30,34,26,32,9,13,25,38,23,19,13,12,10,13,17,24,15,7,4,3,24,13,23,14,14,9,6,8,5,21,13,19,10,12,24,26,9,6,1,7,13,20,26,24,9,8,8,60,151,26,18,25,4,6,4,2,28,28,17,27,28,138,126,11,11,13,8,4,81,91,27,16,23,6,3,2,16,25,23,18,12,20,3,1]')
            }]
        };
        echartsLine.setOption(lineOption);
        //条形图
        var echartsBar = echarts.init(document.getElementById('echarts-bar'));
        var action_list = JSON.parse('[{"action":"登录","count":197551},{"action":"查课表","count":131399},{"action":"查询学生信息","count":66294},{"action":"查空教室","count":48260},{"action":"查询考试安排","count":33866},{"action":"查询成绩","count":28158},{"action":"查询一卡通消费记录","count":22342},{"action":"查询教学班学生名单","count":19390},{"action":"查询电费","count":13760},{"action":"查询学费信息","count":9910},{"action":"绑定用户","count":6690},{"action":"借书查询","count":6453},{"action":"查询所有报修记录","count":6286},{"action":"获取反馈列表","count":1691},{"action":"切换绑定用户","count":1186},{"action":"查看报修记录详情","count":539},{"action":"报修","count":474},{"action":"反馈","count":152}]');
        var action_name = { //各接口名简称
            '登录':'登录', '查询成绩':'成绩', '查询考试安排':'考试', '查询学生信息':'学生查询', '查课表':'课表',
            '查询一卡通消费记录':'一卡通', '查空教室':'空教室', '绑定用户':'绑定', '查询电费':'电费', '查询学费信息':'学费', '借书查询':'借阅',
            '查询所有报修记录':'报修列表', '切换绑定用户':'切换绑定', '获取反馈列表':'反馈列表', '查询教学班学生名单':'学生查询', '查看报修记录详情':'报修详情',
            '反馈':'反馈', '报修':'报修申请'
        };
        action_list = action_list.map(function(e){  //处理接口名
            e.action = action_name[e.action] || e.action;
            return e;
        });
        var barOption = {
            baseOption: {
                legend: {
                    itemWidth: 12,
                    itemHeight: 12,
                    data:[ { name: '用户主动访问接口量', icon: 'roundRect' } ],
                    textStyle: { color: "#ffffff" },
                    selectedMode: false
                },
                color: [ "rgba(255,255,255,0.85)" ],
                tooltip : {
                    trigger: 'axis',
                    padding: [5, 10],
                    axisPointer: { type: 'shadow', shadowStyle: { color: "rgba(255,255,255,0)" } }
                },
                grid: { show: false, left: '5%', right: '5%', bottom: '10%' },
                xAxis: [{
                    type: 'category',
                    axisLine: { show: false, lineStyle: { color: "rgba(255,255,255,0.85)" } },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel:{ interval: 0, textStyle: { fontSize: 11 } },
                    boundaryGap: false,
                    data: action_list.map(function(e){return e.action})
                }],
                yAxis: [{
                    type : 'value',
                    axisLine: { show: false, lineStyle: { color: "rgba(255,255,255,0.85)" } },
                    axisTick: { show: false },
                    axisLabel: { show: false },
                    splitLine: { show: false }
                }],
                series: [{
                    name: '用户主动访问接口量',
                    type: 'bar',
                    showAllSymbol: true,
                    itemStyle: { normal: { color: 'rgba(255,255,255,0.25)' }, emphasis: { color: 'rgba(255,255,255,0.7)' } },
                    label: { normal: { show: true, position: 'top', textStyle: { color: 'rgba(255,255,255,0.85)' } } },
                    data: action_list.map(function(e){return e.count})
                }]
            },
            media: [{
                query: {
                    maxWidth: 720
                },
                option: {
                    grid: {  left:'17%' },
                    //xy翻转
                    yAxis: [{
                        type: 'category',
                        axisLine: { show: false, lineStyle: { color: "rgba(255,255,255,0.85)" } },
                        axisTick: { show: false },
                        splitLine: { show: false },
                        axisLabel:{ interval: 0, textStyle: { fontSize: 11 } },
                        boundaryGap: false,
                        data: action_list.map(function(e){return e.action}).reverse()
                    }],
                    xAxis: [{
                        type : 'value',
                        position: 'top',
                        axisLine: { show: false, lineStyle: { color: "rgba(255,255,255,0.85)" } },
                        axisTick: { show: false },
                        axisLabel: { show: false },
                        splitLine: { show: false }
                    }],
                    series: [{
                        label: { normal: { position: 'right' }, emphasis: { position: 'right' } },
                        data: action_list.map(function(e){return e.count}).reverse()
                    }]
                }
            }]
        };
        echartsBar.setOption(barOption);
    })();
