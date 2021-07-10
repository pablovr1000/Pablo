#include <iostream>
#include <stdlib.h>
#include <conio.h>
#include <stdio.h>

using namespace std;

int main()
{
    float soma=0, media;
    float *notas;
    notas = (float *) malloc(5*sizeof(float));
    for (int i=0; i<5; i++)
    {
        printf("Digite a nota ");
        scanf("%f", notas + i);
        soma+=*(notas+i);

    }
    for (int i=0; i<5; i++)
    {
        printf("Endereco: %d, nota: %.2f\n",notas+i,*(notas+i));
    }
    free(notas);
    media=soma/5;
    printf("media das notas: %.2f\n", media);
    getch();
}
