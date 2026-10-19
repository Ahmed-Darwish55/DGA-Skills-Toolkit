<div dir="rtl">

# DGA Skills Toolkit

**أداة (Skill) لـ Claude لبناء واجهات الحكومة الرقمية السعودية حسب «كود المنصات» من DGA: عربي RTL أولًا، بمكونات DGA الحقيقية، و3 أنماط تصميم، واختبارات جودة بالأرقام.**

`dga-skills` · الإصدار 5.0.3 · Claude Code · Claude Desktop / Cowork · React · Angular · ArcGIS Experience Builder

[English](README.md) · [التثبيت في Claude Code](docs/installation/claude-code.ar.md) · [التثبيت في Cowork](docs/installation/cowork.ar.md) · [أمثلة الأوامر (EN)](docs/PROMPT-EXAMPLES.md)

## التثبيت

### Claude Code — أمر واحد
```bash
git clone https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit.git
cd DGA-Skills-Toolkit
python3 install.py install          # ويندوز: .\install.ps1 install
```
أمر واحد ومن غير أي أسئلة. بيثبّت الأداة، وبعدها الأداتين المساعدتين (Frontend Design من Anthropic وUI/UX Pro Max برخصة MIT) من مصادرهم الرسمية، بعد ما يتحقق من المصدر والرخصة. ولو أداة منهم إنت قافلها، بيسيبها مقفولة. → [الدليل الكامل](docs/installation/claude-code.ar.md)

### Claude Desktop / Cowork
نزّل `DGA-Skills-Toolkit-V5.0.3-COWORK-UPLOAD.zip` من [صفحة الإصدار](https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit/releases/tag/v5.0.3)، أو ابنيه بنفسك:
```bash
python3 build.py && python3 build_cowork.py      # → release-out/DGA-Skills-Toolkit-COWORK-UPLOAD.zip
```
ارفع الملف مرة واحدة من **Customize ← Skills ← Upload skill**، ومفيش أي إعداد تاني. الأدوات المساعدة المفعّلة في حسابك الأداة بتلاقيها وتستخدمها لوحدها، والناقصة بيشتغل مكانها البديل اللي جوه الأداة. الحزمة دي بتعدّي حدود الرفع **من غير ما يتحذف منها أي ملف**. → [الدليل الكامل + اختبار القبول](docs/installation/cowork.ar.md)

> [!IMPORTANT]
> **مشروع مستقل. غير تابع لهيئة الحكومة الرقمية (DGA) ولا معتمد منها.**
> كلمة «DGA» هنا اسم نظام التصميم اللي الأداة ماشية عليه، مش اعتماد. الناتج «متوافق مع DGA»، مش «معتمد من DGA».
> تصميم وتطوير: **أحمد درويش**.

## بتعمل إيه؟

تطلب من Claude واجهة حكومية بالعربي أو الإنجليزي، زي «اعمل dropdown بتاع الحكومة الرقمية» أو «اعمل صفحة خدمة». الأداة:
1. **تسأل سؤال واحد في كل مرة:** الأول نمط التصميم، وبعدين التقنية. وتحفظ الإجابات للمشروع، فما تسألش تاني.
2. **تبني بمكونات DGA الحقيقية** (`@platformscode/*`) ومواصفات Figma المستخرجة: نفس الحالات والقيم والحركة. ومفيش أي خاصية (prop) مخترعة.
3. **تثبت الجودة:**
   - صور للشاشة على 4 مقاسات، يمين لشمال وشمال ليمين.
   - اختبار الكيبورد والإتاحة، والتكبير 200%، وتقليل الحركة.
   - عيوب الحزم بتتذكر بأرقامها، ومش بتستخبى.

```mermaid
flowchart LR
    U(["طلب المستخدم"]) --> S{{"dga-skills<br/>بتشتغل لوحدها"}}
    S --> M["سؤال 1: نمط التصميم"]
    M --> T["سؤال 2: التقنية"]
    T --> P[(".claude/dga-skills.json")]
    P --> B["البناء بمكونات DGA الحقيقية"]
    B --> Q["اختبارات الجودة"]
    Q --> R(["تقرير صريح بالنتايج"])
```

| الرئيسية | الجوال | صفحة داخلية |
|---|---|---|
| <img src="docs/images/v5.0.3-home-desktop.png" width="300" alt="الصفحة الرئيسية"> | <img src="docs/images/v5.0.3-home-mobile.png" width="140" alt="الرئيسية على الجوال"> | <img src="docs/images/v5.0.3-faq-desktop.png" width="300" alt="صفحة الأسئلة الشائعة"> |

| تفاصيل الخدمة | الخدمة على الجوال | كتالوج الخدمات |
|---|---|---|
| <img src="docs/images/v5.0.3-service-desktop.png" width="300" alt="صفحة تفاصيل الخدمة"> | <img src="docs/images/v5.0.3-service-mobile.png" width="140" alt="صفحة الخدمة على الجوال"> | <img src="docs/images/v5.0.3-services-desktop.png" width="300" alt="صفحة الخدمات"> |

## أنماط التصميم
| النمط | لإيه | المسموح | الممنوع |
|---|---|---|---|
| **DGA Exact** | الخدمات والنماذج والبوابات | المواصفات الرسمية بس | أي إضافات أو حركة زخرفية |
| **DGA Enhanced** | صفحات الحملات والهبوط | تحسين التكوين والتسلسل، مع علامة `[AHMED HOUSE]` | تغيير شكل مكونات DGA |
| **DGA Creative** | السرد البصري والعروض | اتجاه فني، وGSAP، وThree.js اختياري | كسر مكونات DGA أو الإتاحة |

## حالة الإصدار
**5.0.3 — أول إصدار عام.** الهيدر والفوتر على مستوى الموقع، والـTheme، وغلاف الموقع لـAngular وExB، وجودة الكود (التسمية وإزالة التكرار والكود غير المستخدم) — منفذة ومختبرة.
لم يُختبر بعد: ExB حقيقي (محاكاة فقط)، ورفع الحزمة على حساب Cowork حقيقي، والتثبيت على ويندوز. وبعض عيوب حزم `@platformscode/*` بتمنع اعتبار الصفحات مطابقة تمامًا لـDGA Exact.
التفاصيل: [الحدود المعروفة](docs/KNOWN-LIMITATIONS.md)

## الرخصة
كود الأداة برخصة **MIT** © 2026 أحمد درويش — [LICENSE](LICENSE). بيانات كود المنصات من ملفات Figma Community بتاعة هيئة الحكومة الرقمية مستخدمة برخصة CC BY 4.0 مع نسبتها للهيئة — [NOTICE.md](NOTICE.md).

</div>
