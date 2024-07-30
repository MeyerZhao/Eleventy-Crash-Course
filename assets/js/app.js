// const $rootDom = document.documentElement;

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   // document.documentElement.classList.add('dark')
//   $rootDom.dataset.mode = 'dark'
// } else {
//   // document.documentElement.classList.remove('dark')
//   // $rootDom.removeAttribute('data-mode');
//   delete $rootDom.dataset.mode;
// }



(() => {
  'use strict'
  const $html = document.documentElement;

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      const windowTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      // document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
      $html.setAttribute('data-mode', windowTheme)
      // $html.classList.add(windowTheme)
    } else {
      // document.documentElement.setAttribute('data-bs-theme', theme)
      $html.dataset.mode = theme;
      // $html.classList.add(theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme,  focus = false) => {
    var a = document.querySelector(".bs-theme-text");
    var btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

    document.querySelectorAll("[data-bs-theme-value]").forEach(element => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    })

    btnToActive.classList.add("active")
    btnToActive.setAttribute("aria-pressed", "true")
    btnToActive.dataset.bsThemeValue;

    const themeSwitcherLabel = document.querySelector(".theme-icon-active");
    const activeThemeIcon = document.querySelector(`[data-bs-theme-value="${theme}"] .theme-icon`)
    theme && activeThemeIcon && (themeSwitcherLabel.innerHTML = activeThemeIcon.outerHTML)


    if (focus) {
      btnToActive.focus()
    }

  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
