
// Alternar entre usuário e empresa
const btnUsuario = document.getElementById("btnUsuario");
const btnEmpresa = document.getElementById("btnEmpresa");
const formUsuario = document.getElementById("formUsuario");
const formEmpresa = document.getElementById("formEmpresa");

if (btnUsuario && btnEmpresa) {
  btnUsuario.onclick = () => {
    formUsuario.classList.remove("hidden");
    formEmpresa.classList.add("hidden");
    btnUsuario.classList.add("active");
    btnEmpresa.classList.remove("active");
  };

  btnEmpresa.onclick = () => {
    formUsuario.classList.add("hidden");
    formEmpresa.classList.remove("hidden");
    btnUsuario.classList.remove("active");
    btnEmpresa.classList.add("active");
  };
}

// Cadastro localStorage (simulação)
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    localStorage.setItem("userData", JSON.stringify(data));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
});

// Login simulado
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.email === email && storedData.senha === senha) {
      alert("Login realizado com sucesso!");
    } else {
      alert("Usuário ou senha incorretos.");
    }
  });
}
