import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import FormsSingup from '../components/Forms/FormsSingup';
import Footer from '../components/Footer/Footer';


const Signin = ({theme, setTheme}) => {
  return (
    <div className='signin-container'>
      <NavBar theme={theme} setTheme={setTheme} />
      <FormsSingup />
      <Footer />
    </div>
  );
};

export default Signin;

