using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Programa
{
    static void Main(String[] args)
    {
        Console.WriteLine("Executando Projeto 8");

        int idadePablo = 17;
        int qunatidadePessoas = 2;

        if (idadePablo > 18 || qunatidadePessoas >= 2)
        {
            Console.WriteLine("Pode Entrar");
        }
        else
        {
            Console.WriteLine("Não Pode entrar");
        }

        Console.ReadLine();
    }
}