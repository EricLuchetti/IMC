async function calcular() {
    try {
        let resultadoImc = await calcularIMC();

        exibirResultadoImc(resultadoImc);
        exibirAlertaImc(resultadoImc);

    } catch (error) {
        console.log(error.message);
    }
}


function calcularIMC() {
    try {
        let peso = document.getElementById('peso').value;
        let alturaCm = document.getElementById('altura').value;

        let alturaM = alturaCm / 100
        let alturaF = alturaM * alturaM;
        let imc = peso / alturaF;
        let resultadoImc = imc.toFixed(2);

        return resultadoImc;
    } catch (error) {
        alert(error.message);
    }
}

function exibirResultadoImc(resultadoImc = 0) {
    try {
        let retorno = ``;

        retorno += `
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h3>O seu IMC é de: ${resultadoImc}</h3>
                </div>
            </div>
        </div>`;

        document.getElementById('resultado').innerHTML = retorno;
    } catch (error) {
        alert(error.message);
    }
}

function exibirAlertaImc(resultadoImc = 0) {
    try {

        let retorno = ``;

        if (resultadoImc < 18.5) {
            retorno += `<div class="alert alert-primary" role="alert">
                Você está na classificação Magreza. Por favor atente-se à sua dieta e evite uma vida sedentária.
                </div>`;
        } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
            retorno += `<div class="alert alert-success" role="alert">
                Você está na classificação Normal, continue assim!
                </div>`;
        } else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
            retorno += `<div class="alert alert-dark" role="alert">
                Você está na classificação Sobrepeso. Por favor atente-se à sua dieta e evite uma vida sedentária.
                </div>`;
        } else if (resultadoImc >= 30 && resultadoImc <= 39.9) {
            retorno += `<div class="alert alert-warning" role="alert">
                Você está na classificação Obesidade. Por favor atente-se à sua dieta e evite uma vida sedentária. Se possível procure um nutricionista e mantenha uma vida saudável.
                </div>`;
        } else if (resultadoImc >= 40) {
            retorno += `<div class="alert alert-danger" role="alert">
                Você está na classificação Obesidade Grave. Por favor procure um médico e nutricionista o mais rápido possível. Atente-se à sua dieta e evite uma vida sedentária.
                </div>`;
        } else {
            retorno += `<div class="alert alert-light" role="alert">
                Não foi possível definir a sua classificação
                </div>`;
        }

        document.getElementById('alerta').innerHTML = retorno;
    } catch (error) {
        alert(error.message);
    }
}