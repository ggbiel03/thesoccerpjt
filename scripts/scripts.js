//HEADER_____________________________________________
let headerContent = `
        <nav class="header_nav">
            <div class="header_escudo">
                <a href="corinthians.html">
                    <img src="img/icon/ico_corint.png" alt="Loja do Corinthians" title="Loja do Corinthians">
                </a>
                <a href="palmeiras.html">
                    <img src="img/icon/ico_palm.png" alt="Loja do Palmeiras" title="Loja do Palmeiras">
                </a>
                <a href="santos.html">
                    <img src="img/icon/ico_santos.png" alt="Loja do Santos" title="Loja do Santos">
                </a>
                <a href="saopaulo.html">
                    <img src="img/icon/ico_sp.png" alt="Loja São do Paulo" title="Loja São do Paulo">
                </a>
            </div>
            <!-- Add/remover classe header_usuario--active conforme usuário logado -->
            <div class="header_usuario">
                <p class="header_nome">Olá, <span id="username">Gabriel!</span></p>
                <a href="cart.html" class="header_carrinho">
                    <img src="img/icon/bag.png" alt="Carrinho de Compras">
                </a>
                <div class="header_user">
                    <a href="login.html" class="header_login">Entrar / Cadastro</a>
                    <div class="header_user-menu">
                        <label for="user_menu"><img src="img/icon/user.png" class="header_user-icon"
                                alt="Menu Usuário"></label>
                        <input type="checkbox" name="user_menu" id="user_menu">
                        <ul class="header_show-menu">
                            <a href="pedidos.html">
                                <li>MEUS PEDIDOS</li>
                            </a>
                            <a href="meu-perfil.html">
                                <li>MINHAS INFORMAÇÕES</li>
                            </a>
                            <a href="#">
                                <li>SAIR</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div class="header_logo">
            <a href="index.html" class="header_logo-link">
                <img src="img/soccer_store_logo_c.png" alt="The Soccer Store">
            </a>
        </div>
        `;

const HEADER = document.querySelector("#header");
HEADER.innerHTML = headerContent;

//FOOTER_____________________________________________
let footerContent = `
<div class="newsletter">
<div class="newsletter_holder container">
    <form action="" method="get" class="newsletter_form form">
        <h2 class="newsletter_title">Cadastre-se e receba <strong>novidades</strong> e
            <strong>ofertas</strong>!
        </h2>
        <input type="email" name="email_news" id="email_news" placeholder="seuemail@exemplo.com" required />

        <select name="select" required>
            <option value="" disabled selected>Escolha seu time</option>
            <option value="corinthians">Corinthians</option>
            <option value="palmeiras">Palmeiras</option>
            <option value="santos">Santos</option>
            <option value="saopaulo">São Paulo</option>
        </select>

        <input type="submit" value="Receber Novidades" />

    </form>
</div>
</div>
<!-- Fim Newsletter -->

<!-- Inicio Footer -->
<footer class="footer" id="footer">
<div class="footer_info">
    <ul>
        <h2>Clubes</h2>
        <li><a href="corinthians.html">Corinthians</a></li>
        <li><a href="palmeiras.html">Palmeiras</a></li>
        <li><a href="santos.html">Santos</a></li>
        <li><a href="saopaulo.html">São Paulo</a></li>
    </ul>
    <ul>
        <h2>Área do Cliente</h2>
        <li><a href="login.html">Login / Cadastro</a></li>
        <li><a href="pedidos.html">Meus Pedidos</a></li>
        <li><a href="meu-perfil.html">Minhas Informações</a></li>
    </ul>
    <ul>
        <h2>Empresa</h2>
        <li><a href="sobre.html">Sobre</a></li>
    </ul>
    <ul class="footer_contato">
        <h2>Contato</h2>
        <li class="footer_email"><a
                href="mailto:atendimento@thesoccerstore.com">atendimento@thesoccerstore.com</a>
        </li>
        <li class="footer_fone"><a href="tel:11999999999">(11) 99999 9999</a></li>
        <li class="footer_endereco">Rua Agostinho Gomes, 1326<br>
            Ipiranga - São Paulo/SP</li>
    </ul>
</div>

<div class="footer_direitos">
    Copyright © 2025 <strong>The Soccers Store Ltda.</strong> Todos os direitos reservados.
</div>
</footer>
<!-- Fim Footer -->
`;
const FOOTER = document.querySelector("#footer");
FOOTER.innerHTML = footerContent;
