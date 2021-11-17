# zpy-ide

## 一、介绍

- 中文编程
- 在线运行
- 与Python语法相同

中文Python编程在线IDE，[在线尝试 - Zpy Online IDE](https://service-jbqv5vwm-1302874749.gz.apigw.tencentcs.com/release/)

<div align="center">
    <img src="./docs/img/pc.png" /> 
</div>

## 二、本地运行

如果你想下载到本地运行，请先确保本地安装有Python3环境

### 1.下载zpy-ide库

``` shell
# 从GitHub下载
git clone https://github.com/louisyoungx/zpy-ide.git
# 从Gitee下载
git clone https://gitee.com/louisyoungx/zpy-ide.git
```

### 2.进入文件夹，安装依赖

``` shell
# 进入文件夹
cd zpy-ide
# 安装依赖Flask
python3 -m pip install flask
```

### 3.启动IDE

``` shell
python3 app.py
```

### 4.打开IDE

使用浏览器访问 http://0.0.0.0:5000/

## 三、修改前端工程文件

src/  目录下为工程文件
dist/ 目录下为webpack打包文件

### 1.启动项目

```shell
npm install      # 1.安装依赖
npm run start    # 2.启动webpack
```

### 2.重新编译输出到dist/目录
```shell
npm run build
```

## 四、修改后端工程文件

```shell
vim app.py
```
