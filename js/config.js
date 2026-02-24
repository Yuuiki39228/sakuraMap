const CONFIG = {
    center: [104.195397, 35.86166],
    zoom: 1.2,
    
      locations: [
                    {
                        name: "北京槐房万达广场",
                        address: "北京市丰台区南苑西路39号",
                        value: [116.367868, 39.814085],
                        screenCount: 1,
                        screenLocations: ["1号门外"],
                        playTime: "13:30-22:00",
                        frequency: "NULL"
                    },
                    {
                        name: "北京丰科万达广场",
                        address: "北京市丰台区丰科路6号院",
                        value: [116.298932, 39.824233],
                        screenCount: 1,
                        screenLocations: ["B1中庭（地铁c口直接进到万达， 直走）"],
                        playTime: "10:00-22:00",
                        frequency: "2min"
                    },
                    {
                        name: "北京龙湖亦庄天街",
                        address: "北京市大兴区博兴八路与兴海路交叉口",
                        value: [116.492452, 39.753035],
                        screenCount: 1,
                        screenLocations: ["1F中庭"],
                        playTime: "10:00-22:00",
                        frequency: "随场内广告"
                    },
                    {
                        name: "合景摩方北京MCUBE",
                        address: "摩方M·CUBE(崇文门地铁站H西南口旁)",
                        value: [116.417703, 39.899616],
                        screenCount: 8,
                        screenLocations: ["四层LED", "五层LED", "吊装冰屏侧面*4", "吊装冰屏顶面*2"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "上海浦江万达广场",
                        address: "上海市闵行区永跃路360号",
                        value: [121.511317, 31.02753],
                        screenCount: 1,
                        screenLocations: ["三号门连廊处 （近苏宁易购，中庭）"],
                        playTime: "NULL",
                        frequency: "4min"
                    },
                    {
                        name: "上海长宁大融城",
                        address: "上海市长宁区淞虹路377号",
                        value: [121.359678, 31.217422],
                        screenCount: 1,
                        screenLocations: ["L1外屏"],
                        playTime: "10:00-22:00",
                        frequency: "全天轮播"
                    },
                    {
                        name: "上海开元地中海广场",
                        address: "上海市松江区新松江路927号",
                        value: [121.219475, 31.037768],
                        screenCount: 1,
                        screenLocations: ["广场主入口"],
                        playTime: "10:00-21:30",
                        frequency: "100次/天"
                    },
                    {
                        name: "天津武清福源万达广场",
                        address: "武清开发区福源道24号",
                        value: [117.057374, 39.406535],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "10:00-22:00",
                        frequency: "4min"
                    },
                    {
                        name: "天津乐宾百货",
                        address: "中国天津市和平区南京路128号",
                        value: [117.195045, 39.120217],
                        screenCount: 3,
                        screenLocations: ["正大门"],
                        playTime: "10:00-21:30",
                        frequency: "5min"
                    },
                    {
                        name: "天津鹏欣水游城",
                        address: "大丰路12-24号(西北角地铁站B口步行160米)",
                        value: [117.16958, 39.148809],
                        screenCount: 1,
                        screenLocations: ["A座L1 HM附近"],
                        playTime: "10:00-22:00",
                        frequency: "4~5min"
                    },
                    {
                        name: "重庆北碚万达广场",
                        address: "中国重庆市北碚区冯时行路300号",
                        value: [106.390111, 29.79767],
                        screenCount: 1,
                        screenLocations: ["1号门外广场"],
                        playTime: "NULL",
                        frequency: "4min"
                    },
                    {
                        name: "重庆沙坪坝万达广场",
                        address: "重庆市沙坪坝区经纬大道1108号",
                        value: [106.474446, 29.543007],
                        screenCount: 2,
                        screenLocations: ["（外场大屏）9号门外广场", "（中庭舞台大屏）6号门"],
                        playTime: "10:00-22:00",
                        frequency: "2~4min"
                    },
                    {
                        name: "重庆永川万达广场",
                        address: "重庆永川区星光大道789号",
                        value: [105.927891, 29.335804],
                        screenCount: 1,
                        screenLocations: ["中庭"],
                        playTime: "NULL",
                        frequency: "240s"
                    },
                    {
                        name: "重庆忠县万达广场",
                        address: "重庆市忠县环城路55号",
                        value: [108.019958, 30.298799],
                        screenCount: 1,
                        screenLocations: ["1号门"],
                        playTime: "10:00-21:30",
                        frequency: "4min"
                    },
                    {
                        name: "重庆茶园奥园广场",
                        address: "重庆市南岸区水云路17号附17号",
                        value: [106.645239, 29.516291],
                        screenCount: 1,
                        screenLocations: ["1号门星巴克上方外立面"],
                        playTime: "10:00-22:00",
                        frequency: "5~8min"
                    },
                    {
                        name: "铜陵铜官万达广场",
                        address: "铜陵市石城大道599号",
                        value: [117.83041, 30.944129],
                        screenCount: 1,
                        screenLocations: ["2号门外广场"],
                        playTime: "10:30-21:30",
                        frequency: "1~15min（根据当日上刊数决定）"
                    },
                    {
                        name: "合肥融创茂",
                        address: "庐州大道800号(万年埠地铁站1口步行410米)",
                        value: [117.304169, 31.703175],
                        screenCount: 1,
                        screenLocations: ["2号门进来大中庭2F"],
                        playTime: "10:00-21:30",
                        frequency: "5min"
                    },
                    {
                        name: "合肥巢湖万达广场",
                        address: "巢湖市东塘路80号",
                        value: [117.884136, 31.611256],
                        screenCount: 1,
                        screenLocations: ["1号门大中庭"],
                        playTime: "10:00-21:30",
                        frequency: "8min"
                    },
                    {
                        name: "六安金安万达广场",
                        address: "安徽省六安市金安区皋城路与八公山路交汇处",
                        value: [116.509446, 31.762389],
                        screenCount: 1,
                        screenLocations: ["2号门外广场大屏"],
                        playTime: "NULL",
                        frequency: "12min"
                    },
                    {
                        name: "福州乐堤港·东百仓山店",
                        address: "福建省福州市仓山区-金山街道浦上大道198号",
                        value: [119.279307, 26.040799],
                        screenCount: 5,
                        screenLocations: ["东百仓山店中庭位置2-6F"],
                        playTime: "NULL",
                        frequency: "全天轮播15秒/1次"
                    },
                    {
                        name: "厦门灌口万达广场",
                        address: "厦门市集美区灌口镇石笔路6号",
                        value: [117.998375, 24.610848],
                        screenCount: 1,
                        screenLocations: ["1号门"],
                        playTime: "10:30-22:00",
                        frequency: "10min/轮"
                    },
                    {
                        name: "泉州德化万达广场",
                        address: "福建省泉州市德化县瓷都大道万达广场",
                        value: [118.219573, 25.484826],
                        screenCount: 1,
                        screenLocations: ["1号门外大屏"],
                        playTime: "NULL",
                        frequency: "480s一次"
                    },
                    {
                        name: "福州万象九宜城",
                        address: "西环中路691号万象城3层",
                        value: [119.290545, 26.064211],
                        screenCount: 1,
                        screenLocations: ["万象九宜城1号门1楼升2楼手扶梯"],
                        playTime: "10:00-22:00",
                        frequency: "轮播，20秒/2.30分"
                    },
                    {
                        name: "泉州晋江SM百货",
                        address: "福建省泉州市晋江市SM广场SM百货",
                        value: [118.566728, 24.778244],
                        screenCount: 16,
                        screenLocations: ["中庭大屏*2", "商场柱面大屏*14"],
                        playTime: "NULL",
                        frequency: "3min"
                    },
                    {
                        name: "漳州天虹商场",
                        address: "漳州市芗城区南昌中路39号",
                        value: [117.671589, 24.510646],
                        screenCount: 2,
                        screenLocations: ["中庭竖屏","电梯屏"],
                        playTime: "10:00-22:00",
                        frequency: "4~5min"
                    },
                    {
                        name: "龙岩新罗万达广场",
                        address: "新罗区双龙路1号",
                        value: [117.021838, 25.055973],
                        screenCount: 1,
                        screenLocations: ["室内2号中庭"],
                        playTime: "11:00-21:00",
                        frequency: "以当日上刊数量为准"
                    },
                    {
                        name: "兰州南滨河万达广场",
                        address: "南滨河东路5150号",
                        value: [103.866454, 36.076841],
                        screenCount: 1,
                        screenLocations: ["一号圆厅"],
                        playTime: "10:00-21:30",
                        frequency: "5分钟/1-2次"
                    },
                    {
                        name: "兰州城关万达广场",
                        address: "兰州市城关区天水北路68号",
                        value: [103.86313, 36.063449],
                        screenCount: 1,
                        screenLocations: ["二号圆厅"],
                        playTime: "10:00-22:00",
                        frequency: "4min"
                    },
                    {
                        name: "广州南岗万达广场",
                        address: "广州市黄埔区康富路16号",
                        value: [113.550561, 23.09893],
                        screenCount: 1,
                        screenLocations: ["1号门，肯德基上方"],
                        playTime: "10:00-18:00",
                        frequency: "NULL"
                    },
                    {
                        name: "深圳星河COCO Park",
                        address: "深圳市龙岗区五和大道与雅宝路交汇处",
                        value: [114.061243, 22.604296],
                        screenCount: 1,
                        screenLocations: ["二楼星空广场"],
                        playTime: "10:00-22:00",
                        frequency: "10min内轮播一次"
                    },
                    {
                        name: "肇庆印象汇",
                        address: "肇庆市端州区端州四路8号",
                        value: [112.473471, 23.056922],
                        screenCount: 1,
                        screenLocations: ["一楼中庭LED大屏"],
                        playTime: "10:00-22:00",
                        frequency: "15分钟内"
                    },
                    {
                        name: "南宁市青秀万达广场",
                        address: "广西南宁市青秀区-东葛路118号",
                        value: [108.370451, 22.83041],
                        screenCount: 1,
                        screenLocations: ["2号门内中庭"],
                        playTime: "10:00-22:00",
                        frequency: "240s一轮"
                    },
                    {
                        name: "南宁五象汇",
                        address: "平乐大道37号(平良立交地铁站E口旁)",
                        value: [108.384916, 22.72481],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "轮播"
                    },
                    {
                        name: "贵阳云岩万达广场",
                        address: "新添大道南段302号(顺海地铁站C口步行230米)",
                        value: [106.743329, 26.619763],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "贵阳龙湾万达广场",
                        address: "贵阳市经开区黄河路2号小河转盘",
                        value: [106.7003, 26.523582],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "10:00-22:00",
                        frequency: "15分钟"
                    },
                    {
                        name: "贵阳观山湖万达广场",
                        address: "贵州省贵阳市观山湖区观山西路184号",
                        value: [106.608824, 26.632049],
                        screenCount: 1,
                        screenLocations: ["1号门室外"],
                        playTime: "10:00-22:00",
                        frequency: "10分钟"
                    },
                    {
                        name: "海口电竞基地",
                        address: "海口龙华区凤翔西路",
                        value: [110.349075, 19.986375],
                        screenCount: 1,
                        screenLocations: ["海口电竞基地舞台大屏 海口电竞基地入口屏"],
                        playTime: "18:00-23:00",
                        frequency: "NULL"
                    },
                    {
                        name: "廊坊富地广场",
                        address: "燕郊开发区迎宾路1097号",
                        value: [116.815053, 39.964436],
                        screenCount: 1,
                        screenLocations: ["富地广场 A座广场 环岛位置"],
                        playTime: "17:30-22:00",
                        frequency: "1分钟一次"
                    },
                    {
                        name: "邯郸悦然广场",
                        address: "邯郸市邯山区中华大街与南环路交叉口",
                        value: [114.490871, 36.565387],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "19:00-22:00",
                        frequency: "3分钟"
                    },
                    {
                        name: "承德双桥万达广场",
                        address: "承德市双桥区大石庙镇万达广场",
                        value: [117.959134, 40.917924],
                        screenCount: 1,
                        screenLocations: ["室内29m流水屏（负1到4楼）"],
                        playTime: "11:30-14:00",
                        frequency: "15分钟"
                    },
                    {
                        name: "UME影城（保定爱情广场店）",
                        address: "朝阳南大街2188号保定爱情广场F5层",
                        value: [115.463926, 38.821113],
                        screenCount: 2,
                        screenLocations: ["影城大厅检票口上方大屏", "商场L5影城专属打卡墙大屏"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "牡丹江西安万达广场",
                        address: "牡丹江市西安区西新安街358号",
                        value: [129.601158, 44.569834],
                        screenCount: 1,
                        screenLocations: ["广场1号门"],
                        playTime: "10：00-22:00",
                        frequency: "12min轮播30s"
                    },
                    {
                        name: "哈尔滨香坊万达广场",
                        address: "黑龙江省哈尔滨市香坊区衡山路17号",
                        value: [126.67817, 45.740403],
                        screenCount: 1,
                        screenLocations: ["1F星巴克门前"],
                        playTime: "10：00—21：00",
                        frequency: "5—8s全天轮播"
                    },
                    {
                        name: "绥化北林万达广场",
                        address: "绥化市北林区康庄路与新华路交叉口1号门外",
                        value: [126.964403, 46.643804],
                        screenCount: 1,
                        screenLocations: ["1号门外"],
                        playTime: "9:30-21:00",
                        frequency: "225s内轮播一次"
                    },
                    {
                        name: "河南郑州二七万达广场",
                        address: "河南省郑州市二七区大学南路8号",
                        value: [113.64303, 34.718184],
                        screenCount: 1,
                        screenLocations: ["内屏：1号厅"],
                        playTime: "10:00-22:00",
                        frequency: "12min"
                    },
                    {
                        name: "南阳宛城万达广场",
                        address: "河南省南阳市宛城区明山路与孔明大道交叉口",
                        value: [112.560974, 32.99281],
                        screenCount: 1,
                        screenLocations: ["3号门"],
                        playTime: "10:00-22:00",
                        frequency: "4分钟/次"
                    },
                    {
                        name: "郑州中原锦艺城购物中心",
                        address: "郑州市中原区棉纺西路与锦霞街交叉口",
                        value: [113.605936, 34.763225],
                        screenCount: 1,
                        screenLocations: ["C区1层东厅主屏"],
                        playTime: "NULL",
                        frequency: "当日轮播100次，频率以当日为准，默认保次数"
                    },
                    {
                        name: "洛阳涧西万达广场",
                        address: "洛阳市涧西区辽宁路与丽新路交叉口",
                        value: [112.408076, 34.654003],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "10:00-22:00",
                        frequency: "8-10min/次"
                    },
                    {
                        name: "漯河西城万达广场",
                        address: "长江路与太白山中路交叉口东北200米",
                        value: [113.971119, 33.571513],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "10:00-22:00",
                        frequency: "轮播"
                    },
                    {
                        name: "商丘港汇万达广场",
                        address: "商丘市梁园区陇海路与新建路交叉口",
                        value: [115.647816, 34.446906],
                        screenCount: 1,
                        screenLocations: ["一号门外广场"],
                        playTime: "10:00-22:00",
                        frequency: "1分钟一次"
                    },
                    {
                        name: "三门峡湖滨万达广场",
                        address: "湖滨区大岭路与和平路交叉口万达广场",
                        value: [111.188279, 34.784541],
                        screenCount: 1,
                        screenLocations: ["广场1号门"],
                        playTime: "9.30-21.30",
                        frequency: "12分钟轮播"
                    },
                    {
                        name: "周口文昌万达广场",
                        address: "周口市川汇区文昌大道与大庆路交叉口",
                        value: [114.672907, 33.633172],
                        screenCount: 1,
                        screenLocations: ["周口文昌万达广场华为上方"],
                        playTime: "10:00-22:00",
                        frequency: "10分钟1次"
                    },
                    {
                        name: "信阳西亚和美广场",
                        address: "东方红大道中段",
                        value: [114.068711, 32.122436],
                        screenCount: 3,
                        screenLocations: ["一楼外广场大屏", "一楼正中厅大屏", "七楼数码落地大屏"],
                        playTime: "9.30-21.30",
                        frequency: "低于3分钟轮一次"
                    },
                    {
                        name: "荆州古城万达广场",
                        address: "荆州市荆州区东城街道北京路508号",
                        value: [112.223236, 30.34033],
                        screenCount: 1,
                        screenLocations: ["舞台屏"],
                        playTime: "10:00-22:00",
                        frequency: "NULL"
                    },
                    {
                        name: "武汉汉阳万达广场",
                        address: "湖北省武汉市汉阳区四新大道608号汉阳万达广场",
                        value: [114.199643, 30.531111],
                        screenCount: 2,
                        screenLocations: ["2号门外广场", "3号门外广场"],
                        playTime: "18:00-21:00",
                        frequency: "240s/15s一轮（按照当天上屏菜单增减轮次）"
                    },
                    {
                        name: "黄石黄石港万达广场",
                        address: "花湖大道30号",
                        value: [115.059928, 30.243444],
                        screenCount: 1,
                        screenLocations: ["三面屏，一楼一号门中庭"],
                        playTime: "10:00-22:00",
                        frequency: "8min"
                    },
                    {
                        name: "恩施恩商星汇广场",
                        address: "湖北省恩施市金龙大道30号",
                        value: [109.506795, 30.305827],
                        screenCount: 1,
                        screenLocations: ["恩商星汇广场一楼外广场"],
                        playTime: "17:00-21:00",
                        frequency: "15s/次"
                    },
                    {
                        name: "武汉奥山世纪广场",
                        address: "武汉市青山区和平大道809号",
                        value: [114.360711, 30.617162],
                        screenCount: 3,
                        screenLocations: ["1号门", "3号门", "中庭"],
                        playTime: "12:30-21:30",
                        frequency: "约5分钟/轮"
                    },
                    {
                        name: "襄阳悦活荟购物广场",
                        address: "高新区东风汽车大道特28号",
                        value: [112.190669, 32.121718],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "长沙开福万达广场",
                        address: "湖南省长沙市开福区中山路通泰街道589号开福万达广场",
                        value: [112.970997, 28.19873],
                        screenCount: 1,
                        screenLocations: ["内场银厅"],
                        playTime: "10:00-21:30",
                        frequency: "240s一轮"
                    },
                    {
                        name: "长沙MCC-麻石公园",
                        address: "长沙市芙蓉北大道333号",
                        value: [112.908552, 28.368338],
                        screenCount: 1,
                        screenLocations: ["正门"],
                        playTime: "NULL",
                        frequency: "100次/天"
                    },
                    {
                        name: "株洲大汉悦中心",
                        address: "株洲市芦淞区七一路229号",
                        value: [113.149145, 27.837958],
                        screenCount: 2,
                        screenLocations: ["外广场", "中庭广场"],
                        playTime: "外广场:下午17点-22点，中庭广场:14点-22点",
                        frequency: "NULL"
                    },
                    {
                        name: "苏州凤凰广场",
                        address: "苏州工业园区苏州大道西158号",
                        value: [120.667399, 31.315472],
                        screenCount: 1,
                        screenLocations: ["户外大屏2号门"],
                        playTime: "10:30-20:00",
                        frequency: "4分钟"
                    },
                    {
                        name: "南通启东吾悦广场",
                        address: "江苏省南通市启东市建设南路88号吾悦广场",
                        value: [121.660446, 31.787507],
                        screenCount: 1,
                        screenLocations: ["1号门外屏"],
                        playTime: "10:00-21:00",
                        frequency: "6min"
                    },
                    {
                        name: "红星美凯龙苏州长江路商场",
                        address: "苏州长江路18号",
                        value: [120.552736, 31.259687],
                        screenCount: 4,
                        screenLocations: ["一楼舞台LED", "山姆旁正门口柱面屏*2", "商场5楼圆弧厅"],
                        playTime: "10:00-17:00",
                        frequency: "2min/次"
                    },
                    {
                        name: "苏州昆山吾悦广场",
                        address: "苏州昆山长江南路99号",
                        value: [120.967306, 31.332577],
                        screenCount: 3,
                        screenLocations: ["1号门外广场十一楼圆厅横屏", "五楼竖屏"],
                        playTime: "10:00-22:00",
                        frequency: "根据当天情况，基本2-3分钟内轮到一次"
                    },
                    {
                        name: "南昌百盛购物中心",
                        address: "江西省南昌市东湖区中山路177号",
                        value: [115.891407, 28.676476],
                        screenCount: 2,
                        screenLocations: ["B馆外围", "A馆内屏"],
                        playTime: "10:00-22:00",
                        frequency: "5分钟"
                    },
                    {
                        name: "南昌融创茂",
                        address: "江西省南昌市红谷滩新区南龙蟠街666号",
                        value: [115.790461, 28.579738],
                        screenCount: 2,
                        screenLocations: ["1F 中庭", "1F 客服台"],
                        playTime: "10:00-18:00",
                        frequency: "15min"
                    },
                    {
                        name: "南昌百银次元中心1号",
                        address: "中山路1号(八一广场地铁站5口旁)",
                        value: [115.902659, 28.67602],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "长春宽城万达广场",
                        address: "人民大街155号(长春站北地铁站F口旁)",
                        value: [125.321631, 43.914894],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "通化东昌万达广场",
                        address: "通化市东昌区江南大街与江畅路交叉口西北",
                        value: [125.934146, 41.703365],
                        screenCount: 1,
                        screenLocations: ["1号门户外"],
                        playTime: "10:00-21:00",
                        frequency: "10min"
                    },
                    {
                        name: "吉林昌邑万达广场",
                        address: "吉林省吉林市吉林大街518号",
                        value: [126.564889, 43.885875],
                        screenCount: 1,
                        screenLocations: ["1号门外广场"],
                        playTime: "10:00-21:30",
                        frequency: "5分钟一轮播（根据广场大屏投放素材数量变化）"
                    },
                    {
                        name: "沈阳北一路万达广场",
                        address: "辽宁省沈阳市铁西区北一中路1号",
                        value: [123.380074, 41.813813],
                        screenCount: 2,
                        screenLocations: ["1号门外屏", "1号门进入中庭环屏"],
                        playTime: "9:30-21:30",
                        frequency: "5-10分钟"
                    },
                    {
                        name: "沈阳文化路万达广场",
                        address: "沈阳市沈河区文化路81号",
                        value: [123.436854, 41.770482],
                        screenCount: 1,
                        screenLocations: ["商场中庭LED电子屏"],
                        playTime: "10:00-21:30",
                        frequency: "10分钟左右一轮（以当天数量为准）"
                    },
                    {
                        name: "抚顺新抚万达广场",
                        address: "辽宁省抚顺市新抚区浑河南路中段56号",
                        value: [123.901996, 41.865355],
                        screenCount: 1,
                        screenLocations: ["舞台屏幕:1F大中庭"],
                        playTime: "9:30-20:30",
                        frequency: "NULL"
                    },
                    {
                        name: "大连普兰万达广场",
                        address: "大连市普兰店振兴街",
                        value: [121.940027, 39.402079],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "乌海海勃湾万达广场",
                        address: "内蒙古乌海海勃湾区万达广场",
                        value: [106.821807, 39.659979],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "银川中卫鼓楼万达广场",
                        address: "中卫沙坡头区南苑西路万达广场",
                        value: [105.186849, 37.511448],
                        screenCount: 2,
                        screenLocations: ["中卫万达一号门", "肯德基上方"],
                        playTime: "9:00-22:00",
                        frequency: "4分钟"
                    },
                    {
                        name: "西宁北川万达广场",
                        address: "青海省西宁市北川纬二路高速",
                        value: [101.764248, 36.695555],
                        screenCount: 1,
                        screenLocations: ["外广场1号门"],
                        playTime: "10:00-21:00",
                        frequency: "10min"
                    },
                    {
                        name: "西宁中惠万达广场",
                        address: "青海省西宁市南山东路与德令哈路交叉口东南180米",
                        value: [101.798595, 36.595477],
                        screenCount: 1,
                        screenLocations: ["外广场1号门"],
                        playTime: "10:00-21:00",
                        frequency: "3-5min"
                    },
                    {
                        name: "西安李家村万达广场",
                        address: "雁塔路北段8号",
                        value: [108.961877, 34.243449],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "西安民乐园万达广场",
                        address: "西安新城区解放路111号",
                        value: [108.964249, 34.268145],
                        screenCount: 1,
                        screenLocations: ["一号厅内"],
                        playTime: "10:30-22:00",
                        frequency: "每天不少于30次"
                    },
                    {
                        name: "西安长百精致荟",
                        address: "西安市长安区韦曲街办信合巷1号",
                        value: [108.932988, 34.156056],
                        screenCount: 1,
                        screenLocations: ["一楼中厅"],
                        playTime: "10:00-21:00",
                        frequency: "4分钟"
                    },
                    {
                        name: "西安禾丰万达广场",
                        address: "丰禾路与桃园北路交汇处",
                        value: [108.899645, 34.281056],
                        screenCount: 1,
                        screenLocations: ["一号门外广场"],
                        playTime: "12:00-21:30",
                        frequency: "240s一次"
                    },
                    {
                        name: "烟台芝罘万达广场",
                        address: "烟台市芝罘区西关南街6号",
                        value: [121.394731, 37.535546],
                        screenCount: 1,
                        screenLocations: ["1号东圆厅三面屏"],
                        playTime: "9:30-22:00",
                        frequency: "4分钟"
                    },
                    {
                        name: "济宁建设路万达广场",
                        address: "济宁汽车北站南侧",
                        value: [116.596637, 35.426337],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "东营西城万达广场",
                        address: "北一路730号(与千佛山路交汇处西南角)",
                        value: [118.541193, 37.457168],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "NULL",
                        frequency: "NULL"
                    },
                    {
                        name: "青岛书院万达广场",
                        address: "青岛市李沧区书院路37号青岛书院万达广场",
                        value: [120.420631, 36.15723],
                        screenCount: 1,
                        screenLocations: ["B1中庭"],
                        playTime: "10:00-18:00",
                        frequency: "1分钟"
                    },
                    {
                        name: "青岛丽达购物中心",
                        address: "青岛市崂山区秦岭路18号",
                        value: [120.469165, 36.103654],
                        screenCount: 2,
                        screenLocations: ["连廊上空", "1号门"],
                        playTime: "10:00-21:30",
                        frequency: "10-20分钟1轮"
                    },
                    {
                        name: "青州泰华城",
                        address: "山东省潍坊市青州市范公亭路与昭德东路交叉口",
                        value: [118.514418, 36.68447],
                        screenCount: 2,
                        screenLocations: ["2号门外星巴克对面", "1号门中厅内"],
                        playTime: "10:00-21:30",
                        frequency: "4分钟左右"
                    },
                    {
                        name: "太原双塔汇商业广场",
                        address: "太原市迎泽区双塔汇商业广场南广场",
                        value: [112.599477, 37.85395],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "10:00-22:00",
                        frequency: "15min"
                    },
                    {
                        name: "成都青羊万达广场",
                        address: "成都市青羊区日月大道1段978号",
                        value: [103.973183, 30.676126],
                        screenCount: 1,
                        screenLocations: ["2号门外立面"],
                        playTime: "10:30-22:00",
                        frequency: "NULL"
                    },
                    {
                        name: "自贡汇川路万达广场",
                        address: "四川省自贡市自流井区汇川路1699号",
                        value: [104.74905, 29.32914],
                        screenCount: 2,
                        screenLocations: ["1号门上方", "5号门中庭"],
                        playTime: "10：00-21：00",
                        frequency: "5分钟一次"
                    },
                    {
                        name: "成都双流万达广场",
                        address: "四川省成都市星空路二段399号",
                        value: [103.926522, 30.596199],
                        screenCount: 1,
                        screenLocations: ["内场中庭"],
                        playTime: "10:00-21:30",
                        frequency: "6min"
                    },
                    {
                        name: "德阳吾悦广场",
                        address: "岷山路三段5号",
                        value: [104.382375, 31.080682],
                        screenCount: 2,
                        screenLocations: ["1号门外广场", "一楼小中庭"],
                        playTime: "10:00-22:00",
                        frequency: "3分钟"
                    },
                    {
                        name: "乌鲁木齐高新万达广场",
                        address: "新疆维吾尔自治区乌鲁木齐长春北路668号",
                        value: [87.572031, 43.910667],
                        screenCount: 1,
                        screenLocations: ["NULL"],
                        playTime: "11:00-22:00",
                        frequency: "30秒轮播"
                    },
                    {
                        name: "喀什东城万达广场",
                        address: "新疆喀什万达广场位于多来特巴格路与新城南路交叉路口",
                        value: [76.029716, 39.44816],
                        screenCount: 1,
                        screenLocations: ["外广场"],
                        playTime: "10:00-22:00",
                        frequency: "不确定，每天有大量的上架，下架的情况"
                    }, {
                        name: "昆明晋宁吾悦广场",
                        address: "昆明市晋宁区昆阳街道",
                        value: [102.593906, 24.652857],
                        screenCount: 1,
                        screenLocations: ["1号门外广场"],
                        playTime: "10:00-22:00",
                        frequency: "2分钟轮播15s"
                    },
                    {
                        name: "玉溪红塔湾万达广场",
                        address: "云南省玉溪市红塔区棋阳路66号玉溪万达广场",
                        value: [102.547301, 24.353073],
                        screenCount: 1,
                        screenLocations: ["1号门"],
                        playTime: "10:00-22:00",
                        frequency: "5分钟"
                    },
                    {
                        name: "杭州湖滨88",
                        address: "浙江省杭州市上城区平海路124号湖滨88",
                        value: [120.16245, 30.25471],
                        screenCount: 5,
                        screenLocations: ["1号门橱窗外屏", "1楼中庭大屏", "1楼中庭立柱屏", "1楼北屏", "1楼2号门环形厅屏"],
                        playTime: "10:00 - 22:00",
                        frequency: "10min"
                    },
                    {
                        name: "杭州未来科技城万达广场",
                        address: "杭州余杭区仓前街道创景路与联创街交汇处(创景路地铁站 B3口直达)",
                        value: [119.997768, 30.281007],
                        screenCount: 1,
                        screenLocations: ["一号门一楼中庭"],
                        playTime: "10:00-22:00",
                        frequency: "3分钟一次"
                    },
                    {
                        name: "金华银泰百货",
                        address: "金华市婺城区解放东路168号江北银泰百货",
                        value: [119.654134, 29.103787],
                        screenCount: 1,
                        screenLocations: ["外广场(AB连廊处)"],
                        playTime: "10:00-21:30",
                        frequency: "7min"
                    },
                    {
                        name: "绍兴诸暨万达广场",
                        address: "浙江省诸暨市浣东街道高湖东路69号",
                        value: [120.276879, 29.717749],
                        screenCount: 1,
                        screenLocations: ["二号门外广场"],
                        playTime: "10:00-22:00",
                        frequency: "4分钟/轮"
                    },
                    {
                        name: "湖州长兴万达广场",
                        address: "湖州长兴忻湖路1号",
                        value: [119.903326, 31.035982],
                        screenCount: 1,
                        screenLocations: ["2号门外广场大屏"],
                        playTime: "10:00-22:00",
                        frequency: "最多240s一轮"
                    },
                    {
                        name: "杭州加州阳光开元广场",
                        address: "金鸡路337号靠近金鸡路(地铁站)",
                        value: [120.252395, 30.182193],
                        screenCount: 1,
                        screenLocations: ["广场户外转角（工商银行上方）"],
                        playTime: "10:30-21:00",
                        frequency: "6-7分钟左右一次"
                    },
                    {
                        name: "绍兴上虞万达广场",
                        address: "上虞区百官街道高铁新城称山北路399号",
                        value: [120.843748, 30.053462],
                        screenCount: 1,
                        screenLocations: ["2号门外广场"],
                        playTime: "10:00-22:00",
                        frequency: "240s(4分钟)一轮"
                    }
                ],

    visual: {
        pointSize: 6,
        glowColor: '#ffffff',
        pulseSpeed: 2000
    }
};