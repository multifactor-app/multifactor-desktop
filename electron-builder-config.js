const {
  name,
  version,
  description,
  displayName,
  author: _author,
} = require('./package.json')

const author = _author?.name ?? _author
const currentYear = new Date().getFullYear()
const authorInKebabCase = author.replace(/\s+/g, '-')
const appId = `dev.${authorInKebabCase}.${name}`.toLowerCase()

/** @type {import('electron-builder').Configuration} */
module.exports = {
  appId,
  productName: displayName,
  copyright: `Copyright © ${currentYear} — ${author}`,
  directories: {
    app: 'res/app',
    output: `dist/v${version}`,
  },
  mac: {
    icon: 'res/build/icons/icon.icns',
    category: 'public.app-category.utilities',
  },
  dmg: {
    icon: false,
  },
  linux: {
    category: 'Utilities',
    synopsis: description,
    target: ['AppImage', 'deb', 'pacman', 'freebsd', 'rpm'],
  },
  win: {
    icon: 'res/build/icons/icon.ico',
    target: ['nsis'],
  },
}
