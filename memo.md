

## エラー対応覚書

### `npm i electron`でエラー．（`node 10.15.3, npm 1.1.7`）

以下を受け，`node 12.16.1`にして試してみる⇒社内プロキシに阻まれ？断念（面倒
> latest versionとして先ほどインストールしたのとは異なるバージョンが出てきました。Node.jsをこちらのバージョンにインストールし直したところ、あっさりelectronのインストールにも成功。
>
> [Electronのインストール](https://maumaupipipi.jimdofree.com/%E9%9B%91%E8%A8%98/electron%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB/)

以下を試す．⇒だめでした
> 以下のコマンドで無事インストールできた。
>
> ```
> $ sudo npm install -g electron --unsafe-perm=true --allow-root
> ```
>
> [Electronのインストールでエラーになる時の対処法 - Qiita](https://qiita.com/Yuta_spade/items/664b25353f9e9620a65f)

vueとか他のは入る．electronだけ入らん．これだ！↓

> ```
> SET ELECTRON_GET_USE_PROXY=true
> SET GLOBAL_AGENT_HTTPS_PROXY=http://proxy:port
> ```
>
> [Proxy環境でElectronインストールしようとしたら隠れた罠があったんです - Qiita](https://qiita.com/LuckyRetriever/items/2f377b1ce34f7d12903c)

ということで`SET GLOBAL_AGENT_HTTPS_PROXY=http://melinet:9515/`でやってみる
⇒解決！

### `package.json`

[Electronで1からデスクトップアプリを作り、electron-builderを使ってビルド・リリースするまで - Qiita](https://qiita.com/saki-engineering/items/203892838e15b3dbd300#3%E3%83%93%E3%83%AB%E3%83%89%E8%A8%AD%E5%AE%9A%E3%82%92%E8%A8%98%E8%BF%B0)


### electron-builder

> 何かダウンロードするようで、ここでも同じことが起きました。
>
> 再度設定して実行したらできました。
>
> electron-packagerが一度実行できればその後はダウンロード走らないようなので、
設定を戻しても大丈夫なようです。
>
> [プロキシ環境下でElectron開発環境の初期セットアップをするときに困ったこと - Qiita](https://qiita.com/ota-meshi/items/69ed2333ed2ba0768178#electron-packager%E5%AE%9F%E8%A1%8C%E3%81%A7%E3%82%A8%E3%83%A9%E3%83%BC)

> ちなみに、Electron アプリの配布パッケージを作成するための electron-builder は、プロキシ設定として HTTPS_PROXY 環境変数を参照するようです。
>
> [プロキシ環境から Electron をインストールできない場合の対処方法](https://maku.blog/p/t7gqxyf/)

`set HTTPS_PROXY=http://melinet:9515`

