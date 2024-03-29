import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import noDataIllustrationLight from '../assets/undraw_no_data_light.svg';
import noDataIllustrationDark from '../assets/undraw_no_data_dark.svg';
import dictionary from '../languages/dictionary';

function NoDataInfo() {
  const { locale } = React.useContext(LocaleContext);
  const { theme } = React.useContext(ThemeContext);
  const noDataIllustration = theme === 'light' ? noDataIllustrationLight : noDataIllustrationDark;

  return (
    <>
      <img className="w-[80%] max-w-[120px] xl:max-w-[220px] mx-auto mt-[10vh] animate__animated animate__headShake" src={noDataIllustration} alt={dictionary[locale].noDataImage} />
      <p className="text-center text-gray-text-color semi-and-dark:text-white-text-color mt-5 2xl:text-lg">
        {dictionary[locale].noDataDescription}
      </p>
    </>
  );
}

export default NoDataInfo;
