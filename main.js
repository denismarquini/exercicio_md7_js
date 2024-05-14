const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const valorCampoA = Number(document.getElementById("campoA").value);
    const valorCampoB = Number(document.getElementById("campoB").value);

    const vrCampoA = document.getElementById("campoA");
    const vrCampoB = document.getElementById("campoB");

    const msgSucesso = `O valor de B = <b>${valorCampoB}</b> é maior que o valor de A = <b>${valorCampoA}</b>`;
    const msgErro = `O valor B = <b>${valorCampoB}</b> é menor que o valor A = <b>${valorCampoA}</b>`;
    const msgErro2 = `O valor B = <b>${valorCampoB}</b> é igual que o valor A = <b>${valorCampoA}</b>`;

    let frmCalculo = false;

    function vValor(valorCampoA, valorCampoB) {
        return valorCampoA < valorCampoB;
    }

    function vValorIgual(valorCampoA, valorCampoB) {
        return valorCampoA == valorCampoB;
    }

    const mS = document.querySelector(".resultado_certo");
    const mErr = document.querySelector(".resultado_erro");
    const mErr2 = document.querySelector(".resultado_erro2");

    frmCalculo = vValor(valorCampoA, valorCampoB);
    frmIgual = vValorIgual(valorCampoA, valorCampoB);

    if (frmIgual) {
        vrCampoB.style.border = "1px solid red";
        mErr2.innerHTML = msgErro2;
        mErr2.style.display = "block";
        mS.style.display = "none";

        mErr.style.display = "none";
        mErr.innerHTML = "";

        vrCampoB.value = "";
    } else if(!frmCalculo) {
        vrCampoB.style.border = "1px solid red";
        mErr.innerHTML = msgErro;
        mErr.style.display = "block";
        mS.style.display = "none";

        vrCampoB.value = "";

    } else {
        vrCampoB.value = "";

        mS.innerHTML = msgSucesso;
        mS.style.display = "block";
        mErr.style.display = "none";
        mErr2.style.display = "none";

        vrCampoA.style.border = "";
        mErr.innerHTML = "";
        mErr2.innerHTML = "";

        vrCampoA.value = "";
        vrCampoB.value = "";

        vrCampoB.style.border = "";

    }
});