# d2-highlight

代码高亮显示组件

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| code | 代码字符串 | 非 | String |  |  |
| format-html | 是否格式化 HTML | 非 | Boolean |  | false |
| lang | 首选语言 | 非 | String |  |  |

::: tip
format 建议只在内容为 HTML 的时候打开，如果内容不是 HTML，设置为 true 会有负面效果
:::

## 示例

``` vue
<d2-highlight code="alert('Hello')"/>
```

::: tip
本框架只是提供代码高亮的简单实现，如需实现更高级的设置请修改组件代码
:::

## 支持的语言

* `1c`
* `abnf`
* `accesslog`
* `actionscript`
* `ada`
* `apache`
* `applescript`
* `cpp`
* `arduino`
* `armasm`
* `xml`
* `asciidoc`
* `aspectj`
* `autohotkey`
* `autoit`
* `avrasm`
* `awk`
* `axapta`
* `bash`
* `basic`
* `bnf`
* `brainfuck`
* `cal`
* `capnproto`
* `ceylon`
* `clean`
* `clojure`
* `clojure-repl`
* `cmake`
* `coffeescript`
* `coq`
* `cos`
* `crmsh`
* `crystal`
* `cs`
* `csp`
* `css`
* `d`
* `markdown`
* `dart`
* `delphi`
* `diff`
* `django`
* `dns`
* `dockerfile`
* `dos`
* `dsconfig`
* `dts`
* `dust`
* `ebnf`
* `elixir`
* `elm`
* `ruby`
* `erb`
* `erlang-repl`
* `erlang`
* `excel`
* `fix`
* `flix`
* `fortran`
* `fsharp`
* `gams`
* `gauss`
* `gcode`
* `gherkin`
* `glsl`
* `go`
* `golo`
* `gradle`
* `groovy`
* `haml`
* `handlebars`
* `haskell`
* `haxe`
* `hsp`
* `htmlbars`
* `http`
* `hy`
* `inform7`
* `ini`
* `irpf90`
* `java`
* `javascript`
* `jboss-cli`
* `json`
* `julia`
* `julia-repl`
* `kotlin`
* `lasso`
* `ldif`
* `leaf`
* `less`
* `lisp`
* `livecodeserver`
* `livescript`
* `llvm`
* `lsl`
* `lua`
* `makefile`
* `mathematica`
* `matlab`
* `maxima`
* `mel`
* `mercury`
* `mipsasm`
* `mizar`
* `perl`
* `mojolicious`
* `monkey`
* `moonscript`
* `n1ql`
* `nginx`
* `nimrod`
* `nix`
* `nsis`
* `objectivec`
* `ocaml`
* `openscad`
* `oxygene`
* `parser3`
* `pf`
* `php`
* `pony`
* `powershell`
* `processing`
* `profile`
* `prolog`
* `protobuf`
* `puppet`
* `purebasic`
* `python`
* `q`
* `qml`
* `r`
* `rib`
* `roboconf`
* `routeros`
* `rsl`
* `ruleslanguage`
* `rust`
* `scala`
* `scheme`
* `scilab`
* `scss`
* `shell`
* `smali`
* `smalltalk`
* `sml`
* `sqf`
* `sql`
* `stan`
* `stata`
* `step21`
* `stylus`
* `subunit`
* `swift`
* `taggerscript`
* `yaml`
* `tap`
* `tcl`
* `tex`
* `thrift`
* `tp`
* `twig`
* `typescript`
* `vala`
* `vbnet`
* `vbscript`
* `vbscript-html`
* `verilog`
* `vhdl`
* `vim`
* `x86asm`
* `xl`
* `xquery`
* `zephir`