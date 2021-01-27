# electron-demo-bootstrap

** Electron 을 실행 하려면 다음과 같이 따라하시면 됩니다. **

electronjs 기반의 bootstrap 적용 코드

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

## 사용법

repository 를 복사하여 실행 하려면 [Git](https://git-scm.com)  과 [Node.js](https://nodejs.org/en/download/) 와 [npm](http://npmjs.com) 을 설치 해야 합니다. 
그리고 다음과 같이 명령어를 단계별 순서에 맞추어 실행하시면 됩니다.

```bash
# repsitory 에 있는 소스 복사 
git clone https://github.com/wooyoungkwak/electronjs-bootstrap-demo.git
# repository 이동
cd electronjs-bootstrap-demo
# 의존성 파일 설치 
npm install
# app 실행
npm start
```

## 더 많은 electronjs 에 대해서는 다음을 참조 하세요.

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[EMPTY FILE](LICENSE.md)
