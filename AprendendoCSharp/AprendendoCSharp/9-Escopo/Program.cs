using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Programa
{
    static void Main(String[] args)
    {
        Console.WriteLine("Executando Projeto 9");

        int idadePablo = 17;
        int qunatidadePessoas = 2;
        string mensagemAdicional;
        mensagemAdicional = "Está Acompanhando sim";

        if (idadePablo > 18 || qunatidadePessoas >= 2)
        {
            Console.WriteLine("Pode Entrar");
            Console.WriteLine(mensagemAdicional);
        }
        else
        {
            Console.WriteLine("Não Pode entrar");
        }

        Console.ReadLine();
    }
}