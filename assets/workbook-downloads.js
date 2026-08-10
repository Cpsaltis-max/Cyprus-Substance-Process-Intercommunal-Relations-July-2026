document.addEventListener('click', async function(e){
  const a=e.target.closest('[data-workbook-src]');
  if(!a) return;
  e.preventDefault();
  const src=a.getAttribute('data-workbook-src');
  const name=a.getAttribute('data-workbook-name');
  try {
    const r=await fetch(src,{cache:'no-store'});
    if(!r.ok) throw new Error('download source unavailable');
    const b64=(await r.text()).trim();
    const bin=atob(b64);
    const bytes=new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
    const blob=new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    const url=URL.createObjectURL(blob);
    const d=document.createElement('a');
    d.href=url; d.download=name; document.body.appendChild(d); d.click(); d.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  } catch(err) {
    alert('The workbook could not be downloaded. Please refresh the page and try again.');
  }
});
