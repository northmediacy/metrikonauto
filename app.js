const cars = [{"id": "cayenne", "title": "Porsche Cayenne", "brand": "Porsche", "year": "2020", "category": "SUV & Pick-up", "status": "2. El", "price": "Özel Seçki", "km": "—", "fuel": "Benzin", "trans": "Otomatik", "color": "Siyah", "img": "https://www.gelgezgor.com/uploads/images/2026/07/14/731022418182724097332959995695762370211413443n-6A555A0484418-530_393.jpg", "badge": "Signature"}, {"id": "gle300d", "title": "Mercedes GLE 300d", "brand": "Mercedes-Benz", "year": "2020", "category": "SUV & Pick-up", "status": "2. El", "price": "Öne Çıkan", "km": "—", "fuel": "Dizel", "trans": "Otomatik", "color": "Siyah", "img": "https://www.gelgezgor.com/uploads/images/2026/07/14/734253256182728982232959993372849775245325631n-6A555B8394BD2-530_393.jpg", "badge": "Luxury"}, {"id": "glc220d", "title": "Mercedes GLC 220d", "brand": "Mercedes-Benz", "year": "2020", "category": "SUV & Pick-up", "status": "2. El", "price": "Premium Stok", "km": "—", "fuel": "Dizel", "trans": "Otomatik", "color": "Beyaz", "img": "https://www.gelgezgor.com/uploads/images/2026/07/30/75955871118275836930295999899874952870962713n-6A6BB653DEFEA-530_393.jpg", "badge": "Premium"}, {"id": "x5", "title": "BMW X5", "brand": "BMW", "year": "2020", "category": "SUV & Pick-up", "status": "2. El", "price": "Editörün Seçimi", "km": "—", "fuel": "Benzin", "trans": "Otomatik", "color": "Siyah", "img": "https://www.gelgezgor.com/uploads/images/2026/07/30/750229534182744731902959993740634086666563111n-6A6BB4A2E8982-530_393.jpg", "badge": "Performance"}, {"id": "x1", "title": "BMW X1", "brand": "BMW", "year": "2019", "category": "SUV & Pick-up", "status": "2. El", "price": "Güncel Portföy", "km": "—", "fuel": "Benzin", "trans": "Otomatik", "color": "Beyaz", "img": "https://www.gelgezgor.com/uploads/images/2026/07/14/73276999518272508736295999399912710701120441n-6A555ACC8DFE5-530_393.jpg", "badge": "Urban SUV"}, {"id": "audiq7", "title": "Audi Q7", "brand": "Audi", "year": "2020", "category": "SUV & Pick-up", "status": "2. El", "price": "Prestij Seçki", "km": "—", "fuel": "Benzin", "trans": "Otomatik", "color": "Gri", "img": "https://www.gelgezgor.com/uploads/images/2026/07/30/761306620182760744102959991607495485457273591n-6A6BB6C052617-530_393.jpg", "badge": "Prestige"}, {"id": "jeepg", "title": "Jeep Gladiator", "brand": "Jeep", "year": "2022", "category": "SUV & Pick-up", "status": "2. El", "price": "Adventure Line", "km": "—", "fuel": "Benzin", "trans": "Otomatik", "color": "Bej", "img": "https://domcar.com.cy/upload/resize_cache/iblock/b15/640_399_2/b1511ca4f1dfe92409df957653b68da3.jpg", "badge": "Adventure"}, {"id": "cherokee", "title": "Jeep Cherokee", "brand": "Jeep", "year": "2019", "category": "SUV & Pick-up", "status": "2. El", "price": "Adventure Line", "km": "—", "fuel": "Benzin", "trans": "Otomatik", "color": "Kırmızı", "img": "https://www.gelgezgor.com/uploads/images/2026/07/30/753225479182749764342959997013014911608407098n-6A6BB564C6E33-530_393.jpg", "badge": "Adventure"}, {"id": "tiguan", "title": "Volkswagen Tiguan", "brand": "Volkswagen", "year": "2020", "category": "SUV & Pick-up", "status": "2. El", "price": "Aile Seçimi", "km": "—", "fuel": "Benzin", "trans": "Otomatik", "color": "Beyaz", "img": "https://www.gelgezgor.com/uploads/images/2026/05/20/671227979182668377582959994628240962031312218n-6A0DB42C98311-530_393.jpg", "badge": "SUV"}, {"id": "mghs", "title": "MG HS Exclusive", "brand": "MG", "year": "2021", "category": "SUV & Pick-up", "status": "2. El", "price": "£18.990", "km": "42.000 km", "fuel": "Benzin", "trans": "Otomatik", "color": "Mavi", "img": "https://www.gelgezgor.com/uploads/images/2026/08/06/762864187182762302632959991534639332972057892n-6A7452F2E100D-530_393.jpg", "badge": "Value"}, {"id": "sym", "title": "SYM Scooter", "brand": "SYM", "year": "2025", "category": "Motosiklet", "status": "0 KM", "price": "0 KM", "km": "0 km", "fuel": "Benzin", "trans": "Otomatik", "color": "Mavi", "img": "https://www.gelgezgor.com/uploads/images/2025/06/10/img-20250610-wa0059-6847EDB6997CB-530_393.jpg", "badge": "Urban Mobility"}];
function esc(s){return String(s ?? '').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function findCar(id){return cars.find(c=>c.id===id)}
function render(){
  const q=document.getElementById('q').value.toLowerCase().trim();
  const cat=document.getElementById('cat').value;
  const st=document.getElementById('status').value;
  const list=cars.filter(c=>(!q || (`${c.brand} ${c.title} ${c.year}`).toLowerCase().includes(q)) && (!cat || c.category===cat) && (!st || c.status===st));
  document.getElementById('count').textContent=`${list.length} araç`;
  document.getElementById('cards').innerHTML=list.map(c=>`<article class="car"><div class="carMedia" onclick="openModal('${c.id}')"><img src="${c.img}" alt="${esc(c.title)}"><span class="tag">${esc(c.badge || c.status)}</span></div><div class="carBody"><div class="meta">${c.year} · ${esc(c.status)} · ${esc(c.category)}</div><h3>${esc(c.title)}</h3><div class="specs"><span>${esc(c.km)}</span><span>${esc(c.fuel)}</span><span>${esc(c.trans)}</span></div><div class="carBottom"><div class="carPrice">${esc(c.price)}</div><button class="detailBtn" onclick="openModal('${c.id}')">↗</button></div></div></article>`).join('');
}
function openModal(id){
  const c=findCar(id); if(!c) return;
  document.getElementById('modalMeta').textContent=`${c.year} · ${c.status} · ${c.category}`;
  document.getElementById('modalTitle').textContent=c.title;
  document.getElementById('modalPrice').textContent=c.price;
  document.getElementById('modalImg').innerHTML=`<img src="${c.img}" alt="${esc(c.title)}">`;
  document.getElementById('modalSpecs').innerHTML=[['Kilometre',c.km],['Yakıt',c.fuel],['Vites',c.trans],['Renk',c.color],['Durum',c.status],['Kategori',c.category]].map(([a,b])=>`<div>${a}<b>${esc(b)}</b></div>`).join('');
  document.getElementById('modalWa').href='https://wa.me/905338539790?text='+encodeURIComponent(`Merhaba Metrikon Automotive, ${c.year} ${c.title} hakkında bilgi almak istiyorum.`);
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){document.getElementById('modal').classList.remove('open');document.body.style.overflow='';}
function sendLead(){
  const vals = {
    name: document.getElementById('fName').value.trim(),
    phone: document.getElementById('fPhone').value.trim(),
    car: document.getElementById('fCar').value.trim(),
    cat: document.getElementById('fCat').value,
    status: document.getElementById('fStatus').value,
    budget: document.getElementById('fBudget').value.trim(),
    note: document.getElementById('fNote').value.trim()
  };
  const msg = `Merhaba Metrikon Automotive,\n\nAraç talebi bırakmak istiyorum.\nAd Soyad: ${vals.name || '-'}\nTelefon: ${vals.phone || '-'}\nMarka / Model: ${vals.car || '-'}\nKategori: ${vals.cat || '-'}\nDurum: ${vals.status || '-'}\nBütçe: ${vals.budget || '-'}\nEk Not: ${vals.note || '-'}`;
  window.open('https://wa.me/905338539790?text='+encodeURIComponent(msg), '_blank');
}
['q','cat','status'].forEach(id=>document.getElementById(id).addEventListener(id==='q'?'input':'change', render));
render();