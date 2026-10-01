const products=[
{id:1,name:"حمص بالطحينة",cat:"السلطات",price:null,desc:"حمص، شاورما لحم وصلصة طحينة."},
{id:2,name:"باذنجانية",cat:"السلطات",price:null,desc:"باذنجان مقلي، طماطم، خيار، فلفل، بصل وصلصة."},
{id:3,name:"فتوش",cat:"السلطات",price:null,desc:"خس، ورقيات موسمية، طماطم، خيار، بصل، خبز محمص وصلصة ليمون بدبس الرمان."},
{id:4,name:"سلطة فول",cat:"السلطات",price:null,desc:"فول، طماطم، خضار وزيت زيتون."},
{id:5,name:"بابا غنوج",cat:"السلطات",price:null,desc:"باذنجان مشوي، حبات رمان وصلصة طحينة."},
{id:6,name:"سلطة فواكه",cat:"السلطات",price:null,desc:"تفاح أخضر، تفاح أحمر، معكرونة وصلصة بيضاء."},
{id:7,name:"زيتون حلبي",cat:"السلطات",price:null,desc:"زيتون أسود حلبي، جزر، ليمون، خضار وزيت زيتون."},
{id:8,name:"باستا خضروات",cat:"السلطات",price:null,desc:"باستا، خضار وصلصة طماطم."},
{id:9,name:"أورديف مشكل",cat:"السلطات",price:null,desc:"حمص بطحينة، روسية، باذنجانية، معكرونية، رومانية وزيتون."},
{id:10,name:"قدح سلطة كول سلو",cat:"السلطات",price:750,desc:"لهانة، جزر ومايونيز."},
{id:11,name:"سلطة سيزر",cat:"السلطات",price:4500,desc:"صلصة كريمية من الثوم، جبنة بارميزان، مايونيز وعصير ليمون."},
{id:12,name:"قدح ثومية",cat:"السلطات",price:750,desc:"ثوم، مايونيز، ليمون، ملح وفلفل أسود."},

{id:13,name:"كفتة ساندويش",cat:"ميغا ساندويش",price:5500,desc:"ميغا ساندويش."},
{id:14,name:"بيستو حلوم",cat:"ميغا ساندويش",price:6500,desc:"ميغا ساندويش."},
{id:15,name:"بفالو ساندويش",cat:"ميغا ساندويش",price:6500,desc:"ميغا ساندويش."},
{id:16,name:"موزريلا ساندويش",cat:"ميغا ساندويش",price:5500,desc:"ميغا ساندويش."},
{id:17,name:"بطاطا ساندويش",cat:"ميغا ساندويش",price:2750,desc:"ميغا ساندويش."},

{id:18,name:"تويستر اكس ميل مع فرايد تشكن",cat:"اكس ميل",price:5750,desc:"ساندويش توست، بطاطا مقلية، كول سلو، ثومية خاصة، قطعة فرايد تشكن أورجنال وبيبسي 330 مل."},
{id:19,name:"فيلية اكس ميل مع فرايد تشكن",cat:"اكس ميل",price:7500,desc:"ساندوتش تشيكن فيلية، بطاطا مقلية، كول سلو، ثومية خاصة، قطعة فرايد تشكن أورجنال وبيبسي 330 مل."},
{id:20,name:"سبايسي اكس ميل مع فرايد تشكن",cat:"اكس ميل",price:7500,desc:"ساندويش سبايسي برجر، بطاطا مقلية حارة، كول سلو، ثومية خاصة، قطعة فرايد تشكن سبايسي وبيبسي 330 مل."},
{id:21,name:"تويستر اكس ميل مع ميني كرسبي",cat:"اكس ميل",price:5750,desc:"تويستر مع بطاطا، كول سلو، ثومية خاصة، قطعتين كرسبي أورجنال وبيبسي 330 مل."},
{id:22,name:"فيلية اكس ميل مع ميني كرسبي",cat:"اكس ميل",price:7500,desc:"فيلية دجاج مع بطاطا، كول سلو، ثومية خاصة، قطعتين كرسبي أورجنال وبيبسي 330 مل."},
{id:23,name:"سبايسي اكس ميل مع ميني كرسبي",cat:"اكس ميل",price:7500,desc:"سبايسي برجر مع بطاطا حارة، كول سلو، ثومية خاصة، قطعتين كرسبي سبايسي وبيبسي 330 مل."},

{id:24,name:"ماكسيكانا",cat:"ساب الساندويش",price:3500,desc:"دجاج متبل بالحار مشوي بالفرن، صمون ساب، خس، كبيس، ذرة، مايونيز، صويا صوص وجبنة موزاريلا."},
{id:25,name:"فرانسيسكو",cat:"ساب الساندويش",price:3500,desc:"دجاج متبل بالحار مشوي بالفرن، صمون ساب، خس، كبيس، ذرة، مايونيز، صويا صوص وجبنة موزاريلا."},
{id:26,name:"فاهيتا",cat:"ساب الساندويش",price:3500,desc:"صمون، دجاج مطبوخ مع بصل، فلفل بارد، فطر، مايونيز، كاتشب وجبنة موزاريلا."},
{id:27,name:"شيش طاووق",cat:"ساب الساندويش",price:3500,desc:"صمون، دجاج مشوي بالفرن، كول سلو، بطاطا مقلية ومخلل."},
{id:28,name:"صيني",cat:"ساب الساندويش",price:3500,desc:"صمون، دجاج مطبوخ مع فلفل بارد ألوان، هوت تشكن وينغز، مايونيز وجبنة موزاريلا."},
{id:29,name:"ستيك ريل",cat:"ساب الساندويش",price:4250,desc:"صمون، لحم ستيك، فطر مطبوخ، زعتر، جبنة موزاريلا ومايونيز."},
{id:30,name:"سندويتش دجاج مقلي",cat:"ساب الساندويش",price:3500,desc:"صمون، قطعة دجاج كنتاكي، ثومية، مخلل وبطاطا مقلية."},
{id:31,name:"سندويتش كرسبي",cat:"ساب الساندويش",price:3500,desc:"صمون، قطعة كرسبي، بطاطا مقلية، جبنة شيدر، مخلل، ذرة، خس، كاتشب وجبنة موزاريلا."},
{id:32,name:"فيلادلفيا",cat:"ساب الساندويش",price:3750,desc:"صمون، لحم مقطع مع فلفل بارد وفطر، ستيك صوص، جبنة موزاريلا ومايونيز."},
{id:33,name:"سندويتش هوت دوج",cat:"ساب الساندويش",price:2750,desc:"صمون، صوصج، مايونيز، كاتشب، خردل، باربيكيو صوص، خس وبطاطا مقرمشة."},

{id:34,name:"كنتاكي",cat:"الكنتاكي",price:9500,desc:"قطع دجاج، بطاطا مقلية، كول سلو، ثومية، صمون وبيبسي."},
{id:35,name:"كنتاكي",cat:"الكنتاكي",price:null,desc:"قطع دجاج، بطاطا مقلية، كول سلو، ثومية وصمون — السعر حسب الاختيار."},
{id:36,name:"كنتاكي عائلي 9 قطع",cat:"الكنتاكي",price:21000,desc:"قطع دجاج، بطاطا مقلية، كول سلو، ثومية، صمون وبيبسي."},

{id:37,name:"شوربة دجاج",cat:"الشوربة",price:2000,desc:"دجاج، كريمة، جزر وبهارات."},
{id:38,name:"شوربة فطر",cat:"الشوربة",price:2000,desc:"فطر، كريمة، بقدونس وبهارات."},

{id:39,name:"الكرسبي",cat:"الكرسبي",price:5500,desc:"قطع صدور دجاج، بطاطا مقلية، كول سلو، ثومية وصمون."},

{id:40,name:"بطاطا مقلية تشيزي هالبينو",cat:"البطاطا المقلية",price:4000,desc:"بطاطا مقلية مغطاة بصلصة جبن حارة وهالبينو."},
{id:41,name:"بطاطا مقلية بيبروني اند تشيز",cat:"البطاطا المقلية",price:4500,desc:"بطاطا مقلية بنكهة الجبن والبيبروني."},
{id:42,name:"بطاطا مقلية بالجبنة حارة",cat:"البطاطا المقلية",price:4250,desc:"بطاطا مقلية بنكهة حارة خاصة."},
{id:43,name:"بطاطا مقلية تباسكو حراقة",cat:"البطاطا المقلية",price:null,desc:"بطاطا مقلية بنكهة تباسكو حارة — السعر حسب الاختيار."},
{id:44,name:"مستر بطاطا مشوية",cat:"البطاطا المقلية",price:5500,desc:"بطاطا مشوية، زبدة، جبن موزاريلا وإضافات."},
{id:45,name:"جاكت بطاطا مشوية بالجبنة",cat:"البطاطا المقلية",price:5000,desc:"بطاطا مشوية، زبدة، موزاريلا، شيدر سائل وكاتشب."},
{id:46,name:"ستيك جاكت بطاطا مشوية",cat:"البطاطا المقلية",price:6000,desc:"بطاطا مشوية، زبدة، موزاريلا، لحم مع بصل وفلفل وفطر وصوص ستيك وبطاطا مقرمشة ومايونيز وباربيكيو."},
{id:47,name:"تشاينيز جاكت بطاطا مشوية",cat:"البطاطا المقلية",price:5500,desc:"بطاطا مشوية، زبدة، موزاريلا، دجاج مع فلفل ألوان ونكهة صويا صوص وتشوكن وينغز."},
{id:48,name:"علبة بطاطا مقلية صغيرة",cat:"البطاطا المقلية",price:null,desc:"باربكيو، شيدر وناتشوز — السعر حسب الاختيار."},
{id:49,name:"علبة بطاطا مقلية كبير بنكهات",cat:"البطاطا المقلية",price:3500,desc:"بطاطا مقلية مغطاة برانش وجبن خاص مع بيبروني ومكعبات طماطم."},
{id:50,name:"علبة بطاطا مقلية صغير بنكهات",cat:"البطاطا المقلية",price:1500,desc:"بطاطا مقلية مغطاة بصلصة جبن خاصة وهالبينو حار."},

{id:51,name:"برجر دجاج",cat:"البرجر",price:4000,desc:"صمون، دجاج مفروم بخلطة خاصة، خس، طماطم، بصل، مايونيز، كاتشب ومخلل."},
{id:52,name:"برجر فيليه دجاج",cat:"البرجر",price:4500,desc:"صمون، قطعة دجاج مقرمش، كبيس، مايونيز، خس وشيدر صوص."},
{id:53,name:"برجر دجاج حار",cat:"البرجر",price:4500,desc:"صمون، قطعة دجاج مقرمش، كبيس حار، مايونيز، خس وشيدر صوص."},
{id:54,name:"برجر سبيشيال",cat:"البرجر",price:5250,desc:"صمون، لحم بخلطة خاصة، صوص سبيشل، فطر، شيدر صوص وجبن شرائح."},
{id:55,name:"برجر كلاسيك",cat:"البرجر",price:4500,desc:"صمون، لحم بخلطة خاصة، خس، طماطم، بصل، مايونيز، كاتشب ومخلل."},
{id:56,name:"برجر فلفل حار",cat:"البرجر",price:4750,desc:"صمون، لحم بخلطة خاصة، كبيس، خس، طماطم، كاتشب، مايونيز، فلفل بارد وبصل مشوي وتشيلي صلصة."},
{id:57,name:"برجر بالجبنة",cat:"البرجر",price:4750,desc:"صمون، لحم بخلطة خاصة، خس، طماطم، بصل، مايونيز، كاتشب، جبن شرائح ومخلل."},
{id:58,name:"برجر باربيكيو",cat:"البرجر",price:4500,desc:"صمون، لحم بخلطة خاصة، باربيكيو صوص، خس، مايونيز، طماطم مشوية وبصل مشوي."},
{id:59,name:"برجر لبناني",cat:"البرجر",price:4500,desc:"صمون، لحم بخلطة خاصة، كول سلو وكاتشب."},
{id:60,name:"ميني برجر كومبو",cat:"البرجر",price:5500,desc:"3 صمون ميني، قطعتان لحم، دجاج مقرمش، بيبسي وبطاطا مقلية."},
{id:61,name:"برجر دوبل",cat:"البرجر",price:7250,desc:"صمون، قطعتان لحم بخلطة خاصة، خس، طماطم، بصل، مايونيز، كاتشب وجبن شرائح."},

{id:62,name:"أجنحة بافلو",cat:"الأطباق الغربية",price:6000,desc:"أجنحة مقلية بصوص حار، بطاطا مقلية وصلصة رانش."},
{id:63,name:"ريزو",cat:"الأطباق الغربية",price:5000,desc:"أرز بخلطة توابل خاصة، دجاج مقرمش وصلصة ريزو خاصة."},

{id:64,name:"كرات دجاج",cat:"الوجبة الأطفال",price:4000,desc:"كرات دجاج بانه، بطاطا مقلية، عصير ولعبة أطفال."},
{id:65,name:"برجر دجاج وجبة أطفال",cat:"الوجبة الأطفال",price:4000,desc:"برجر دجاج، بطاطا مقلية، عصير ولعبة أطفال."},
{id:66,name:"برجر لحم اطفال",cat:"الوجبة الأطفال",price:4000,desc:"برجر لحم، بطاطا مقلية، عصير ولعبة أطفال."},
{id:67,name:"كرسبي فنكر",cat:"الوجبة الأطفال",price:4000,desc:"بطاطا مقلية، عصير ولعبة أطفال."},
{id:68,name:"فرايد تشيكن ميل",cat:"الوجبة الأطفال",price:4000,desc:"قطعة دجاج كنتاكي، بطاطا مقلية، عصير ولعبة أطفال."},

{id:69,name:"صاج شاورما لحم",cat:"الصاج",price:5000,desc:"خبز صاج، شاورما لحم، بطاطا مقلية وطرطور."},
{id:70,name:"صاج شاورما دجاج",cat:"الصاج",price:4500,desc:"خبز صاج، شاورما دجاج، بطاطا مقلية وصوص خلطة مميزة مع مايونيز."},
{id:71,name:"مايتي زنجر",cat:"الصاج",price:4500,desc:"خبز تورتيلا، قطعة دجاج مقرمشة، طماطم، ذرة، كبيس، كاتشب، بطاطا مقلية وصوص مايونيز."},

{id:72,name:"لازانيا لحم",cat:"الإيطالي",price:7500,desc:"معكرونة لازانيا، بشاميل، لحم مفروم مطبوخ وتوابل وجبنة موزاريلا."},
{id:73,name:"لازانيا دجاج",cat:"الإيطالي",price:7000,desc:"معكرونة لازانيا، بشاميل، دجاج مطبوخ وتوابل وجبنة موزاريلا."},

{id:74,name:"بيتزا طازج",cat:"البيتزا",price:null,desc:"صلصة، جبنة، فلفل بارد، طماطم وزيتون."},
{id:75,name:"بيتزا شاورما دجاج",cat:"البيتزا",price:null,desc:"صلصة، موزاريلا، شاورما دجاج، فلفل بارد، طماطم وزيتون."},
{id:76,name:"بيتزا خضروات",cat:"البيتزا",price:null,desc:"صلصة، موزاريلا، فلفل بارد، فطر، زيتون، ذرة، طماطم وبصل."},
{id:77,name:"بيتزا مارجريتا",cat:"البيتزا",price:null,desc:"صلصة، موزاريلا وزيتون."},
{id:78,name:"بيتزا إيطالية",cat:"البيتزا",price:null,desc:"صلصة وموزاريلا، دجاج، صوصج، فطر، فلفل بارد، طماطم وزيتون."},
{id:79,name:"بيتزا بيبروني",cat:"البيتزا",price:null,desc:"صلصة، موزاريلا وشرائح لحم بيبروني."},
{id:80,name:"بيتزا لحم بقري متبل",cat:"البيتزا",price:null,desc:"صلصة، موزاريلا، لحم مطبوخ مع توابل، فلفل بارد، طماطم وزيتون."},
{id:81,name:"بيتزا سجق",cat:"البيتزا",price:null,desc:"صلصة، موزاريلا، فلفل بارد، طماطم وزيتون."},
{id:82,name:"بيتزا دجاج باربيكيو",cat:"البيتزا",price:null,desc:"صلصة بيتزا خاصة، موزاريلا، دجاج مشوي، فطر، ذرة، بصل أحمر، فلفل أخضر وصلصة شواء."},
{id:83,name:"بيتزا سوبر سوبريم",cat:"البيتزا",price:null,desc:"صلصة بيتزا خاصة، موزاريلا، بيبروني، لحم، بصل أحمر، فطر، فلفل أخضر وزيتون."},
{id:84,name:"بيتزا يوناني",cat:"البيتزا",price:null,desc:"صلصة بيتزا خاصة، موزاريلا، جبنة فيتا، بصل أحمر، فلفل أخضر وطماطم."},
{id:85,name:"بيتزا هوت ستاف دجاج",cat:"البيتزا",price:null,desc:"صلصة بيتزا خاصة، موزاريلا، دجاج مشوي، بصل أحمر، فلفل حار وطماطم."},
{id:86,name:"بيتزا سبايسي حارة",cat:"البيتزا",price:null,desc:"صلصة بيتزا خاصة، موزاريلا، مكعبات لحم، بصل أحمر، فلفل حار وطماطم."},
{id:87,name:"بيتزا فلامين بافلو",cat:"البيتزا",price:null,desc:"صلصة بيتزا خاصة، موزاريلا، دجاج متبل حار، فلفل حار ورانش."},
{id:88,name:"بيتزا تشكن كاري",cat:"البيتزا",price:null,desc:"صلصة بيتزا خاصة، موزاريلا، دجاج مشوي، بصل أحمر، فلفل أخضر وصلصة كاري."},
{id:89,name:"بيتزا شاورما لحم",cat:"البيتزا",price:null,desc:"صلصة، موزاريلا، شاورما لحم، فلفل بارد، طماطم وزيتون."},
{id:90,name:"بيتزا فطر",cat:"البيتزا",price:null,desc:"صلصة، موزاريلا، فطر، فلفل بارد، طماطم وزيتون."},

{id:91,name:"صوص هاني ماسترد",cat:"الصوص",price:750,desc:"خردل، عسل، مايونيز، خل وتوابل."},
{id:92,name:"صوص سيزر",cat:"الصوص",price:750,desc:"ثوم، جبنة بارميزان، مايونيز وعصير ليمون."},
{id:93,name:"صوص رانش",cat:"الصوص",price:500,desc:"مايونيز، حليب، ثوم، بصل، خردل وأعشاب وتوابل."},
{id:94,name:"صوص كوكتيل",cat:"الصوص",price:500,desc:"صوص كوكتيل."},
{id:95,name:"صوص باربيكيو",cat:"الصوص",price:750,desc:"كاتشب، خل، سكر، صلصة رسيستيرشاير وتوابل."},
{id:96,name:"صوص طرطور",cat:"الصوص",price:500,desc:"ليمون، طحينية، ثوم وبقدونس."},
{id:97,name:"صوص تشيلي",cat:"الصوص",price:1250,desc:"فلفل حار، ثوم، خل أبيض، ماء ونشا."},
{id:98,name:"صوص سويت تشيلي",cat:"الصوص",price:1000,desc:"فلفل حار، ثوم، سكر، خل أبيض، ماء ونشا."},
{id:99,name:"جبنة شيدر",cat:"الصوص",price:750,desc:"صلصة جبنة شيدر سائلة."},

{id:100,name:"ببسي",cat:"مشروبات باردة",price:500,desc:"مشروب غازي."},
{id:101,name:"ميرندا",cat:"مشروبات باردة",price:500,desc:"مشروب غازي."},
{id:102,name:"ببسي دايت",cat:"مشروبات باردة",price:500,desc:"مشروب غازي دايت."},
{id:103,name:"سفن اب",cat:"مشروبات باردة",price:500,desc:"مشروب غازي."},
{id:104,name:"ديو",cat:"مشروبات باردة",price:500,desc:"مشروب غازي."},

{id:105,name:"لحم بالعجين",cat:"المناقيش",price:3000,desc:"منقوشة لحم بالعجين."},
{id:106,name:"لحم بعجين بالجبن",cat:"المناقيش",price:3500,desc:"لحم بعجين مع الجبن."},
{id:107,name:"منقوشة دجاج",cat:"المناقيش",price:3000,desc:"صدر دجاج وثوم."},
{id:108,name:"منقوشة محمرة",cat:"المناقيش",price:2500,desc:"دبس فلفل، طماطم، بصل وسمسم."},
{id:109,name:"منقوشة زعتر",cat:"المناقيش",price:2500,desc:"زعتر وسمسم."},
{id:110,name:"منقوشة جبنة",cat:"المناقيش",price:2750,desc:"خليط جبن."},
{id:111,name:"منقوشة لحم مفروم",cat:"المناقيش",price:3000,desc:"منقوشة لحم مفروم."}
,
{id:112,name:"نفر كباب لحم عراقي",cat:"المشاوي",price:12500,desc:"شيش كباب من لحم غنم عراقي طازج، مشوي على فحم."},
{id:113,name:"نصف نفر كباب لحم",cat:"المشاوي",price:9000,desc:"نصف حصة من كباب لحم غنم مشوي على فحم."},
{id:114,name:"نفر كباب دجاج",cat:"المشاوي",price:8500,desc:"كباب من صدر دجاج مفروم، متبل بخلطة خاصة ومشوي على فحم."},
{id:115,name:"نصف نفر كباب دجاج",cat:"المشاوي",price:6500,desc:"نصف حصة من كباب دجاج مشوي على فحم."},
{id:116,name:"نفر تكة لحم عراقي",cat:"المشاوي",price:14500,desc:"قطع لحم غنم طرية متبلة بخلطة عراقية تقليدية ومشوية بعناية."},
{id:117,name:"نصف نفر تكة لحم",cat:"المشاوي",price:9500,desc:"نصف حصة من تكة لحم غنم مشوي."},
{id:118,name:"مشكل مشاوي",cat:"المشاوي",price:12500,desc:"شيش كباب لحم، شيش كباب دجاج وشيش تكة مشوية على فحم."},
{id:119,name:"نفر معلاق",cat:"المشاوي",price:12500,desc:"قطع معلاق غنم طازج متبل ومشوي على فحم."},
{id:120,name:"نفر طاووق",cat:"المشاوي",price:8500,desc:"قطع شيش طاووق من صدر دجاج متبل بالثوم والليمون ومشوي."},
{id:121,name:"نصف نفر طاووق",cat:"المشاوي",price:6500,desc:"نصف حصة من شيش طاووق مشوي."},
{id:122,name:"عرايس",cat:"المشاوي",price:6000,desc:"خبز عربي محشو بلحم مفروم متبل ومشوي على فحم."},
{id:123,name:"مشكل مشاوي عائلي",cat:"المشاوي",price:36500,desc:"صينية عائلية مشكلة من كباب وتكة وطاووق للمشاركة."},
{id:124,name:"دجاج مقلي مع الرز",cat:"الأطباق الشرقية",price:10000,desc:"قطع دجاج مقلية مقرمشة تقدم مع رز ومرق مشكل."},
{id:125,name:"كبسة دجاج",cat:"الأطباق الشرقية",price:11000,desc:"أرز كبسة طويل متبل ببهارات خليجية مع دجاج مطهو بعناية."},
{id:126,name:"مقلوبة دجاج",cat:"الأطباق الشرقية",price:11000,desc:"طبق مقلوبة تقليدي بالدجاج والباذنجان والبطاطا والرز المتبل."},
{id:127,name:"قوزي عراقي",cat:"الأطباق الشرقية",price:14750,desc:"لحم غنم قوزي طري فوق رز مزين بالشعرية والمكسرات مع مرق."},
{id:128,name:"خروف مشوي",cat:"الأطباق الشرقية",price:15000,desc:"قطع لحم خروف مشوية بالفرن وتقدم مع رز عراقي."},
{id:129,name:"دجاج كاري مع الرز",cat:"الأطباق الشرقية",price:8000,desc:"قطع من صدر دجاج مطبوخة بصلصة كاري غنية وتقدم بجانب رز."},
{id:130,name:"حساء عدس",cat:"الشوربة",price:2000,desc:"شوربة عدس دافئة تقدم مع ليمون وقطع خبز محمص."}
]
const OFFICIAL_IMAGES={
  default:"https://www.altazaj-iq.com/wp-content/uploads/2021/01/%D8%A7%D9%84%D9%85%D8%B7%D8%B9%D9%85-2-scaled.jpg",
  offer:"https://www.altazaj-iq.com/wp-content/uploads/2021/01/fajita-offer.jpg",
  about:"https://www.altazaj-iq.com/wp-content/uploads/2021/01/%D8%A8%D9%8A%D9%83%D8%B1%D9%8A-%D9%88-%D9%85%D8%B7%D8%B9%D9%85-scaled.jpg",
  times:"https://www.altazaj-iq.com/wp-content/uploads/2021/01/%D8%A7%D9%84%D8%B7%D8%A7%D8%B2%D8%AC-%D9%85%D9%88%D9%84.jpg",
  jubaila:"https://www.altazaj-iq.com/wp-content/uploads/2021/01/%D8%A7%D9%84%D8%B7%D8%A7%D8%B2%D8%AC-%D8%AC%D8%A8%D9%8A%D9%84%D8%A9.jpg"
};
const MENU_PHOTOS=[
  OFFICIAL_IMAGES.offer,
  OFFICIAL_IMAGES.times,
  OFFICIAL_IMAGES.jubaila,
  OFFICIAL_IMAGES.about,
  OFFICIAL_IMAGES.default
];
const CATEGORY_IMAGES={
  "ساب الساندويش":OFFICIAL_IMAGES.offer,
  "الصاج":OFFICIAL_IMAGES.offer,
  "ميغا ساندويش":OFFICIAL_IMAGES.offer,
  "البرجر":OFFICIAL_IMAGES.times,
  "البيتزا":OFFICIAL_IMAGES.times,
  "المشاوي":OFFICIAL_IMAGES.about,
  "الأطباق الشرقية":OFFICIAL_IMAGES.about,
  "الإيطالي":OFFICIAL_IMAGES.about,
  "الوجبة الأطفال":OFFICIAL_IMAGES.times,
  "البطاطا المقلية":OFFICIAL_IMAGES.about,
  "السلطات":OFFICIAL_IMAGES.about,
  "الشوربة":OFFICIAL_IMAGES.about,
  "الكرسبي":OFFICIAL_IMAGES.about,
  "الكنتاكي":OFFICIAL_IMAGES.default,
  "المناقيش":OFFICIAL_IMAGES.about,
  "الصوص":OFFICIAL_IMAGES.default,
  "مشروبات باردة":OFFICIAL_IMAGES.times
};
const branchPhones{
 "الجزائر":"07711111828","بصرة تايمز سكوير":"07729292929","الجبيلة":"07729292929","الزبير":"07719523849"
};
const branchMaps={
 "الجزائر":"https://www.google.com/maps/search/?api=1&query=AlTazaj+Snack+Basrah",
 "بصرة تايمز سكوير":"https://www.google.com/maps/search/?api=1&query=Basra+Times+Square+Mall",
 "الجبيلة":"https://www.google.com/maps/search/?api=1&query=AlTazaj+Snack+Jubaila+Basrah",
 "الزبير":"https://www.google.com/maps/search/?api=1&query=AlTazaj+Snack+Al+Zubair+Basrah"
};
let cat="الكل",cart=[],selectedBranch="الجزائر";
const cats=["الكل",...new Set(products.map(p=>p.cat))];

function money(n){return Number(n).toLocaleString("ar-IQ")+" د.ع";}
function imageFor(p){
  // Use the official restaurant photography as a clean fallback until each menu
  // item's approved crop is committed as an individual asset.
  return MENU_PHOTOS[(Number(p.id)-1)%MENU_PHOTOS.length] || CATEGORY_IMAGES[p.cat] || OFFICIAL_IMAGES.default;
}
function chips(){
  const el=document.getElementById("chips"); if(!el)return;
  el.innerHTML=cats.map(c=>'<button class="chip '+(c===cat?'active':'')+'" type="button" onclick="setCat('+JSON.stringify(c)+')">'+c+'</button>').join("");
}
function setCat(c){cat=c;chips();renderMenu();}
function focusCategory(c){setCat(c);document.getElementById("menu").scrollIntoView({behavior:"smooth"});}
function renderMenu(){
  const input=document.getElementById("search");
  const q=(input?.value||"").trim().toLowerCase();
  const list=products.filter(p=>(cat==="الكل"||p.cat===cat)&&(!q||p.name.toLowerCase().includes(q)));
  document.getElementById("menuGrid").innerHTML=list.map(p=>{
    const variable=p.price===null;
    return '<article class="menu-row"><div class="menu-avatar"><img src="'+imageFor(p)+'" alt="" loading="lazy"></div>'+
      '<div class="menu-copy"><div class="menu-title"><h3>'+p.name+'</h3><i></i><b class="menu-price '+(variable?'variable':'')+'">'+(variable?"حسب الاختيار":money(p.price))+'</b></div>'+
      '<p>'+p.desc+'</p><span class="menu-cat">'+p.cat+'</span></div>'+
      (variable?'<button class="line-btn ghost" type="button" onclick="showVariable()">اختيار</button>':'<button class="line-btn" type="button" onclick="addToCart('+p.id+')">أضف <strong>+</strong></button>')+
      '</article>';
  }).join("")||'<div class="empty">ما لقينا صنف بهذا الاسم.</div>';
}
function showVariable(){toast("هذا الصنف يحتاج تحديد الحجم أو الخيار من إدارة المطعم قبل تثبيت سعره.");}
function addToCart(id){
  const p=products.find(x=>x.id===id); if(!p||p.price===null)return;
  const f=cart.find(x=>x.id===id); f?f.qty++:cart.push({...p,qty:1});
  updateCart();openCart();
}
function changeQty(id,delta){
  const f=cart.find(x=>x.id===id); if(!f)return;
  f.qty+=delta; if(f.qty<=0)cart=cart.filter(x=>x.id!==id); updateCart();
}
function updateCart(){
  const count=document.getElementById("cartCount"); if(count)count.textContent=cart.reduce((a,x)=>a+x.qty,0);
  const total=cart.reduce((a,x)=>a+x.price*x.qty,0), totalEl=document.getElementById("cartTotal"); if(totalEl)totalEl.textContent=money(total);
  const branchEl=document.getElementById("selectedBranch"); if(branchEl)branchEl.textContent="الفرع: "+selectedBranch;
  const items=document.getElementById("cartItems"); if(!items)return;
  items.innerHTML=cart.length?cart.map(x=>'<div class="cart-line"><div><b>'+x.name+'</b><small>'+money(x.price)+' للوحدة</small><div class="qty"><button type="button" onclick="changeQty('+x.id+',-1)">−</button><span>'+x.qty+'</span><button type="button" onclick="changeQty('+x.id+',1)">+</button></div></div><strong>'+money(x.price*x.qty)+'</strong></div>').join(""):'<div class="cart-empty">السلة فارغة حالياً.</div>';
}
function setBranch(branch){
  selectedBranch=branch; updateCart();
  document.querySelectorAll(".branch-card").forEach(x=>x.classList.toggle("active",x.dataset.branch===branch));
  toast("تم اختيار فرع "+branch);
}
function openCart(){document.getElementById("cartPanel").classList.add("open");document.body.classList.add("locked");updateCart();}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.body.classList.remove("locked");}
function toggleNav(){document.getElementById("mobileNav").classList.toggle("open");}
function toggleSearch(){
  const p=document.getElementById("searchPanel"); p.classList.toggle("open");
  document.getElementById("search")?.focus();
}
function openOrderForm(){
  if(!cart.length){toast("السلة فارغة حالياً.");return}
  document.getElementById("branchSelect").value=selectedBranch;
  document.getElementById("orderModal").classList.add("open"); document.body.classList.add("locked");
}
function closeOrderForm(){document.getElementById("orderModal").classList.remove("open");document.body.classList.remove("locked");}
function copyOrder(){
  if(!cart.length){toast("السلة فارغة حالياً.");return}
  const lines=cart.map(x=>"• "+x.name+" × "+x.qty+" = "+money(x.price*x.qty)).join("\n");
  const t="طلب الطازج سناك\nالفرع: "+selectedBranch+"\n"+lines+"\nالمجموع: "+money(cart.reduce((a,x)=>a+x.price*x.qty,0));
  navigator.clipboard?.writeText(t).then(()=>toast("تم نسخ تفاصيل الطلب."),()=>toast("افتح الطلب من السلة وانسخه يدوياً."));
}
function callBranch(){const n=branchPhones[selectedBranch]; if(n)window.location.href="tel:+964"+n.slice(1);}
function sendOrder(){
  if(!cart.length){toast("السلة فارغة حالياً.");return}
  const name=document.getElementById("customerName").value.trim(),phone=document.getElementById("customerPhone").value.trim(),address=document.getElementById("customerAddress").value.trim(),branch=document.getElementById("branchSelect").value;
  if(!name||!phone||!address||!branch){toast("رجاءً كمل البيانات المطلوبة.");return}
  selectedBranch=branch;
  const lines=cart.map(x=>"• "+x.name+" × "+x.qty+" = "+money(x.price*x.qty)).join("\n");
  const t="طلب جديد - الطازج سناك\nالاسم: "+name+"\nالهاتف: "+phone+"\nالفرع: "+branch+"\nالعنوان: "+address+"\n"+lines+"\nالمجموع: "+money(cart.reduce((a,x)=>a+x.price*x.qty,0));
  navigator.clipboard?.writeText(t);
  closeOrderForm(); openCart(); toast("تم تجهيز الطلب ونسخه. اتصل بالفرع لإرساله.");
}
function toast(msg){
  const el=document.getElementById("toast"); if(!el)return;
  el.textContent=msg;el.classList.add("show");clearTimeout(window.__toast);
  window.__toast=setTimeout(()=>el.classList.remove("show"),3200);
}
function setActiveNav(){
 const links=[...document.querySelectorAll("[data-nav]")],ids=["home","menu","offers","branches","about"],y=window.scrollY+170;
 let current="home";ids.forEach(id=>{const el=document.getElementById(id);if(el&&el.offsetTop<=y)current=id;});
 links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
}
document.addEventListener("DOMContentLoaded",()=>{
 const input=document.getElementById("search");
 input?.addEventListener("input",renderMenu);
 input?.addEventListener("keydown",e=>{if(e.key==="Escape"){input.value="";document.getElementById("searchPanel").classList.remove("open");renderMenu();}});
 document.getElementById("branchSelect")?.addEventListener("change",e=>setBranch(e.target.value));
 chips();renderMenu();updateCart();setActiveNav();
});
window.addEventListener("scroll",setActiveNav,{passive:true});
