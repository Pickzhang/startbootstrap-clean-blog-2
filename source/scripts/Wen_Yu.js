function WenYu() {
    // 基于准备好的dom，初始化echarts实例
    // let myChart = echarts.init(document.getElementById('Wen_Yu'));
    var dom = document.getElementById('Wen_Yu');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    let option = {
        title: {
            text: '文\n玉\n煤\n矿\n一\n到\n六\n月\n份\n用\n电\n情\n况',
            // textVerticalAlign: 'bottom',
            textAlign: 'bottom',
            top: 'middle',
            // left: '2.3%',
            textStyle: {
                fontWeight: 'bolder',
                fontSize: 25
            }
        },

        color: ['#2db7f5', '#ff6600', '#808bc6', '#61c0bf', '#ff5722', '#eeeeee', '#00adb5', '#303841'],
        legend: {
            icon: 'roundRect',
            data: ['1月最大分时负荷(1.19号)', '1月最小分时负荷(1.2号)', '2月最大分时负荷(2.16号)', '2月最小分时负荷(2.4号)', '3月最大分时负荷(3.3号)', '3月最小分时负荷(3.15号)', '4月最大分时负荷(4.23号)', '4月最小分时负荷(4.8号)', '5月最大分时负荷(5.8号)', '5月最小分时负荷(5.15号)', '6月最大分时负荷(6.4号)', '6月最小分时负荷(6.25号)'],
            textStyle: {
                fontSize: 12,
                color: '#666'
            },
            top: '1.4%',
            width: '100%',
            // left: '8%',
        },
        label: {
            show: true,
            position: 'bottom',
            textStyle: {
                fontSize: 10
            }
        },
        toolbox: {
            show: true,                                 //是否显示工具栏组件
            orient: 'vertical',                        //工具栏 icon 的布局朝向'horizontal' 'vertical'
            itemSize: 15,                                 //工具栏 icon 的大小
            itemGap: 10,                                  //工具栏 icon 每项之间的间隔
            showTitle: true,                             //是否在鼠标 hover 的时候显示每个工具 icon 的标题
            feature: {
                mark: {                                 // '辅助线开关'
                    show: true
                },
                dataView: {                            //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
                    show: true,                         //是否显示该工具。
                    title: "数据视图",
                    readOnly: false,                    //是否不可编辑（只读）
                    lang: ['数据视图', '关闭', '刷新'],  //数据视图上有三个话术，默认是['数据视图', '关闭', '刷新']
                    backgroundColor: "#fff",             //数据视图浮层背景色。
                    textareaColor: "#fff",               //数据视图浮层文本输入区背景色
                    textareaBorderColor: "#333",         //数据视图浮层文本输入区边框颜色
                    textColor: "#000",                    //文本颜色。
                    buttonColor: "#c23531",              //按钮颜色。
                    buttonTextColor: "#fff",             //按钮文本颜色。
                },
                magicType: {                            //动态类型切换
                    show: true,
                    title: "切换",                       //各个类型的标题文本，可以分别配置。
                    type: ['line', 'bar'],              //启用的动态类型，包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）
                },
                restore: {                             //配置项还原。
                    show: true,                         //是否显示该工具。
                    title: "还原",
                },
                saveAsImage: {                         //保存为图片。
                    show: true,                         //是否显示该工具。
                    type: "png",                         //保存的图片格式。支持 'png' 和 'jpeg'。
                    name: "pic1",                        //保存的文件名称，默认使用 title.text 作为名称
                    backgroundColor: "#ffffff",        //保存的图片背景色，默认使用 backgroundColor，如果backgroundColor不存在的话会取白色
                    title: "保存为图片",
                    pixelRatio: 1                        //保存图片的分辨率比例，默认跟容器相同大小，如果需要保存更高分辨率的，可以设置为大于 1 的值，例如 2
                },
                dataZoom: {                             //数据区域缩放。目前只支持直角坐标系的缩放
                    show: true,                         //是否显示该工具。
                    title: "缩放",                       //缩放和还原的标题文本
                    xAxisIndex: 0,                       //指定哪些 xAxis 被控制。如果缺省则控制所有的x轴。如果设置为 false 则不控制任何x轴。如果设置成 3 则控制 axisIndex 为 3 的x轴。如果设置为 [0, 3] 则控制 axisIndex 为 0 和 3 的x轴
                    yAxisIndex: false,                   //指定哪些 yAxis 被控制。如果缺省则控制所有的y轴。如果设置为 false 则不控制任何y轴。如果设置成 3 则控制 axisIndex 为 3 的y轴。如果设置为 [0, 3] 则控制 axisIndex 为 0 和 3 的y轴
                },
            },
            zlevel: 0,                                   //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
            z: 2,                                         //所属组件的z分层，z值小的图形会被z值大的图形覆盖
            // left: "center",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
            top: "middle",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
            right: "5%", //                               //组件离容器右侧的距离,'20%'
            bottom: "auto",                              //组件离容器下侧的距离,'20%'
            width: "auto",                               //图例宽度
            height: "auto",                              //图例高度
        },
        grid: {
            top: '15%',
            height: 620
        },
        xAxis: {
            type: 'category',
            data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
            // data: ['0-1时', '1-2时', '2-3时', '3-4时', '4-5时', '5-6时', '6-7时', '7-8时', '8-9时', '9-10时', '10-11时', '11-12时', '12-13时', '13-14时', '14-15时', '15-16时', '16-17时', '17-18时', '18-19时', '19-20时', '20-21时', '21-22时', '22-23时', '23-24时']
        },
        yAxis: {
            type: 'value',
            max: 'dataMax',
            alignTicks: 'true',
        },
        series: [
            {
                name: '1月最大分时负荷(1.19号)',
                data: [3360.0, 3960.0, 3960.0, 3600.0, 3600.0, 3480.0, 3000.0, 2040.0, 2040.0, 1920.0, 2040.0, 2160.0, 1800.0, 2160.0, 2040.0, 1800.0, 3720.0, 3840.0, 4440.0, 4320.0, 3240.0, 4200.0, 2640.0, 0.0],
                type: 'line',
            },
            {
                name: '1月最小分时负荷(1.2号)',
                data: [240.0, 360.0, 480.0, 360.0, 360.0, 360.0, 360.0, 360.0, 360.0, 240.0, 480.0, 360.0, 360.0, 360.0, 360.0, 360.0, 240.0, 240.0, 360.0, 480.0, 360.0, 360.0, 360.0, 0.0],
                type: 'line',
            },
            {
                name: '2月最大分时负荷(2.16号)',
                data: [4200.0, 4080.0, 4560.0, 4680.0, 4080.0, 4680.0, 3600.0, 2040.0, 1800.0, 1680.0, 1800.0, 2160.0, 1800.0, 2040.0, 2400.0, 1920.0, 3480.0, 5040.0, 4440.0, 4680.0, 4080.0, 3960.0, 3840.0, 0.0],
                type: 'line',
            },
            {
                name: '2月最小分时负荷(2.4号)',
                data: [960.0, 960.0, 960.0, 960.0, 840.0, 1080.0, 1080.0, 840.0, 1080.0, 720.0, 840.0, 600.0, 600.0, 600.0, 600.0, 840.0, 960.0, 840.0, 1080.0, 600.0, 600.0, 600.0, 720.0, 0.0],
                type: 'line',
            },
            {
                name: '3月最大分时负荷(3.3号)',
                data: [4200.0, 4080.0, 4320.0, 4560.0, 3720.0, 4680.0, 4320.0, 3840.0, 1680.0, 1680.0, 1800.0, 2040.0, 1920.0, 2040.0, 1680.0, 1920.0, 3960.0, 3960.0, 4200.0, 3600.0, 4080.0, 3960.0, 3480.0, 0.0],
                type: 'line',
            },
            {
                name: '3月最小分时负荷(3.15号)',
                data: [600.0, 480.0, 600.0, 600.0, 480.0, 360.0, 480.0, 720.0, 840.0, 840.0, 1080.0, 960.0, 1080.0, 840.0, 840.0, 960.0, 1080.0, 1200.0, 960.0, 840.0, 1080.0, 960.0, 840.0, 0.0],
                type: 'line',
            },
            {
                name: '4月最大分时负荷(4.23号)',
                data: [3840.0, 4080.0, 3720.0, 3960.0, 3720.0, 3240.0, 3600.0, 3000.0, 1800.0, 1560.0, 1560.0, 1320.0, 840.0, 1560.0, 1560.0, 1920.0, 3120.0, 4440.0, 4080.0, 3840.0, 3840.0, 4440.0, 3720.0, 3120.0],
                type: 'line',
            },
            {
                name: '4月最小分时负荷(4.8号)',
                data: [3720.0, 4200.0, 3720.0, 3840.0, 3480.0, 3600.0, 4080.0, 2400.0, 1920.0, 1560.0, 1680.0, 1920.0, 1920.0, 1680.0, 1080.0, 1680.0, 3960.0, 3720.0, 3480.0, 3720.0, 4080.0, 3720.0, 3960.0, 3360.0],
                type: 'line',
            },
            {
                name: '5月最大分时负荷(5.8号)',
                data: [3720.0, 4200.0, 3720.0, 3840.0, 3480.0, 3600.0, 4080.0, 2400.0, 1920.0, 1560.0, 1680.0, 1920.0, 1920.0, 1680.0, 1080.0, 1680.0, 3960.0, 3720.0, 3480.0, 3720.0, 4080.0, 3720.0, 3960.0, 3360.0],
                type: 'line',
            },
            {
                name: '5月最小分时负荷(5.15号)',
                data: [840.0, 840.0, 720.0, 720.0, 720.0, 960.0, 840.0, 600.0, 600.0, 600.0, 720.0, 960.0, 840.0, 840.0, 840.0, 600.0, 840.0, 840.0, 960.0, 840.0, 720.0, 960.0, 840.0, 0.0],
                type: 'line'
            },
            {
                name: '6月最大分时负荷(6.4号)',
                data: [840.0, 840.0, 840.0, 0.0, 3720.0, 3960.0, 2880.0, 2880.0, 1320.0, 1080.0, 1320.0, 1440.0, 1200.0, 1440.0, 1560.0, 1920.0, 2760.0, 2280.0, 2880.0, 3120.0, 3600.0, 3600.0, 3120.0, 2880.0],
                type: 'line'
            },
            {
                name: '6月最小分时负荷(6.25号)',
                data: [480.0, 360.0, 480.0, 480.0, 480.0, 600.0, 360.0, 480.0, 360.0, 360.0, 240.0, 240.0, 360.0, 480.0, 600.0, 720.0, 0.0, 3240.0, 3240.0, 3600.0, 3600.0, 3360.0, 2280.0, 2040.0],
                type: 'line'
            }
        ],
    };
    myChart.setOption(option);
    window.addEventListener('resize', myChart.resize);
}