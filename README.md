# miguelfrde.github.io

My personal website.

http://www.miguelfrde.com/

## Set up

Set up uses `chruby` and `ruby-install`, both can be installed on OS X
by running `brew install chruby ruby-install`.

```
$ git clone https://github.com/miguelfrde/miguelfrde.github.io
$ cd /path/to/miguelfrde.github.io
$ brew bundle install --files Brewfile
# Version documented in: https://pages.github.com/versions/
$ ruby-install 2.7.4 -- --enable-shared
$ gem install bundler
$ bundle install
$ jekyll serve
```
