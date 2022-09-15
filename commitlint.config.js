module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新機能追加
        'fix', // バグ修正
        'docs', // ドキュメントの追加・変更・削除
        'style', // プログラムの動きに影響を与えない変更（インデントの調整やフォーマッタにかけた場合など）
        'refactor', // リファクタリング
        'perf', // パフォーマンス向上
        'test', // テスト追加・既存テストの修正
        'chore', // ビルドプロセスやドキュメント生成のような補助ツールやライブラリの変更
        'ci', // ciに関すること
        'revert', // コミット取り消し
      ],
    ],
  },
}
