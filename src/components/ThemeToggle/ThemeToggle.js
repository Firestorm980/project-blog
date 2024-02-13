'use client';

import React from 'react';
import Cookie from "js-cookie";
import { Sun, Moon } from 'react-feather';
import VisuallyHidden from '@/components/VisuallyHidden';
import styles from '@/components/Header/Header.module.css';

function ThemeToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(() => {
    if (initialTheme) {
        return initialTheme;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
        return "dark";
    }

    return "light";
  });

  function handleOnClick() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    Cookie.set('color-theme', newTheme, {
        sameSite: 'strict',
        expires: 60 * 60 * 24 * 365,
    });

    document.documentElement.dataset.colorTheme = newTheme;
  }

  return (
    <button className={styles.action} onClick={handleOnClick}>
      {theme === 'dark' ? (
        <Moon size="1.5rem" />
      ) : (
        <Sun size="1.5rem" />
      )}
      <VisuallyHidden>
        Toggle dark / light mode
      </VisuallyHidden>
    </button>
  );
}

export default ThemeToggle;
