# {{ cookiecutter.repo_name }}

This website is hosted on [{{ cookiecutter.repo_name }}.com](http://www.{{ cookiecutter.repo_name }}.com) .


## Tools

* Ruby and NPM are required.

### Jekyll

```bash
$ gem install jekyll
```

### Gulp

```bash
$ npm install -g gulp
```

### Bower

```bash
$ npm install -g bower
```

## Requirements

```bash
$ git clone git@github.com:{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}.git
$ cd {{ cookiecutter.repo_name }}
```

### NPM dependencies

```bash
$ npm install
```

### Bower dependencies

```bash
$ bower install
```

## Running

### Gulp

```bash
# Execute Gulp's tasks. (Basically, It will minify your js and css.)
$ gulp
```

### Jekyll

```bash
$ jekyll serve
```

### Browser:

```bash
$ open http://localhost:4000
```
