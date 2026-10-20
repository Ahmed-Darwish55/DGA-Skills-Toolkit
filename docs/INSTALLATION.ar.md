[English](INSTALLATION.md) | **العربية**

<div dir="rtl">

# التثبيت

يتكوّن DGA Skills Toolkit من مجلد مهارة واحد هو `dga-skills/`. يمكنك تثبيته في موضعين:

| المضيف | الطريقة | الأدوات المساعدة الاختيارية |
|---|---|---|
| **Claude Code** (الطرفية، بيئة التطوير، تبويب Code في تطبيق سطح المكتب) | ينسخ `install.py` المهارة إلى ملف تعريف Claude الخاص بك | تُثبَّت تلقائيًا من متاجرها الرسمية |
| **Claude Desktop / Cowork / claude.ai** | ارفع ملف ZIP واحدًا عبر **Customize › Skills** | تُكتشف إذا فعّلتها في حسابك؛ ولا تثبّتها المهارة أبدًا |

---

## 1. Claude Code

### المتطلبات

| المتطلب | السبب | التحقق |
|---|---|---|
| Claude Code مع تسجيل الدخول | لتشغيل المهارة | `claude --version` |
| Python 3.8 أو أحدث | للمثبّت والفحص الذاتي وإعدادات المشروع ومدير الاعتماديات (المكتبة القياسية فقط) | `python3 --version` · على Windows: `py --version` |
| Git | لاستنساخ هذا المستودع (أو نزّل ملف ZIP الخاص بالإصدار بدلًا من ذلك) | `git --version` |
| الإنترنت | للأدوات المساعدة الاختيارية فقط | — |
| Node.js 18+ | لمحرّك ضمان الجودة (QA) ولبناء مشاريعك فقط | `node --version` |

### التثبيت — macOS / Linux

```bash
git clone https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit.git
cd DGA-Skills-Toolkit
cat dga-skills/VERSION        # 5.0.3
python3 install.py install    # or: ./install.sh install
```

### التثبيت — Windows

PowerShell:

```powershell
git clone https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit.git
cd DGA-Skills-Toolkit
Get-Content dga-skills\VERSION    # 5.0.3
.\install.ps1 install
```

إذا منع PowerShell تشغيل السكربتات المحلية، فشغّل `powershell -ExecutionPolicy Bypass -File .\install.ps1 install`، أو استخدم غلاف موجّه الأوامر (Command Prompt): `install.cmd install`. يستدعي كلا الغلافين `install.py` باستخدام `py -3` أو `python`.

> لم يُتحقَّق بعد من أغلفة Windows على جهاز Windows فعلي. نرجو الإبلاغ عن أي مشكلة.

إن لم يتوفر لديك Git، فنزّل `DGA-Skills-Toolkit-V5.0.3-FINAL.zip` من [صفحة الإصدار](https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit/releases/tag/v5.0.3)، ثم فك ضغطه، وشغّل أمر التثبيت نفسه داخل المجلد المستخرج.

### ما يفعله أمر التثبيت

لا يطرح الأمر أي أسئلة.

1. **فحص السلامة.** يجب أن يطابق كل ملف في `dga-skills/` ما ورد في `dga-skills/CHECKSUMS.sha256`. وإذا تغيّر أي ملف، يتوقف التثبيت ولا يُمَسّ أي شيء.
2. **النسخ الاحتياطي.** تُنسخ مجلدات المهارات الموجودة والملف `CLAUDE.md` أولًا، مع تسجيل قيمة SHA-256 لكل منها.
3. **التثبيت.** تُوضع المهارة في `~/.claude/skills/dga-skills`. وتُكتب كتلة مُدارة واحدة في `~/.claude/CLAUDE.md`؛ ويُحفظ النص الواقع خارج هذه الكتلة كما هو بايتًا بايتًا.
4. **ترحيل الإصدار القديم.** يُنسخ احتياطيًا أي تثبيت أقدم بالاسم السابق (`skills/ahmed-skills`) ثم يُستبدل، حتى لا تستجيب مهارتان للطلب نفسه أبدًا.
5. **الأدوات المساعدة الاختيارية (تلقائيًا).** انظر [§3](#3-optional-helpers).
6. **ابدأ جلسة Claude Code جديدة** حتى تُحمَّل المهارة.

استخدم ملف تعريف آخر عبر `--claude-dir <path>` (أو المتغير `CLAUDE_CONFIG_DIR`). وللمعاينة دون تغيير أي شيء: `python3 install.py install --dry-run`.

### التحقق

```bash
python3 install.py verify        # installed files match the checksums; one managed block
python3 install.py self-check    # required parts OK, integrity OK, helper status
python3 install.py deps status   # where each optional helper was found
```

بعد ذلك افتح أي مشروع في Claude Code واكتب طلب واجهة دون ذكر اسم المهارة:

```text
Build a DGA dropdown for a government service form.
```

ينبغي أن تبدأ المهارة من تلقاء نفسها وأن تسأل **فقط** عن نمط التصميم. ويسأل الرد التالي عن التقنية. وتُحفظ الإجابتان في `.claude/dga-skills.json` داخل مشروعك. لمزيد من الفحوصات: [PROMPT-EXAMPLES.ar.md › فحوصات السلوك](PROMPT-EXAMPLES.ar.md#behaviour-checks).

### الأوامر اليومية

| الأمر | ما يفعله |
|---|---|
| `python3 install.py install` | التثبيت أو الترقية (مع نسخة احتياطية أولًا) |
| `python3 install.py install --no-deps` | التثبيت دون الأدوات المساعدة الاختيارية |
| `python3 install.py verify` | مقارنة الملفات المثبّتة بقيم checksums |
| `python3 install.py self-check [--project DIR] [--json]` | الجاهزية دون اتصال وحالة الأدوات المساعدة |
| `python3 install.py deps ensure` | تثبيت الأدوات المساعدة الناقصة الآن (من مصادر موثّقة) |
| `python3 install.py list-backups` | عرض النسخ الاحتياطية |
| `python3 install.py rollback [--backup ID]` | استعادة نسخة احتياطية مطابقة في قيم hash |
| `python3 install.py uninstall` | إزالة المهارة وكتلتها المُدارة (مع الإبقاء على النسخ الاحتياطية) |

على Windows، استبدل `python3 install.py` بـ `.\install.ps1` أو `install.cmd`.

---

## 2. Claude Desktop / Cowork

### المتطلبات

- خطة اشتراك تتيح المهارات المخصّصة، مع تفعيل **تنفيذ الشيفرة (code execution)**.
- الملف `DGA-Skills-Toolkit-V5.0.3-COWORK-UPLOAD.zip` من [صفحة الإصدار](https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit/releases/tag/v5.0.3). تحقّق منه بمطابقته مع `SHA256SUMS-V5.0.3.txt` من الإصدار نفسه.

يمكنك أيضًا بناء ملف ZIP بنفسك من نسخة مستنسخة (الأمر نفسه على جميع الأنظمة؛ استخدم `py` بدلًا من `python3` على Windows):

```bash
python3 build.py                          # re-seal the package checksums
python3 build_cowork.py --out release-out # → release-out/DGA-Skills-Toolkit-COWORK-UPLOAD.zip (+ .sha256 and a validation report)
```

### الرفع

1. افتح Claude (الويب أو تطبيق سطح المكتب) ← **Customize › Skills**.
2. إذا ظهرت المهارة القديمة `ahmed-skills` في القائمة، فأوقفها (**off**).
3. **＋ › Upload skill** ← اختر ملف ZIP.
4. فعّل **dga-skills**.
5. ابدأ مهمة جديدة بطلب واجهة، مثل *"Build a DGA service page for a building permit, Arabic first."*

لا ترفع `SKILL.md` أو الملفات المرجعية منفصلة؛ فكل شيء موجود داخل ملف ZIP.

### عن ملف ZIP

يقبل Cowork ملفات مرفوعة لا تتجاوز نحو **200 ملف** و**30 MB** بعد فك الضغط، مع ملف `SKILL.md` واحد وبلا رمز `@` في أسماء الملفات. ويلتزم ملف ZIP الخاص بـ Cowork بهذه الحدود **دون حذف أي محتوى**: إذ تُدمج الصفحات المرجعية في ملفات فهرسة، وتُحزم البيانات الخام في `DATA-PACK.json.gz`. وتقرأ الأدوات كلا التنظيمين.

<a id="platform-limitation-helpers-in-cowork"></a>
### قيد في المنصة: الأدوات المساعدة في Cowork

المهارة التي تعمل داخل Cowork **لا تستطيع تثبيت مهارات أخرى أو تفعيلها**، ولا تحاول حزمة الأدوات الالتفاف على ذلك. تُكتشف الأدوات المساعدة التي فعّلتها في حسابك وتُستخدم؛ أما الأداة المساعدة التي أوقفتها فيُبلَّغ عنها بأنها موقوفة لا بأنها مفقودة. إذا أردت الأدوات المساعدة (اختيارية):

| الأداة المساعدة | الترخيص | طريقة إضافتها في Claude |
|---|---|---|
| Frontend Design (Anthropic) | Apache-2.0 | **Customize › Plugins › Add marketplace** ← `anthropics/claude-plugins-official` ← `frontend-design` |
| UI/UX Pro Max (nextlevelbuilder) | MIT | **Customize › Plugins › Add marketplace** ← `nextlevelbuilder/ui-ux-pro-max-skill` ← `ui-ux-pro-max` |

يطبع الأمر `python3 install.py deps cowork` الخطوات نفسها.

<a id="verify-in-cowork"></a>
### التحقق في Cowork

| # | الإجراء | يُعدّ ناجحًا عندما |
|---|---|---|
| C1 | ارفع ملف ZIP | يُقبل الملف، وتظهر `dga-skills` في القائمة مفعّلة |
| C2 | مهمة جديدة: *"Build a DGA dropdown"* | تعمل المهارة من تلقاء نفسها؛ والسؤال الأول عن نمط التصميم فقط |
| C3 | المهمة نفسها | لا تطلب منك أبدًا رفع `SKILL.md` أو الملفات المرجعية |
| C4 | *"According to the Platforms Code, what states does the Dropdown have?"* | تستشهد الإجابة بملفات `references/` الخاصة بالمهارة |
| C5 | *"Run the toolkit self-check"* | `required parts: OK; integrity: OK`، مع الحالة الفعلية للأدوات المساعدة |


---

<a id="3-optional-helpers"></a>
## 3. الأدوات المساعدة الاختيارية

| الأداة المساعدة | الناشر | الترخيص | الاستخدام |
|---|---|---|---|
| Frontend Design | Anthropic | Apache-2.0 | التوجيه الفني في نمطي Enhanced وCreative |
| UI/UX Pro Max | nextlevelbuilder | MIT | بيانات بحث UI/UX قابلة للبحث |

تعمل حزمة الأدوات دونها؛ وعند غياب إحداها تستخدم قواعدها المحلية الخاصة وتذكر ذلك في سطر واحد.

**Claude Code — تلقائيًا.** يشغّل `install.py install` الأمر `deps ensure`:

- مثبّتة مسبقًا ← تُترك كما هي؛ مثبّتة لكنها موقوفة ← تبقى موقوفة؛
- مفقودة ← يُتحقَّق أولًا من اسم المتجر ومُدخل الإضافة ونص الترخيص، ثم تُثبَّت الأداة المساعدة بالأمر الرسمي `claude plugin install`؛
- عند أي عدم تطابق، أو عند عدم توفر الشبكة، لا يُثبَّت شيء ويُستخدم البديل المدمج؛
- تُطبع كل خطوة وتُسجَّل في `~/.claude/dga-skills-install/dependencies-state.json`.

يمكنك إلغاء ذلك عبر `--no-deps` أو `DGA_SKILLS_NO_AUTO_DEPS=1`. وإذا تعذّر تثبيت الأدوات المساعدة أثناء الإعداد، تشغّل المهارة `deps ensure` بنفسها عند أول طلب تصميم (ويطلب Claude Code الإذن مرة واحدة).

**Cowork — اكتشاف فقط.** انظر [§2](#platform-limitation-helpers-in-cowork).


---

## 4. استخدام المكتبة في مشروع

```bash
S=~/.claude/skills/dga-skills
python3 $S/tools/find_existing.py --project .                                     # reuse what the project already has
python3 $S/tools/copy_lib.py --framework react --dest src/dga-skills --with-patterns
python3 $S/tools/check_dga_props.py --project .                                   # must print: OK — no invented props
```

ثبّت حزم DGA في مشروعك **أنت**: `npm i platformscode-new-react` (React) أو `npm i @platformscode/core` (Angular، وvanilla، وArcGIS Experience Builder). انظر [GETTING-STARTED.ar.md](GETTING-STARTED.ar.md).

## 5. الترقية والاستعادة وإلغاء التثبيت

للترقية، شغّل `install.py install` من نسخة أحدث؛ وتُنشأ نسخة احتياطية أولًا. يستعيد `install.py rollback` أحدث نسخة احتياطية (أو `--backup ID`). ويُرفض الرجوع إلى إصدار أقدم ما لم تُضِف `--force`. للمشكلات: [TROUBLESHOOTING.ar.md](TROUBLESHOOTING.ar.md).

</div>
