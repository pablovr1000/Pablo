import java.text.NumberFormat;

public class Teste {

	public static void main(String[] args) {
		Pessoa p= new Pessoa("Maria Jos�", "Avenida Onze de Maio, 200","(11)99216-0099");
		Fornecedor f= new Fornecedor("Casa da Fruta Fresca","Rua Jose Xavier, 1000","(11)3245-9090");
		Empregado e= new Empregado("Antonio Carlos","R. Dois, 1010","(19)4343-9999",900,5500,10);
		
		f.setValorCredito(5000.00);
		f.setValorDivida(1500.00);
		
		System.out.println("---Dados do Fornecedor---");
		System.out.println("Nome:"+f.nome);
		System.out.println("Endere�o:"+f.endereco);
		System.out.println("Telefone:"+f.telefone);
		System.out.println("Cr�dito "+NumberFormat.getCurrencyInstance().format(f.getValorCredito()));
		System.out.println("D�vida "+NumberFormat.getCurrencyInstance().format(f.getValorDivida()));
		System.out.println("Saldo "+NumberFormat.getCurrencyInstance().format(f.obterSaldo()));
		
		System.out.println("\n\n---Dados do Empregado---");
		System.out.println("Nome:"+e.nome);
		System.out.println("Endere�o:"+e.endereco);
		System.out.println("Telefone:"+e.telefone);
		System.out.println("Setor:"+e.codigoSetor);
		System.out.println("Sal�rio Base:"+NumberFormat.getCurrencyInstance().format(e.salarioBase));
		System.out.println("Sal�rio L�quido:"+NumberFormat.getCurrencyInstance().format(e.calcularSalario()));
		System.out.println("Imposto(%):"+e.imposto);
	}

}
