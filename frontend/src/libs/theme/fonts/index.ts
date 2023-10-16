import localFont from 'next/font/local';

/**
 * 軽量化のため限られた文字しか使えないようにしています。
 *
 * サブセットを変更する場合は
 * Applications > サブセットフォントメーカーを選択
 * 作成元フォントファイル「コーポレート・ロゴ（ラウンド）」を選択
 * 特徴の文字をフォントに格納する文字に入れる
 * https://convertio.co/ja/otf-woff/
 * ここからotfをwoffに変換
 *
 * アイスホース
 * ボトル
 * 喫煙
 * Wi-Fi
 * 電源
 * 個室
 * ゲーム
 * 持ち込み
 */
export const Corporate = localFont({
  src: './featText.woff',
  variable: '--corporate',
});
