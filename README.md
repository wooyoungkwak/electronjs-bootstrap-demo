# electron-demo-bootstrap

** Electron 을 실행 하려면 다음과 같이 따라하시면 됩니다. **

이 프로그램은 electronjs 응용 프로그램 기반에 [bootstrap Guide](https://github.com/wooyoungkwak/electronjs-bootstrap-demo.git) 을 적용한 최소한의 응용 프로그램 입니다. 

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

다음의 파일들은 Electron 응용 프로그램의 기본 요소입니다:
- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

## 사용법

repository 를 복사 하고 실행 하려면  [Git](https://git-scm.com) 과 [Node.js](https://nodejs.org/en/download/) 과 [npm](http://npmjs.com) 이 설치 되어 있어야 합니다. 
다음 명령어를 순차적으로 실행 하세요:
```bash 
# repository 복사
git clone https://github.com/wooyoungkwak/electronjs-bootstrap-demo.git
# electronjs-bootstrap-demo 이동 
cd electronjs-bootstrap-demo
# 의존성 패키지 설치
npm install
# app 실행
npm start
```

## 더 많은 electronjs 에 대해 배우려면 다음 URL 을 참조 하세요.

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## 라이센스

[EMPTY FILE](LICENSE.md)
