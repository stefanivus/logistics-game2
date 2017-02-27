import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.centerText}>Welcome to Logistics!</h1>

      </Layout>
    );
  }

}

export default HomePage;
