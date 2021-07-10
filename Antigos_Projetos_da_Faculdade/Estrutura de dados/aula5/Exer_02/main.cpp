#include <iostream>
#include <stdlib.h>
#include <conio.h>
#include <stdio.h>

using namespace std;

int main()
{
    int n, f, achei=0;
    int *v;

    printf("Digite o tamanho do vetor: ");
    scanf("%d", &n);
    v = (int *) malloc (n * sizeof(int));
    for (int i=0; i<n; i++)
    {
        printf("Digite o valor para o vetor: ");
        scanf("%d", v+i);
    }
    printf("Digite um valor inteiro: ");
    scanf("%d", &f);
    for (int i=0; i<n; i++)
    {
        if(f==*(v+i))
        {
            achei=1;
        }
    }
    if(achei==1)
    {
        printf("Acerto miseravi!");
    }
    else
    {
        printf("acho errado otario");
    }
    free(v);
}
