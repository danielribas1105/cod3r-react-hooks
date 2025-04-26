//Função pura (não altera nada fora da função)
function soma(a, b) {
	return a + b
}

//Função impura (altera algo fora da função) causa os efeitos colaterais/possibilidades de erros
//No react os efeitos colateriais são todos aqueles que não estão ligados aos inputs do usuário e a renderização de componentes
let resultado
function soma2(a, b) {
	resultado = a + b
}

//abaixo um exemplo de troca no valor da variável resultado, que pode gear problemas na aplicação
soma2(1, 5)
soma2(0, 8)
