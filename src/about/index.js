import React from 'react';
import Layout from '../../components/Layout/Layout';
import s from './styles.css';


class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>

      </Layout>
    );
  }

}

export default AboutPage;
