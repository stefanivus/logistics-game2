import React, { PropTypes } from 'react'
import Link from '../../components/Link'
import Layout from '../../components/Layout/Layout'
import s from './styles.css'

class HomePage extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.centerText}>Welcome to Logistics!</h1>

        {/* Can change this from a <Link> later */}
        <Link to="/game"
          className={s.bigText}>Let's Play Button</Link>

        <div className={s.bigText}>How to Play</div>

        <div className={s.bigText}>Purpose of the Game</div>

      </Layout>
    );
  }

}

export default HomePage;
