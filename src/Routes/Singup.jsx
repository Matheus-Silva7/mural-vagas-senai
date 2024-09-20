import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import FormsSingup from '../components/Forms/singup/FormsSingup';
import Footer from '../components/Footer/Footer';


const Signin = ({theme, setTheme}) => {
  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme} />
      <FormsSingup />
      <Footer />
    </div>
  );
};

export default Signin;

