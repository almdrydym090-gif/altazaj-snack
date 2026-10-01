const products=[
{id:1,name:"كلاسيك برجر",cat:"برجر",price:4500,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",desc:"برجر كلاسيك بطعم غني"},
{id:2,name:"باربيكيو برجر",cat:"برجر",price:4500,img:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",desc:"نكهة باربيكيو مدخنة"},
{id:3,name:"برجر دجاج",cat:"برجر",price:4000,img:"https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=700&q=80",desc:"دجاج مقرمش وصوص خاص"},
{id:4,name:"ريزو",cat:"وجبات",price:5000,img:"https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=700&q=80",desc:"وجبة مشبعة بطابع الطازج"},
{id:5,name:"صاج شاورما دجاج",cat:"شاورما",price:4500,img:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80",desc:"شاورما دجاج بصاج طازج"},
{id:6,name:"كرسبي",cat:"كرسبي",price:5500,img:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=700&q=80",desc:"قطع دجاج مقرمشة"},
{id:7,name:"كنتاكي",cat:"دجاج",price:9500,img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",desc:"دجاج مقرمش مع إضافاته"},
{id:8,name:"بيتزا خاصة",cat:"بيتزا",price:7500,img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",desc:"بيتزا ساخنة ومليانة نكهة"}];
let cat="الكل",cart=[];const cats=["الكل",...new Set(products.map(p=>p.cat))];
function money(n){return n.toLocaleString("ar-IQ")+" د.ع"}
function chips(){document.getElementById("chips").innerHTML=cats.map(c=>'<button class="chip '+(c===cat?'active':'')+'" onclick="setCat(''+c+'')">'+c+'</button>').join("")}
function setCat(c){cat=c;chips();renderMenu()}
function renderMenu(){const q=document.getElementById("search").value.trim().toLowerCase();const list=products.filter(p=>(cat==="الكل"||p.cat===cat)&&(!q||p.name.toLowerCase().includes(q)));document.getElementById("menuGrid").innerHTML=list.map(p=>'<article class="item"><div class="item-img"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"><span class="price">'+money(p.price)+'</span></div><div class="item-body"><h3>'+p.name+'</h3><p>'+p.desc+'</p><button class="add" onclick="addToCart('+p.id+')">أضف للطلب +</button></div></article>').join("")||"<p>ما لقينا وجبة بهالاسم.</p>"}
function addToCart(id){const p=products.find(x=>x.id===id),f=cart.find(x=>x.id===id);f?f.qty++:cart.push({...p,qty:1});updateCart();openCart()}
function updateCart(){document.getElementById("cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>'<div class="row"><div><b>'+x.name+'</b><small>'+x.qty+' × '+money(x.price)+'</small></div><b>'+money(x.price*x.qty)+'</b></div>').join(""):"<p style='color:#777'>السلة فارغة حالياً.</p>";document.getElementById("cartTotal").textContent=money(cart.reduce((a,x)=>a+x.price*x.qty,0))}
function openCart(){document.getElementById("cartPanel").classList.add("open")}
function closeCart(){document.getElementById("cartPanel").classList.remove("open")}
function scrollToMenu(){document.getElementById("menu").scrollIntoView({behavior:"smooth"})}
chips();renderMenu();updateCart();