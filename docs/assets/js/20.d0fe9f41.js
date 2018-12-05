(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{395:function(e,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),n("ul",[n("li",[e._v("pyenv: 로컬에 다양한 파이썬 버전 설치")]),n("li",[e._v("virtualenv: 로컬에 다양한 파이썬 환경 구축. 패키지 의존성 해결")]),n("li",[e._v("autoenv: 프로젝트 폴더 들어갈때마다 자동으로 개발환경 세팅됨.\n"),n("a",{attrs:{href:"https://dobest.io/how-to-set-python-dev-env/",target:"_blank",rel:"noopener noreferrer"}},[e._v("참고 링크"),n("OutboundLink")],1)])]),e._m(3),e._m(4),e._m(5),n("p",[e._v("xcode command line tools를 설치한다. "),n("a",{attrs:{href:"https://developer.apple.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("링크"),n("OutboundLink")],1),e._v("\n그래도 안되면 "),n("a",{attrs:{href:"https://github.com/yyuu/pyenv/wiki/Common-build-problems#build-failed-error-the-python-zlib-extension-was-not-compiled-missing-the-zlib",target:"_blank",rel:"noopener noreferrer"}},[e._v("여기"),n("OutboundLink")],1),e._v(" 참고")]),e._m(6),e._m(7),e._m(8),n("p",[e._v("이렇게 하면 된다. "),n("a",{attrs:{href:"https://stackoverflow.com/questions/36356778/how-to-let-pyenv-to-find-installed-python-versions",target:"_blank",rel:"noopener noreferrer"}},[e._v("참고"),n("OutboundLink")],1)]),e._m(9),e._m(10),e._m(11),e._m(12),n("p",[n("a",{attrs:{href:"https://dobest.io/how-to-set-python-dev-env/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pyenv + virtualenv + autoenv 를 통한 Python 개발 환경 구축하기 by @dobestan"),n("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"파이썬-개발환경-세팅하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파이썬-개발환경-세팅하기","aria-hidden":"true"}},[this._v("#")]),this._v(" 파이썬 개발환경 세팅하기")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"개괄"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#개괄","aria-hidden":"true"}},[this._v("#")]),this._v(" 개괄")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("수많은 프로젝트와, 그 프로젝트 별 버전관리 그리고 패키지들의 의존성 관리를 위해\n"),t("code",[this._v("pyenv")]),this._v("와 "),t("code",[this._v("virtualenv")]),this._v(", 그리고 "),t("code",[this._v("autoenv")]),this._v("를 설치한다.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pyenv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pyenv","aria-hidden":"true"}},[this._v("#")]),this._v(" pyenv")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("brew update\nbrew install pyenv\n\n# bash_profile에 추가. 나는 zsh라 ~/.zshrc에 추가하였다.\necho 'eval \"$(pyenv init -)\"' >> ~/.bash_profile  \n\n# pyenv 사용하기. 현재 설치한 버전들이 다 나온다.\npyenv version\n\n#설치할 수 있는 파이썬 리스트를 보여주고, 거기서 골라서 설치\npyenv install -list\npyenv install 2.7.10\npython -version #버전확인\npyenv global 2.7.10 #설치한 파이썬 버전 사용\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"build-failed-error-the-python-zlib-extension-was-not-compiled-missing-the-zlib-이-뜬다면"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-failed-error-the-python-zlib-extension-was-not-compiled-missing-the-zlib-이-뜬다면","aria-hidden":"true"}},[this._v("#")]),this._v(' Build failed: "ERROR: The Python zlib extension was not compiled. Missing the zlib?" 이 뜬다면')])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"virtualenv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv","aria-hidden":"true"}},[this._v("#")]),this._v(" virtualenv")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('brew install pyenv-virtualenv\n\n# pyenv init 안했으면 위에것도 bash_profile이나 zshrc에 추가해준다. \neval "$(pyenv init -)"\neval "$(pyenv virtualenv-init -)"\n\n# 2.7.10을 사용한 pinkfong-tv라는 프로젝트 만들기\npyenv virtualenv 2.7.10 pinkfong-tv\n\n# 만든 이름으로 activate하기\npyenv activate pinkfong-tv\n\n# install된 패키지들을 보여주거나 파일로 저장\npip freeze \npip freeze > requirement.txt \n\n# 새로운 환경에서 패키지들을 재설치\npip install -r requirement.txt\n\n# django 설치하기\npip install django\n\n# pip upgrade\npip install --upgrade pip\n\n# deactivate하기\npyenv deactivate\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-django-admin-command-exists-in-these-python-versions-란-에러가-나면"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-django-admin-command-exists-in-these-python-versions-란-에러가-나면","aria-hidden":"true"}},[this._v("#")]),this._v(" The `django-admin' command exists in these Python versions: 란 에러가 나면?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("pyenv global 2.7.10\n# pyenv’s name for the Python 2.7.10 interpreter version is just 2.7.10, not \n# python2.7.10. You can get a list of all your installed versions with:\npyenv versions\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"autoenv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autoenv","aria-hidden":"true"}},[this._v("#")]),this._v(" autoenv")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("brew install autoenv\n\n# zshrc에 매 세션마다 autoenv자동실행 코드 삽입\necho 'source /usr/local/opt/autoenv/activate.sh' >> ~/.zshrc\n\n# 프로젝트 폴더로 들어가서, .env파일 만들기\nvi .env\n\n# .env에는 activate하고 싶은 virtualenv명을 적는다.\npyenv activate pinkfong-tv\n\n# 이건 깃에 올릴 필요가 없으니, global gitignore을 만든다\ntouch ~/.gitignore\ngit config --global core.excludesfile ~/.gitignore\nvi ~/.gitignore\n\n# .gitignore에 제외하고 싶은 .env를 써준다.\n.env\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"refer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[this._v("#")]),this._v(" Refer")])}],!1,null,null,null);t.default=i.exports}}]);