import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import FormsSingin from '../components/Forms/singin/FormsSingin';
import Footer from '../components/Footer/Footer';


const Signin = ({theme, setTheme}) => {
  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme} />
      <FormsSingin />
      <Footer />
    </div>
  );
};

export default Signin;
