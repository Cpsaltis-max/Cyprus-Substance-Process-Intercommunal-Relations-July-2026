const translations={
  en:{navSubstance:"Substance",navProcess:"Process",navIntergroup:"Intercommunal Relations",navResearch:"Research",navDownloads:"Downloads",heroTitle:"Substance, Process and Intercommunal Relations",heroSubtitle:"Greek Cypriot Public Opinion on the Cyprus Issue, July 2026",heroNote:"A scientific observatory presenting weighted survey evidence on substantive preferences, the negotiation process and intercommunal relations.",explore:"Explore the evidence",downloadWorkbooks:"Download public workbooks"},
  el:{navSubstance:"Ουσία",navProcess:"Διαδικασία",navIntergroup:"Διακοινοτικές Σχέσεις",navResearch:"Έρευνα",navDownloads:"Λήψεις",heroTitle:"Ουσία, Διαδικασία και Διακοινοτικές Σχέσεις",heroSubtitle:"Η ελληνοκυπριακή κοινή γνώμη για το Κυπριακό, Ιούλιος 2026",heroNote:"Επιστημονικό παρατηρητήριο που παρουσιάζει σταθμισμένα δεδομένα έρευνας για τις ουσιαστικές προτιμήσεις, τη διαπραγματευτική διαδικασία και τις διακοινοτικές σχέσεις.",explore:"Εξερευνήστε τα ευρήματα",downloadWorkbooks:"Λήψη δημόσιων βιβλίων εργασίας"},
  tr:{navSubstance:"Öz",navProcess:"Süreç",navIntergroup:"Toplumlararası İlişkiler",navResearch:"Araştırma",navDownloads:"İndirmeler",heroTitle:"Öz, Süreç ve Toplumlararası İlişkiler",heroSubtitle:"Kıbrıs Sorununa ilişkin Kıbrıslı Rum kamuoyu, Temmuz 2026",heroNote:"Temel tercihler, müzakere süreci ve toplumlararası ilişkiler hakkında ağırlıklı anket bulguları sunan bilimsel bir gözlemevi.",explore:"Bulguları keşfedin",downloadWorkbooks:"Kamuya açık çalışma kitaplarını indir"}
};
document.querySelectorAll(".lang").forEach(btn=>btn.addEventListener("click",()=>{
  const lang=btn.dataset.lang; document.documentElement.lang=lang;
  document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b===btn));
  document.querySelectorAll("[data-t]").forEach(el=>{const key=el.dataset.t;if(translations[lang][key])el.textContent=translations[lang][key]});
  localStorage.setItem("observatoryLanguage",lang);
}));
const saved=localStorage.getItem("observatoryLanguage");if(saved&&translations[saved])document.querySelector(`.lang[data-lang="${saved}"]`)?.click();
