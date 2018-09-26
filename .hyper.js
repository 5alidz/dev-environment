// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'canary',

    // default font size in pixels for all tabs
    fontSize: 18,
    fontWeight: 900,

    // font family with optional fallbacks
    fontFamily: 'Consolas, "DejaVu Sans Mono", Menlo, "Lucida Console", monospace',
    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgb(255, 255, 255)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    // '#fff'
    foregroundColor: '#888888',

    // terminal background color
    backgroundColor: '#111',

    // border color (window, tabs)
    borderColor: '#515151',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: ``,

  
    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: 'false',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#111111',
      red: '#ce3939',
      green: '#333333',
      yellow: '#1f4240',
      blue: '#4d658c',
      magenta: '#ce3939',
      cyan:'#60a37d',
      white: '#dddddd',
      lightBlack: '#333333',
      lightRed: '#f44242',
      lightGreen: '#82d37a',
      lightYellow: '#fffc7a',
      lightBlue: '#4f657a',
      lightMagenta: '#d5bfff',
      lightCyan: '#8cc687',
      lightWhite: '#eeeeee',
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // Powershell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    // 5alid:: prev => 'C:\\Program Files\\Git\\git-cmd.exe'
    // prev::  'C:\\Windows\\System32\\cmd.exe'
    shell: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
    

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    // previosly '--login'
    //shellArgs: ['--command=usr/bin/bash.exe', '-l', '-i'],
    shellArgs: ['bash ~'],

    // for environment variables
    //env: {
    //   TERM: 'cygwin',
   // },

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },
    // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  //
  
  //plugins: ['hyperpower'],
  plugins: [],
  

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    "window:reload": "ctrl+r",
    "tab:new": "ctrl+t",
    "tab:next": "ctrl+>",
    "tab:prev": "ctrl+<",
    "pane:splitVertical": "ctrl+|",
    "pane:splitHorizontal": "ctrl+_",
    "pane:next": "ctrl+shift+l",
    "pane:prev": "ctrl+shift+h",
  }
};
