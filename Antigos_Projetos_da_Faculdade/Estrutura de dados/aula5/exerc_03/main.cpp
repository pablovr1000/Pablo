#include <iostream>
#include <stdlib.h>
#include <conio.h>
#include <stdio.h>
#include <time.h>

using namespace std;

int main()
{
    int n, t;
    int *v;

    printf("Digite o tamanho do vetor: ");
    scanf("%d", &n);
    v = (int *) malloc (n * sizeof(int));
    srand(time(NULL));
    for (int i=0; i<n; i++)
    {
        *(v+i)=rand()% 100;
        printf("%d", *(v+i));
    }
    free(v);
}
