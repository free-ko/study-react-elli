import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'FREEKO_1',
      company: 'FREEKO',
      theme: 'dark',
      title: 'UX Engineer',
      email: 'duddnr654@naver.com',
      message: 'go for it',
      fileName: 'FREEKO',
      fileURL: null,
    },
    {
      id: '2',
      name: 'FREEKO_2',
      company: 'FREEKO',
      theme: 'light',
      title: 'UX Engineer',
      email: 'duddnr654@naver.com',
      message: 'go for it',
      fileName: 'FREEKO',
      fileURL: null,
    },
    {
      id: '3',
      name: 'FREEKO_3',
      company: 'FREEKO',
      theme: 'colorful',
      title: 'UX Engineer',
      email: 'duddnr654@naver.com',
      message: 'go for it',
      fileName: 'FREEKO',
      fileURL: null,
    }
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
