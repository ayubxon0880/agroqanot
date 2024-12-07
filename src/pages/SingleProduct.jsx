import { useParams } from "react-router-dom";
import React from "react";
import zamindar from "../assets/zamindar.png";
import zamindar4 from "../assets/zamindar_4.png";
import zamindar5 from "../assets/zamindar_5.png";
import zamindar6 from "../assets/zamindar_6.png";
import zamindar7 from "../assets/zamindar_7.png";
import zamindar8 from "../assets/zamindar_8.png";
import traktor from "../assets/traktor.png";
import dron_dji from "../assets/dron_dji.png";

import boyqush4 from "../assets/boyqush_4.png";
import boyqush5 from "../assets/boyqush_5.png";
import boyqush6 from "../assets/boyqush_6.png";
import boyqush7 from "../assets/boyqush_7.png";

import burgut_1 from "../assets/burgutkoz_1.png";
import burgut_2 from "../assets/burgutkoz_2.png";
import burgut_3 from "../assets/burgutkoz_3.png";
import burgut_4 from "../assets/burgutkoz_4.png";
import burgut_5 from "../assets/burgutkoz_5.png";


const SingleProduct = () => {
  const { id } = useParams();

  if (id == 1) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <br></br>
        <br></br>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 h-full flex flex-col justify-between items-center">
            <p className="text-sm text-gray-400">UCHISH BALANDLIGI</p>
            <div className="relative h-full border-l-2 border-gray-500 flex flex-col items-center justify-center">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-8 border-b border-gray-500"
                  style={{ marginBottom: i === 9 ? 0 : "20px" }}
                ></div>
              ))}
            </div>
            <p className="text-lg font-bold">300 METR</p>
          </div>
          <div className="relative z-10 mx-auto flex items-center justify-center">
            <img
              src={burgut_1}
              alt="Helicopter"
              className="w-full max-w-4xl object-contain rounded-md shadow-lg"
            />
          </div>
          <div className="absolute top-0 right-0 h-full flex flex-col justify-between items-center">
            <p className="text-sm text-gray-400">UCHISH DAVOMIYLIGI</p>
            <div className="relative h-full border-r-2 border-gray-500 flex flex-col items-center justify-center">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-8 border-b border-gray-500"
                  style={{ marginBottom: i === 9 ? 0 : "20px" }}
                ></div>
              ))}
            </div>
            <p className="text-lg font-bold">55 DAQIQA</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col gap-10">
          <div className={`flex flex-col lg:flex-row items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={burgut_2}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">BURGUTKO'Z qurilmasi va Loiha maqsadi</h2>
              <p className="text-gray-400 mt-2">“Burgutko‘z” — bu qishloq xo‘jaligi maydonlarini kartografiya qilish va masofadan turib zondlash uchun mo‘ljallangan samolyot shaklidagi innovatsion dron.</p>
              <p className="text-gray-400 mt-2">Maqsad — fermer xo‘jaliklariga yuqori aniqlikdagi tuproq va o‘simlik monitoringi, resurslarni samarali boshqarish, va hosildorlikni oshirishda yordam berishdir.</p>
            </div>
          </div>
  
          <div className={`flex flex-col lg:flex-row-reverse items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={burgut_1}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Dolzarbligi</h2>
              <p className="text-gray-400 mt-2">Qishloq xo‘jaligi O‘zbekiston iqtisodiyotining asosiy tarmoqlaridan va uni innovatsion texnologiyalarni joriy etish orqali samaradorligini oshirishga qaratilgan.</p>
              <p className="text-gray-400 mt-2">“Burgutko‘z” droni keng maydonlarni tezkor tahlil qilishga va olingan ma’lumotlarni raqamli formatda ishlashga imkon beradi.</p>
            </div>
          </div>

          <div className={`flex flex-col lg:flex-row items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={burgut_3}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Iqtisodiy foyda:</h2>
              <p className="text-gray-400 mt-2">O‘g‘it va pestitsidlarni 25-30% tejamkorlik bilan qo‘llash.</p>
              <p className="text-gray-400 mt-2">Hosildorlikni 15-20% oshirish orqali qishloq xo‘jaligidan olinadigan foydani ko‘paytirish.</p>
              <p className="text-gray-400 mt-2">Kimyoviy moddalar va suv iste’molini 30-40% ga qisqartirish.</p>
              <h2 className="text-2xl font-semibold">Ijtimoiy ahamiyat:</h2>
              <p className="text-gray-400 mt-2">Innovatsion texnologiyalarni qishloq xo‘jaligiga joriy etish.</p>
              <p className="text-gray-400 mt-2">Kichik fermer xo‘jaliklari uchun zamonaviy uskunalar bilan ishlash imkonini yaratish.</p>
            </div>
          </div>

          <div className={`flex flex-col lg:flex-row-reverse items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={burgut_4}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Kartografiya:</h2>
              <p className="text-gray-400 mt-2">1. Dron yordamida 2D va 3D xaritalarni yaratish orqali maydonlarning reliefi va tuproq xususiyatlarini o‘rganish mumkin.</p>
              <p className="text-gray-400 mt-2">2. Dala maydonlarining chegaralarini aniqlash.</p>
              <p className="text-gray-400 mt-2">3. Reliyef o‘zgarishlarini o‘rganish.</p>
              <h2 className="text-2xl font-semibold">Masofadan zondlash:</h2>
              <p className="text-gray-400 mt-2">1. Multispektral tahlil orqali tuproqning kimyoviy va fizik holatini aniqlash.</p>
              <p className="text-gray-400 mt-2">2. NVDI (Normalized Difference Vegetation Index) yordamida o‘simliklarning sog‘lomlik darajasini baholash.</p>
              <p className="text-gray-400 mt-2">3. Infraqizil tasvirlar yordamida suv taqsimoti va namlikni kuzatish.</p>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        <div class="relative w-full max-w-4xl mx-auto">
            <table class="table-auto w-full border-collapse border border-gray-700 text-gray-300">
              
              <tbody>
                <tr>
                  <td class="border border-gray-700 px-4 py-2">Uchish Masofasi</td>
                  <td class="border border-gray-700 px-4 py-2">50-100 km</td>
                </tr>
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">Parvoz Davomiyligi</td>
                  <td class="border border-gray-700 px-4 py-2">55-60 daqiqa</td>
                </tr>
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">Qamrov Maydoni</td>
                  <td class="border border-gray-700 px-4 py-2">300-800 gektar</td>
                </tr>
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">Sensorlar</td>
                  <td class="border border-gray-700 px-4 py-2">Infraqizil, NVDI</td>
                </tr>
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">Uchish Tezligi</td>
                  <td class="border border-gray-700 px-4 py-2">60-80 km/soat</td>
                </tr> 
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">Kamera Turi</td>
                  <td class="border border-gray-700 px-4 py-2">Multispektral, HD</td>
                </tr> 
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">Boshqaruv</td>
                  <td class="border border-gray-700 px-4 py-2">Masofadan</td>
                </tr> 
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">Operatsion Balandlik</td>
                  <td class="border border-gray-700 px-4 py-2">100-300 m</td>
                </tr> 
              </tbody>
            </table>
          </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative z-10 mx-auto flex items-center justify-center">
            <img  src={burgut_5}
                  alt="Helicopter"
                  className="w-full max-w-7xl object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    );  
  } else if (id == 2) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <br></br>
        <br></br>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 h-full flex flex-col justify-between items-center">
            <p className="text-sm text-gray-400">Altitude Record</p>
            <div className="relative h-full border-l-2 border-gray-500 flex flex-col items-center justify-center">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-8 border-b border-gray-500"
                  style={{ marginBottom: i === 9 ? 0 : "20px" }}
                ></div>
              ))}
            </div>
            <p className="text-lg font-bold">27,030 feet</p>
          </div>
          <div className="relative z-10 mx-auto flex items-center justify-center">
            <img
              src={zamindar4}
              alt="Helicopter"
              className="w-full max-w-4xl object-contain rounded-md shadow-lg"
            />
          </div>
          <div className="absolute top-0 right-0 h-full flex flex-col justify-between items-center">
            <p className="text-sm text-gray-400">Flight Record</p>
            <div className="relative h-full border-r-2 border-gray-500 flex flex-col items-center justify-center">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-8 border-b border-gray-500"
                  style={{ marginBottom: i === 9 ? 0 : "20px" }}
                ></div>
              ))}
            </div>
            <p className="text-lg font-bold">27 hours 3 minutes</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col gap-10">
          <div className={`flex flex-col lg:flex-row items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={zamindar}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">ZAMINDAR qurilmasi</h2>
              <p className="text-gray-400 mt-2">Qishloq xo‘jaligi o‘simliklariga vegetatsiya davrida suspenziya sepish ularni oziqlantirish va o‘simliklarning zararkunandalariga qarshikurashish uchun mo‘ljallangan. Shuningdek, bog'dorchilikda daraxtrlarni changlatish, qishloq xo'jaligi asbob-uskunalarini tashish imkoniyatiga ega masofadan boshqariluvchi uchuvchisiz uchish qurilmasidir.</p>
            </div>
          </div>
  
          <div className={`flex flex-col lg:flex-row-reverse items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={zamindar4}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Texnik tasnifi</h2>
              <p className="text-gray-400 mt-2">HARAKAT TEZLIGI           60 KM/SOAT</p>
              <p className="text-gray-400 mt-2">ISHCHI TEZLIGI            5-7 KM/SOAT</p>
              <p className="text-gray-400 mt-2">MAKSIMAL BALANDLIK        200-250 METR</p>
              <p className="text-gray-400 mt-2">ISHCHI BALANDLIK          2.5-5 METR</p>
              <p className="text-gray-400 mt-2">SEPGICHLAR                6TA (4-ATB)</p>
              <p className="text-gray-400 mt-2">PARRAKLAR                 3 TA (MULTI-PARRAK)</p>
              <p className="text-gray-400 mt-2">QUVVATI                   2.5 kW</p>
              <p className="text-gray-400 mt-2">ENERGIYA MANBAI           ELEKTR MANBAI</p>
              <p className="text-gray-400 mt-2">TASVIR                    1920x1080 FULL HD</p>
              <p className="text-gray-400 mt-2">YUK KO'TARISH QOBILIYATI  60 KM/SOAT</p>
              <p className="text-gray-400 mt-2">PARVOZ DAVOMIYLIGI        15 DAQIQA</p>
              <p className="text-gray-400 mt-2">OG'IRLIGI (YUKSIZ)        9KG</p>
              <p className="text-gray-400 mt-2">TOMCHILAR O'LCHAMI        100-150 Mkh</p>
            </div>
          </div>
  
          <div className={`flex flex-col lg:flex-row items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={zamindar5}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Afzalliklari</h2>
              <p className="text-gray-400 mt-2">1. MASOFADAN 7 KM KENGLIKGACHA, KERAKLI BALANDLIKDA QULAY BOSHQARISH IMKONIYATI</p>
              <p className="text-gray-400 mt-2">2. 25 KG GACHA FOYDALI YUK KO'TARISH QOBILIYATI AVTOMATLASHTIRILGAN PURKASH TIZIMI</p>
              <p className="text-gray-400 mt-2">3. QISHLOQ XO'JALIGI TEXNIKALARI IMKONIYATI CHEKLANGAN HUDUDLARDA, TALAB ETILGAN VAZIFALARNI BAJARISH IMKONIYATI</p>
              <p className="text-gray-400 mt-2">4. QURILMANING YERGA YETKAZILADIGAN ZARARNING MAVJUD EMASLIGI. ISTALGAN BALANDLIKDAGI O'SIMLIKLARGA ISHLOV BERISH</p>
              <p className="text-gray-400 mt-2">5. ATROF-MUHITGA ZAXARLI MODDALAR CHIQARMASLIGI.</p>
              <p className="text-gray-400 mt-2">6. ISHLOV BERILADIGAN VA ISHLOV BERILGAN HUDUDLARNI NAZORAT QILISH VA BAHOLASH</p>
            </div>
          </div>
          
          <div className={`flex flex-col lg:flex-row-reverse items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={zamindar6}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">KO'P ROTORLIK DRON</h2>
              <p className="text-gray-400 mt-2">YAGONA ROTORLIK DRONLAR KO'P ROTORLIK DRONGA NISBATAN QUVVATLIROQ VA ISHONCHLIROQ BO'LADI. NEGA? CHUNKI ELEKTR ENERGIYASI ORQALI HAVODA ISHLAB TURGAN KO'P ROTORLIK DRONNING BIROR BIR ROTORGA KELAYOTGAN ELEKTR ENERGIYASI KELISHI TO'XTASA, ROTOR ISHDAN CHIQADIGAN BO'LSA, YOKI DVIGATELLERGA O'RNATILGAN PARRAKLARDAN BIRI ISHLASHIDAN TO'XTASA DRON YERGA QULAYDI.</p>
            </div>
          </div>
          
          <div className={`flex flex-col lg:flex-row items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={zamindar7}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">YUQORI QUVVATLI PURKASH TIZIMI</h2>
              <p className="text-gray-400 mt-2">YAGONA ROTORLIK DRONLAR KO'P ROTORLIK DRONGA NISBATAN QUVVATLIROQ VA ISHONCHLIROQ BO'LADI. NEGA? CHUNKI ELEKTR ENERGIYASI ORQALI HAVODA ISHLAB TURGAN KO'P ROTORLIK DRONNING BIROR BIR ROTORGA KELAYOTGAN ELEKTR ENERGIYASI KELISHI TO'XTASA, ROTOR ISHDAN CHIQADIGAN BO'LSA, YOKI DVIGATELLERGA O'RNATILGAN PARRAKLARDAN BIRI ISHLASHIDAN TO'XTASA DRON YERGA QULAYDI.</p>
            </div>
          </div>


          <div class="relative w-full max-w-4xl mx-auto">
            <table class="table-auto w-full border-collapse border border-gray-700 text-gray-300">
              <thead>
                <tr class="bg-gray-800">
                  <th class="border border-gray-700 px-4 py-2">Nom</th>
                  <th class="border border-gray-700 px-4 py-2">Narx</th>
                  <th class="border border-gray-700 px-4 py-2">Rasm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-700 px-4 py-2">"DJI" UCHUVCHISIZ UCHUVCHI QISHLOQ XO'JALIGI QURILMASI</td>
                  <td class="border border-gray-700 px-4 py-2">20000$</td>
                  <td class="border border-gray-700 px-4 py-2"><img src={dron_dji}/></td>
                </tr>
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">QISHLOQ XO'JALIGI PURKAGICHI (TRAKTOR YORDAMIDA)</td>
                  <td class="border border-gray-700 px-4 py-2">10000$</td>
                  <td class="border border-gray-700 px-4 py-2"><img src={traktor}/></td>
                </tr>
                <tr class="bg-gray-800">
                  <td class="border border-gray-700 px-4 py-2">"ZAMINDAR" UCHUVCHISIZ UCHUVCHI QISHLOQ XO'JALIGI QURILMASI</td>
                  <td class="border border-gray-700 px-4 py-2">7000$</td>
                  <td class="border border-gray-700 px-4 py-2"><img src={zamindar}/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative z-10 mx-auto flex items-center justify-center">
            <img  src={zamindar8}
                  alt="Helicopter"
                  className="w-full max-w-7xl object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    );  
    
  } else if (id == 3) {
    
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <br></br>
        <br></br>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 h-full flex flex-col justify-between items-center">
            <p className="text-sm text-gray-400">Altitude Record</p>
            <div className="relative h-full border-l-2 border-gray-500 flex flex-col items-center justify-center">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-8 border-b border-gray-500"
                  style={{ marginBottom: i === 9 ? 0 : "20px" }}
                ></div>
              ))}
            </div>
            <p className="text-lg font-bold">27,030 feet</p>
          </div>
          <div className="relative z-10 mx-auto flex items-center justify-center">
            <img
              src={boyqush4}
              alt="Helicopter"
              className="w-full max-w-4xl object-contain rounded-md shadow-lg"
            />
          </div>
          <div className="absolute top-0 right-0 h-full flex flex-col justify-between items-center">
            <p className="text-sm text-gray-400">Flight Record</p>
            <div className="relative h-full border-r-2 border-gray-500 flex flex-col items-center justify-center">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-8 border-b border-gray-500"
                  style={{ marginBottom: i === 9 ? 0 : "20px" }}
                ></div>
              ))}
            </div>
            <p className="text-lg font-bold">27 hours 3 minutes</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col gap-10">
          <div className={`flex flex-col lg:flex-row items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={boyqush5}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">BOYQUSH qurilmasi</h2>
              <p className="text-gray-400 mt-2">Qishloq xo‘jaligi ekin va dala maydonlariga avtomatlashtirilgan holda o‘simlik urug‘larini masofadan sepish va ekish uchun mo‘ljallangan uchuvchisiz boshqariladigan qurilma. Sho‘rlanish darajasi yuqori bo‘lgan Orol bo’yi mintaqasiga Saksovul o‘simligini yoyish uchun ham xizmat qiladi. Shuningdek, bog‘dorchilikda daraxtrlarni changlatish, qishloq xo‘jaligi asbob-uskunalarini tashish imkoniyatiga ega boshqariluvchi uchuvchisiz uchish qurilmasidir.</p>
            </div>
          </div>
  
          <div className={`flex flex-col lg:flex-row-reverse items-center gap-6`}>
            <div className="flex-1">
              <img
                  src={boyqush6}
                  alt={`Comparison 1`}
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Texnik tasnifi</h2>
              <p className="text-gray-400 mt-2">1. MASOFADAN 4 KM KENGLIKGACHA, 200-250m BALANDLIKDA QULAY BOSHQARISH IMKONIYATI.</p>
              <p className="text-gray-400 mt-2">2. 20 KG GACHA FOYDALI YUK KO'TARISH QOBILIYATI AVTOMATLASHTIRILGAN TIZIM ORQALI.</p>
              <p className="text-gray-400 mt-2">3. QISHLOQ XO'JALIGI TEXNIKALARI IMKONIYATI CHEKLANGAN HUDUDLARDA,TALAB ETILGAN VAZIFALARNI BAJARISH IMKONIYATI.</p>
              <p className="text-gray-400 mt-2">4. QURILMANING YERGA YETKAZILADIGAN ZARARNING MAVJUD EMASLIGI. ISTALGAN BALANDLIKDAGI O'SIMLIK URUG’ARINI EKISH IMKONIYATI.</p>
              <p className="text-gray-400 mt-2">5. ATROF-MUHITGA ZAXARLI MODDALAR CHIQARMASLIGI.</p>
              <p className="text-gray-400 mt-2">6. ISHLOV BERILADIGAN VA ISHLOV BERILGAN HUDUDLARNI NAZORAT QILISH VA BAHOLASH.</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative z-10 mx-auto flex items-center justify-center">
            <img  src={boyqush7}
                  alt="Helicopter"
                  className="w-full max-w-7xl object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    );  
  }
  
};

export default SingleProduct;
