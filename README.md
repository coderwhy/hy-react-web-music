# React实战之云音乐项目

> 如果觉得不错，或者对你有帮助，点一个star~ coderwhy

### 1.1. 项目简介

使用React编写的云音乐PC Web项目，接口来源于开源的接口，自己已经做了部署。

项目已经完成功能如下：（你可以下载下来自己体验一下）

推荐页面：

* 轮播图
* 热门推荐
* 新碟上架
* 榜单
* 等等

![推荐页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9kwh3cqj31ck0p37uj.jpg)

![推荐页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghva5bx7bvj31d10p6thq.jpg)

歌曲播放：

* 目前做了榜单中歌曲的点击播放；
* 事实上其他页面只要将歌曲的id传入到redux中就可以，整个逻辑已经打通；
* 做了歌曲的各种控制（暂停、播放、上一首、下一首、进度改变）；
* 做了播放循序切换：顺序播放、随机播放、单曲循环；
* 做了歌词的解析、展示、滚动；

![歌曲播放](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9pc3ki6j30ws0ahti8.jpg)

排行榜页面：

* 各种榜单的切换；

![排行榜页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9qjg0m4j31d10p4ai3.jpg)

歌单页面：

* 选择分类、选择分类后根据分类切换歌单；
* 根据分类，歌单列表的展示；
* 分页功能；

![歌单页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9rsp1stj31d10p44j2.jpg)

主播电台：

* 电台分类的展示、滚动；
* 不同分类展示不同的数据；
* 电台排行榜展示、分页；

![主播电台](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9sxt3nqj31d10p4k4s.jpg)

歌手页面：

* 各种歌手分类（没找到接口，还自定义了一些数据）
* 歌手字母分类、对应歌手展示；

![歌手页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9ts3h5dj31d10p4qfo.jpg)

新碟上架页面：

* 热门新碟；
* 全部新碟、分页展示；

![新碟上架页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9uryexgj31d10p4aue.jpg)



### 1.2. 项目规范

**项目规范：项目中有一些开发规范和代码风格**

* 1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；
* 2.JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
* 3.CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;
* 4.整个项目不再使用class组件，统一使用函数式组件，并且全面使用Hooks；
* 5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；
* 6.组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；
* 7.函数组件内部基本按照如下顺序编写代码：
  * 组件内部state管理；
  * redux的hooks代码；
  * 其他组件hooks代码；
  * 其他逻辑代码；
  * 返回JSX代码；
* 8.redux代码规范如下：
  * redux结合ImmutableJS
  * 每个模块有自己独立的reducer，通过combineReducer进行合并；
  * 异步请求代码使用redux-thunk，并且写在actionCreators中；
  * redux直接采用redux hooks方式编写，不再使用connect；
* 9.网络请求采用axios
  * 对axios进行二次封装；
  * 所有的模块请求会放到一个请求文件中单独管理；
* 10.项目使用AntDesign
  * 项目中某些AntDesign中的组件会被拿过来使用；
  * 但是多部分组件还是自己进行编写；
* 其他规范在项目中根据实际情况决定和编写；



### 1.3. 项目运行

clone项目：

```
git clone https://github.com/coderwhy/hy-react-web-music.git
```

安装项目依赖：

```shell
yarn install
```

项目运行：

```shell
yarn start
```



