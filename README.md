# ui

#### 写在前面

工作中经常用到element-ui,mint-ui和bootstrap这些优秀的ui库,惊奇这些创造者的才华,我想象着某天也能像这些优秀的创造者一样,写出优秀的作品.于是,就有了这个ui库.所有组件均基于原生javascript实现.查看演示请点击这里https://mikixing.github.io/ui/

#### 主要内容

* 模仿element-ui写了单选框,多选框,输入框,上传,分页器等等

* 模仿atom写了fileTree

* 模仿material-ui写了Text Field以及Snackbar.

#### 用法

*以radio为例*

1.引入jquery,所有组件均用到jquery处理交互,本项目采用3.3.1版本的jquery(必须)

2.引入css(必须)

```html
<link rel="stylesheet" href="https://mikixing.github.io/ui/style/index.css" />
```

3.本项目提供index.html页面出现的字体图标,如果需要用到,请引入

```html
<link rel="stylesheet" href="https://mikixing.github.io/ui/asset/style.css">
```

4.引入js(必须)

```html
<script src="https://mikixing.github.io/ui/index.js"></script>
```

5.写法

*注意*:某个radio被选中以后,会触发一个`show.mk.radio.btn`事件,如果注册这个事件,就能拿到单选框的value值(前提是给每个radio设置value)

```html
<label class="mk-radio">

    <span class="mk-radio__input">

      <span class="mk-radio__inner"></span>

      <input class="mk-radio__original" type="radio" name="normal" value=1>

      </span>aaa

  </label>

  <label class="mk-radio">

    <span class="mk-radio__input">

      <span class="mk-radio__inner"></span>

      <input class="mk-radio__original" type="radio" name="normal" value=2>

     </span>bbb

  </label>

  <label class="mk-radio">

    <span class="mk-radio__input">

      <span class="mk-radio__inner"></span>

      <input class="mk-radio__original" type="radio" name="normal" value=3>

      </span>ccc

  </label>

</div>

```