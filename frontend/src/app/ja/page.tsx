import { getSiteConfig } from "@/lib/api";

export default async function JapaneseHomePage() {
  let config = null;
  try { config = await getSiteConfig("ja"); } catch {}

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block text-xs bg-[#c9a84c]/10 text-[#c9a84c] px-3 py-1 rounded-full mb-6">�й��ǥ�����ڸ�</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            һ�ĤνӾA��<br /><span className="text-[#c9a84c]">ȫ�й��ץ�åȥե��`�ࡣ</span>
          </h1>
          <p className="text-lg text-[#b3c0d8] max-w-2xl mx-auto mb-10">
            �й��ǥ�����ڸ��Ј��˲��뤹����H���`�����󥷩`�򤱤νyһ��ǥ������󥿩`�ե��`����WeChat���������ٶȡ�С�t����Bilibili �� �ѩ`�ȥʩ`һ�Ĥ�ȫ�ץ�åȥե��`�ࡣ
          </p>
          <div className="flex justify-center gap-4">
            <a href="/ja/contact" className="bg-[#c9a84c] text-[#080c14] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">�o����Մ</a>
            <a href="/ja/services" className="border border-[#1e2d45] px-6 py-3 rounded-lg text-[#b3c0d8] hover:border-[#c9a84c]">���`�ӥ�һ�E</a>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 border-y border-[#1e2d45]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-[#8899b5] mb-8">����ץ�åȥե��`��</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["WeChat", "����", "�ٶ�", "С�t��", "Bilibili", "Bing China"].map((p) => (
              <div key={p} className="bg-[#111827] border border-[#1e2d45] px-6 py-3 rounded-lg text-sm text-[#b3c0d8]">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
