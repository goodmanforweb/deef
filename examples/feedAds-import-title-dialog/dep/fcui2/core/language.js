define(function (require) {

    var language = 'ch';
    var data = {
        ch: {
            switch: {
                on: '开',
                off: '关'
            },
            deployablePanel: {
                expand: '展开面板',
                hide: '收起面板'
            },
            arraySelector: {
                enter: '确定',
                cancel: '取消',
                click: '点击',
                delete: '删除',
                add: '添加',
                default: '默认',
                addAll: '添加全部'
            },
            dualTreeSelectorEnterprise: {
                selectItems: '请在树中选择条目',
                allItems: '所有条目',
                selectedItems: '已选择条目',
                selectedItemsNumber: '已选择条目：&selected/&total',
                deleteAll: '全部删除',
                appendAll: '全部添加',
                enter: '确定',
                cancel: '取消'
            },
            shojiScreen: {
                enter: '确定',
                cancel: '取消',
                hide: '收起',
                expand: '展开'
            },
            pager: {
                previousPage: '上一页',
                nextPage: '下一页'
            },
            button: {
                enter: '确定',
                cancel: '取消',
                fresh: '刷新'
            },
            tableSelector: {
                selectAll: '选择全部',
                selectCurrentPage: '选择当前页'
            },
            table: {
                noData: '没有数据'
            },
            calendar: {
                day: ['一', '二', '三', '四', '五', '六', '日']
            },
            rangeCalendar: {
                enter: '确定',
                cancel: '取消',
                startTime: '起始时间：',
                endTime: '结束时间：',
                today: '今天',
                yesterday: '昨天',
                beforeYesterday: '前天',
                lastWeek: '上周',
                last7: '过去7天',
                last14: '过去14天',
                last30: '过去30天',
                currentMonth: '本月',
                lastMonth: '上月',
                lastQuarter: '上个季度'
            },
            schedule: {
                allDay: '全天',
                day: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
            },
            region: {
                regionName: {
                    '0': '全部地域',
                    '1': '北京',
                    '2': '上海',
                    '3': '天津',
                    '4': '广东',
                    '5': '福建',
                    '7': '日本',
                    '8': '海南',
                    '9': '安徽',
                    '10': '贵州',
                    '11': '甘肃',
                    '12': '广西',
                    '13': '河北',
                    '14': '河南',
                    '15': '黑龙江',
                    '16': '湖北',
                    '17': '湖南',
                    '18': '吉林',
                    '19': '江苏',
                    '20': '江西',
                    '21': '辽宁',
                    '22': '内蒙古',
                    '23': '宁夏',
                    '24': '青海',
                    '25': '山东',
                    '26': '山西',
                    '27': '陕西',
                    '28': '四川',
                    '29': '西藏',
                    '30': '新疆',
                    '31': '云南',
                    '32': '浙江',
                    '33': '重庆',
                    '34': '香港',
                    '35': '台湾',
                    '36': '澳门',
                    '37': '其他国家',
                    // 市级地域
                    '85': '潮州',
                    '116': '东莞',
                    '90': '佛山',
                    '84': '广州',
                    '115': '河源',
                    '117': '惠州',
                    '82': '江门',
                    '83': '揭阳',
                    '86': '茂名',
                    '88': '梅州',
                    '89': '清远',
                    '91': '汕头',
                    '92': '汕尾',
                    '94': '韶关',
                    '93': '深圳',
                    '109': '阳江',
                    '111': '云浮',
                    '110': '湛江',
                    '114': '肇庆',
                    '112': '中山',
                    '113': '珠海',
                    '81': '福州',
                    '50': '龙岩',
                    '49': '南平',
                    '51': '宁德',
                    '48': '莆田',
                    '52': '泉州',
                    '66': '三明',
                    '70': '厦门',
                    '80': '漳州',
                    '493': '白沙黎族自治县',
                    '488': '保亭黎族苗族自治县',
                    '492': '昌江黎族自治县',
                    '487': '澄迈县',
                    '303': '儋州',
                    '484': '定安县',
                    '296': '东方',
                    '302': '海口',
                    '490': '乐东黎族自治县',
                    '491': '临高县',
                    '486': '陵水黎族自治县',
                    '297': '琼海',
                    '489': '琼中黎族苗族自治县',
                    '298': '三亚',
                    '485': '屯昌县',
                    '301': '万宁',
                    '299': '文昌',
                    '300': '五指山',
                    '128': '安庆',
                    '141': '蚌埠',
                    '143': '亳州',
                    '129': '巢湖',
                    '130': '池州',
                    '131': '滁州',
                    '140': '阜阳',
                    '142': '合肥',
                    '127': '淮北',
                    '133': '淮南',
                    '132': '黄山',
                    '135': '六安',
                    '134': '马鞍山',
                    '137': '宿州',
                    '138': '铜陵',
                    '139': '芜湖',
                    '136': '宣城',
                    '119': '安顺',
                    '124': '毕节',
                    '118': '贵阳',
                    '120': '六盘水',
                    '122': '黔东南',
                    '121': '黔南',
                    '123': '黔西南',
                    '125': '铜仁',
                    '126': '遵义',
                    '267': '白银',
                    '263': '定西',
                    '477': '甘南',
                    '257': '嘉峪关',
                    '256': '金昌',
                    '255': '酒泉',
                    '258': '兰州',
                    '261': '临夏',
                    '259': '陇南',
                    '260': '平凉',
                    '262': '庆阳',
                    '265': '天水',
                    '264': '武威',
                    '266': '张掖',
                    '108': '百色',
                    '104': '北海',
                    '478': '崇左',
                    '98': '防城港',
                    '96': '贵港',
                    '95': '桂林',
                    '106': '河池',
                    '107': '贺州',
                    '100': '来宾',
                    '101': '柳州',
                    '99': '南宁',
                    '102': '钦州',
                    '103': '梧州',
                    '105': '玉林',
                    '304': '保定',
                    '305': '沧州',
                    '306': '承德',
                    '330': '邯郸',
                    '332': '衡水',
                    '307': '廊坊',
                    '325': '秦皇岛',
                    '327': '石家庄',
                    '329': '唐山',
                    '326': '邢台',
                    '331': '张家口',
                    '309': '安阳',
                    '323': '鹤壁',
                    '476': '济源',
                    '308': '焦作',
                    '310': '开封',
                    '312': '漯河',
                    '311': '洛阳',
                    '315': '南阳',
                    '313': '平顶山',
                    '316': '濮阳',
                    '321': '三门峡',
                    '320': '商丘',
                    '317': '新乡',
                    '318': '信阳',
                    '319': '许昌',
                    '322': '郑州',
                    '324': '周口',
                    '314': '驻马店',
                    '342': '大庆',
                    '343': '大兴安岭',
                    '335': '哈尔滨',
                    '344': '鹤岗',
                    '345': '黑河',
                    '333': '鸡西',
                    '334': '佳木斯',
                    '336': '牡丹江',
                    '337': '齐齐哈尔',
                    '338': '七台河',
                    '340': '双鸭山',
                    '339': '绥化',
                    '341': '伊春',
                    '377': '鄂州',
                    '366': '恩施',
                    '349': '黄冈',
                    '348': '黄石',
                    '346': '荆门',
                    '347': '荆州',
                    '364': '潜江',
                    '368': '神农架',
                    '369': '十堰',
                    '367': '随州',
                    '373': '天门',
                    '371': '武汉',
                    '375': '咸宁',
                    '372': '仙桃',
                    '370': '襄阳',
                    '365': '孝感',
                    '376': '宜昌',
                    '351': '常德',
                    '352': '长沙',
                    '353': '郴州',
                    '360': '衡阳',
                    '350': '怀化',
                    '354': '娄底',
                    '355': '邵阳',
                    '356': '湘潭',
                    '357': '湘西',
                    '359': '益阳',
                    '362': '永州',
                    '361': '岳阳',
                    '358': '张家界',
                    '363': '株洲',
                    '39': '白城',
                    '42': '白山',
                    '40': '长春',
                    '38': '吉林',
                    '41': '辽源',
                    '43': '四平',
                    '44': '松原',
                    '45': '通化',
                    '47': '延边',
                    '54': '常州',
                    '53': '淮安',
                    '57': '连云港',
                    '55': '南京',
                    '56': '南通',
                    '60': '宿迁',
                    '59': '苏州',
                    '61': '泰州',
                    '62': '无锡',
                    '58': '徐州',
                    '63': '盐城',
                    '64': '扬州',
                    '65': '镇江',
                    '78': '抚州',
                    '77': '赣州',
                    '68': '吉安',
                    '69': '景德镇',
                    '67': '九江',
                    '72': '南昌',
                    '71': '萍乡',
                    '74': '上饶',
                    '73': '新余',
                    '75': '宜春',
                    '76': '鹰潭',
                    '151': '鞍山',
                    '145': '本溪',
                    '147': '朝阳',
                    '155': '大连',
                    '144': '丹东',
                    '152': '抚顺',
                    '150': '阜新',
                    '157': '葫芦岛',
                    '146': '锦州',
                    '148': '辽阳',
                    '149': '盘锦',
                    '153': '沈阳',
                    '154': '铁岭',
                    '156': '营口',
                    '159': '阿拉善盟',
                    '162': '巴彦淖尔',
                    '169': '包头',
                    '158': '赤峰',
                    '168': '鄂尔多斯',
                    '167': '呼和浩特',
                    '166': '呼伦贝尔',
                    '161': '通辽',
                    '164': '乌海',
                    '163': '乌兰察布',
                    '165': '锡林郭勒盟',
                    '160': '兴安盟',
                    '170': '固原',
                    '171': '石嘴山',
                    '172': '吴忠',
                    '174': '银川',
                    '173': '中卫',
                    '496': '果洛',
                    '494': '海北',
                    '176': '海东',
                    '479': '海南',
                    '177': '海西',
                    '495': '黄南',
                    '175': '西宁',
                    '178': '玉树',
                    '223': '滨州',
                    '200': '德州',
                    '220': '东营',
                    '222': '菏泽',
                    '196': '济南',
                    '197': '济宁',
                    '198': '莱芜',
                    '199': '聊城',
                    '201': '临沂',
                    '202': '青岛',
                    '203': '日照',
                    '208': '泰安',
                    '204': '潍坊',
                    '218': '威海',
                    '219': '烟台',
                    '221': '枣庄',
                    '207': '淄博',
                    '217': '大同',
                    '209': '长治',
                    '205': '晋城',
                    '206': '晋中',
                    '211': '临汾',
                    '210': '吕梁',
                    '213': '朔州',
                    '214': '太原',
                    '212': '忻州',
                    '215': '阳泉',
                    '216': '运城',
                    '240': '安康',
                    '239': '宝鸡',
                    '248': '汉中',
                    '241': '商洛',
                    '242': '铜川',
                    '243': '渭南',
                    '244': '西安',
                    '245': '咸阳',
                    '246': '延安',
                    '249': '榆林',
                    '252': '阿坝',
                    '247': '巴中',
                    '226': '成都',
                    '250': '达州',
                    '232': '德阳',
                    '236': '甘孜',
                    '224': '广安',
                    '225': '广元',
                    '233': '乐山',
                    '228': '凉山',
                    '234': '泸州',
                    '227': '眉山',
                    '229': '绵阳',
                    '231': '南充',
                    '235': '内江',
                    '230': '攀枝花',
                    '237': '遂宁',
                    '251': '雅安',
                    '254': '宜宾',
                    '253': '自贡',
                    '238': '资阳',
                    '498': '阿里',
                    '480': '昌都',
                    '269': '拉萨',
                    '270': '林芝',
                    '268': '那曲',
                    '271': '日喀则',
                    '497': '山南',
                    '185': '阿克苏',
                    '499': '阿拉尔',
                    '182': '阿勒泰',
                    '191': '巴音郭楞',
                    '180': '博尔塔拉',
                    '181': '昌吉',
                    '179': '哈密',
                    '195': '和田',
                    '183': '喀什',
                    '184': '克拉玛依',
                    '186': '克孜勒苏柯尔克孜',
                    '187': '石河子',
                    '188': '塔城',
                    '500': '图木舒克',
                    '190': '吐鲁番',
                    '189': '五家渠',
                    '192': '乌鲁木齐',
                    '193': '伊犁',
                    '289': '保山',
                    '283': '楚雄',
                    '292': '大理',
                    '286': '德宏',
                    '482': '迪庆',
                    '293': '红河',
                    '284': '昆明',
                    '285': '丽江',
                    '287': '临沧',
                    '481': '怒江',
                    '290': '普洱',
                    '288': '曲靖',
                    '291': '文山',
                    '483': '西双版纳',
                    '295': '玉溪',
                    '294': '昭通',
                    '280': '杭州',
                    '282': '湖州',
                    '273': '嘉兴',
                    '272': '金华',
                    '275': '丽水',
                    '276': '宁波',
                    '274': '衢州',
                    '277': '绍兴',
                    '279': '台州',
                    '278': '温州',
                    '281': '舟山',
                    '990': '华北地区',
                    '991': '东北地区',
                    '992': '华东地区',
                    '993': '华中地区',
                    '994': '华南地区',
                    '995': '西南地区',
                    '996': '西北地区',
                    '997': '其他地区',
                    '998': '中国',
                    '999': '国外'
                }
            },
            message: {
                'loading': '正在加载中...',
                'refresh': '加载失败，点击重新加载',
                'new-refresh': '数据加载失败',
                'fail': '加载失败',
                'success': '加载成功'
            },
            toast: {
                'success': '保存成功'
            }
        }
    };

    return data[language];
});