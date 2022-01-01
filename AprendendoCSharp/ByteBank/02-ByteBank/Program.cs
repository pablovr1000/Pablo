using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

class Program
{
    static void Main(string[] args)
    {
        ContaCorrente contaDoPablo = new ContaCorrente();

        contaDoPablo.titular = "Pablo";
        contaDoPablo.numeroAgencia = 863;
        contaDoPablo.numeroConta = 863146;

        Console.WriteLine(contaDoPablo.titular);
        Console.WriteLine("Agência: " + contaDoPablo.numeroAgencia);
        Console.WriteLine("Conta: " + contaDoPablo.numeroConta);
        Console.WriteLine("Saldo: " + contaDoPablo.saldo;

        Console.ReadLine();
    }
}