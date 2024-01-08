const htmlEl = document.documentElement
const themeToggle = document.querySelector('#toggle')
const currentTheme = localStorage.getItem('@karamablog/theme')

function getPreferTheme() {
  if (currentTheme) return currentTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function getThemeColor(theme) {
  return theme === 'dark' ? '#1d2224' : '#e7eef4'
}

let themeValue = getPreferTheme()
let themeColor = getThemeColor(themeValue)

function setPreference() {
  localStorage.setItem('@karamablog/theme', themeValue)
  reflectPreference()
}

function reflectPreference() {
  const sun = document.querySelector('#sun')
  const moon = document.querySelector('#moon')
  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  const metaThemeColorMs = document.querySelector(
    'meta[name=msapplication-TileColor]'
  )

  htmlEl?.setAttribute('data-theme', themeValue)
  htmlEl?.setAttribute('data-theme-color', themeColor)
  metaThemeColor?.setAttribute('content', themeColor)
  metaThemeColorMs?.setAttribute('content', themeColor)

  themeToggle?.setAttribute('checked', `${themeValue === 'dark'}`)

  if (themeValue === 'dark') {
    sun?.removeAttribute('hidden')
    moon?.setAttribute('hidden', '')
  } else {
    sun?.setAttribute('hidden', '')
    moon?.removeAttribute('hidden')
  }
}

function themeInit() {
  reflectPreference()

  window.onload = () => {
    reflectPreference()

    themeToggle?.addEventListener('change', () => {
      themeValue = themeValue === 'light' ? 'dark' : 'light'
      themeColor = getThemeColor(themeValue)
      setPreference()
    })

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches: isDark }) => {
        themeValue = isDark ? 'dark' : 'light'
        themeColor = getThemeColor(themeValue)
        setPreference()
      })
  }
}

themeInit()
