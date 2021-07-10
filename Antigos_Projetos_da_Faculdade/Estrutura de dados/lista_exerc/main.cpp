#include <iostream>
#include <stdlib.h>
#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <locale.h>
#include <math.h>

using namespace std;
//Exerc�cios 1.
//_______________________________________________________________________________________________________
int exer_01(void)
{
    int num;
    printf("Digite um n�mero inteiro: ");
    scanf("%d", &num);
    if (num%2==0)
    {
        printf("Retorno: 1, o numero digitado � par");
        printf("\n----------------------------------------------------------------------------------");
    }
    else
    {
        printf("Retorno: 0, o numero digitado � �mpar");
        printf("\n----------------------------------------------------------------------------------");
    }
}
//_______________________________________________________________________________________________________
//Exerc�cios 2.
//_______________________________________________________________________________________________________
float exer_02()
{
    float TC, TF;
    printf("Digite uma temperatura em Celsius: ");
    scanf("%f", &TC);
    TF = (1.8*TC)+32;
    printf("A temperatura informada em Farenheit �: %.2f", TF);
    printf("\n----------------------------------------------------------------------------------");
    return 0;
}
//_______________________________________________________________________________________________________
//Exerc�cios 3.
//_______________________________________________________________________________________________________
int exer_03()
{
    int a, b;
    printf("Digite um n�mero inteiro: ");
    scanf ("%d", &a);
    printf("Digite um outro n�mero: ");
    scanf ("%d", &b);
    printf("A soma destes n�meros �: %d", (a+b));
    printf("\nE a subtra��o destes n�meros �: %d", (a-b));
    printf("\n----------------------------------------------------------------------------------");
    return 0;
}
//_______________________________________________________________________________________________________
//Exerc�cios 4.
//_______________________________________________________________________________________________________
int exer_04()
{
    int a, b;
    printf("Digite um n�mero inteiro: ");
    scanf ("%d", &a);
    printf("Digite um outro n�mero: ");
    scanf ("%d", &b);
    printf("A soma destes n�meros �: %d", (a+b));
    printf("\nE a multiplica��o destes n�meros �: %d", (a*b));
    printf("\n----------------------------------------------------------------------------------");
    return 0;
}
//_______________________________________________________________________________________________________
//Exerc�cios 5.
//_______________________________________________________________________________________________________
int exer_05()
{
    int a, b;
    printf("Digite um n�mero inteiro: ");
    scanf ("%d", &a);
    printf("O drobro deste n�meros �: %d", (a+a));
    b=a;
    printf("\nO quadrado deste n�mero �: %d", (a*b));
    printf("\n----------------------------------------------------------------------------------");
    return 0;
}
//_______________________________________________________________________________________________________
//Exerc�cios 6.
//_______________________________________________________________________________________________________
float exer_06()
{
    float *nota, n=3, soma;
    nota = (float *) malloc (n * sizeof(float));
    for (int i=0; i<n; i++)
    {
        printf("Digite uma nota: ");
        scanf("%f", &nota+i);
        soma += *nota;
    }
    printf("\nA m�dia aritim�tica �: %f", (soma/n));
    free(nota);
}
//_______________________________________________________________________________________________________
//Exerc�cios 7.
//_______________________________________________________________________________________________________

//_______________________________________________________________________________________________________
//Exerc�cios 8.
//_______________________________________________________________________________________________________

//_______________________________________________________________________________________________________
//Exerc�cios 9.
//_______________________________________________________________________________________________________
int exer_09();
{
	struct cliente clinte_info[2]
	struct cliente{
		char nome[40]
		int telefone [11]
		int num_conta[7]
		struct endereco{
			char rua[50]
			char bairro[30]
			char cidade[30]
			int cep[8]
		}end_info;
	}clinte_info;
	for (int i=0; i<1; i++)
	{
		printf("Digite o nome do cliente: ");
		fflush(stdin);
		fgets(cliente.nome, 40, stdin);
		printf("Digite o telefone do cliente: ");
		scanf("%d", &cliente_info[i].telefone);
		printf("Digite o numero da conta do cliente: ");
		scanf("%d", &cliente_info[i].num_conta);
		printf("Digite a rua do cliente: ");
		fflush(stdin);
		fgets(cliente.endereco.rua, 50, stdin);
		printf("Digite o bairro do cliente: ");
		fflush(stdin);
		fgets(cliente.endereco.bairro, 30, stdin);
		printf("Digite a cidade do cliente: ");
		fflush(stdin);
		fgets(cliente.endereco.cidade, 30, stdin);
		printf("Digite o CEP do cliente: ");
		scanf("%d", &cliente_info[i].end_info.cep);
	}
	
}
//_______________________________________________________________________________________________________
//Exerc�cios 10.
//_______________________________________________________________________________________________________
//int exer_10();
//{
	
//}

int main()
{
    setlocale(LC_ALL, "Portuguese");
    int c, i=2;
    float TC, TFF;
    while (i>1)
    {
        printf("\nQue exerc�cio voce deseja executar? 1. 2. 3. 4. 5. 6. 7. 8. 9. 10. (0 para sair): ");
        scanf("%d", &c);
        printf("\n----------------------------------------------------------------------------------\n");
        switch (c)
        {
            case 1:
                exer_01();
                break;
            case 2:
                exer_02();
                break;
            case 3:
                exer_03();
                break;
            case 4:
                exer_04();
                break;
            case 5:
                exer_05();
                break;
            case 6:
                exer_06();
                break;
            case 7:
                //exer_07();
                break;
            case 8:
                //exer_08();
                break;
            case 9:
                //exer_09();
                break;
            case 10:
                //exer_10();
                break;
            case 0:
                i = i-1;
                break;
            default:
                printf("\nDigite um numero conrrespondente aos exercicios ou zero para sair.");
        }
    }
    return printf("FIM.");
}
