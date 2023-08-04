document.querySelector("#teste").addEventListener("click", () => {
    event.preventDefault();
  });

function pegarValor() {
  let alimentos = JSON.parse(localStorage.getItem("alimento"))??[];
  let doador = document.getElementById("doador");
  let tipoAlimentos = document.getElementById("tipoAlimentos");
  let validadeAlimentos = document.getElementById("validadeAlimentos");
  let descAlimentos = document.getElementById("descAlimentos");
  let endereco = document.getElementById("endereco");

  let valorDoador = doador.value;
  let valortipoAlimentos = tipoAlimentos.value;
  let valorDevalidadeAlimentos = validadeAlimentos.value;
  let valordescAlimentos = descAlimentos.value;
  let valorEndereco = endereco.value;

  let alimento = {
    doador: valorDoador,
    tipoAlimentos: valortipoAlimentos,
    validadeAlimentos: valorDevalidadeAlimentos,
    descAlimentos: valordescAlimentos,
    endereco: valorEndereco,
  };

  alimentos.push(alimento);

  alert("produto cadastrado");

  console.log(alimentos);
  
  localStorage.setItem("alimento", JSON.stringify(alimentos));
}

function criaProduto() {
  let alimentos = JSON.parse(localStorage.getItem("alimento"));
  const main = document.querySelector("main");
  const newNode = document.createElement("div");
  const divHtml = document.querySelector('.container-alimentos');
  divHtml.innerHTML = "";
  alimentos.forEach((alimentos, index) => {

    let div = document.createElement('div');

    const cardAliemnntos =`
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Empresa: ${alimentos.doador}</h5>
          <p class="card-text">Endereço: ${alimentos.endereco}</p>
          <p class="card-text">Tipo: ${alimentos.tipoAlimentos}</p>
          <p class="card-text">Validade: ${alimentos.validadeAlimentos}</p>
          <p class="card-text">Desc: ${alimentos.descAlimentos}</p>
          <button class="btn btn-primary" onclick="reservaProduto(${index})">Reservar</button>
        </div>
      </div>
      `  ;
      div.innerHTML = cardAliemnntos.trim();
      divHtml.appendChild(div);
  });
  if (alimentos.length === 0){
    divHtml.innerHTML = "";
  };
}

function reservaProduto(indexAlimento){
  console.log(indexAlimento);
  let alimentos = JSON.parse(localStorage.getItem("alimento"));
  let temp = alimentos.filter((item, index) => 
    index != indexAlimento 
  );
  localStorage.setItem("alimento", JSON.stringify(temp));
  criaProduto();
};