import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 呉羽山めぐり",
  description: "ドリームブリッジくれはの個人情報保護方針",
};

export default function PrivacyPage() {
  return (
    <main className="py-20 md:py-28 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-3xl font-bold mb-8">
          プライバシーポリシー
        </h1>

        <div className="text-earth text-base leading-loose space-y-8">
          <section>
            <h2 className="font-bold text-charcoal text-lg mb-3">個人情報の取り扱いについて</h2>
            <p>
              ドリームブリッジくれは（以下、ドリブリ）は、個人情報保護に関連する法令を遵守します。
              なお、個人情報の保護・取扱いにつきましては細心の注意を払ってまいります。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-charcoal text-lg mb-3">個人情報の利用目的</h2>
            <p className="mb-2">個人情報は、次の目的にのみ利用いたします。</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>ご本人への連絡・確認のため</li>
              <li>ご本人から寄せられたご質問、ご意見、ご要望にお応えするため</li>
            </ol>
          </section>

          <section>
            <h2 className="font-bold text-charcoal text-lg mb-3">個人情報の第三者への提供</h2>
            <p className="mb-2">以下のいずれかに該当する場合を除いて、いかなる場合にも個人情報を第三者には開示・提供いたしません。</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>ご本人の同意を得た場合</li>
              <li>ご本人が特定できない状態で、情報提供する場合</li>
              <li>法令に基づいて開示を求められた場合</li>
              <li>人の生命、身体又は財産の保護のために必要で、ご本人の同意を得ることが困難である場合</li>
            </ol>
          </section>

          <section>
            <h2 className="font-bold text-charcoal text-lg mb-3">情報内容の照会、修正または削除</h2>
            <p>
              個人情報の照会、修正または削除を希望される場合は、ご本人確認の上、すみやかに対応させて頂きます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-charcoal text-lg mb-3">プライバシーポリシーの改善</h2>
            <p>
              プライバシーポリシーの内容につきまして、必要に応じて見直し、改善することがございます。
              ホームページ上にて最新版を記載しております。
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-stone/20">
          <a
            href="/"
            className="text-forest underline underline-offset-4 decoration-forest/30 hover:decoration-forest transition-colors"
          >
            トップページに戻る
          </a>
        </div>
      </div>
    </main>
  );
}
