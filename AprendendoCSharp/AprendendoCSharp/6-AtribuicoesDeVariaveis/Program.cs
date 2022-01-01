using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Programa
{
    static void Main(String[] args)
    {
        Console.WriteLine("Executando Projeto 6");

        int idade = 30;
        int idade2 = idade;

        idade = 20;

        Console.WriteLine(idade);
        Console.WriteLine(idade2);

        Console.ReadLine();
    }
}