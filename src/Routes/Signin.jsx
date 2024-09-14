import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import FormsSingin from '../components/Forms/FormsSingin';
import Footer from '../components/Footer/Footer';


const Signin = ({theme, setTheme}) => {
  return (
    <div className='signin-container'>
      <NavBar theme={theme} setTheme={setTheme} />
      <FormsSingin />
      <Footer />
    </div>
  );
};

export default Signin;
