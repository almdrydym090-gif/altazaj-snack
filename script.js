const products=[
{id:1,name:"برجر دجاج",cat:"برجر",price:4000,img:"https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=700&q=85",desc:"دجاج مفروم مع خلطة خاصة وخضار وصوصات."},
{id:2,name:"برجر فيليه دجاج",cat:"برجر",price:4500,img:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=85",desc:"قطعة دجاج مقرمشة مع كبيس ومايونيز وشيدر."},
{id:3,name:"برجر دجاج حار",cat:"برجر",price:4500,img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85",desc:"دجاج مقرمش مع كبيس حار ومايونيز وشيدر."},
{id:4,name:"برجر سبيشيال",cat:"برجر",price:5250,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",desc:"لحم بخلطة خاصة وصوص سبيشل وفطر وشيدر."},
{id:5,name:"برجر كلاسيك",cat:"برجر",price:4500,img:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85",desc:"لحم بخلطة خاصة مع خس وطماطم وبصل ومخلل."},
{id:6,name:"صاج شاورما دجاج",cat:"الصاج",price:4500,img:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=85",desc:"خبز صاج، شاورما دجاج، بطاطا وصوص خلطة مميزة."},
{id:7,name:"صاج شاورما لحم",cat:"الصاج",price:5000,img:"https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=85",desc:"خبز صاج مع شاورما لحم وبطاطا وطرطور."},
{id:8,name:"مايتي زنجر",cat:"الصاج",price:4500,img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=85",desc:"تورتيلا، دجاج مقرمش، خضار وبطاطا وصوص."},
{id:9,name:"سندويتش كرسبي",cat:"الكرسبي",price:3500,img:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=700&q=85",desc:"كرسبي، بطاطا، شيدر، مخلل وخضار."},
{id:10,name:"تويستر X ميل مع فرايد تشكن",cat:"X ميل",price:5750,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",desc:"ساندويش مع بطاطا وكول سلو وفرايد تشكن ومشروب."},
{id:11,name:"فيلية X ميل مع فرايد تشكن",cat:"X ميل",price:7500,img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85",desc:"فيلية دجاج مع بطاطا وكول سلو وفرايد تشكن."},
{id:12,name:"ريزو",cat:"الأطباق الغربية",price:5000,img:"https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=700&q=85",desc:"أرز بتوابل خاصة مع دجاج مقرمش وصوص ريزو."},
{id:13,name:"أجنحة بافلو",cat:"الأطباق الغربية",price:6000,img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=85",desc:"أجنحة مقلية بصوص حار مع بطاطا ورانش."},
{id:14,name:"لازانيا لحم",cat:"الإيطالي",price:7500,img:"https://images.unsplash.com/photo-1574894709920-11b28e7367a9?auto=format&fit=crop&w=700&q=85",desc:"لازانيا، بشاميل، لحم وتوابل وجبنة موزاريلا."},
{id:15,name:"لازانيا دجاج",cat:"الإيطالي",price:7000,img:"https://images.unsplash.com/photo-1574894709920-11b28e7367a9?auto=format&fit=crop&w=700&q=85",desc:"لازانيا مع بشاميل ودجاج وتوابل وموزاريلا."},
{id:16,name:"مستر بطاطا مشوية",cat:"البطاطا",price:5500,img:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85",desc:"بطاطا مشوية، زبدة، موزاريلا وإضافات."},
{id:17,name:"جاكت بطاطا مشوية بالجبنة",cat:"البطاطا",price:5000,img:"https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=85",desc:"بطاطا مشوية، زبدة، موزاريلا، شيدر وكاتشب."},
{id:18,name:"برجر دجاج وجبة أطفال",cat:"الأطفال",price:4000,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",desc:"برجر دجاج، بطاطا، عصير ولعبة أطفال."},
{id:19,name:"كرسبي فنكر",cat:"الأطفال",price:4000,img:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=700&q=85",desc:"بطاطا مقلية، عصير ولعبة أطفال."},
{id:20,name:"ببسي",cat:"مشروبات",price:500,img:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=700&q=85",desc:"مشروب غازي."}
];
let cat="الكل",cart=[];
const cats=["الكل",...new Set(products.map(p=>p.cat))];
function money(n){return n.toLocaleString("ar-IQ")+" د.ع"}
function chips(){document.getElementById("chips").innerHTML=cats.map(c=>'<button class="chip '+(c===cat?'active':'')+'" onclick="setCat('+JSON.stringify(c)+')">'+c+'</button>').join("")}
function setCat(c){cat=c;chips();renderMenu()}
function renderMenu(){const q=document.getElementById("search").value.trim().toLowerCase();const list=products.filter(p=>(cat==="الكل"||p.cat===cat)&&(!q||p.name.toLowerCase().includes(q)));document.getElementById("menuGrid").innerHTML=list.map(p=>'<article class="item"><div class="item-img"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"><span class="price">'+money(p.price)+'</span></div><div class="item-body"><h3>'+p.name+'</h3><p>'+p.desc+'</p><button class="add" onclick="addToCart('+p.id+')">أضف للطلب +</button></div></article>').join("")||"<p>ما لقينا وجبة بهالاسم.</p>"}
function addToCart(id){const p=products.find(x=>x.id===id),f=cart.find(x=>x.id===id);f?f.qty++:cart.push({...p,qty:1});updateCart();openCart()}
function updateCart(){document.getElementById("cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>'<div class="row"><div><b>'+x.name+'</b><small>'+x.qty+' × '+money(x.price)+'</small></div><b>'+money(x.price*x.qty)+'</b></div>').join(""):"<p style='color:#777'>السلة فارغة حالياً.</p>";document.getElementById("cartTotal").textContent=money(cart.reduce((a,x)=>a+x.price*x.qty,0))}
function openCart(){document.getElementById("cartPanel").classList.add("open")}
function closeCart(){document.getElementById("cartPanel").classList.remove("open")}
function toggleNav(){document.getElementById("mobileNav").classList.toggle("open")}
function checkout(){alert("هذه نسخة واجهة الطلب. يمكن ربطها لاحقاً بنظام الطلب والتوصيل الخاص بالمطعم.")}
chips();renderMenu();updateCart();