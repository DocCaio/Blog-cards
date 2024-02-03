
import './Rodape.css';

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="whatsapp.com" target="_blank">
                    <img src="/imagens/whatsapp.png" alt="" />
                </a>
            </li>
            <li>
                <a href="github.com" target="_blank">
                    <img src="/imagens/github.png" alt="" />
                </a>
            </li>
            <li>
                <a href="discord.com" target="_blank">
                    <img src="/imagens/discord.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Caio.
        </p>
       </section>
    </footer>)
}

export default Rodape