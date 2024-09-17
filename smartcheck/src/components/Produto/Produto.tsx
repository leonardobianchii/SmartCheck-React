import React, { useEffect, useState } from 'react';
import './Produto.css';

const Produto: React.FC = () => {
  const [usuarioLogado, setUsuarioLogado] = useState<{ nome: string } | null>(null);
  const [modalAberto, setModalAberto] = useState<string | null>(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado') || 'null');
    if (usuario) {
      setUsuarioLogado(usuario);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('usuarioLogado');
    window.location.reload();
  };

  const abrirModal = (modalId: string) => {
    setModalAberto(modalId);
  };

  const fecharModal = () => {
    setModalAberto(null);
  };

  return (
    <div className="produto-container">
      <main>
        <section className="banner-produto">
          <div className="container">
            <p>
              <span>SmartCheck: Transforme a Eficiência do seu Negócio</span>
              <br />
              Clique nos ícones abaixo para saber mais sobre o produto
            </p>
          </div>
        </section>

        <section className="produto-boxes">
          <div className="produto-box" onClick={() => abrirModal('modalFunc')}>
  
            <h2>Funcionalidades</h2>
          </div>
          <div className="produto-box" onClick={() => abrirModal('modalBenef')}>
          
            <h2>Benefícios</h2>
          </div>
          <div className="produto-box" onClick={() => abrirModal('modalUso')}>
            
            <h2>Como Usar</h2>
          </div>
        </section>

        {/* Modais */}
        {modalAberto === 'modalFunc' && (
          <div className="modal active" onClick={fecharModal}>
            <div className="conteudo-modal" onClick={(e) => e.stopPropagation()}>
              <span className="fechar" onClick={fecharModal}>
                &times;
              </span>
              <h2>Funcionalidades</h2>
              <p>
                Diagnósticos Completos: Lê e traduz códigos de falhas usando a tecnologia OBD-II, oferecendo descrições claras e soluções possíveis diretamente no seu smartphone ou dentro do nosso site.
              </p>
              <p>
                Monitoramento em Tempo Real: Visualize parâmetros críticos do veículo, como temperatura do motor e RPM, para uma manutenção proativa e melhor desempenho.
              </p>
              <p>
                Histórico de Manutenção: Guarde registros de manutenções e configure lembretes baseados em quilometragem ou tempo.
              </p>
              <p>
                Assistência e Comunidade: Consulte mecânicos online e interaja com outros usuários para compartilhar dicas e resolver problemas.
              </p>
              <p>
                Localização de Oficinas: Encontre a oficina mais próxima rapidamente em casos de emergência através de um mapa integrado.
              </p>
            </div>
          </div>
        )}

        {modalAberto === 'modalBenef' && (
          <div className="modal active" onClick={fecharModal}>
            <div className="conteudo-modal" onClick={(e) => e.stopPropagation()}>
              <span className="fechar" onClick={fecharModal}>
                &times;
              </span>
              <h2>Benefícios</h2>
              <p>Economia: Diminui visitas a oficinas ao permitir diagnósticos caseiros, economizando tempo e dinheiro.</p>
              <p>
                Controle do Usuário: Dá ao dono do veículo completo conhecimento e controle sobre a condição e operação do carro.
              </p>
              <p>
                Prevenção: Detecta problemas cedo, reduzindo a chance de reparos caros e aumentando a vida útil do veículo.
              </p>
            </div>
          </div>
        )}

        {modalAberto === 'modalUso' && (
          <div className="modal active" onClick={fecharModal}>
            <div className="conteudo-modal" onClick={(e) => e.stopPropagation()}>
              <span className="fechar" onClick={fecharModal}>
                &times;
              </span>
              <h2>Como Usar</h2>
              <p>Conexão: Instale o dispositivo na porta OBD-II do seu carro e conecte via Bluetooth ao seu smartphone.</p>
              <p>
                Monitoramento: Realize o login no app ou no site para realizar diagnósticos completos e acompanhar o estado do seu veículo em tempo real.
              </p>
              <p>Decisão: Receba análises claras e orientações práticas sobre como proceder com a manutenção do seu carro.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Produto;
