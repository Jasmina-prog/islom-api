const div = document.querySelector('div');
const namozTimes = document.querySelector('.namoz_times')
const time1 = document.querySelector('.time1')
const time2 = document.querySelector('.time2')
const time3 = document.querySelector('.time3')
const time4 = document.querySelector('.time4');
const time5 = document.querySelector('.time5')
const time6 = document.querySelector('.time6')
const bomdod = document.querySelector('.bomdod')
const quyosh = document.querySelector('.quyosh')
const peshin = document.querySelector('.peshin')
const asr = document.querySelector('.asr')
const shom = document.querySelector('.shom')
const xufton = document.querySelector('.xufton')
const extraInfo = document.querySelector('.extra_info')
const select = document.querySelector('select')
const h2 = document.querySelector('h2')


async function getData(url){
   let res = await fetch(url);
   let data = await res.json();
   time1.innerHTML = `
    ${data.times.tong_saharlik} 
   `
   
   time2.innerHTML = `
    ${data.times.quyosh}
   `

   time3.innerHTML = `
    ${data.times.peshin} 
   `

   time4.innerHTML = `
    ${data.times.asr} 
   `

   time5.innerHTML = `
    ${data.times.shom_iftor} 
   `

   time6.innerHTML = `
    ${data.times.hufton} 
   `
   extraInfo.innerHTML = `
   <h1> ${data.region}   🗺</h1>
   <h5< ${data.date} 📅</h5>
   <p> ${data.weekday} 📌 </p>
   <br>
   <p> - ${data.hijri_date.month} - 🌛 </p>
   <h5> ${data.hijri_date.day} 🌘 </h5>
  `
   console.log(data);


   const now = new Date();
   console.log(now);
   let hour = now.getHours();
   console.log(hour);

   let bomdodTime = data.times.tong_saharlik;
   console.log(bomdodTime);

   let peshinTime = data.times.peshin;
   console.log(peshinTime);

   let asrTimes = data.times.asr;
   console.log(asrTimes);

   let shomTime = data.times.shom_iftor;
   console.log(shomTime)

   let xuftonTime = data.times.hufton;
   console.log(xuftonTime);

function alert(){
   if(hour <= bomdodTime || bomdodTime < data.times.quyosh){
      bomdod.style.borderColor = 'red';
   }
   if(hour == data.times.quyosh || data.times.quyosh < peshinTime){
      quyosh.style.borderColor = 'red';
   }
   if(hour >= peshinTime || hour < asrTimes){
      peshin.style.borderColor = 'red';
   }
   if(hour >= asrTimes || asrTimes < shomTime){
      asr.style.borderColor = 'red';
   }
   if(hour >= shomTime || shomTime < xuftonTime){
      shom.style.borderColor = 'red';
   }
   if(hour >= xuftonTime || xuftonTime < bomdodTime){
      xufton.style.borderColor = 'red';

   }
}

alert()


}
getData('https://islomapi.uz/api/present/day?region=Toshkent')


select.addEventListener('change', (e)=>{
   getData(`https://islomapi.uz/api/present/day?region=${e.target.value}`)
}

)





