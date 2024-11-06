let totalGeral = 0;
limpar();

function adicionar() {

    //recuperando valores do produto
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = produto.split('R$')[1];
        let quantidadeProduto = document.getElementById('quantidade').value;

    //cauculo do produto
        let preco = quantidadeProduto * valorUnitario;

    //adicionar no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidadeProduto}</span> ${nomeProduto}<span class="texto-azul">R$ ${preco}</span>
            </section>`

     //atualizar o valor total       
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        quantidadeProduto = 0;
        document.getElementById('quantidade').value = 0;
}


function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}