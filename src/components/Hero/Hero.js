import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = ({ titleId, contentId, image, link, buttonTextId }) => {
  const { t } = useTranslation('hero');

  return (
    <div className={styles.hero}>
      <Image src={image} layout="fill" placeholder="blur" />
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <div className={styles.hero_title}>{t(titleId)}</div>
        {contentId && <div className={styles.hero_content}>{t(contentId)}</div>}
        {buttonTextId && (
          <a href={link} className={styles.hero_button}>
            {t(buttonTextId)}
          </a>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  titleId: PropTypes.string,
  contentId: PropTypes.string,
};

Hero.defaultProps = {
  titleId: '',
  contentId: '',
};

export default Hero;
