set nocompatible
filetype off
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()
Plugin 'gmarik/vundle'
Plugin 'scrooloose/nerdtree.git'
Plugin 'pangloss/vim-javascript'
Plugin 'mxw/vim-jsx'
Plugin 'jiangmiao/auto-pairs'
Plugin 'ternjs/tern_for_vim'
Plugin 'tpope/vim-surround'
Plugin 'shougo/neocomplete'
Plugin 'mattn/emmet-vim'
Plugin 'jaxbot/semantic-highlight.vim'
Plugin 'valloric/youcompleteme'
Plugin 'airblade/vim-gitgutter'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'kyuhi/vim-emoji-complete'
Plugin 'digitaltoad/vim-pug'
Plugin 'flazz/vim-colorschemes'
Plugin 'prettier/vim-prettier'
Plugin 'vim-syntastic/syntastic'
Plugin 'yggdroot/indentline'
Plugin 'fatih/vim-go'
Plugin 'lilydjwg/colorizer'
filetype plugin indent on

set encoding=utf-8
set linebreak
set laststatus=2
set lazyredraw
set number
set relativenumber
set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab
set incsearch
set clipboard=unnamed
syntax enable
set wildmenu
set hlsearch
set breakindent
set formatoptions=l
set lbr
set confirm
set dir=~/.cache/vim
set noswapfile
set wildignore+=.pyc,.swp

nnoremap j gj
nnoremap k gk
nnoremap B ^
nnoremap E $
nnoremap $ <nop>
nnoremap ^ <nop>

set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_c_checkers = ['gcc', 'make']

autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
let g:indentLine_char = '|'
let g:indentLine_color_term = 238
let g:airline#extensions#tabline#enabled = 1
let g:ycm_autoclose_preview_window_after_completion = 1
let NERDTreeShowHidden=1
let g:ycm_show_diagnostics_ui = 0
:let g:NERDTreeWinSize=20
let g:go_version_warning = 0
let g:prettier#config#semi = 'false'
let g:user_emmet_settings = {
\  'html': {
\    'snippets': {
\      'html:5': '!!!+html[lang=en]>(head>meta:compat+meta:utf+meta:vp+meta[charset=${charset}]+title{${1:Document}})+body[dir=ltr]'
\	}
\    }
\ }
autocmd BufRead,BufNewFile * syn match parens /[(){}]/ | hi parens ctermfg=cyan
autocmd BufRead,BufNewFile * syn match parens /[()=>{}]/ | hi parens ctermfg=cyan

