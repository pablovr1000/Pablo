#include <stdio.h>
struct Pessoa{
	char nome[30];
	char sobrenome[30];
	int idade;
	char rg[15];
	float salario;
};
void entrada (struct Pessoa *pessoa) {
	printf("Digite o nome: ");
	fflush(stdin);
	gets(pessoa->nome);
	printf("Digite o sobrenome: ");
	fflush(stdin);
	gets(pessoa->sobrenome);
	printf("Digite a idade: ");
	scanf("d", &pessoa->idade);
	printf("Digite o RG: ");
	fflush(stdin);
	gets(pessoa->rg);
	printf("Digite o salario: ");
	scanf("f", &pessoa->salario);
}
void mostra (struct Pessoa *pessoa) {
	printf("Nome: %s %s\n", pessoa->nome, pessoa->sobrenome);
	printf("Idade: %d\n", pessoa->idade);
	printf("Rg: %s\n", pessoa->rg);
	printf("Salario: R$ %.2f\n", pessoa->salario);
}
