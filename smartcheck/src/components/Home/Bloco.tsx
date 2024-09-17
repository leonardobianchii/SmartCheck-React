import React from 'react';
import './Bloco.css';

const Bloco = ({ imgSrc, titulo, descricao }: { imgSrc: string; titulo: string; descricao: string }) => {
  return (
    <article className="bloco">
      <img src={imgSrc} alt={`Ícone de ${titulo}`} />
      <h4>{titulo}</h4>
      <p>{descricao}</p>
    </article>
  );
};

export default Bloco;
