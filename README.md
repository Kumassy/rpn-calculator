# RPN Calculator
Polymer と React で実装された、逆ポーランド記法の式を計算するアプリケーションです

# Usage
## Polymer
```
npm i -g polymer-cli
npm i -g bower

cd polymer
bower install

polymer serve
```

## react
```
npm i -g webpack
webpack

# open dist/index.html
```

## /
逆ポーランド記法の計算、`RPN.solvRPN()` のソースは `rpn.fsx` にあり、fable で JavaScript にトランスパイルしています。Polymer 版のほうは、これを Webpack で Bebel にかけた /bundle.js を使用しています。React 版のほうは fable でトランスパイルした rpn.js をそのまま使用しています。


# LICENSE
MIT
