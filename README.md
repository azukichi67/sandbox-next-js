# Next.js

-   Next.js は React をベースにしたフロントエンドフレームワーク
-   サーバ機能を持っているため単体で Web アプリを動作させることができる
    -   React は別途サーバ側を用意してあげなければならない

 https://nextjs.org/learn/foundations/about-nextjs

## 特徴

-   Pre-rendering (SSR/SSG)
-   ファイルベースルーティング
-   開発サーバの部分的な高速リロード(Fast Refresh)
-   画像最適化
-   ゼロコンフィグ

### Pre-rendering (SSR/SSG)

-   SSG (Static Site Generator : 静的生成)
    -   HTML がアプリケーションのビルド時にのみ生成される
    -   あらかじめレンダリング済みの HTML を返すだけなのでパフォーマンスが良い
    -   基本的に更新がないページではこの方法をとるのが良い　(ex, Q&A、問い合わせページ)
-   SSR (Server Side Rendering)
    -   クライアントからのリクエストの度に HTML を生成する
    -   都度 HTML を生成するので SSG と比べるとパフォーマンスは悪くなる (とはいえ基本的に速い)
    -   JavaScript の処理をサーバ側で行うのでユーザ側の性能に依存しない (ユーザの負担が少ない)
    -   リクエストによって表示内容が変わるページに使用する　(ex, SNS のタイムライン、検索結果ページ)
-   CSR (Client Side Rendering) ※ Next.js の特徴ではない (React はすべてこれ、Next.js でもできる)
    -   ユーザーのブラウザで全てレンダリングする
    -   ページを開いてから HTML などの生成を行うので初期描画に時間がかかる
    -   一度読み込めば、あとはクライアント側で都度情報を取得、再レンダリングするだけでいい
    -   SEO 関係なく更新、操作頻度が高いページには向いている

### ファイルベースルーティング

# 参考

https://udemy.benesse.co.jp/development/app/what-is-next-js.html  
https://qiita.com/Yuki_Oshima/items/5c0dfd8f7af8fb76af8f  
https://remoters.work/column/next-js/  
https://qiita.com/masakinihirota/items/c4c8931d7067349006ef  
https://midorigame-jo.com/ssg-ssr/
https://tech.012grp.co.jp/entry/2021/03/25/125014

https://zenn.dev/jojo/articles/25c10b27783093

# memo

-   SWR

```
The team behind Next.js has created a React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more. We won’t cover the details here, but here’s an example usage:
```

-   API Route を getStaticProps / getStaticPaths で 使うべきでない

```
getStaticPropsやgetStaticPathsからAPIルートを取得しない
getStaticProps や getStaticPaths から API Route を取得するべきではありません。代わりに、サーバサイドのコードを getStaticProps または getStaticPaths に直接記述してください (またはヘルパー関数を呼び出してください)。

getStaticPropsとgetStaticPathsはサーバサイドでのみ実行され、クライアントサイドでは決して実行されません。さらに、これらの関数はブラウザ用のJSバンドルには含まれません。つまり、ブラウザに送信することなく、データベースへの直接問い合わせのようなコードを書くことができます。詳しくは Writing Server-Side code のドキュメントを読んでください。

良い使用例：フォーム入力の処理
API Routesの良いユースケースは、フォーム入力の処理です。例えば、ページにフォームを作成し、API RouteにPOSTリクエストを送信させることができます。そして、それを直接データベースに保存するコードを書くことができる。API Routeのコードはクライアントバンドルには含まれないので、安全にサーバサイドのコードを書くことができます。
```
