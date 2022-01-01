using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Programa
{
    static void Main(String[] args)
    {
        Console.WriteLine("Executando Projeto 5");

        // Character
        char primeiraLetra = 'a';
        Console.WriteLine(primeiraLetra);

        primeiraLetra = (char)65;
        Console.WriteLine(primeiraLetra);

        primeiraLetra = (char)(primeiraLetra + 1);
        Console.WriteLine(primeiraLetra);

        string titulo = "Alura Cursos Online de Tecnologia " + 2020;
        Console.WriteLine(titulo);

        string cursosProgramacao = @"- .NET
- Java
- JavaScript";
        Console.WriteLine(cursosProgramacao);

        Console.ReadLine();
    }
}