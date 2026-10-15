document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('possaweeaa@gmail.com');
    status.textContent = 'คัดลอกอีเมลแล้ว';
  } catch {
    status.textContent = 'ไม่สามารถคัดลอกอีเมลได้ โปรดเลือกอีเมลด้านบนเพื่อดำเนินการต่อ';
  }
});
