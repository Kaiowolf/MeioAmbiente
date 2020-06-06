import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

const SuccessPage = () => {
  return (
    <div id="success-page">
      <div className="content">
       
        <main>
          <span>
            <FiCheckCircle />
          </span>
          <h1>Cadastro Realizado com Sucesso!</h1>

          <Link to={'/'}>
            <FiArrowLeft />Voltar para a home
          </Link>

         
        </main>
      </div>
    </div>
  );
}

export default SuccessPage;