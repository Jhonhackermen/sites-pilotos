document.getElementById('agendamento-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('status');
  status.textContent = 'Enviando...';

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch('/api/agendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    status.textContent = result.message;
    status.style.color = 'green';
    e.target.reset();
  } catch (err) {
    status.textContent = 'Erro ao enviar. Tente novamente.';
    status.style.color = 'red';
  }
});